# HongKongCsdi SDK utility: make_context

from projectname_sdk.core.context import HongKongCsdiContext


def make_context_util(ctxmap, basectx):
    return HongKongCsdiContext(ctxmap, basectx)
