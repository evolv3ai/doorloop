// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'lease_reversed_payments',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_lease_reversed_payments',
  description: 'Retrieves a Lease Returned Payment',
  inputSchema: {
    type: 'object',
    properties: {
      leaseReversedPaymentId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { leaseReversedPaymentId, ...body } = args as any;
  return client.leaseReversedPayments.retrieve(leaseReversedPaymentId);
};

export default { metadata, tool, handler };
