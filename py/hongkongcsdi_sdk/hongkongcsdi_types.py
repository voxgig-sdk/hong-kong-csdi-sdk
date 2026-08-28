# Typed models for the HongKongCsdi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class DatasetRequired(TypedDict):
    description: str
    id: str
    title: str


class Dataset(DatasetRequired, total=False):
    apiCallCount: int
    apiEndpoints: dict
    apiServiceCalls: float
    category: str
    datasetDownloads: float
    downloadCount: int
    formats: list
    keywords: list
    lastUpdated: str
    license: str
    provider: str
    publishedDate: str
    spatialExtent: dict
    theme: str
    totalDatasets: int
    viewCount: int
    year: int


class DatasetLoadMatch(TypedDict):
    id: str


class DatasetListMatch(TypedDict, total=False):
    category: str
    limit: int
    offset: int
    search: str
    sort_by: str
    theme: str


class OgcService(TypedDict):
    pass


class OgcServiceLoadMatchRequired(TypedDict):
    request: str
    service: str
    version: str


class OgcServiceLoadMatch(OgcServiceLoadMatchRequired, total=False):
    bbox: str
    crs: str
    format: str
    height: int
    layer: str
    width: int
    count: int
    outputformat: str
    srsname: str
    typename: str
