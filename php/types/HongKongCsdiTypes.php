<?php
declare(strict_types=1);

// Typed models for the HongKongCsdi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Dataset entity data model. */
class Dataset
{
    public ?int $apiCallCount = null;
    public ?array $apiEndpoints = null;
    public ?float $apiServiceCalls = null;
    public ?string $category = null;
    public ?float $datasetDownloads = null;
    public string $description;
    public ?int $downloadCount = null;
    public ?array $formats = null;
    public string $id;
    public ?array $keywords = null;
    public ?string $lastUpdated = null;
    public ?string $license = null;
    public ?string $provider = null;
    public ?string $publishedDate = null;
    public ?array $spatialExtent = null;
    public ?string $theme = null;
    public string $title;
    public ?int $totalDatasets = null;
    public ?int $viewCount = null;
    public ?int $year = null;
}

/** Request payload for Dataset#load. */
class DatasetLoadMatch
{
    public string $id;
}

/** Request payload for Dataset#list. */
class DatasetListMatch
{
    public ?string $category = null;
    public ?int $limit = null;
    public ?int $offset = null;
    public ?string $search = null;
    public ?string $sort_by = null;
    public ?string $theme = null;
}

/** OgcService entity data model. */
class OgcService
{
}

/** Request payload for OgcService#load. */
class OgcServiceLoadMatch
{
    public ?string $bbox = null;
    public ?string $crs = null;
    public ?string $format = null;
    public ?int $height = null;
    public ?string $layer = null;
    public string $request;
    public string $service;
    public string $version;
    public ?int $width = null;
    public ?int $count = null;
    public ?string $outputformat = null;
    public ?string $srsname = null;
    public ?string $typename = null;
}

