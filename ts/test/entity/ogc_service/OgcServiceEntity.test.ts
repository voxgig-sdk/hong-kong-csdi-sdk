

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HongKongCsdiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('OgcServiceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HONG_KONG_CSDI_TEST_LIVE=TRUE.
  afterEach(liveDelay('HONG_KONG_CSDI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HongKongCsdiSDK.test()
    const ent = testsdk.OgcService()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HONG_KONG_CSDI_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ogc_service.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"ogc_service","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"bbox","orig":"bbox","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"EPSG:4326","kind":"query","name":"crs","orig":"crs","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"height","orig":"height","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"layer","orig":"layer","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"request","orig":"request","reqd":true,"type":"`$STRING`","index$":5},{"active":true,"example":"WMS","kind":"query","name":"service","orig":"service","reqd":true,"type":"`$STRING`","index$":6},{"active":true,"example":"1.3.0","kind":"query","name":"version","orig":"version","reqd":true,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"width","orig":"width","reqd":false,"type":"`$INTEGER`","index$":8}]},"contract":{"id":"GET /map/wms","json":"{\"operationId\":\"getWMSMap\",\"parameters\":[{\"description\":\"Service type (WMS)\",\"in\":\"query\",\"name\":\"SERVICE\",\"required\":true,\"schema\":{\"default\":\"WMS\",\"enum\":[\"WMS\"],\"type\":\"string\"}},{\"description\":\"WMS version\",\"in\":\"query\",\"name\":\"VERSION\",\"required\":true,\"schema\":{\"default\":\"1.3.0\",\"enum\":[\"1.1.0\",\"1.3.0\"],\"type\":\"string\"}},{\"description\":\"Type of WMS request\",\"in\":\"query\",\"name\":\"REQUEST\",\"required\":true,\"schema\":{\"enum\":[\"GetCapabilities\",\"GetMap\",\"GetFeatureInfo\"],\"type\":\"string\"}},{\"description\":\"Comma-separated list of layer names\",\"in\":\"query\",\"name\":\"LAYERS\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Bounding box for map extent\",\"in\":\"query\",\"name\":\"BBOX\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Width of the output map in pixels\",\"in\":\"query\",\"name\":\"WIDTH\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Height of the output map in pixels\",\"in\":\"query\",\"name\":\"HEIGHT\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Output format for the map\",\"in\":\"query\",\"name\":\"FORMAT\",\"required\":false,\"schema\":{\"enum\":[\"image/png\",\"image/jpeg\",\"image/gif\"],\"type\":\"string\"}},{\"description\":\"Coordinate Reference System\",\"in\":\"query\",\"name\":\"CRS\",\"required\":false,\"schema\":{\"default\":\"EPSG:4326\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"text/xml\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful WMS response\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or code\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"Bad request\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (if required)\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/map/wms","segments":[{"lit":"map"},{"lit":"wms"}],"select":{"exist":["bbox","crs","format","height","layer","request","service","version","width"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"bbox","orig":"bbox","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":100,"kind":"query","name":"count","orig":"count","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":"application/json","kind":"query","name":"outputformat","orig":"outputformat","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"request","orig":"request","reqd":true,"type":"`$STRING`","index$":3},{"active":true,"example":"WFS","kind":"query","name":"service","orig":"service","reqd":true,"type":"`$STRING`","index$":4},{"active":true,"example":"EPSG:4326","kind":"query","name":"srsname","orig":"srsname","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"typename","orig":"typename","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":"2.0.0","kind":"query","name":"version","orig":"version","reqd":true,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /map/wfs","json":"{\"operationId\":\"getWFSFeatures\",\"parameters\":[{\"description\":\"Service type (WFS)\",\"in\":\"query\",\"name\":\"SERVICE\",\"required\":true,\"schema\":{\"default\":\"WFS\",\"enum\":[\"WFS\"],\"type\":\"string\"}},{\"description\":\"WFS version\",\"in\":\"query\",\"name\":\"VERSION\",\"required\":true,\"schema\":{\"default\":\"2.0.0\",\"enum\":[\"1.0.0\",\"1.1.0\",\"2.0.0\"],\"type\":\"string\"}},{\"description\":\"Type of WFS request\",\"in\":\"query\",\"name\":\"REQUEST\",\"required\":true,\"schema\":{\"enum\":[\"GetCapabilities\",\"GetFeature\",\"DescribeFeatureType\"],\"type\":\"string\"}},{\"description\":\"Feature type name\",\"in\":\"query\",\"name\":\"TYPENAME\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Output format for features\",\"in\":\"query\",\"name\":\"OUTPUTFORMAT\",\"required\":false,\"schema\":{\"default\":\"application/json\",\"enum\":[\"application/json\",\"text/xml\",\"gml3\"],\"type\":\"string\"}},{\"description\":\"Maximum number of features to return\",\"in\":\"query\",\"name\":\"COUNT\",\"required\":false,\"schema\":{\"default\":100,\"type\":\"integer\"}},{\"description\":\"Bounding box filter\",\"in\":\"query\",\"name\":\"BBOX\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Spatial Reference System name\",\"in\":\"query\",\"name\":\"SRSNAME\",\"required\":false,\"schema\":{\"default\":\"EPSG:4326\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\"}},\"text/xml\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful WFS response\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or code\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"Bad request\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (if required)\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/map/wfs","segments":[{"lit":"map"},{"lit":"wfs"}],"select":{"exist":["bbox","count","outputformat","request","service","srsname","typename","version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ogc_service","name__orig":"ogc_service","Name":"OgcService","name_":"ogc_service","name-":"ogc-service","NAME":"OGC_SERVICE","index$":1}, {"active":true,"entity":"ogc_service","key$":"BasicOgcServiceFlow","kind":"basic","name":"BasicOgcServiceFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"ogc_service_ref01","srcdatavar":"ogc_service_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ogc_service_ref01"}}],"index$":0}]}, 'OgcService')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ogc_service_ref01_data = Object.values(setup.data.existing.ogc_service)[0] as any

    // LOAD
    const ogc_service_ref01_ent = client.OgcService()
    const ogc_service_ref01_match_dt0: any = {}
    const ogc_service_ref01_data_dt0 = (await ogc_service_ref01_ent.load(ogc_service_ref01_match_dt0)).data()
    assert(null != ogc_service_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ogc_service/OgcServiceTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HongKongCsdiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['ogc_service01','ogc_service02','ogc_service03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HONG_KONG_CSDI_TEST_OGC_SERVICE_ENTID': idmap,
    'HONG_KONG_CSDI_TEST_LIVE': 'FALSE',
    'HONG_KONG_CSDI_TEST_EXPLAIN': 'FALSE',
    'HONG_KONG_CSDI_APIKEY': '',
  })

  idmap = env['HONG_KONG_CSDI_TEST_OGC_SERVICE_ENTID']

  const live = 'TRUE' === env.HONG_KONG_CSDI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HONG_KONG_CSDI_TEST_OGC_SERVICE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HongKongCsdiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.HONG_KONG_CSDI_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.HONG_KONG_CSDI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
