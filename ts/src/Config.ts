
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'HongKongCsdi',
        slug: "hong-kong-csdi",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://portal.csdi.gov.hk/api",

    auth: {
      prefix: '',
      name: 'X-API-Key',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        dataset: {
        },
  
        ogc_service: {
        },
  
    }
  }


  entity = {
    "dataset": {
      "fields": [
        {
          "name": "apiCallCount",
          "title": "Api Call Count",
          "type": "`$INTEGER`",
          "short": "Number of API calls made for this dataset"
        },
        {
          "name": "apiEndpoints",
          "title": "Api Endpoints",
          "type": "`$OBJECT`",
          "short": "Available API endpoints for this dataset"
        },
        {
          "name": "apiServiceCalls",
          "title": "Api Service Calls",
          "type": "`$NUMBER`",
          "short": "Total API service calls in the specified year"
        },
        {
          "name": "category",
          "title": "Category",
          "type": "`$STRING`",
          "short": "Category of the dataset"
        },
        {
          "name": "datasetDownloads",
          "title": "Dataset Downloads",
          "type": "`$NUMBER`",
          "short": "Total dataset downloads in the specified year"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "req": true,
          "short": "Detailed description of the dataset"
        },
        {
          "name": "downloadCount",
          "title": "Download Count",
          "type": "`$INTEGER`",
          "short": "Number of times the dataset has been downloaded"
        },
        {
          "name": "formats",
          "title": "Formats",
          "type": "`$ARRAY`",
          "short": "Available formats for the dataset"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique identifier for the dataset"
        },
        {
          "name": "keywords",
          "title": "Keywords",
          "type": "`$ARRAY`",
          "short": "Keywords associated with the dataset"
        },
        {
          "name": "lastUpdated",
          "title": "Last Updated",
          "type": "`$STRING`",
          "short": "Date when the dataset was last updated",
          "format": "date-time"
        },
        {
          "name": "license",
          "title": "License",
          "type": "`$STRING`",
          "short": "License information for the dataset"
        },
        {
          "name": "provider",
          "title": "Provider",
          "type": "`$STRING`",
          "short": "Data provider organization"
        },
        {
          "name": "publishedDate",
          "title": "Published Date",
          "type": "`$STRING`",
          "short": "Date when the dataset was published",
          "format": "date-time"
        },
        {
          "name": "spatialExtent",
          "title": "Spatial Extent",
          "type": "`$OBJECT`",
          "short": "Spatial extent of the dataset"
        },
        {
          "name": "theme",
          "title": "Theme",
          "type": "`$STRING`",
          "short": "Framework Spatial Data Theme"
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "req": true,
          "short": "Title of the dataset"
        },
        {
          "name": "totalDatasets",
          "title": "Total Datasets",
          "type": "`$INTEGER`",
          "short": "Total number of datasets available"
        },
        {
          "name": "viewCount",
          "title": "View Count",
          "type": "`$INTEGER`",
          "short": "Number of times the dataset has been viewed"
        },
        {
          "name": "year",
          "title": "Year",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "dataset",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/datasets",
              "segments": [
                {
                  "lit": "datasets"
                }
              ],
              "parts": [
                "datasets"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.datasets`"
              },
              "args": {
                "query": [
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 50
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sort_by",
                    "orig": "sort_by",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "new"
                  },
                  {
                    "name": "theme",
                    "orig": "theme",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "category",
                  "limit",
                  "offset",
                  "search",
                  "sort_by",
                  "theme"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/datasets/{datasetId}/download",
              "segments": [
                {
                  "lit": "datasets"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "download"
                }
              ],
              "parts": [
                "datasets",
                "{id}",
                "download"
              ],
              "rename": {
                "param": {
                  "datasetId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "dataset_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "json"
                  }
                ]
              },
              "select": {
                "$action": "download",
                "exist": [
                  "format",
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/datasets/{datasetId}",
              "segments": [
                {
                  "lit": "datasets"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "datasets",
                "{id}"
              ],
              "rename": {
                "param": {
                  "datasetId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "dataset_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/statistics",
              "segments": [
                {
                  "lit": "statistics"
                }
              ],
              "parts": [
                "statistics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "year",
                    "orig": "year",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 2025
                  }
                ]
              },
              "select": {
                "exist": [
                  "year"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "ogc_service": {
      "fields": [],
      "name": "ogc_service",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/map/wms",
              "segments": [
                {
                  "lit": "map"
                },
                {
                  "lit": "wms"
                }
              ],
              "parts": [
                "map",
                "wms"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "bbox",
                    "orig": "bbox",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "crs",
                    "orig": "crs",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "EPSG:4326"
                  },
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "height",
                    "orig": "height",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "layer",
                    "orig": "layer",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "request",
                    "orig": "request",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "service",
                    "orig": "service",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "WMS"
                  },
                  {
                    "name": "version",
                    "orig": "version",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "1.3.0"
                  },
                  {
                    "name": "width",
                    "orig": "width",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "bbox",
                  "crs",
                  "format",
                  "height",
                  "layer",
                  "request",
                  "service",
                  "version",
                  "width"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/map/wfs",
              "segments": [
                {
                  "lit": "map"
                },
                {
                  "lit": "wfs"
                }
              ],
              "parts": [
                "map",
                "wfs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "bbox",
                    "orig": "bbox",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "count",
                    "orig": "count",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 100
                  },
                  {
                    "name": "outputformat",
                    "orig": "outputformat",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "application/json"
                  },
                  {
                    "name": "request",
                    "orig": "request",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "service",
                    "orig": "service",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "WFS"
                  },
                  {
                    "name": "srsname",
                    "orig": "srsname",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "EPSG:4326"
                  },
                  {
                    "name": "typename",
                    "orig": "typename",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "version",
                    "orig": "version",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "2.0.0"
                  }
                ]
              },
              "select": {
                "exist": [
                  "bbox",
                  "count",
                  "outputformat",
                  "request",
                  "service",
                  "srsname",
                  "typename",
                  "version"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

