# HongKongCsdi SDK utility: feature_add
module HongKongCsdiUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
