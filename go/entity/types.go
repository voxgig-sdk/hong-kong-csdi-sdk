// Typed models for the HongKongCsdi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Dataset is the typed data model for the dataset entity.
type Dataset struct {
	ApiCallCount *int `json:"api_call_count,omitempty"`
	ApiEndpoint *map[string]any `json:"api_endpoint,omitempty"`
	ApiServiceCall *float64 `json:"api_service_call,omitempty"`
	Category *string `json:"category,omitempty"`
	DatasetDownload *float64 `json:"dataset_download,omitempty"`
	Description string `json:"description"`
	DownloadCount *int `json:"download_count,omitempty"`
	Format *[]any `json:"format,omitempty"`
	Id string `json:"id"`
	Keyword *[]any `json:"keyword,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	License *string `json:"license,omitempty"`
	Provider *string `json:"provider,omitempty"`
	PublishedDate *string `json:"published_date,omitempty"`
	SpatialExtent *map[string]any `json:"spatial_extent,omitempty"`
	Theme *string `json:"theme,omitempty"`
	Title string `json:"title"`
	TotalDataset *int `json:"total_dataset,omitempty"`
	ViewCount *int `json:"view_count,omitempty"`
	Year *int `json:"year,omitempty"`
}

// DatasetLoadMatch is the typed request payload for Dataset.LoadTyped.
type DatasetLoadMatch struct {
	Id string `json:"id"`
}

// DatasetListMatch is the typed request payload for Dataset.ListTyped.
type DatasetListMatch struct {
	ApiCallCount *int `json:"api_call_count,omitempty"`
	ApiEndpoint *map[string]any `json:"api_endpoint,omitempty"`
	ApiServiceCall *float64 `json:"api_service_call,omitempty"`
	Category *string `json:"category,omitempty"`
	DatasetDownload *float64 `json:"dataset_download,omitempty"`
	Description *string `json:"description,omitempty"`
	DownloadCount *int `json:"download_count,omitempty"`
	Format *[]any `json:"format,omitempty"`
	Id *string `json:"id,omitempty"`
	Keyword *[]any `json:"keyword,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	License *string `json:"license,omitempty"`
	Provider *string `json:"provider,omitempty"`
	PublishedDate *string `json:"published_date,omitempty"`
	SpatialExtent *map[string]any `json:"spatial_extent,omitempty"`
	Theme *string `json:"theme,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalDataset *int `json:"total_dataset,omitempty"`
	ViewCount *int `json:"view_count,omitempty"`
	Year *int `json:"year,omitempty"`
}

// OgcService is the typed data model for the ogc_service entity.
type OgcService struct {
}

// OgcServiceLoadMatch is the typed request payload for OgcService.LoadTyped.
type OgcServiceLoadMatch struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
