// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'vendors',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_vendors',
  description: 'Retrieves a Vendor',
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
  return client.vendors.retrieve(vendorId);
};

export default { metadata, tool, handler };
