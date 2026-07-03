# OgcService entity test

require "minitest/autorun"
require "json"
require_relative "../HongKongCsdi_sdk"
require_relative "runner"

class OgcServiceEntityTest < Minitest::Test
  def test_create_instance
    testsdk = HongKongCsdiSDK.test(nil, nil)
    ent = testsdk.OgcService(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = ogc_service_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "ogc_service." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set HONGKONGCSDI_TEST_OGC_SERVICE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    ogc_service_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.ogc_service")))
    ogc_service_ref01_data = nil
    if ogc_service_ref01_data_raw.length > 0
      ogc_service_ref01_data = Helpers.to_map(ogc_service_ref01_data_raw[0][1])
    end

    # LOAD
    ogc_service_ref01_ent = client.OgcService(nil)
    ogc_service_ref01_match_dt0 = {}
    ogc_service_ref01_data_dt0_loaded, err = ogc_service_ref01_ent.load(ogc_service_ref01_match_dt0, nil)
    assert_nil err
    assert !ogc_service_ref01_data_dt0_loaded.nil?

  end
end

def ogc_service_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "ogc_service", "OgcServiceTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = HongKongCsdiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["ogc_service01", "ogc_service02", "ogc_service03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["HONGKONGCSDI_TEST_OGC_SERVICE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "HONGKONGCSDI_TEST_OGC_SERVICE_ENTID" => idmap,
    "HONGKONGCSDI_TEST_LIVE" => "FALSE",
    "HONGKONGCSDI_TEST_EXPLAIN" => "FALSE",
    "HONGKONGCSDI_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["HONGKONGCSDI_TEST_OGC_SERVICE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["HONGKONGCSDI_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["HONGKONGCSDI_APIKEY"],
      },
      extra || {},
    ])
    client = HongKongCsdiSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["HONGKONGCSDI_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["HONGKONGCSDI_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
