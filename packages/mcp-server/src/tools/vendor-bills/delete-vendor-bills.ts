// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'vendor_bills',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/vendor-bills/{vendorBillId}',
  operationId: 'delete-vendor-bill',
};

export const tool: Tool = {
  name: 'delete_vendor_bills',
  description: 'Deletes a Vendor Bill',
  inputSchema: {
    type: 'object',
    properties: {
      vendorBillId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { vendorBillId, ...body } = args as any;
  return asTextContentResult(await client.vendorBills.delete(vendorBillId));
};

export default { metadata, tool, handler };
