// Typed models for the HongKongCsdi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Dataset {
  api_call_count?: number
  api_endpoint?: Record<string, any>
  api_service_call?: number
  category?: string
  dataset_download?: number
  description: string
  download_count?: number
  format?: any[]
  id: string
  keyword?: any[]
  last_updated?: string
  license?: string
  provider?: string
  published_date?: string
  spatial_extent?: Record<string, any>
  theme?: string
  title: string
  total_dataset?: number
  view_count?: number
  year?: number
}

export interface DatasetLoadMatch {
  id?: string
}

export interface DatasetListMatch {
  api_call_count?: number
  api_endpoint?: Record<string, any>
  api_service_call?: number
  category?: string
  dataset_download?: number
  description?: string
  download_count?: number
  format?: any[]
  id?: string
  keyword?: any[]
  last_updated?: string
  license?: string
  provider?: string
  published_date?: string
  spatial_extent?: Record<string, any>
  theme?: string
  title?: string
  total_dataset?: number
  view_count?: number
  year?: number
}

export interface OgcService {
}

export interface OgcServiceLoadMatch {
}

