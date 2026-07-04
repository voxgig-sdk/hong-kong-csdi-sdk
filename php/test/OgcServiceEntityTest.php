<?php
declare(strict_types=1);

// OgcService entity test

require_once __DIR__ . '/../hongkongcsdi_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class OgcServiceEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = HongKongCsdiSDK::test(null, null);
        $ent = $testsdk->OgcService(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = ogc_service_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "ogc_service." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set HONGKONGCSDI_TEST_OGC_SERVICE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $ogc_service_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.ogc_service")));
        $ogc_service_ref01_data = null;
        if (count($ogc_service_ref01_data_raw) > 0) {
            $ogc_service_ref01_data = Helpers::to_map($ogc_service_ref01_data_raw[0][1]);
        }

        // LOAD
        $ogc_service_ref01_ent = $client->OgcService(null);
        $ogc_service_ref01_match_dt0 = [];
        $ogc_service_ref01_data_dt0_loaded = $ogc_service_ref01_ent->load($ogc_service_ref01_match_dt0, null);
        $this->assertNotNull($ogc_service_ref01_data_dt0_loaded);

    }
}

function ogc_service_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/ogc_service/OgcServiceTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = HongKongCsdiSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["ogc_service01", "ogc_service02", "ogc_service03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("HONGKONGCSDI_TEST_OGC_SERVICE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "HONGKONGCSDI_TEST_OGC_SERVICE_ENTID" => $idmap,
        "HONGKONGCSDI_TEST_LIVE" => "FALSE",
        "HONGKONGCSDI_TEST_EXPLAIN" => "FALSE",
        "HONGKONGCSDI_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["HONGKONGCSDI_TEST_OGC_SERVICE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["HONGKONGCSDI_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["HONGKONGCSDI_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new HongKongCsdiSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["HONGKONGCSDI_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["HONGKONGCSDI_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
