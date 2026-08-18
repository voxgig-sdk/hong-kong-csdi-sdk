// Typed models for the HongKongCsdi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Dataset {
  apiCallCount?: number
  apiEndpoints?: Record<string, any>
  apiServiceCalls?: number
  category?: string
  datasetDownloads?: number
  description: string
  downloadCount?: number
  formats?: any[]
  id: string
  keywords?: any[]
  lastUpdated?: string
  license?: string
  provider?: string
  publishedDate?: string
  spatialExtent?: Record<string, any>
  theme?: string
  title: string
  totalDatasets?: number
  viewCount?: number
  year?: number
}

export interface DatasetLoadMatch {
  id: string

  // Selects a custom action instead of the plain load:
  //   'download'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DatasetListMatch {
  apiCallCount?: number
  apiEndpoints?: Record<string, any>
  apiServiceCalls?: number
  category?: string
  datasetDownloads?: number
  description?: string
  downloadCount?: number
  formats?: any[]
  id?: string
  keywords?: any[]
  lastUpdated?: string
  license?: string
  provider?: string
  publishedDate?: string
  spatialExtent?: Record<string, any>
  theme?: string
  title?: string
  totalDatasets?: number
  viewCount?: number
  year?: number
}

export interface OgcService {
}

export interface OgcServiceLoadMatch {
}

