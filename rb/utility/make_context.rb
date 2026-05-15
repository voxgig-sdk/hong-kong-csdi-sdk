# HongKongCsdi SDK utility: make_context
require_relative '../core/context'
module HongKongCsdiUtilities
  MakeContext = ->(ctxmap, basectx) {
    HongKongCsdiContext.new(ctxmap, basectx)
  }
end
