package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDatasetEntityFunc func(client *HongKongCsdiSDK, entopts map[string]any) HongKongCsdiEntity

var NewOgcServiceEntityFunc func(client *HongKongCsdiSDK, entopts map[string]any) HongKongCsdiEntity

