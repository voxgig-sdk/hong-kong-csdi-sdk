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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://portal.csdi.gov.hk/api",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-API-Key",
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
						"title": "Api Call Count",
						"type": "`$INTEGER`",
						"short": "Number of API calls made for this dataset",
					},
					map[string]any{
						"name": "apiEndpoints",
						"title": "Api Endpoints",
						"type": "`$OBJECT`",
						"short": "Available API endpoints for this dataset",
					},
					map[string]any{
						"name": "apiServiceCalls",
						"title": "Api Service Calls",
						"type": "`$NUMBER`",
						"short": "Total API service calls in the specified year",
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"short": "Category of the dataset",
					},
					map[string]any{
						"name": "datasetDownloads",
						"title": "Dataset Downloads",
						"type": "`$NUMBER`",
						"short": "Total dataset downloads in the specified year",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
						"short": "Detailed description of the dataset",
					},
					map[string]any{
						"name": "downloadCount",
						"title": "Download Count",
						"type": "`$INTEGER`",
						"short": "Number of times the dataset has been downloaded",
					},
					map[string]any{
						"name": "formats",
						"title": "Formats",
						"type": "`$ARRAY`",
						"short": "Available formats for the dataset",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the dataset",
					},
					map[string]any{
						"name": "keywords",
						"title": "Keywords",
						"type": "`$ARRAY`",
						"short": "Keywords associated with the dataset",
					},
					map[string]any{
						"name": "lastUpdated",
						"title": "Last Updated",
						"type": "`$STRING`",
						"short": "Date when the dataset was last updated",
						"format": "date-time",
					},
					map[string]any{
						"name": "license",
						"title": "License",
						"type": "`$STRING`",
						"short": "License information for the dataset",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$STRING`",
						"short": "Data provider organization",
					},
					map[string]any{
						"name": "publishedDate",
						"title": "Published Date",
						"type": "`$STRING`",
						"short": "Date when the dataset was published",
						"format": "date-time",
					},
					map[string]any{
						"name": "spatialExtent",
						"title": "Spatial Extent",
						"type": "`$OBJECT`",
						"short": "Spatial extent of the dataset",
					},
					map[string]any{
						"name": "theme",
						"title": "Theme",
						"type": "`$STRING`",
						"short": "Framework Spatial Data Theme",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
						"short": "Title of the dataset",
					},
					map[string]any{
						"name": "totalDatasets",
						"title": "Total Datasets",
						"type": "`$INTEGER`",
						"short": "Total number of datasets available",
					},
					map[string]any{
						"name": "viewCount",
						"title": "View Count",
						"type": "`$INTEGER`",
						"short": "Number of times the dataset has been viewed",
					},
					map[string]any{
						"name": "year",
						"title": "Year",
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
								"kind": "http",
								"method": "GET",
								"orig": "/datasets",
								"segments": []any{
									map[string]any{
										"lit": "datasets",
									},
								},
								"parts": []any{
									"datasets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.datasets`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "new",
										},
										map[string]any{
											"name": "theme",
											"orig": "theme",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/datasets/{datasetId}/download",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
									},
								},
								"select": map[string]any{
									"$action": "download",
									"exist": []any{
										"format",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/datasets/{datasetId}",
								"segments": []any{
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"datasets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"datasetId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/statistics",
								"segments": []any{
									map[string]any{
										"lit": "statistics",
									},
								},
								"parts": []any{
									"statistics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "year",
											"orig": "year",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 2025,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"year",
									},
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
								"parts": []any{
									"map",
									"wms",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "bbox",
											"orig": "bbox",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "crs",
											"orig": "crs",
											"type": "`$STRING`",
											"kind": "query",
											"example": "EPSG:4326",
										},
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "layer",
											"orig": "layer",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "request",
											"orig": "request",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "service",
											"orig": "service",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "WMS",
										},
										map[string]any{
											"name": "version",
											"orig": "version",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "1.3.0",
										},
										map[string]any{
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"map",
									"wfs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "bbox",
											"orig": "bbox",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "outputformat",
											"orig": "outputformat",
											"type": "`$STRING`",
											"kind": "query",
											"example": "application/json",
										},
										map[string]any{
											"name": "request",
											"orig": "request",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "service",
											"orig": "service",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "WFS",
										},
										map[string]any{
											"name": "srsname",
											"orig": "srsname",
											"type": "`$STRING`",
											"kind": "query",
											"example": "EPSG:4326",
										},
										map[string]any{
											"name": "typename",
											"orig": "typename",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "version",
											"orig": "version",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2.0.0",
										},
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
