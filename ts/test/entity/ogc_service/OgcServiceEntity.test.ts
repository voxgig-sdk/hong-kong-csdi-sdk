

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"ogc_service","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /map/wms","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"bbox","or":"bbox","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"EPSG:4326","k":"query","n":"crs","or":"crs","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"height","or":"height","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"layer","or":"layer","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"request","or":"request","r":true,"t":"`$STRING`","index$":5},{"a":true,"ex":"WMS","k":"query","n":"service","or":"service","r":true,"t":"`$STRING`","index$":6},{"a":true,"ex":"1.3.0","k":"query","n":"version","or":"version","r":true,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"width","or":"width","r":false,"t":"`$INTEGER`","index$":8}]},"k":"http","m":"GET","o":"/map/wms","q":{"exist":["bbox","crs","format","height","layer","request","service","version","width"]},"r":{},"s":[{"lit":"map"},{"lit":"wms"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /map/wfs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"bbox","or":"bbox","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":100,"k":"query","n":"count","or":"count","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"application/json","k":"query","n":"outputformat","or":"outputformat","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"request","or":"request","r":true,"t":"`$STRING`","index$":3},{"a":true,"ex":"WFS","k":"query","n":"service","or":"service","r":true,"t":"`$STRING`","index$":4},{"a":true,"ex":"EPSG:4326","k":"query","n":"srsname","or":"srsname","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"typename","or":"typename","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":"2.0.0","k":"query","n":"version","or":"version","r":true,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/map/wfs","q":{"exist":["bbox","count","outputformat","request","service","srsname","typename","version"]},"r":{},"s":[{"lit":"map"},{"lit":"wfs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ogc_service","name__orig":"ogc_service","Name":"OgcService","name_":"ogc_service","name-":"ogc-service","NAME":"OGC_SERVICE","index$":1}, {"active":true,"entity":"ogc_service","key$":"BasicOgcServiceFlow","kind":"basic","name":"BasicOgcServiceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ogc_service_ref01","srcdatavar":"ogc_service_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ogc_service_ref01"}}],"index$":0}]}, 'OgcService', {"GET /map/wms":{"protocol":"http","operationId":"getWMSMap","responses":{"200":{"description":"Successful WMS response","content":{"image/png":{"schema":{"type":"string","format":"binary"}},"image/jpeg":{"schema":{"type":"string","format":"binary"}},"text/xml":{"schema":{"type":"string"}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or code"},"message":{"type":"string","description":"Detailed error message"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"}},"required":["error","message"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"SERVICE","in":"query","description":"Service type (WMS)","required":true,"schema":{"type":"string","enum":["WMS"],"default":"WMS"},"index$":0},{"name":"VERSION","in":"query","description":"WMS version","required":true,"schema":{"type":"string","enum":["1.1.0","1.3.0"],"default":"1.3.0"},"index$":1},{"name":"REQUEST","in":"query","description":"Type of WMS request","required":true,"schema":{"type":"string","enum":["GetCapabilities","GetMap","GetFeatureInfo"]},"index$":2},{"name":"LAYERS","in":"query","description":"Comma-separated list of layer names","required":false,"schema":{"type":"string"},"index$":3},{"name":"BBOX","in":"query","description":"Bounding box for map extent","required":false,"schema":{"type":"string"},"index$":4},{"name":"WIDTH","in":"query","description":"Width of the output map in pixels","required":false,"schema":{"type":"integer"},"index$":5},{"name":"HEIGHT","in":"query","description":"Height of the output map in pixels","required":false,"schema":{"type":"integer"},"index$":6},{"name":"FORMAT","in":"query","description":"Output format for the map","required":false,"schema":{"type":"string","enum":["image/png","image/jpeg","image/gif"]},"index$":7},{"name":"CRS","in":"query","description":"Coordinate Reference System","required":false,"schema":{"type":"string","default":"EPSG:4326"},"index$":8}],"securitySource":"unspecified","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication (if required)"}}},"GET /map/wfs":{"protocol":"http","operationId":"getWFSFeatures","responses":{"200":{"description":"Successful WFS response","content":{"application/json":{"schema":{"type":"object"}},"text/xml":{"schema":{"type":"string"}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or code"},"message":{"type":"string","description":"Detailed error message"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"}},"required":["error","message"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"SERVICE","in":"query","description":"Service type (WFS)","required":true,"schema":{"type":"string","enum":["WFS"],"default":"WFS"},"index$":0},{"name":"VERSION","in":"query","description":"WFS version","required":true,"schema":{"type":"string","enum":["1.0.0","1.1.0","2.0.0"],"default":"2.0.0"},"index$":1},{"name":"REQUEST","in":"query","description":"Type of WFS request","required":true,"schema":{"type":"string","enum":["GetCapabilities","GetFeature","DescribeFeatureType"]},"index$":2},{"name":"TYPENAME","in":"query","description":"Feature type name","required":false,"schema":{"type":"string"},"index$":3},{"name":"OUTPUTFORMAT","in":"query","description":"Output format for features","required":false,"schema":{"type":"string","enum":["application/json","text/xml","gml3"],"default":"application/json"},"index$":4},{"name":"COUNT","in":"query","description":"Maximum number of features to return","required":false,"schema":{"type":"integer","default":100},"index$":5},{"name":"BBOX","in":"query","description":"Bounding box filter","required":false,"schema":{"type":"string"},"index$":6},{"name":"SRSNAME","in":"query","description":"Spatial Reference System name","required":false,"schema":{"type":"string","default":"EPSG:4326"},"index$":7}],"securitySource":"unspecified","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication (if required)"}}}})
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
  
