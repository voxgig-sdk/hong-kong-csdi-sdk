# HongKongCsdi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module HongKongCsdiFeatures
  def self.make_feature(name)
    case name
    when "base"
      HongKongCsdiBaseFeature.new
    when "test"
      HongKongCsdiTestFeature.new
    else
      HongKongCsdiBaseFeature.new
    end
  end
end
