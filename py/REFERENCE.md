# HongKongCsdi Python SDK Reference

Complete API reference for the HongKongCsdi Python SDK.


## HongKongCsdiSDK

### Constructor

```python
from hong-kong-csdi_sdk import HongKongCsdiSDK

client = HongKongCsdiSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HongKongCsdiSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = HongKongCsdiSDK.test()
```


### Instance Methods

#### `Dataset(data=None)`

Create a new `DatasetEntity` instance. Pass `None` for no initial data.

#### `OgcService(data=None)`

Create a new `OgcServiceEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## DatasetEntity

```python
dataset = client.dataset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_call_count` | ``$INTEGER`` | No |  |
| `api_endpoint` | ``$OBJECT`` | No |  |
| `api_service_call` | ``$NUMBER`` | No |  |
| `category` | ``$STRING`` | No |  |
| `dataset_download` | ``$NUMBER`` | No |  |
| `description` | ``$STRING`` | Yes |  |
| `download_count` | ``$INTEGER`` | No |  |
| `format` | ``$ARRAY`` | No |  |
| `id` | ``$STRING`` | Yes |  |
| `keyword` | ``$ARRAY`` | No |  |
| `last_updated` | ``$STRING`` | No |  |
| `license` | ``$STRING`` | No |  |
| `provider` | ``$STRING`` | No |  |
| `published_date` | ``$STRING`` | No |  |
| `spatial_extent` | ``$OBJECT`` | No |  |
| `theme` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | Yes |  |
| `total_dataset` | ``$INTEGER`` | No |  |
| `view_count` | ``$INTEGER`` | No |  |
| `year` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.dataset.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.dataset.load({"id": "dataset_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DatasetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OgcServiceEntity

```python
ogc_service = client.ogc_service
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ogc_service.load({"id": "ogc_service_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OgcServiceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = HongKongCsdiSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

