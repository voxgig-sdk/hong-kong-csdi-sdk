# HongKongCsdi SDK

Hong Kong CSDI API client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## Try it

**TypeScript**
```bash
npm install hong-kong-csdi
```

**Python**
```bash
pip install hong-kong-csdi-sdk
```

**PHP**
```bash
composer require voxgig/hong-kong-csdi-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/hong-kong-csdi-sdk/go
```

**Ruby**
```bash
gem install hong-kong-csdi-sdk
```

**Lua**
```bash
luarocks install hong-kong-csdi-sdk
```

## Quickstart

### TypeScript

```ts
import { HongKongCsdiSDK } from 'hong-kong-csdi'

const client = new HongKongCsdiSDK({
  apikey: process.env.HONG-KONG-CSDI_APIKEY,
})

// List all datasets
const datasets = await client.Dataset().list()
console.log(datasets.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o hong-kong-csdi-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "hong-kong-csdi": {
      "command": "/abs/path/to/hong-kong-csdi-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Dataset** |  | `/datasets` |
| **OgcService** |  | `/map/wms` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from hongkongcsdi_sdk import HongKongCsdiSDK

client = HongKongCsdiSDK({
    "apikey": os.environ.get("HONG-KONG-CSDI_APIKEY"),
})

# List all datasets
datasets, err = client.Dataset().list()
print(datasets)

# Load a specific dataset
dataset, err = client.Dataset().load({"id": "example_id"})
print(dataset)
```

### PHP

```php
<?php
require_once 'hongkongcsdi_sdk.php';

$client = new HongKongCsdiSDK([
    "apikey" => getenv("HONG-KONG-CSDI_APIKEY"),
]);

// List all datasets
[$datasets, $err] = $client->Dataset()->list();
print_r($datasets);

// Load a specific dataset
[$dataset, $err] = $client->Dataset()->load(["id" => "example_id"]);
print_r($dataset);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/hong-kong-csdi-sdk/go"

client := sdk.NewHongKongCsdiSDK(map[string]any{
    "apikey": os.Getenv("HONG-KONG-CSDI_APIKEY"),
})

// List all datasets
datasets, err := client.Dataset(nil).List(nil, nil)
fmt.Println(datasets)
```

### Ruby

```ruby
require_relative "HongKongCsdi_sdk"

client = HongKongCsdiSDK.new({
  "apikey" => ENV["HONG-KONG-CSDI_APIKEY"],
})

# List all datasets
datasets, err = client.Dataset().list
puts datasets

# Load a specific dataset
dataset, err = client.Dataset().load({ "id" => "example_id" })
puts dataset
```

### Lua

```lua
local sdk = require("hong-kong-csdi_sdk")

local client = sdk.new({
  apikey = os.getenv("HONG-KONG-CSDI_APIKEY"),
})

-- List all datasets
local datasets, err = client:Dataset():list()
print(datasets)

-- Load a specific dataset
local dataset, err = client:Dataset():load({ id = "example_id" })
print(dataset)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = HongKongCsdiSDK.test()
const result = await client.Dataset().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = HongKongCsdiSDK.test()
result, err = client.Dataset().load({"id": "test01"})
```

### PHP

```php
$client = HongKongCsdiSDK::test();
[$result, $err] = $client->Dataset()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.Dataset(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = HongKongCsdiSDK.test
result, err = client.Dataset().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:Dataset():load({ id = "test01" })
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

---

Generated from the Hong Kong CSDI API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
