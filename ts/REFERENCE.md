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
const dataset = client.Dataset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiCallCount` | `number` | No | Number of API calls made for this dataset |
| `apiEndpoints` | `Record<string, any>` | No | Available API endpoints for this dataset |
| `apiServiceCalls` | `number` | No | Total API service calls in the specified year |
| `category` | `string` | No | Category of the dataset |
| `datasetDownloads` | `number` | No | Total dataset downloads in the specified year |
| `description` | `string` | Yes | Detailed description of the dataset |
| `downloadCount` | `number` | No | Number of times the dataset has been downloaded |
| `formats` | `any[]` | No | Available formats for the dataset |
| `id` | `string` | Yes | Unique identifier for the dataset |
| `keywords` | `any[]` | No | Keywords associated with the dataset |
| `lastUpdated` | `string` | No | Date when the dataset was last updated |
| `license` | `string` | No | License information for the dataset |
| `provider` | `string` | No | Data provider organization |
| `publishedDate` | `string` | No | Date when the dataset was published |
| `spatialExtent` | `Record<string, any>` | No | Spatial extent of the dataset |
| `theme` | `string` | No | Framework Spatial Data Theme |
| `title` | `string` | Yes | Title of the dataset |
| `totalDatasets` | `number` | No | Total number of datasets available |
| `viewCount` | `number` | No | Number of times the dataset has been viewed |
| `year` | `number` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `download` | `/datasets/{datasetId}/download` | `client.Dataset().load({ $action: 'download', ... })` |

An action returns that action's OWN response, which is not necessarily a
Dataset record — check the API definition for its shape.

```ts
const result = await client.Dataset().load({
  $action: 'download',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Dataset().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Dataset().load({ id: 'dataset_id' })
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
const ogc_service = client.OgcService()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OgcService().load({ request: 'request', service: 'service', version: 'version' })
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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

