// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'lease_charges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/lease-charges',
  operationId: 'get-lease-charges',
};

export const tool: Tool = {
  name: 'list_lease_charges',
  description: 'Lists all Lease Charges',
  inputSchema: {
    type: 'object',
    properties: {
      filter_date_from: {
        type: 'string',
        description: 'Filter by Date (YYYY-MM-DD)',
      },
      filter_date_to: {
        type: 'string',
        description: 'Filter by Date (YYYY-MM-DD)',
      },
      filter_lease: {
        type: 'string',
        description: 'Filter by Lease Id',
      },
      filter_owner: {
        type: 'string',
        description: 'Filter by Owner Id',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.leaseCharges.list(body);
};

export default { metadata, tool, handler };
