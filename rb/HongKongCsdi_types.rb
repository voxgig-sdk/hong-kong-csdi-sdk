# frozen_string_literal: true

# Typed models for the HongKongCsdi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Dataset entity data model.
#
# @!attribute [rw] apiCallCount
#   @return [Integer, nil]
#
# @!attribute [rw] apiEndpoints
#   @return [Hash, nil]
#
# @!attribute [rw] apiServiceCalls
#   @return [Float, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] datasetDownloads
#   @return [Float, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] downloadCount
#   @return [Integer, nil]
#
# @!attribute [rw] formats
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] keywords
#   @return [Array, nil]
#
# @!attribute [rw] lastUpdated
#   @return [String, nil]
#
# @!attribute [rw] license
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] publishedDate
#   @return [String, nil]
#
# @!attribute [rw] spatialExtent
#   @return [Hash, nil]
#
# @!attribute [rw] theme
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] totalDatasets
#   @return [Integer, nil]
#
# @!attribute [rw] viewCount
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Dataset = Struct.new(
  :apiCallCount,
  :apiEndpoints,
  :apiServiceCalls,
  :category,
  :datasetDownloads,
  :description,
  :downloadCount,
  :formats,
  :id,
  :keywords,
  :lastUpdated,
  :license,
  :provider,
  :publishedDate,
  :spatialExtent,
  :theme,
  :title,
  :totalDatasets,
  :viewCount,
  :year,
  keyword_init: true
)

# Request payload for Dataset#load.
#
# @!attribute [rw] id
#   @return [String]
DatasetLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Dataset#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] theme
#   @return [String, nil]
DatasetListMatch = Struct.new(
  :category,
  :limit,
  :offset,
  :search,
  :sort_by,
  :theme,
  keyword_init: true
)

# OgcService entity data model.
class OgcService
end

# Request payload for OgcService#load.
#
# @!attribute [rw] bbox
#   @return [String, nil]
#
# @!attribute [rw] crs
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] layer
#   @return [String, nil]
#
# @!attribute [rw] request
#   @return [String]
#
# @!attribute [rw] service
#   @return [String]
#
# @!attribute [rw] version
#   @return [String]
#
# @!attribute [rw] width
#   @return [Integer, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] outputformat
#   @return [String, nil]
#
# @!attribute [rw] srsname
#   @return [String, nil]
#
# @!attribute [rw] typename
#   @return [String, nil]
OgcServiceLoadMatch = Struct.new(
  :bbox,
  :crs,
  :format,
  :height,
  :layer,
  :request,
  :service,
  :version,
  :width,
  :count,
  :outputformat,
  :srsname,
  :typename,
  keyword_init: true
)

