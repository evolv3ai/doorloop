// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'vendor_credits',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_vendor_credits',
  description: 'Retrieves a Vendor Credit',
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
  return client.vendorCredits.retrieve(vendorCreditId);
};

export default { metadata, tool, handler };
