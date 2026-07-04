# Typed models for the HongKongCsdi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Dataset:
    description: str
    id: str
    title: str
    api_call_count: Optional[int] = None
    api_endpoint: Optional[dict] = None
    api_service_call: Optional[float] = None
    category: Optional[str] = None
    dataset_download: Optional[float] = None
    download_count: Optional[int] = None
    format: Optional[list] = None
    keyword: Optional[list] = None
    last_updated: Optional[str] = None
    license: Optional[str] = None
    provider: Optional[str] = None
    published_date: Optional[str] = None
    spatial_extent: Optional[dict] = None
    theme: Optional[str] = None
    total_dataset: Optional[int] = None
    view_count: Optional[int] = None
    year: Optional[int] = None


@dataclass
class DatasetLoadMatch:
    id: str


@dataclass
class DatasetListMatch:
    api_call_count: Optional[int] = None
    api_endpoint: Optional[dict] = None
    api_service_call: Optional[float] = None
    category: Optional[str] = None
    dataset_download: Optional[float] = None
    description: Optional[str] = None
    download_count: Optional[int] = None
    format: Optional[list] = None
    id: Optional[str] = None
    keyword: Optional[list] = None
    last_updated: Optional[str] = None
    license: Optional[str] = None
    provider: Optional[str] = None
    published_date: Optional[str] = None
    spatial_extent: Optional[dict] = None
    theme: Optional[str] = None
    title: Optional[str] = None
    total_dataset: Optional[int] = None
    view_count: Optional[int] = None
    year: Optional[int] = None


@dataclass
class OgcService:
    pass


@dataclass
class OgcServiceLoadMatch:
    pass

