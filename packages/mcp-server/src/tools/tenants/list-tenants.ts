// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'tenants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tenants',
  operationId: 'get-tenants',
};

export const tool: Tool = {
  name: 'list_tenants',
  description:
    'When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you\'re sure you don\'t need the data.\n\nRetrieves all Tenants. \nIn DoorLoop there are 2 types of Tenants:\nif (type = LEASE_TENANT): This tenant has been associated with a lease.\nif (type = PROSPECT_TENANT): This tenant has not been associated with a leasa and is considered a "Prospect".',
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
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      filter_text: {
        type: 'string',
        description: 'Filter by Tenant Name / Email',
      },
      filter_type: {
        type: 'string',
        description: 'Filter by Tenant Type',
        enum: ['LEASE_TENANT', 'PROSPECT_TENANT'],
      },
      filter_unit: {
        type: 'string',
        description: 'Filter by Unit Id',
      },
    },
    required: [],
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tenants.list(body));
};

export default { metadata, tool, handler };
