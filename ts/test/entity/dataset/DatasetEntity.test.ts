

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


describe('DatasetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HONG_KONG_CSDI_TEST_LIVE=TRUE.
  afterEach(liveDelay('HONG_KONG_CSDI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HongKongCsdiSDK.test()
    const ent = testsdk.Dataset()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HONG_KONG_CSDI_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dataset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apiCallCount":{"a":true,"h":"Api Call Count","n":"apiCallCount","r":false,"sh":"Number of API calls made for this dataset","t":"`$INTEGER`","key$":"apiCallCount","index$":0},"apiEndpoints":{"a":true,"h":"Api Endpoints","n":"apiEndpoints","r":false,"sh":"Available API endpoints for this dataset","t":"`$OBJECT`","key$":"apiEndpoints","index$":1},"apiServiceCalls":{"a":true,"h":"Api Service Calls","n":"apiServiceCalls","r":false,"sh":"Total API service calls in the specified year","t":"`$NUMBER`","key$":"apiServiceCalls","index$":2},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Category of the dataset","t":"`$STRING`","key$":"category","index$":3},"datasetDownloads":{"a":true,"h":"Dataset Downloads","n":"datasetDownloads","r":false,"sh":"Total dataset downloads in the specified year","t":"`$NUMBER`","key$":"datasetDownloads","index$":4},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"Detailed description of the dataset","t":"`$STRING`","key$":"description","index$":5},"downloadCount":{"a":true,"h":"Download Count","n":"downloadCount","r":false,"sh":"Number of times the dataset has been downloaded","t":"`$INTEGER`","key$":"downloadCount","index$":6},"formats":{"a":true,"h":"Formats","n":"formats","r":false,"sh":"Available formats for the dataset","t":"`$ARRAY`","key$":"formats","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the dataset","t":"`$STRING`","key$":"id","index$":8},"keywords":{"a":true,"h":"Keywords","n":"keywords","r":false,"sh":"Keywords associated with the dataset","t":"`$ARRAY`","key$":"keywords","index$":9},"lastUpdated":{"a":true,"fo":"date-time","h":"Last Updated","n":"lastUpdated","r":false,"sh":"Date when the dataset was last updated","t":"`$STRING`","key$":"lastUpdated","index$":10},"license":{"a":true,"h":"License","n":"license","r":false,"sh":"License information for the dataset","t":"`$STRING`","key$":"license","index$":11},"provider":{"a":true,"h":"Provider","n":"provider","r":false,"sh":"Data provider organization","t":"`$STRING`","key$":"provider","index$":12},"publishedDate":{"a":true,"fo":"date-time","h":"Published Date","n":"publishedDate","r":false,"sh":"Date when the dataset was published","t":"`$STRING`","key$":"publishedDate","index$":13},"spatialExtent":{"a":true,"h":"Spatial Extent","n":"spatialExtent","r":false,"sh":"Spatial extent of the dataset","t":"`$OBJECT`","key$":"spatialExtent","index$":14},"theme":{"a":true,"h":"Theme","n":"theme","r":false,"sh":"Framework Spatial Data Theme","t":"`$STRING`","key$":"theme","index$":15},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Title of the dataset","t":"`$STRING`","key$":"title","index$":16},"totalDatasets":{"a":true,"h":"Total Datasets","n":"totalDatasets","r":false,"sh":"Total number of datasets available","t":"`$INTEGER`","key$":"totalDatasets","index$":17},"viewCount":{"a":true,"h":"View Count","n":"viewCount","r":false,"sh":"Number of times the dataset has been viewed","t":"`$INTEGER`","key$":"viewCount","index$":18},"year":{"a":true,"h":"Year","n":"year","r":false,"t":"`$INTEGER`","key$":"year","index$":19}},"id":{"field":"id","name":"id"},"name":"dataset","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /datasets","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"new","k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"theme","or":"theme","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/datasets","q":{"exist":["category","limit","offset","search","sort_by","theme"]},"r":{},"s":[{"lit":"datasets"}],"t":{"req":"`reqdata`","res":"`body.datasets`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /datasets/{datasetId}/download","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"dataset_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/datasets/{datasetId}/download","q":{"$action":"download","exist":["format","id"]},"r":{"param":{"datasetId":"id"}},"s":[{"lit":"datasets"},{"var":"id"},{"lit":"download"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /datasets/{datasetId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"dataset_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/datasets/{datasetId}","q":{"exist":["id"]},"r":{"param":{"datasetId":"id"}},"s":[{"lit":"datasets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /statistics","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":2025,"k":"query","n":"year","or":"year","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/statistics","q":{"exist":["year"]},"r":{},"s":[{"lit":"statistics"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"dataset","name__orig":"dataset","Name":"Dataset","name_":"dataset","name-":"dataset","NAME":"DATASET","index$":0}, {"active":true,"entity":"dataset","key$":"BasicDatasetFlow","kind":"basic","name":"BasicDatasetFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dataset_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"dataset_ref01","srcdatavar":"dataset_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dataset_ref01"}}],"index$":1}]}, 'Dataset', {"GET /datasets":{"protocol":"http","operationId":"getDatasets","responses":{"200":{"description":"Successful response with list of datasets","content":{"application/json":{"schema":{"type":"object","properties":{"total":{"description":"Total number of datasets available","key$":"total","type":"integer"},"count":{"description":"Number of datasets returned in this response","key$":"count","type":"integer"},"offset":{"description":"Current offset for pagination","key$":"offset","type":"integer"},"datasets":{"items":{"properties":{"apiCallCount":{"description":"Number of API calls made for this dataset","type":"integer","key$":"apiCallCount"},"apiEndpoints":{"description":"Available API endpoints for this dataset","properties":{"rest":{"description":"ArcGIS REST API endpoint URL","format":"uri","type":"string"},"wfs":{"description":"WFS endpoint URL","format":"uri","type":"string"},"wms":{"description":"WMS endpoint URL","format":"uri","type":"string"}},"type":"object","key$":"apiEndpoints"},"category":{"description":"Category of the dataset","enum":["Climate and Weather","Commerce and Industry","Development","Education","Election","Environment","Geography","Health","Housing","Labour, Community and Social Welfare","Land Information","Law and Security","Population","Recreation and Culture","Sports","Technology","Transportation","Utilities"],"type":"string","key$":"category"},"description":{"description":"Detailed description of the dataset","type":"string","key$":"description"},"downloadCount":{"description":"Number of times the dataset has been downloaded","type":"integer","key$":"downloadCount"},"formats":{"description":"Available formats for the dataset","items":{"enum":["json","geojson","shapefile","kml","csv","gml","wms","wfs","rest"],"type":"string"},"type":"array","key$":"formats"},"id":{"description":"Unique identifier for the dataset","type":"string","key$":"id"},"keywords":{"description":"Keywords associated with the dataset","items":{"type":"string"},"type":"array","key$":"keywords"},"lastUpdated":{"description":"Date when the dataset was last updated","format":"date-time","type":"string","key$":"lastUpdated"},"license":{"description":"License information for the dataset","type":"string","key$":"license"},"provider":{"description":"Data provider organization","type":"string","key$":"provider"},"publishedDate":{"description":"Date when the dataset was published","format":"date-time","type":"string","key$":"publishedDate"},"spatialExtent":{"description":"Spatial extent of the dataset","properties":{"bbox":{"description":"Bounding box coordinates [minLon, minLat, maxLon, maxLat]","items":{"type":"number"},"maxItems":4,"minItems":4,"type":"array"},"crs":{"default":"EPSG:4326","description":"Coordinate Reference System","type":"string"}},"type":"object","key$":"spatialExtent"},"theme":{"description":"Framework Spatial Data Theme","enum":["Address","Building","Coordinate Reference System","Elevation and Depth","Functional Area","Geographic Name","Land Parcel","Orthoimagery","Population Distribution","Slope and Geology","Transportation","Water"],"type":"string","key$":"theme"},"title":{"description":"Title of the dataset","type":"string","key$":"title"},"viewCount":{"description":"Number of times the dataset has been viewed","type":"integer","key$":"viewCount"}},"required":["id","title","description"],"type":"object","x-ref":"#/components/schemas/Dataset","index$":0},"key$":"datasets","type":"array"}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or code"},"message":{"type":"string","description":"Detailed error message"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"}},"required":["error","message"],"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or code"},"message":{"type":"string","description":"Detailed error message"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"}},"required":["error","message"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"category","in":"query","description":"Filter datasets by category (e.g., Climate and Weather, Commerce and Industry, Development, Education, Election, Environment, Geography, Health, Housing, Labour Community and Social Welfare, Land Information, Law and Security, Population, Recreation and Culture, Sports, Technology, Transportation, Utilities)","required":false,"schema":{"type":"string","enum":["Climate and Weather","Commerce and Industry","Development","Education","Election","Environment","Geography","Health","Housing","Labour, Community and Social Welfare","Land Information","Law and Security","Population","Recreation and Culture","Sports","Technology","Transportation","Utilities"]},"index$":0},{"name":"theme","in":"query","description":"Filter datasets by Framework Spatial Data Theme","required":false,"schema":{"type":"string","enum":["Address","Building","Coordinate Reference System","Elevation and Depth","Functional Area","Geographic Name","Land Parcel","Orthoimagery","Population Distribution","Slope and Geology","Transportation","Water"]},"index$":1},{"name":"sortBy","in":"query","description":"Sort datasets by specified criteria","required":false,"schema":{"type":"string","enum":["new","most_viewed","most_downloaded","most_popular_api"],"default":"new"},"index$":2},{"name":"search","in":"query","description":"Search query for datasets","required":false,"schema":{"type":"string"},"index$":3},{"name":"limit","in":"query","description":"Maximum number of results to return","required":false,"schema":{"type":"integer","default":50,"minimum":1,"maximum":1000},"index$":4},{"name":"offset","in":"query","description":"Number of results to skip for pagination","required":false,"schema":{"type":"integer","default":0,"minimum":0},"index$":5}],"securitySource":"unspecified","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication (if required)"}}},"GET /datasets/{datasetId}/download":{"protocol":"http","operationId":"downloadDataset","responses":{"200":{"description":"Successful dataset download","content":{"application/json":{"schema":{"type":"object"}},"application/geo+json":{"schema":{"type":"object"}},"application/zip":{"schema":{"type":"string","format":"binary"}}}},"404":{"description":"Dataset not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or code"},"message":{"type":"string","description":"Detailed error message"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"}},"required":["error","message"],"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or code"},"message":{"type":"string","description":"Detailed error message"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"}},"required":["error","message"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"datasetId","in":"path","description":"Unique identifier of the dataset","required":true,"schema":{"type":"string"},"index$":0},{"name":"format","in":"query","description":"Desired format for the dataset download","required":false,"schema":{"type":"string","enum":["json","geojson","shapefile","kml","csv","gml"],"default":"json"},"index$":1}],"securitySource":"unspecified","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication (if required)"}}},"GET /datasets/{datasetId}":{"protocol":"http","operationId":"getDatasetById","responses":{"200":{"description":"Successful response with dataset details","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"description":"Unique identifier for the dataset","type":"string","key$":"id"},"title":{"description":"Title of the dataset","type":"string","key$":"title"},"description":{"description":"Detailed description of the dataset","type":"string","key$":"description"},"category":{"description":"Category of the dataset","enum":["Climate and Weather","Commerce and Industry","Development","Education","Election","Environment","Geography","Health","Housing","Labour, Community and Social Welfare","Land Information","Law and Security","Population","Recreation and Culture","Sports","Technology","Transportation","Utilities"],"type":"string","key$":"category"},"theme":{"description":"Framework Spatial Data Theme","enum":["Address","Building","Coordinate Reference System","Elevation and Depth","Functional Area","Geographic Name","Land Parcel","Orthoimagery","Population Distribution","Slope and Geology","Transportation","Water"],"type":"string","key$":"theme"},"provider":{"description":"Data provider organization","type":"string","key$":"provider"},"publishedDate":{"description":"Date when the dataset was published","format":"date-time","type":"string","key$":"publishedDate"},"lastUpdated":{"description":"Date when the dataset was last updated","format":"date-time","type":"string","key$":"lastUpdated"},"viewCount":{"description":"Number of times the dataset has been viewed","type":"integer","key$":"viewCount"},"downloadCount":{"description":"Number of times the dataset has been downloaded","type":"integer","key$":"downloadCount"},"apiCallCount":{"description":"Number of API calls made for this dataset","type":"integer","key$":"apiCallCount"},"formats":{"description":"Available formats for the dataset","items":{"enum":["json","geojson","shapefile","kml","csv","gml","wms","wfs","rest"],"type":"string"},"type":"array","key$":"formats"},"spatialExtent":{"description":"Spatial extent of the dataset","properties":{"bbox":{"description":"Bounding box coordinates [minLon, minLat, maxLon, maxLat]","items":{"type":"number"},"maxItems":4,"minItems":4,"type":"array"},"crs":{"default":"EPSG:4326","description":"Coordinate Reference System","type":"string"}},"type":"object","key$":"spatialExtent"},"keywords":{"description":"Keywords associated with the dataset","items":{"type":"string"},"type":"array","key$":"keywords"},"license":{"description":"License information for the dataset","type":"string","key$":"license"},"apiEndpoints":{"description":"Available API endpoints for this dataset","properties":{"rest":{"description":"ArcGIS REST API endpoint URL","format":"uri","type":"string"},"wfs":{"description":"WFS endpoint URL","format":"uri","type":"string"},"wms":{"description":"WMS endpoint URL","format":"uri","type":"string"}},"type":"object","key$":"apiEndpoints"}},"required":["id","title","description"],"x-ref":"#/components/schemas/Dataset","index$":0}}}},"404":{"description":"Dataset not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or code"},"message":{"type":"string","description":"Detailed error message"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"}},"required":["error","message"],"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or code"},"message":{"type":"string","description":"Detailed error message"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"}},"required":["error","message"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"datasetId","in":"path","description":"Unique identifier of the dataset","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication (if required)"}}},"GET /statistics":{"protocol":"http","operationId":"getStatistics","responses":{"200":{"description":"Successful response with statistics","content":{"application/json":{"schema":{"type":"object","properties":{"year":{"example":2025,"key$":"year","type":"integer"},"totalDatasets":{"description":"Total number of datasets available","example":1100,"key$":"totalDatasets","type":"integer"},"datasetDownloads":{"description":"Total dataset downloads in the specified year","example":2050000,"key$":"datasetDownloads","type":"number"},"apiServiceCalls":{"description":"Total API service calls in the specified year","example":9500000000,"key$":"apiServiceCalls","type":"number"}},"index$":0}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or code"},"message":{"type":"string","description":"Detailed error message"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"}},"required":["error","message"],"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or code"},"message":{"type":"string","description":"Detailed error message"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"}},"required":["error","message"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"year","in":"query","description":"Year for statistics","required":false,"schema":{"type":"integer","default":2025},"index$":0}],"securitySource":"unspecified","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication (if required)"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dataset_ref01_data = Object.values(setup.data.existing.dataset)[0] as any

    // LIST
    const dataset_ref01_ent = client.Dataset()
    const dataset_ref01_match: any = {}

    const dataset_ref01_list = (await dataset_ref01_ent.list(dataset_ref01_match)).map((e: any) => e.data())


    // LOAD
    const dataset_ref01_match_dt0: any = {}
    dataset_ref01_match_dt0.id = dataset_ref01_data.id
    const dataset_ref01_data_dt0 = (await dataset_ref01_ent.load(dataset_ref01_match_dt0)).data()
    assert(dataset_ref01_data_dt0.id === dataset_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dataset/DatasetTestData.json')

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
    ['dataset01','dataset02','dataset03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HONG_KONG_CSDI_TEST_DATASET_ENTID': idmap,
    'HONG_KONG_CSDI_TEST_LIVE': 'FALSE',
    'HONG_KONG_CSDI_TEST_EXPLAIN': 'FALSE',
    'HONG_KONG_CSDI_APIKEY': '',
  })

  idmap = env['HONG_KONG_CSDI_TEST_DATASET_ENTID']

  const live = 'TRUE' === env.HONG_KONG_CSDI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HONG_KONG_CSDI_TEST_DATASET_ENTID']
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
  
