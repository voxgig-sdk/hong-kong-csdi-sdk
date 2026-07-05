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
# @!attribute [rw] api_call_count
#   @return [Integer, nil]
#
# @!attribute [rw] api_endpoint
#   @return [Hash, nil]
#
# @!attribute [rw] api_service_call
#   @return [Float, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] dataset_download
#   @return [Float, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] download_count
#   @return [Integer, nil]
#
# @!attribute [rw] format
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] keyword
#   @return [Array, nil]
#
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] license
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] published_date
#   @return [String, nil]
#
# @!attribute [rw] spatial_extent
#   @return [Hash, nil]
#
# @!attribute [rw] theme
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] total_dataset
#   @return [Integer, nil]
#
# @!attribute [rw] view_count
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Dataset = Struct.new(
  :api_call_count,
  :api_endpoint,
  :api_service_call,
  :category,
  :dataset_download,
  :description,
  :download_count,
  :format,
  :id,
  :keyword,
  :last_updated,
  :license,
  :provider,
  :published_date,
  :spatial_extent,
  :theme,
  :title,
  :total_dataset,
  :view_count,
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
# @!attribute [rw] api_call_count
#   @return [Integer, nil]
#
# @!attribute [rw] api_endpoint
#   @return [Hash, nil]
#
# @!attribute [rw] api_service_call
#   @return [Float, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] dataset_download
#   @return [Float, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] download_count
#   @return [Integer, nil]
#
# @!attribute [rw] format
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] keyword
#   @return [Array, nil]
#
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] license
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] published_date
#   @return [String, nil]
#
# @!attribute [rw] spatial_extent
#   @return [Hash, nil]
#
# @!attribute [rw] theme
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] total_dataset
#   @return [Integer, nil]
#
# @!attribute [rw] view_count
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
DatasetListMatch = Struct.new(
  :api_call_count,
  :api_endpoint,
  :api_service_call,
  :category,
  :dataset_download,
  :description,
  :download_count,
  :format,
  :id,
  :keyword,
  :last_updated,
  :license,
  :provider,
  :published_date,
  :spatial_extent,
  :theme,
  :title,
  :total_dataset,
  :view_count,
  :year,
  keyword_init: true
)

# OgcService entity data model.
class OgcService
end

# Request payload for OgcService#load.
class OgcServiceLoadMatch
end

