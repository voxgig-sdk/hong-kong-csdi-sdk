# HongKongCsdi SDK exists test

require "minitest/autorun"
require_relative "../HongKongCsdi_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = HongKongCsdiSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
