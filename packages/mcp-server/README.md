# Doorloop TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:evolv3ai/doorloop.git
cd doorloop
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export DOORLOOP_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y doorloop-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "doorloop_api": {
      "command": "node",
      "args": ["/path/to/local/doorloop/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "DOORLOOP_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "doorloop-mcp/server";

// import a specific tool
import retrieveUsers from "doorloop-mcp/tools/users/retrieve-users";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveUsers, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `users`:

- `retrieve_users` (`read`): Retrieves a User
- `list_users` (`read`): Retrieve a list of all users in the account
- `get_current_users` (`read`): Retrieves the the user that created this api key

### Resource `properties`:

- `retrieve_properties` (`read`): Retrieves a Property
- `list_properties` (`read`): Lists all Properties

### Resource `units`:

- `retrieve_units` (`read`): Retrieves a Unit
- `list_units` (`read`): Lists all Units

### Resource `leases`:

- `retrieve_leases` (`read`): Retrieves a Lease
- `list_leases` (`read`): Lists all Leases
- `list_tenants_leases` (`read`): Retrieves a list of all lease tenants, meaning, tenants that have been associated with an active list.

  This endpoint includes additional information related to the lease for each tenant in DoorLoop, with the full Tenant object included as well.

  If a tenant is associated with multiple leases, the tenant will appear in the results here once for each lease it is associated with.

- `move_in_leases` (`write`): Moves in a Tenant
- `move_out_leases` (`write`): Moves out a Tenant

### Resource `tenants`:

- `create_tenants` (`write`): Creates a Prospect.
  In DoorLoop there are 2 types of Tenants:
  if (type = LEASE_TENANT): This tenant has been associated with a lease.
  if (type = PROSPECT_TENANT): This tenant has not been associated with a leasa and is considered a "Prospect".

  All Tenants are created as a PROSPECT_TENANT, and their type changes once they are associated with a lease.

- `retrieve_tenants` (`read`): Retrieves a Tenant.
  In DoorLoop there are 2 types of Tenants:
  if (type = LEASE_TENANT): This tenant has been associated with a lease.
  if (type = PROSPECT_TENANT): This tenant has not been associated with a leasa and is considered a "Prospect".
- `update_tenants` (`write`): Updates a Tenant
- `list_tenants` (`read`): Retrieves all Tenants.
  In DoorLoop there are 2 types of Tenants:
  if (type = LEASE_TENANT): This tenant has been associated with a lease.
  if (type = PROSPECT_TENANT): This tenant has not been associated with a leasa and is considered a "Prospect".
- `delete_tenants` (`write`): Deletes a Tenant

### Resource `lease_payments`:

- `create_lease_payments` (`write`): Creates a Lease Payment
- `retrieve_lease_payments` (`read`): Retrieves a Lease Payment
- `update_lease_payments` (`write`): Updates a Lease Payment
- `list_lease_payments` (`read`): Lists all Lease Payments
- `delete_lease_payments` (`write`): Deletes a Lease Payment

### Resource `lease_reversed_payments`:

- `create_lease_reversed_payments` (`write`): Create a Lease Returned Payment which marks an existing Lease Payment as returned
- `retrieve_lease_reversed_payments` (`read`): Retrieves a Lease Returned Payment
- `list_lease_reversed_payments` (`read`): Lists all Lease Returned Payments
- `delete_lease_reversed_payments` (`write`): Deletes a Lease Returned Payment

### Resource `lease_charges`:

- `create_lease_charges` (`write`): Created a Lease Charge
- `retrieve_lease_charges` (`read`): Retrieves a Lease Charge
- `update_lease_charges` (`write`): Update a Lease Charge
- `list_lease_charges` (`read`): Lists all Lease Charges
- `delete_lease_charges` (`write`): Deletes a Lease Credit

### Resource `lease_credits`:

- `create_lease_credits` (`write`): Creates a Lease Credit
- `retrieve_lease_credits` (`read`): Retrieves a Lease Credits
- `update_lease_credits` (`write`): Updates a Lease Credit
- `list_lease_credits` (`read`): Lists all Lease Credits
- `delete_lease_credits` (`write`): Delete Lease Credits

### Resource `property_groups`:

- `retrieve_property_groups` (`read`): Retreieves a Portfolio
- `list_property_groups` (`read`): Lists all Portfolios

### Resource `tasks`:

- `create_tasks` (`write`): Creates a Task
- `retrieve_tasks` (`read`): Retrieves a Task
- `update_tasks` (`write`): Updates a Task
- `list_tasks` (`read`): Retrieves all Tasks
- `delete_tasks` (`write`): Deletes a Task
- `post_update_tasks` (`write`): Posts an update on a task

### Resource `owners`:

- `create_owners` (`write`): Creates an Owner
- `retrieve_owners` (`read`): Retrieves an Owner
- `update_owners` (`write`): Updates an Owner
- `list_owners` (`read`): Lists all Owners
- `delete_owners` (`write`): Deletes an Owner

### Resource `vendors`:

- `create_vendors` (`write`): Creates a Vendor
- `retrieve_vendors` (`read`): Retrieves a Vendor
- `update_vendors` (`write`): Updates a Vendor
- `list_vendors` (`read`): Lists all Vendors
- `delete_vendors` (`write`): Deletes a Vendor

### Resource `expenses`:

- `create_expenses` (`write`): Creates an Expense
- `retrieve_expenses` (`read`): Retrieves an Expense
- `update_expenses` (`write`): Updates an Expense
- `list_expenses` (`read`): Lists all Expenses
- `delete_expenses` (`write`): Deletes an Expense

### Resource `vendor_bills`:

- `create_vendor_bills` (`write`): Creates a Vendor Bill
- `retrieve_vendor_bills` (`read`): Retrieves a Vendor Bill
- `update_vendor_bills` (`write`): Updates a Vendor Bill
- `list_vendor_bills` (`read`): Lists all Vendor Bills
- `delete_vendor_bills` (`write`): Deletes a Vendor Bill

### Resource `vendor_credits`:

- `create_vendor_credits` (`write`): Creates a Vendor Credit
- `retrieve_vendor_credits` (`read`): Retrieves a Vendor Credit
- `update_vendor_credits` (`write`): Updates a Vendor Credit
- `list_vendor_credits` (`read`): Lists all Vendor Credits
- `delete_vendor_credits` (`write`): Deletes a Vendor Credit

### Resource `reports`:

- `retrieve_balance_sheet_summary_reports` (`read`): Balance Sheet
- `retrieve_cash_flow_statement_reports` (`read`): Cash Flow Statement
- `retrieve_profit_and_loss_summary_reports` (`read`): Profit & Loss
- `retrieve_rent_roll_reports` (`read`): Rent Roll

### Resource `communications`:

- `create_communications` (`write`): Creates a Communication Log Entry
- `retrieve_communications` (`read`): Retrieves a Communication Log Entry
- `update_communications` (`write`): Updates a Communication Log Entry
- `list_communications` (`read`): Lists all Communication Log Entries
- `delete_communications` (`write`): Deletes a Communication Log Entry

### Resource `notes`:

- `create_notes` (`write`): Creates a Note
- `retrieve_notes` (`read`): Retrieve a Note
- `update_notes` (`write`): Updates a Note
- `list_notes` (`read`): Lists all Notes
- `delete_notes` (`write`): Deletes a Note

### Resource `files`:

- `retrieve_files` (`read`): Retrieves a File Metadata
- `update_files` (`write`): Updates a File Metadata
- `list_files` (`read`): Lists all Files
- `delete_files` (`write`): Deletes a File
- `download_files` (`read`): Downloads a File
- `upload_files` (`write`): Upoads a File
