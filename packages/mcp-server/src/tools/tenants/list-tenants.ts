// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
    'Retrieves all Tenants. \nIn DoorLoop there are 2 types of Tenants:\nif (type = LEASE_TENANT): This tenant has been associated with a lease.\nif (type = PROSPECT_TENANT): This tenant has not been associated with a leasa and is considered a "Prospect".',
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
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.tenants.list(body);
};

export default { metadata, tool, handler };
