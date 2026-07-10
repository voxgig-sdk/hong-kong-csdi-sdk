-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "HongKongCsdi",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://portal.csdi.gov.hk/api",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["dataset"] = {},
        ["ogc_service"] = {},
      },
    },
    entity = {
      ["dataset"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "api_call_count",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "api_endpoint",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "api_service_call",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "category",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "dataset_download",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "description",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "download_count",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "format",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "keyword",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "last_updated",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "license",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "provider",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "published_date",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "spatial_extent",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "theme",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "title",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 16,
          },
          {
            ["active"] = true,
            ["name"] = "total_dataset",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 17,
          },
          {
            ["active"] = true,
            ["name"] = "view_count",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 18,
          },
          {
            ["active"] = true,
            ["name"] = "year",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 19,
          },
        },
        ["name"] = "dataset",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 50,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "search",
                      ["orig"] = "search",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "new",
                      ["kind"] = "query",
                      ["name"] = "sort_by",
                      ["orig"] = "sort_by",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "theme",
                      ["orig"] = "theme",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/datasets",
                ["parts"] = {
                  "datasets",
                },
                ["select"] = {
                  ["exist"] = {
                    "category",
                    "limit",
                    "offset",
                    "search",
                    "sort_by",
                    "theme",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "dataset_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/datasets/{datasetId}/download",
                ["parts"] = {
                  "datasets",
                  "{id}",
                  "download",
                },
                ["rename"] = {
                  ["param"] = {
                    ["datasetId"] = "id",
                  },
                },
                ["select"] = {
                  ["$action"] = "download",
                  ["exist"] = {
                    "format",
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "dataset_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/datasets/{datasetId}",
                ["parts"] = {
                  "datasets",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["datasetId"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 1,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = 2025,
                      ["kind"] = "query",
                      ["name"] = "year",
                      ["orig"] = "year",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/statistics",
                ["parts"] = {
                  "statistics",
                },
                ["select"] = {
                  ["exist"] = {
                    "year",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 2,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["ogc_service"] = {
        ["fields"] = {},
        ["name"] = "ogc_service",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "bbox",
                      ["orig"] = "bbox",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "EPSG:4326",
                      ["kind"] = "query",
                      ["name"] = "crs",
                      ["orig"] = "crs",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "layer",
                      ["orig"] = "layer",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "request",
                      ["orig"] = "request",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "WMS",
                      ["kind"] = "query",
                      ["name"] = "service",
                      ["orig"] = "service",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "1.3.0",
                      ["kind"] = "query",
                      ["name"] = "version",
                      ["orig"] = "version",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/map/wms",
                ["parts"] = {
                  "map",
                  "wms",
                },
                ["select"] = {
                  ["exist"] = {
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "bbox",
                      ["orig"] = "bbox",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 100,
                      ["kind"] = "query",
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "application/json",
                      ["kind"] = "query",
                      ["name"] = "outputformat",
                      ["orig"] = "outputformat",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "request",
                      ["orig"] = "request",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "WFS",
                      ["kind"] = "query",
                      ["name"] = "service",
                      ["orig"] = "service",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "EPSG:4326",
                      ["kind"] = "query",
                      ["name"] = "srsname",
                      ["orig"] = "srsname",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "typename",
                      ["orig"] = "typename",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "2.0.0",
                      ["kind"] = "query",
                      ["name"] = "version",
                      ["orig"] = "version",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/map/wfs",
                ["parts"] = {
                  "map",
                  "wfs",
                },
                ["select"] = {
                  ["exist"] = {
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 1,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
