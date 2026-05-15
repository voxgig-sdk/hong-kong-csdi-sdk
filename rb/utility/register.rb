# HongKongCsdi SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

HongKongCsdiUtility.registrar = ->(u) {
  u.clean = HongKongCsdiUtilities::Clean
  u.done = HongKongCsdiUtilities::Done
  u.make_error = HongKongCsdiUtilities::MakeError
  u.feature_add = HongKongCsdiUtilities::FeatureAdd
  u.feature_hook = HongKongCsdiUtilities::FeatureHook
  u.feature_init = HongKongCsdiUtilities::FeatureInit
  u.fetcher = HongKongCsdiUtilities::Fetcher
  u.make_fetch_def = HongKongCsdiUtilities::MakeFetchDef
  u.make_context = HongKongCsdiUtilities::MakeContext
  u.make_options = HongKongCsdiUtilities::MakeOptions
  u.make_request = HongKongCsdiUtilities::MakeRequest
  u.make_response = HongKongCsdiUtilities::MakeResponse
  u.make_result = HongKongCsdiUtilities::MakeResult
  u.make_point = HongKongCsdiUtilities::MakePoint
  u.make_spec = HongKongCsdiUtilities::MakeSpec
  u.make_url = HongKongCsdiUtilities::MakeUrl
  u.param = HongKongCsdiUtilities::Param
  u.prepare_auth = HongKongCsdiUtilities::PrepareAuth
  u.prepare_body = HongKongCsdiUtilities::PrepareBody
  u.prepare_headers = HongKongCsdiUtilities::PrepareHeaders
  u.prepare_method = HongKongCsdiUtilities::PrepareMethod
  u.prepare_params = HongKongCsdiUtilities::PrepareParams
  u.prepare_path = HongKongCsdiUtilities::PreparePath
  u.prepare_query = HongKongCsdiUtilities::PrepareQuery
  u.result_basic = HongKongCsdiUtilities::ResultBasic
  u.result_body = HongKongCsdiUtilities::ResultBody
  u.result_headers = HongKongCsdiUtilities::ResultHeaders
  u.transform_request = HongKongCsdiUtilities::TransformRequest
  u.transform_response = HongKongCsdiUtilities::TransformResponse
}
