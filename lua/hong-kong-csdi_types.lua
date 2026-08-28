-- Typed models for the HongKongCsdi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Dataset
---@field apiCallCount? number
---@field apiEndpoints? table
---@field apiServiceCalls? number
---@field category? string
---@field datasetDownloads? number
---@field description string
---@field downloadCount? number
---@field formats? table
---@field id string
---@field keywords? table
---@field lastUpdated? string
---@field license? string
---@field provider? string
---@field publishedDate? string
---@field spatialExtent? table
---@field theme? string
---@field title string
---@field totalDatasets? number
---@field viewCount? number
---@field year? number

---@class DatasetLoadMatch
---@field id string

---@class DatasetListMatch
---@field category? string
---@field limit? number
---@field offset? number
---@field search? string
---@field sort_by? string
---@field theme? string

---@class OgcService

---@class OgcServiceLoadMatch
---@field bbox? string
---@field crs? string
---@field format? string
---@field height? number
---@field layer? string
---@field request string
---@field service string
---@field version string
---@field width? number
---@field count? number
---@field outputformat? string
---@field srsname? string
---@field typename? string

local M = {}

return M
