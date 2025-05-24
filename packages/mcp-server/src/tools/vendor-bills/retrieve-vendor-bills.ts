// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'vendor_bills',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_vendor_bills',
  description: 'Retrieves a Vendor Bill',
  inputSchema: {
    type: 'object',
    properties: {
      vendorBillId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { vendorBillId, ...body } = args as any;
  return client.vendorBills.retrieve(vendorBillId);
};

export default { metadata, tool, handler };
