

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"apiCallCount","req":false,"short":"Number of API calls made for this dataset","type":"`$INTEGER`","index$":0},{"active":true,"name":"apiEndpoints","req":false,"short":"Available API endpoints for this dataset","type":"`$OBJECT`","index$":1},{"active":true,"name":"apiServiceCalls","req":false,"short":"Total API service calls in the specified year","type":"`$NUMBER`","index$":2},{"active":true,"name":"category","req":false,"short":"Category of the dataset","type":"`$STRING`","index$":3},{"active":true,"name":"datasetDownloads","req":false,"short":"Total dataset downloads in the specified year","type":"`$NUMBER`","index$":4},{"active":true,"name":"description","req":true,"short":"Detailed description of the dataset","type":"`$STRING`","index$":5},{"active":true,"name":"downloadCount","req":false,"short":"Number of times the dataset has been downloaded","type":"`$INTEGER`","index$":6},{"active":true,"name":"formats","req":false,"short":"Available formats for the dataset","type":"`$ARRAY`","index$":7},{"active":true,"name":"id","req":true,"short":"Unique identifier for the dataset","type":"`$STRING`","index$":8},{"active":true,"name":"keywords","req":false,"short":"Keywords associated with the dataset","type":"`$ARRAY`","index$":9},{"active":true,"format":"date-time","name":"lastUpdated","req":false,"short":"Date when the dataset was last updated","type":"`$STRING`","index$":10},{"active":true,"name":"license","req":false,"short":"License information for the dataset","type":"`$STRING`","index$":11},{"active":true,"name":"provider","req":false,"short":"Data provider organization","type":"`$STRING`","index$":12},{"active":true,"format":"date-time","name":"publishedDate","req":false,"short":"Date when the dataset was published","type":"`$STRING`","index$":13},{"active":true,"name":"spatialExtent","req":false,"short":"Spatial extent of the dataset","type":"`$OBJECT`","index$":14},{"active":true,"name":"theme","req":false,"short":"Framework Spatial Data Theme","type":"`$STRING`","index$":15},{"active":true,"name":"title","req":true,"short":"Title of the dataset","type":"`$STRING`","index$":16},{"active":true,"name":"totalDatasets","req":false,"short":"Total number of datasets available","type":"`$INTEGER`","index$":17},{"active":true,"name":"viewCount","req":false,"short":"Number of times the dataset has been viewed","type":"`$INTEGER`","index$":18},{"active":true,"name":"year","req":false,"type":"`$INTEGER`","index$":19}],"id":{"field":"id","name":"id"},"name":"dataset","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"category","orig":"category","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":50,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"search","orig":"search","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"new","kind":"query","name":"sort_by","orig":"sort_by","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"theme","orig":"theme","reqd":false,"type":"`$STRING`","index$":5}]},"contract":{"id":"GET /datasets","json":"{\"operationId\":\"getDatasets\",\"parameters\":[{\"description\":\"Filter datasets by category (e.g., Climate and Weather, Commerce and Industry, Development, Education, Election, Environment, Geography, Health, Housing, Labour Community and Social Welfare, Land Information, Law and Security, Population, Recreation and Culture, Sports, Technology, Transportation, Utilities)\",\"in\":\"query\",\"name\":\"category\",\"required\":false,\"schema\":{\"enum\":[\"Climate and Weather\",\"Commerce and Industry\",\"Development\",\"Education\",\"Election\",\"Environment\",\"Geography\",\"Health\",\"Housing\",\"Labour, Community and Social Welfare\",\"Land Information\",\"Law and Security\",\"Population\",\"Recreation and Culture\",\"Sports\",\"Technology\",\"Transportation\",\"Utilities\"],\"type\":\"string\"}},{\"description\":\"Filter datasets by Framework Spatial Data Theme\",\"in\":\"query\",\"name\":\"theme\",\"required\":false,\"schema\":{\"enum\":[\"Address\",\"Building\",\"Coordinate Reference System\",\"Elevation and Depth\",\"Functional Area\",\"Geographic Name\",\"Land Parcel\",\"Orthoimagery\",\"Population Distribution\",\"Slope and Geology\",\"Transportation\",\"Water\"],\"type\":\"string\"}},{\"description\":\"Sort datasets by specified criteria\",\"in\":\"query\",\"name\":\"sortBy\",\"required\":false,\"schema\":{\"default\":\"new\",\"enum\":[\"new\",\"most_viewed\",\"most_downloaded\",\"most_popular_api\"],\"type\":\"string\"}},{\"description\":\"Search query for datasets\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Maximum number of results to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":50,\"maximum\":1000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"count\":{\"description\":\"Number of datasets returned in this response\",\"type\":\"integer\"},\"datasets\":{\"items\":{\"properties\":{\"apiCallCount\":{\"description\":\"Number of API calls made for this dataset\",\"type\":\"integer\"},\"apiEndpoints\":{\"description\":\"Available API endpoints for this dataset\",\"properties\":{\"rest\":{\"description\":\"ArcGIS REST API endpoint URL\",\"format\":\"uri\",\"type\":\"string\"},\"wfs\":{\"description\":\"WFS endpoint URL\",\"format\":\"uri\",\"type\":\"string\"},\"wms\":{\"description\":\"WMS endpoint URL\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"category\":{\"description\":\"Category of the dataset\",\"enum\":[\"Climate and Weather\",\"Commerce and Industry\",\"Development\",\"Education\",\"Election\",\"Environment\",\"Geography\",\"Health\",\"Housing\",\"Labour, Community and Social Welfare\",\"Land Information\",\"Law and Security\",\"Population\",\"Recreation and Culture\",\"Sports\",\"Technology\",\"Transportation\",\"Utilities\"],\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the dataset\",\"type\":\"string\"},\"downloadCount\":{\"description\":\"Number of times the dataset has been downloaded\",\"type\":\"integer\"},\"formats\":{\"description\":\"Available formats for the dataset\",\"items\":{\"enum\":[\"json\",\"geojson\",\"shapefile\",\"kml\",\"csv\",\"gml\",\"wms\",\"wfs\",\"rest\"],\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the dataset\",\"type\":\"string\"},\"keywords\":{\"description\":\"Keywords associated with the dataset\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"lastUpdated\":{\"description\":\"Date when the dataset was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"license\":{\"description\":\"License information for the dataset\",\"type\":\"string\"},\"provider\":{\"description\":\"Data provider organization\",\"type\":\"string\"},\"publishedDate\":{\"description\":\"Date when the dataset was published\",\"format\":\"date-time\",\"type\":\"string\"},\"spatialExtent\":{\"description\":\"Spatial extent of the dataset\",\"properties\":{\"bbox\":{\"description\":\"Bounding box coordinates [minLon, minLat, maxLon, maxLat]\",\"items\":{\"type\":\"number\"},\"maxItems\":4,\"minItems\":4,\"type\":\"array\"},\"crs\":{\"default\":\"EPSG:4326\",\"description\":\"Coordinate Reference System\",\"type\":\"string\"}},\"type\":\"object\"},\"theme\":{\"description\":\"Framework Spatial Data Theme\",\"enum\":[\"Address\",\"Building\",\"Coordinate Reference System\",\"Elevation and Depth\",\"Functional Area\",\"Geographic Name\",\"Land Parcel\",\"Orthoimagery\",\"Population Distribution\",\"Slope and Geology\",\"Transportation\",\"Water\"],\"type\":\"string\"},\"title\":{\"description\":\"Title of the dataset\",\"type\":\"string\"},\"viewCount\":{\"description\":\"Number of times the dataset has been viewed\",\"type\":\"integer\"}},\"required\":[\"id\",\"title\",\"description\"],\"type\":\"object\"},\"type\":\"array\"},\"offset\":{\"description\":\"Current offset for pagination\",\"type\":\"integer\"},\"total\":{\"description\":\"Total number of datasets available\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of datasets\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or code\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or code\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (if required)\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/datasets","segments":[{"lit":"datasets"}],"select":{"exist":["category","limit","offset","search","sort_by","theme"]},"transform":{"req":"`reqdata`","res":"`body.datasets`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"dataset_id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /datasets/{datasetId}/download","json":"{\"operationId\":\"downloadDataset\",\"parameters\":[{\"description\":\"Unique identifier of the dataset\",\"in\":\"path\",\"name\":\"datasetId\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Desired format for the dataset download\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"geojson\",\"shapefile\",\"kml\",\"csv\",\"gml\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/geo+json\":{\"schema\":{\"type\":\"object\"}},\"application/json\":{\"schema\":{\"type\":\"object\"}},\"application/zip\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Successful dataset download\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or code\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"Dataset not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or code\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (if required)\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/datasets/{datasetId}/download","rename":{"param":{"datasetId":"id"}},"segments":[{"lit":"datasets"},{"var":"id"},{"lit":"download"}],"select":{"$action":"download","exist":["format","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"dataset_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /datasets/{datasetId}","json":"{\"operationId\":\"getDatasetById\",\"parameters\":[{\"description\":\"Unique identifier of the dataset\",\"in\":\"path\",\"name\":\"datasetId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"apiCallCount\":{\"description\":\"Number of API calls made for this dataset\",\"type\":\"integer\"},\"apiEndpoints\":{\"description\":\"Available API endpoints for this dataset\",\"properties\":{\"rest\":{\"description\":\"ArcGIS REST API endpoint URL\",\"format\":\"uri\",\"type\":\"string\"},\"wfs\":{\"description\":\"WFS endpoint URL\",\"format\":\"uri\",\"type\":\"string\"},\"wms\":{\"description\":\"WMS endpoint URL\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"category\":{\"description\":\"Category of the dataset\",\"enum\":[\"Climate and Weather\",\"Commerce and Industry\",\"Development\",\"Education\",\"Election\",\"Environment\",\"Geography\",\"Health\",\"Housing\",\"Labour, Community and Social Welfare\",\"Land Information\",\"Law and Security\",\"Population\",\"Recreation and Culture\",\"Sports\",\"Technology\",\"Transportation\",\"Utilities\"],\"type\":\"string\"},\"description\":{\"description\":\"Detailed description of the dataset\",\"type\":\"string\"},\"downloadCount\":{\"description\":\"Number of times the dataset has been downloaded\",\"type\":\"integer\"},\"formats\":{\"description\":\"Available formats for the dataset\",\"items\":{\"enum\":[\"json\",\"geojson\",\"shapefile\",\"kml\",\"csv\",\"gml\",\"wms\",\"wfs\",\"rest\"],\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the dataset\",\"type\":\"string\"},\"keywords\":{\"description\":\"Keywords associated with the dataset\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"lastUpdated\":{\"description\":\"Date when the dataset was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"license\":{\"description\":\"License information for the dataset\",\"type\":\"string\"},\"provider\":{\"description\":\"Data provider organization\",\"type\":\"string\"},\"publishedDate\":{\"description\":\"Date when the dataset was published\",\"format\":\"date-time\",\"type\":\"string\"},\"spatialExtent\":{\"description\":\"Spatial extent of the dataset\",\"properties\":{\"bbox\":{\"description\":\"Bounding box coordinates [minLon, minLat, maxLon, maxLat]\",\"items\":{\"type\":\"number\"},\"maxItems\":4,\"minItems\":4,\"type\":\"array\"},\"crs\":{\"default\":\"EPSG:4326\",\"description\":\"Coordinate Reference System\",\"type\":\"string\"}},\"type\":\"object\"},\"theme\":{\"description\":\"Framework Spatial Data Theme\",\"enum\":[\"Address\",\"Building\",\"Coordinate Reference System\",\"Elevation and Depth\",\"Functional Area\",\"Geographic Name\",\"Land Parcel\",\"Orthoimagery\",\"Population Distribution\",\"Slope and Geology\",\"Transportation\",\"Water\"],\"type\":\"string\"},\"title\":{\"description\":\"Title of the dataset\",\"type\":\"string\"},\"viewCount\":{\"description\":\"Number of times the dataset has been viewed\",\"type\":\"integer\"}},\"required\":[\"id\",\"title\",\"description\"],\"type\":\"object\"}}},\"description\":\"Successful response with dataset details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or code\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"Dataset not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or code\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (if required)\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/datasets/{datasetId}","rename":{"param":{"datasetId":"id"}},"segments":[{"lit":"datasets"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"example":2025,"kind":"query","name":"year","orig":"year","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /statistics","json":"{\"operationId\":\"getStatistics\",\"parameters\":[{\"description\":\"Year for statistics\",\"in\":\"query\",\"name\":\"year\",\"required\":false,\"schema\":{\"default\":2025,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"apiServiceCalls\":{\"description\":\"Total API service calls in the specified year\",\"example\":9500000000,\"type\":\"number\"},\"datasetDownloads\":{\"description\":\"Total dataset downloads in the specified year\",\"example\":2050000,\"type\":\"number\"},\"totalDatasets\":{\"description\":\"Total number of datasets available\",\"example\":1100,\"type\":\"integer\"},\"year\":{\"example\":2025,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with statistics\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or code\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or code\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication (if required)\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/statistics","segments":[{"lit":"statistics"}],"select":{"exist":["year"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"dataset","name__orig":"dataset","Name":"Dataset","name_":"dataset","name-":"dataset","NAME":"DATASET","index$":0}, {"active":true,"entity":"dataset","key$":"BasicDatasetFlow","kind":"basic","name":"BasicDatasetFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"dataset_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"dataset_ref01","srcdatavar":"dataset_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dataset_ref01"}}],"index$":1}]}, 'Dataset')
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
  
