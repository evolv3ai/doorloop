// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'vendors',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/vendors/{vendorId}',
  operationId: 'delete-vendor',
};

export const tool: Tool = {
  name: 'delete_vendors',
  description: 'Deletes a Vendor',
  inputSchema: {
    type: 'object',
    properties: {
      vendorId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { vendorId, ...body } = args as any;
  return client.vendors.delete(vendorId);
};

export default { metadata, tool, handler };
