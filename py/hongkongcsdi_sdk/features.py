# HongKongCsdi SDK feature factory

from hongkongcsdi_sdk.feature.base_feature import HongKongCsdiBaseFeature
from hongkongcsdi_sdk.feature.ratelimit_feature import HongKongCsdiRatelimitFeature
from hongkongcsdi_sdk.feature.retry_feature import HongKongCsdiRetryFeature
from hongkongcsdi_sdk.feature.test_feature import HongKongCsdiTestFeature
from hongkongcsdi_sdk.feature.timeout_feature import HongKongCsdiTimeoutFeature


_FEATURES = {
    "base": lambda: HongKongCsdiBaseFeature(),
    "ratelimit": lambda: HongKongCsdiRatelimitFeature(),
    "retry": lambda: HongKongCsdiRetryFeature(),
    "test": lambda: HongKongCsdiTestFeature(),
    "timeout": lambda: HongKongCsdiTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
