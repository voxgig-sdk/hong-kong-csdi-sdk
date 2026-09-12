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
			"slug": "hong-kong-csdi",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"short": "Number of API calls made for this dataset",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "apiEndpoints",
						"short": "Available API endpoints for this dataset",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "apiServiceCalls",
						"short": "Total API service calls in the specified year",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "category",
						"short": "Category of the dataset",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "datasetDownloads",
						"short": "Total dataset downloads in the specified year",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"short": "Detailed description of the dataset",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "downloadCount",
						"short": "Number of times the dataset has been downloaded",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "formats",
						"short": "Available formats for the dataset",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the dataset",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "keywords",
						"short": "Keywords associated with the dataset",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "lastUpdated",
						"short": "Date when the dataset was last updated",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "license",
						"short": "License information for the dataset",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"short": "Data provider organization",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "publishedDate",
						"short": "Date when the dataset was published",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "spatialExtent",
						"short": "Spatial extent of the dataset",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "theme",
						"short": "Framework Spatial Data Theme",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "Title of the dataset",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalDatasets",
						"short": "Total number of datasets available",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "viewCount",
						"short": "Number of times the dataset has been viewed",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "year",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "datasets",
									},
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
								"parts": []any{
									"datasets",
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
								"rename": map[string]any{
									"param": map[string]any{
										"datasetId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "download",
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
								"parts": []any{
									"datasets",
									"{id}",
									"download",
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
								"rename": map[string]any{
									"param": map[string]any{
										"datasetId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"datasets",
									"{id}",
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
								"segments": []any{
									map[string]any{
										"lit": "statistics",
									},
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
								"parts": []any{
									"statistics",
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
								"segments": []any{
									map[string]any{
										"lit": "map",
									},
									map[string]any{
										"lit": "wms",
									},
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
								"parts": []any{
									"map",
									"wms",
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
								"segments": []any{
									map[string]any{
										"lit": "map",
									},
									map[string]any{
										"lit": "wfs",
									},
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
								"parts": []any{
									"map",
									"wfs",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
