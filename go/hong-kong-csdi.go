package voxgighongkongcsdisdk

import (
	"github.com/voxgig-sdk/hong-kong-csdi-sdk/go/core"
	"github.com/voxgig-sdk/hong-kong-csdi-sdk/go/entity"
	"github.com/voxgig-sdk/hong-kong-csdi-sdk/go/feature"
	_ "github.com/voxgig-sdk/hong-kong-csdi-sdk/go/utility"
)

// Type aliases preserve external API.
type HongKongCsdiSDK = core.HongKongCsdiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HongKongCsdiEntity = core.HongKongCsdiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HongKongCsdiError = core.HongKongCsdiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDatasetEntityFunc = func(client *core.HongKongCsdiSDK, entopts map[string]any) core.HongKongCsdiEntity {
		return entity.NewDatasetEntity(client, entopts)
	}
	core.NewOgcServiceEntityFunc = func(client *core.HongKongCsdiSDK, entopts map[string]any) core.HongKongCsdiEntity {
		return entity.NewOgcServiceEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHongKongCsdiSDK = core.NewHongKongCsdiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
