package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/hong-kong-csdi-sdk/go"
	"github.com/voxgig-sdk/hong-kong-csdi-sdk/go/core"

	vs "github.com/voxgig-sdk/hong-kong-csdi-sdk/go/utility/struct"
)

func TestOgcServiceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OgcService(nil)
		if ent == nil {
			t.Fatal("expected non-nil OgcServiceEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := ogc_serviceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ogc_service." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HONG_KONG_CSDI_TEST_OGC_SERVICE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		ogcServiceRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.ogc_service")))
		var ogcServiceRef01Data map[string]any
		if len(ogcServiceRef01DataRaw) > 0 {
			ogcServiceRef01Data = core.ToMapAny(ogcServiceRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = ogcServiceRef01Data

		// LOAD
		ogcServiceRef01Ent := client.OgcService(nil)
		ogcServiceRef01MatchDt0 := map[string]any{}
		ogcServiceRef01DataDt0Loaded, err := ogcServiceRef01Ent.Load(ogcServiceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if ogcServiceRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func ogc_serviceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ogc_service", "OgcServiceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ogc_service test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ogc_service test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ogc_service01", "ogc_service02", "ogc_service03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HONG_KONG_CSDI_TEST_OGC_SERVICE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HONG_KONG_CSDI_TEST_OGC_SERVICE_ENTID": idmap,
		"HONG_KONG_CSDI_TEST_LIVE":      "FALSE",
		"HONG_KONG_CSDI_TEST_EXPLAIN":   "FALSE",
		"HONG_KONG_CSDI_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HONG_KONG_CSDI_TEST_OGC_SERVICE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["HONG_KONG_CSDI_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["HONG_KONG_CSDI_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewHongKongCsdiSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HONG_KONG_CSDI_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HONG_KONG_CSDI_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
