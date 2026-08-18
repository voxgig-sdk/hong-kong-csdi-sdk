package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HongKongCsdi",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://portal.csdi.gov.hk/api",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"dataset": map[string]any{},
				"ogc_service": map[string]any{},
			},
		},
		"entity": map[string]any{
			"dataset": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiCallCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "apiEndpoints",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "apiServiceCalls",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "datasetDownloads",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "downloadCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "formats",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "keywords",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "lastUpdated",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "license",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "publishedDate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "spatialExtent",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "theme",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalDatasets",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "viewCount",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "year",
						"type": "`$INTEGER`",
					},
				},
				"name": "dataset",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "new",
											"kind": "query",
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "theme",
											"orig": "theme",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/datasets",
								"parts": []any{
									"datasets",
								},
								"select": map[string]any{
									"exist": []any{
										"category",
										"limit",
										"offset",
										"search",
										"sort_by",
										"theme",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.datasets`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "dataset_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/datasets/{datasetId}/download",
								"parts": []any{
									"datasets",
									"{id}",
									"download",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"datasetId": "id",
									},
								},
								"select": map[string]any{
									"$action": "download",
									"exist": []any{
										"format",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "dataset_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/datasets/{datasetId}",
								"parts": []any{
									"datasets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"datasetId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 2025,
											"kind": "query",
											"name": "year",
											"orig": "year",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/statistics",
								"parts": []any{
									"statistics",
								},
								"select": map[string]any{
									"exist": []any{
										"year",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ogc_service": map[string]any{
				"fields": []any{},
				"name": "ogc_service",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "bbox",
											"orig": "bbox",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "EPSG:4326",
											"kind": "query",
											"name": "crs",
											"orig": "crs",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "layer",
											"orig": "layer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "request",
											"orig": "request",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "WMS",
											"kind": "query",
											"name": "service",
											"orig": "service",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "1.3.0",
											"kind": "query",
											"name": "version",
											"orig": "version",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/map/wms",
								"parts": []any{
									"map",
									"wms",
								},
								"select": map[string]any{
									"exist": []any{
										"bbox",
										"crs",
										"format",
										"height",
										"layer",
										"request",
										"service",
										"version",
										"width",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "bbox",
											"orig": "bbox",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "application/json",
											"kind": "query",
											"name": "outputformat",
											"orig": "outputformat",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "request",
											"orig": "request",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "WFS",
											"kind": "query",
											"name": "service",
											"orig": "service",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "EPSG:4326",
											"kind": "query",
											"name": "srsname",
											"orig": "srsname",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "typename",
											"orig": "typename",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2.0.0",
											"kind": "query",
											"name": "version",
											"orig": "version",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/map/wfs",
								"parts": []any{
									"map",
									"wfs",
								},
								"select": map[string]any{
									"exist": []any{
										"bbox",
										"count",
										"outputformat",
										"request",
										"service",
										"srsname",
										"typename",
										"version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
