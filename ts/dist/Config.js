"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'HongKongCsdi',
        slug: "hong-kong-csdi",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
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
        retry: {
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
        test: {
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
        timeout: {
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
    };
    options = {
        base: "https://portal.csdi.gov.hk/api",
        auth: {
            prefix: '',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            dataset: {},
            ogc_service: {},
        }
    };
    entity = {
        "dataset": {
            "fields": [
                {
                    "name": "apiCallCount",
                    "short": "Number of API calls made for this dataset",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "apiEndpoints",
                    "short": "Available API endpoints for this dataset",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "apiServiceCalls",
                    "short": "Total API service calls in the specified year",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "category",
                    "short": "Category of the dataset",
                    "type": "`$STRING`"
                },
                {
                    "name": "datasetDownloads",
                    "short": "Total dataset downloads in the specified year",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "description",
                    "req": true,
                    "short": "Detailed description of the dataset",
                    "type": "`$STRING`"
                },
                {
                    "name": "downloadCount",
                    "short": "Number of times the dataset has been downloaded",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "formats",
                    "short": "Available formats for the dataset",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "Unique identifier for the dataset",
                    "type": "`$STRING`"
                },
                {
                    "name": "keywords",
                    "short": "Keywords associated with the dataset",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "date-time",
                    "name": "lastUpdated",
                    "short": "Date when the dataset was last updated",
                    "type": "`$STRING`"
                },
                {
                    "name": "license",
                    "short": "License information for the dataset",
                    "type": "`$STRING`"
                },
                {
                    "name": "provider",
                    "short": "Data provider organization",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "publishedDate",
                    "short": "Date when the dataset was published",
                    "type": "`$STRING`"
                },
                {
                    "name": "spatialExtent",
                    "short": "Spatial extent of the dataset",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "theme",
                    "short": "Framework Spatial Data Theme",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "req": true,
                    "short": "Title of the dataset",
                    "type": "`$STRING`"
                },
                {
                    "name": "totalDatasets",
                    "short": "Total number of datasets available",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "viewCount",
                    "short": "Number of times the dataset has been viewed",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "year",
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
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "category",
                                        "orig": "category",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "search",
                                        "orig": "search",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "new",
                                        "kind": "query",
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "theme",
                                        "orig": "theme",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/datasets",
                            "segments": [
                                {
                                    "lit": "datasets"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "category",
                                    "limit",
                                    "offset",
                                    "search",
                                    "sort_by",
                                    "theme"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.datasets`"
                            },
                            "parts": [
                                "datasets"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "dataset_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/datasets/{datasetId}/download",
                            "rename": {
                                "param": {
                                    "datasetId": "id"
                                }
                            },
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
                            "select": {
                                "$action": "download",
                                "exist": [
                                    "format",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "datasets",
                                "{id}",
                                "download"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "dataset_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/datasets/{datasetId}",
                            "rename": {
                                "param": {
                                    "datasetId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "datasets"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "datasets",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": 2025,
                                        "kind": "query",
                                        "name": "year",
                                        "orig": "year",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/statistics",
                            "segments": [
                                {
                                    "lit": "statistics"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "year"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "statistics"
                            ]
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
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "bbox",
                                        "orig": "bbox",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "EPSG:4326",
                                        "kind": "query",
                                        "name": "crs",
                                        "orig": "crs",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "height",
                                        "orig": "height",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "layer",
                                        "orig": "layer",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "request",
                                        "orig": "request",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "WMS",
                                        "kind": "query",
                                        "name": "service",
                                        "orig": "service",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "1.3.0",
                                        "kind": "query",
                                        "name": "version",
                                        "orig": "version",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "width",
                                        "orig": "width",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
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
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "map",
                                "wms"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "bbox",
                                        "orig": "bbox",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "count",
                                        "orig": "count",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "application/json",
                                        "kind": "query",
                                        "name": "outputformat",
                                        "orig": "outputformat",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "request",
                                        "orig": "request",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "WFS",
                                        "kind": "query",
                                        "name": "service",
                                        "orig": "service",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "EPSG:4326",
                                        "kind": "query",
                                        "name": "srsname",
                                        "orig": "srsname",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "typename",
                                        "orig": "typename",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2.0.0",
                                        "kind": "query",
                                        "name": "version",
                                        "orig": "version",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
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
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "map",
                                "wfs"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map