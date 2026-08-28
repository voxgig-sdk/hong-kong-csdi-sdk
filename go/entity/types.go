// Typed models for the HongKongCsdi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/hong-kong-csdi-sdk/go/core"
)

// Dataset is the typed data model for the dataset entity.
type Dataset struct {
	ApiCallCount *int `json:"apiCallCount,omitempty"`
	ApiEndpoints *map[string]any `json:"apiEndpoints,omitempty"`
	ApiServiceCalls *float64 `json:"apiServiceCalls,omitempty"`
	Category *string `json:"category,omitempty"`
	DatasetDownloads *float64 `json:"datasetDownloads,omitempty"`
	Description string `json:"description"`
	DownloadCount *int `json:"downloadCount,omitempty"`
	Formats *[]any `json:"formats,omitempty"`
	Id string `json:"id"`
	Keywords *[]any `json:"keywords,omitempty"`
	LastUpdated *string `json:"lastUpdated,omitempty"`
	License *string `json:"license,omitempty"`
	Provider *string `json:"provider,omitempty"`
	PublishedDate *string `json:"publishedDate,omitempty"`
	SpatialExtent *map[string]any `json:"spatialExtent,omitempty"`
	Theme *string `json:"theme,omitempty"`
	Title string `json:"title"`
	TotalDatasets *int `json:"totalDatasets,omitempty"`
	ViewCount *int `json:"viewCount,omitempty"`
	Year *int `json:"year,omitempty"`
}

// DatasetLoadMatch is the typed request payload for Dataset.LoadTyped.
type DatasetLoadMatch struct {
	Id string `json:"id"`
}

// DatasetListMatch is the typed request payload for Dataset.ListTyped.
type DatasetListMatch struct {
	Category *string `json:"category,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	Search *string `json:"search,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	Theme *string `json:"theme,omitempty"`
}

// OgcService is the typed data model for the ogc_service entity.
type OgcService struct {
}

// OgcServiceLoadMatch is the typed request payload for OgcService.LoadTyped.
type OgcServiceLoadMatch struct {
	Bbox *string `json:"bbox,omitempty"`
	Crs *string `json:"crs,omitempty"`
	Format *string `json:"format,omitempty"`
	Height *int `json:"height,omitempty"`
	Layer *string `json:"layer,omitempty"`
	Request string `json:"request"`
	Service string `json:"service"`
	Version string `json:"version"`
	Width *int `json:"width,omitempty"`
	Count *int `json:"count,omitempty"`
	Outputformat *string `json:"outputformat,omitempty"`
	Srsname *string `json:"srsname,omitempty"`
	Typename *string `json:"typename,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
