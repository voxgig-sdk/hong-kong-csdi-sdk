# HongKongCsdi SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "HongKongCsdi",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://portal.csdi.gov.hk/api",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "dataset": {},
                "ogc_service": {},
            },
        },
        "entity": {
      "dataset": {
        "fields": [
          {
            "name": "apiCallCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "apiEndpoints",
            "type": "`$OBJECT`",
          },
          {
            "name": "apiServiceCalls",
            "type": "`$NUMBER`",
          },
          {
            "name": "category",
            "type": "`$STRING`",
          },
          {
            "name": "datasetDownloads",
            "type": "`$NUMBER`",
          },
          {
            "name": "description",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "downloadCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "formats",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "keywords",
            "type": "`$ARRAY`",
          },
          {
            "name": "lastUpdated",
            "type": "`$STRING`",
          },
          {
            "name": "license",
            "type": "`$STRING`",
          },
          {
            "name": "provider",
            "type": "`$STRING`",
          },
          {
            "name": "publishedDate",
            "type": "`$STRING`",
          },
          {
            "name": "spatialExtent",
            "type": "`$OBJECT`",
          },
          {
            "name": "theme",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "totalDatasets",
            "type": "`$INTEGER`",
          },
          {
            "name": "viewCount",
            "type": "`$INTEGER`",
          },
          {
            "name": "year",
            "type": "`$INTEGER`",
          },
        ],
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "search",
                      "orig": "search",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "new",
                      "kind": "query",
                      "name": "sort_by",
                      "orig": "sort_by",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "theme",
                      "orig": "theme",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/datasets",
                "parts": [
                  "datasets",
                ],
                "select": {
                  "exist": [
                    "category",
                    "limit",
                    "offset",
                    "search",
                    "sort_by",
                    "theme",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.datasets`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/datasets/{datasetId}/download",
                "parts": [
                  "datasets",
                  "{id}",
                  "download",
                ],
                "rename": {
                  "param": {
                    "datasetId": "id",
                  },
                },
                "select": {
                  "$action": "download",
                  "exist": [
                    "format",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "dataset_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/datasets/{datasetId}",
                "parts": [
                  "datasets",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "datasetId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "example": 2025,
                      "kind": "query",
                      "name": "year",
                      "orig": "year",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/statistics",
                "parts": [
                  "statistics",
                ],
                "select": {
                  "exist": [
                    "year",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": "EPSG:4326",
                      "kind": "query",
                      "name": "crs",
                      "orig": "crs",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "layer",
                      "orig": "layer",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "request",
                      "orig": "request",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "WMS",
                      "kind": "query",
                      "name": "service",
                      "orig": "service",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "1.3.0",
                      "kind": "query",
                      "name": "version",
                      "orig": "version",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/map/wms",
                "parts": [
                  "map",
                  "wms",
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
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "bbox",
                      "orig": "bbox",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 100,
                      "kind": "query",
                      "name": "count",
                      "orig": "count",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "application/json",
                      "kind": "query",
                      "name": "outputformat",
                      "orig": "outputformat",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "request",
                      "orig": "request",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "WFS",
                      "kind": "query",
                      "name": "service",
                      "orig": "service",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "EPSG:4326",
                      "kind": "query",
                      "name": "srsname",
                      "orig": "srsname",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "typename",
                      "orig": "typename",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "2.0.0",
                      "kind": "query",
                      "name": "version",
                      "orig": "version",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/map/wfs",
                "parts": [
                  "map",
                  "wfs",
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
                    "version",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
