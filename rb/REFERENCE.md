# HongKongCsdi Ruby SDK Reference

Complete API reference for the HongKongCsdi Ruby SDK.


## HongKongCsdiSDK

### Constructor

```ruby
require_relative 'HongKongCsdi_sdk'

client = HongKongCsdiSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HongKongCsdiSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = HongKongCsdiSDK.test
```


### Instance Methods

#### `Dataset(data = nil)`

Create a new `Dataset` entity instance. Pass `nil` for no initial data.

#### `OgcService(data = nil)`

Create a new `OgcService` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## DatasetEntity

```ruby
dataset = client.Dataset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiCallCount` | `Integer` | No | Number of API calls made for this dataset |
| `apiEndpoints` | `Hash` | No | Available API endpoints for this dataset |
| `apiServiceCalls` | `Float` | No | Total API service calls in the specified year |
| `category` | `String` | No | Category of the dataset |
| `datasetDownloads` | `Float` | No | Total dataset downloads in the specified year |
| `description` | `String` | Yes | Detailed description of the dataset |
| `downloadCount` | `Integer` | No | Number of times the dataset has been downloaded |
| `formats` | `Array` | No | Available formats for the dataset |
| `id` | `String` | Yes | Unique identifier for the dataset |
| `keywords` | `Array` | No | Keywords associated with the dataset |
| `lastUpdated` | `String` | No | Date when the dataset was last updated |
| `license` | `String` | No | License information for the dataset |
| `provider` | `String` | No | Data provider organization |
| `publishedDate` | `String` | No | Date when the dataset was published |
| `spatialExtent` | `Hash` | No | Spatial extent of the dataset |
| `theme` | `String` | No | Framework Spatial Data Theme |
| `title` | `String` | Yes | Title of the dataset |
| `totalDatasets` | `Integer` | No | Total number of datasets available |
| `viewCount` | `Integer` | No | Number of times the dataset has been viewed |
| `year` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Dataset.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Dataset.load({ "id" => "dataset_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DatasetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OgcServiceEntity

```ruby
ogc_service = client.OgcService
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OgcService.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OgcServiceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = HongKongCsdiSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

