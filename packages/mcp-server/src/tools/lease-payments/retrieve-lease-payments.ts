// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'lease_payments',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_lease_payments',
  description: 'Retrieves a Lease Payment',
  inputSchema: {
    type: 'object',
    properties: {
      leasePaymentId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { leasePaymentId, ...body } = args as any;
  return client.leasePayments.retrieve(leasePaymentId);
};

export default { metadata, tool, handler };
