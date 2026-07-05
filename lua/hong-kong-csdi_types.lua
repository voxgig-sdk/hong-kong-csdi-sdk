-- Typed models for the HongKongCsdi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Dataset
---@field api_call_count? number
---@field api_endpoint? table
---@field api_service_call? number
---@field category? string
---@field dataset_download? number
---@field description string
---@field download_count? number
---@field format? table
---@field id string
---@field keyword? table
---@field last_updated? string
---@field license? string
---@field provider? string
---@field published_date? string
---@field spatial_extent? table
---@field theme? string
---@field title string
---@field total_dataset? number
---@field view_count? number
---@field year? number

---@class DatasetLoadMatch
---@field id string

---@class DatasetListMatch
---@field api_call_count? number
---@field api_endpoint? table
---@field api_service_call? number
---@field category? string
---@field dataset_download? number
---@field description? string
---@field download_count? number
---@field format? table
---@field id? string
---@field keyword? table
---@field last_updated? string
---@field license? string
---@field provider? string
---@field published_date? string
---@field spatial_extent? table
---@field theme? string
---@field title? string
---@field total_dataset? number
---@field view_count? number
---@field year? number

---@class OgcService

---@class OgcServiceLoadMatch

local M = {}

return M
