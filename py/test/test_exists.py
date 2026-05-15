# ProjectName SDK exists test

import pytest
from hongkongcsdi_sdk import HongKongCsdiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HongKongCsdiSDK.test(None, None)
        assert testsdk is not None
