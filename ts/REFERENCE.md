# HongKongCsdi TypeScript SDK Reference

Complete API reference for the HongKongCsdi TypeScript SDK.


## HongKongCsdiSDK

### Constructor

```ts
new HongKongCsdiSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HongKongCsdiSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = HongKongCsdiSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `HongKongCsdiSDK` instance in test mode.


### Instance Methods

#### `Dataset(data?: object)`

Create a new `Dataset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatasetEntity` instance.

#### `OgcService(data?: object)`

Create a new `OgcService` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OgcServiceEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `HongKongCsdiSDK.test()`.

**Returns:** `HongKongCsdiSDK` instance in test mode.


---

## DatasetEntity

```ts
const dataset = client.dataset
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.dataset.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.dataset.load({ id: 'dataset_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatasetEntity` instance with the same client and
options.

#### `client()`

Return the parent `HongKongCsdiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OgcServiceEntity

```ts
const ogc_service = client.ogc_service
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ogc_service.load({ id: 'ogc_service_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OgcServiceEntity` instance with the same client and
options.

#### `client()`

Return the parent `HongKongCsdiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new HongKongCsdiSDK({
  feature: {
    test: { active: true },
  }
})
```

