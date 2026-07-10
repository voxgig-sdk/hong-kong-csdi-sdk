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
    public ?int $api_call_count = null;
    public ?array $api_endpoint = null;
    public ?float $api_service_call = null;
    public ?string $category = null;
    public ?float $dataset_download = null;
    public string $description;
    public ?int $download_count = null;
    public ?array $format = null;
    public string $id;
    public ?array $keyword = null;
    public ?string $last_updated = null;
    public ?string $license = null;
    public ?string $provider = null;
    public ?string $published_date = null;
    public ?array $spatial_extent = null;
    public ?string $theme = null;
    public string $title;
    public ?int $total_dataset = null;
    public ?int $view_count = null;
    public ?int $year = null;
}

/** Request payload for Dataset#load. */
class DatasetLoadMatch
{
    public ?string $id = null;
}

/** Request payload for Dataset#list. */
class DatasetListMatch
{
    public ?int $api_call_count = null;
    public ?array $api_endpoint = null;
    public ?float $api_service_call = null;
    public ?string $category = null;
    public ?float $dataset_download = null;
    public ?string $description = null;
    public ?int $download_count = null;
    public ?array $format = null;
    public ?string $id = null;
    public ?array $keyword = null;
    public ?string $last_updated = null;
    public ?string $license = null;
    public ?string $provider = null;
    public ?string $published_date = null;
    public ?array $spatial_extent = null;
    public ?string $theme = null;
    public ?string $title = null;
    public ?int $total_dataset = null;
    public ?int $view_count = null;
    public ?int $year = null;
}

/** OgcService entity data model. */
class OgcService
{
}

/** Request payload for OgcService#load. */
class OgcServiceLoadMatch
{
}

