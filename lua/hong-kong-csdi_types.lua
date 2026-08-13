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
---@field id? string

---@class DatasetListMatch
---@field apiCallCount? number
---@field apiEndpoints? table
---@field apiServiceCalls? number
---@field category? string
---@field datasetDownloads? number
---@field description? string
---@field downloadCount? number
---@field formats? table
---@field id? string
---@field keywords? table
---@field lastUpdated? string
---@field license? string
---@field provider? string
---@field publishedDate? string
---@field spatialExtent? table
---@field theme? string
---@field title? string
---@field totalDatasets? number
---@field viewCount? number
---@field year? number

---@class OgcService

---@class OgcServiceLoadMatch

local M = {}

return M
