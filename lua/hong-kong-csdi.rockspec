package = "voxgig-sdk-hong-kong-csdi"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/hong-kong-csdi-sdk.git"
}
description = {
  summary = "HongKongCsdi SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["hong-kong-csdi_sdk"] = "hong-kong-csdi_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
