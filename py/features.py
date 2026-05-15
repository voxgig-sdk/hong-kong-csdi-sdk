# HongKongCsdi SDK feature factory

from feature.base_feature import HongKongCsdiBaseFeature
from feature.test_feature import HongKongCsdiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: HongKongCsdiBaseFeature(),
        "test": lambda: HongKongCsdiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
