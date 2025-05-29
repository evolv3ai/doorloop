// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'tenants',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/tenants/{tenantId}',
  operationId: 'delete-tenant',
};

export const tool: Tool = {
  name: 'delete_tenants',
  description: 'Deletes a Tenant',
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
  return client.tenants.delete(tenantId);
};

export default { metadata, tool, handler };
