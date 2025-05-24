// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'vendor_credits',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_vendor_credits',
  description: 'Deletes a Vendor Credit',
  inputSchema: {
    type: 'object',
    properties: {
      vendorCreditId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { vendorCreditId, ...body } = args as any;
  return client.vendorCredits.delete(vendorCreditId);
};

export default { metadata, tool, handler };
