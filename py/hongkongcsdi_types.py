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
    api_call_count: int
    api_endpoint: dict
    api_service_call: float
    category: str
    dataset_download: float
    download_count: int
    format: list
    keyword: list
    last_updated: str
    license: str
    provider: str
    published_date: str
    spatial_extent: dict
    theme: str
    total_dataset: int
    view_count: int
    year: int


class DatasetLoadMatch(TypedDict):
    id: str


class DatasetListMatch(TypedDict, total=False):
    api_call_count: int
    api_endpoint: dict
    api_service_call: float
    category: str
    dataset_download: float
    description: str
    download_count: int
    format: list
    id: str
    keyword: list
    last_updated: str
    license: str
    provider: str
    published_date: str
    spatial_extent: dict
    theme: str
    title: str
    total_dataset: int
    view_count: int
    year: int


class OgcService(TypedDict):
    pass


class OgcServiceLoadMatch(TypedDict):
    pass
