# HongKongCsdi PHP SDK Reference

Complete API reference for the HongKongCsdi PHP SDK.


## HongKongCsdiSDK

### Constructor

```php
require_once __DIR__ . '/hongkongcsdi_sdk.php';

$client = new HongKongCsdiSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HongKongCsdiSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = HongKongCsdiSDK::test();
```


### Instance Methods

#### `Dataset($data = null)`

Create a new `DatasetEntity` instance. Pass `null` for no initial data.

#### `OgcService($data = null)`

Create a new `OgcServiceEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): HongKongCsdiUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## DatasetEntity

```php
$dataset = $client->Dataset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiCallCount` | `int` | No | Number of API calls made for this dataset |
| `apiEndpoints` | `array` | No | Available API endpoints for this dataset |
| `apiServiceCalls` | `float` | No | Total API service calls in the specified year |
| `category` | `string` | No | Category of the dataset |
| `datasetDownloads` | `float` | No | Total dataset downloads in the specified year |
| `description` | `string` | Yes | Detailed description of the dataset |
| `downloadCount` | `int` | No | Number of times the dataset has been downloaded |
| `formats` | `array` | No | Available formats for the dataset |
| `id` | `string` | Yes | Unique identifier for the dataset |
| `keywords` | `array` | No | Keywords associated with the dataset |
| `lastUpdated` | `string` | No | Date when the dataset was last updated |
| `license` | `string` | No | License information for the dataset |
| `provider` | `string` | No | Data provider organization |
| `publishedDate` | `string` | No | Date when the dataset was published |
| `spatialExtent` | `array` | No | Spatial extent of the dataset |
| `theme` | `string` | No | Framework Spatial Data Theme |
| `title` | `string` | Yes | Title of the dataset |
| `totalDatasets` | `int` | No | Total number of datasets available |
| `viewCount` | `int` | No | Number of times the dataset has been viewed |
| `year` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Dataset()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Dataset()->load(["id" => "dataset_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DatasetEntity`

Create a new `DatasetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OgcServiceEntity

```php
$ogc_service = $client->OgcService();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OgcService()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OgcServiceEntity`

Create a new `OgcServiceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new HongKongCsdiSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

