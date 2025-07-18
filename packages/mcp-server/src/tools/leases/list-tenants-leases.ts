// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/leases/tenants',
  operationId: 'get-lease-tenants',
};

export const tool: Tool = {
  name: 'list_tenants_leases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of all lease tenants, meaning, tenants that have been associated with an active list.\n\nThis endpoint includes additional information related to the lease for each tenant in DoorLoop, with the full Tenant object included as well.\n\nIf a tenant is associated with multiple leases, the tenant will appear in the results here once for each lease it is associated with.",
  inputSchema: {
    type: 'object',
    properties: {
      filter_group: {
        type: 'string',
        description: 'Filter by Portfolio Id',
      },
      filter_lease: {
        type: 'string',
        description: 'Filter by Lease Id',
      },
      filter_movedInAt_from: {
        type: 'string',
        description: 'Filter by Move In Date (YYYY-MM-DD)',
      },
      filter_movedInAt_to: {
        type: 'string',
        description: 'Filter by Move In Date (YYYY-MM-DD)',
      },
      filter_movedOutAt_from: {
        type: 'string',
        description: 'Filter by Move Out Date (YYYY-MM-DD)',
      },
      filter_movedOutAt_To: {
        type: 'string',
        description: 'Filter by Move Out Date (YYYY-MM-DD)',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      filter_status: {
        type: 'string',
        description: 'Filter by Status',
      },
      filter_text: {
        type: 'string',
        description: 'Filter by Tenant Name / Email',
      },
    },
    required: [],
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.leases.listTenants(body));
};

export default { metadata, tool, handler };
