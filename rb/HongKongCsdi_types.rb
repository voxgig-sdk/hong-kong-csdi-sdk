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
#   @return [String, nil]
#
# @!attribute [rw] downloadCount
#   @return [Integer, nil]
#
# @!attribute [rw] formats
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
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
#   @return [String, nil]
#
# @!attribute [rw] totalDatasets
#   @return [Integer, nil]
#
# @!attribute [rw] viewCount
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
DatasetListMatch = Struct.new(
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

# OgcService entity data model.
class OgcService
end

# Request payload for OgcService#load.
class OgcServiceLoadMatch
end

