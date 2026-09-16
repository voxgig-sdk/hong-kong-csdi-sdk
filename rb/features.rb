# HongKongCsdi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module HongKongCsdiFeatures
  def self.make_feature(name)
    case name
    when "base"
      HongKongCsdiBaseFeature.new
    when "ratelimit"
      HongKongCsdiRatelimitFeature.new
    when "retry"
      HongKongCsdiRetryFeature.new
    when "test"
      HongKongCsdiTestFeature.new
    when "timeout"
      HongKongCsdiTimeoutFeature.new
    else
      HongKongCsdiBaseFeature.new
    end
  end
end
