// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'tenants',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_tenants',
  description:
    'Retrieves a Tenant. \nIn DoorLoop there are 2 types of Tenants:\nif (type = LEASE_TENANT): This tenant has been associated with a lease.\nif (type = PROSPECT_TENANT): This tenant has not been associated with a leasa and is considered a "Prospect".',
  inputSchema: {
    type: 'object',
    properties: {
      tenantId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { tenantId, ...body } = args as any;
  return client.tenants.retrieve(tenantId);
};

export default { metadata, tool, handler };
