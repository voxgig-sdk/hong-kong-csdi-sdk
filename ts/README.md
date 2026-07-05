# HongKongCsdi TypeScript SDK



The TypeScript SDK for the HongKongCsdi API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Dataset()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/hong-kong-csdi-sdk/releases](https://github.com/voxgig-sdk/hong-kong-csdi-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { HongKongCsdiSDK } from '@voxgig-sdk/hong-kong-csdi'

const client = new HongKongCsdiSDK({
  apikey: process.env.HONG_KONG_CSDI_APIKEY,
})
```

### 2. List dataset records

`list()` resolves to an array of Dataset objects — iterate it directly:

```ts
const datasets = await client.Dataset().list()

for (const dataset of datasets) {
  console.log(dataset)
}
```

### 3. Load a dataset

`load()` returns the entity directly and throws on failure:

```ts
try {
  const dataset = await client.Dataset().load({ id: 'example_id' })
  console.log(dataset)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const datasets = await client.Dataset().list()
  console.log(datasets)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = HongKongCsdiSDK.test()

const dataset = await client.Dataset().list()
// dataset is a bare entity populated with mock response data
console.log(dataset)
```

You can also use the instance method:

```ts
const client = new HongKongCsdiSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Dataset()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new HongKongCsdiSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
HONG_KONG_CSDI_TEST_LIVE=TRUE
HONG_KONG_CSDI_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```


## Reference

### HongKongCsdiSDK

#### Constructor

```ts
new HongKongCsdiSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Dataset(data?)` | `DatasetEntity` | Create a Dataset entity instance. |
| `OgcService(data?)` | `OgcServiceEntity` | Create an OgcService entity instance. |
| `tester(testopts?, sdkopts?)` | `HongKongCsdiSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `HongKongCsdiSDK.test(testopts?, sdkopts?)` | `HongKongCsdiSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): HongKongCsdiSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Dataset

| Field | Description |
| --- | --- |
| `api_call_count` |  |
| `api_endpoint` |  |
| `api_service_call` |  |
| `category` |  |
| `dataset_download` |  |
| `description` |  |
| `download_count` |  |
| `format` |  |
| `id` |  |
| `keyword` |  |
| `last_updated` |  |
| `license` |  |
| `provider` |  |
| `published_date` |  |
| `spatial_extent` |  |
| `theme` |  |
| `title` |  |
| `total_dataset` |  |
| `view_count` |  |
| `year` |  |

Operations: list, load.

API path: `/datasets`

#### OgcService

| Field | Description |
| --- | --- |

Operations: load.

API path: `/map/wms`



## Entities


### Dataset

Create an instance: `const dataset = client.Dataset()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_call_count` | `number` |  |
| `api_endpoint` | `Record<string, any>` |  |
| `api_service_call` | `number` |  |
| `category` | `string` |  |
| `dataset_download` | `number` |  |
| `description` | `string` |  |
| `download_count` | `number` |  |
| `format` | `any[]` |  |
| `id` | `string` |  |
| `keyword` | `any[]` |  |
| `last_updated` | `string` |  |
| `license` | `string` |  |
| `provider` | `string` |  |
| `published_date` | `string` |  |
| `spatial_extent` | `Record<string, any>` |  |
| `theme` | `string` |  |
| `title` | `string` |  |
| `total_dataset` | `number` |  |
| `view_count` | `number` |  |
| `year` | `number` |  |

#### Example: Load

```ts
const dataset = await client.Dataset().load({ id: 'dataset_id' })
```

#### Example: List

```ts
const datasets = await client.Dataset().list()
```


### OgcService

Create an instance: `const ogc_service = client.OgcService()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const ogc_service = await client.OgcService().load()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
hong-kong-csdi/
├── src/
│   ├── HongKongCsdiSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { HongKongCsdiSDK } from '@voxgig-sdk/hong-kong-csdi'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const dataset = client.Dataset()
await dataset.list()

// dataset.data() now returns the dataset data from the last `list`
// dataset.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
