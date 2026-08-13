# HongKongCsdi SDK feature factory

from hongkongcsdi_sdk.feature.base_feature import HongKongCsdiBaseFeature
from hongkongcsdi_sdk.feature.test_feature import HongKongCsdiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: HongKongCsdiBaseFeature(),
        "test": lambda: HongKongCsdiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
