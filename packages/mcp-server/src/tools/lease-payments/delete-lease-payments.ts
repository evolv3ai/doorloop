// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'lease_payments',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/lease-payments/{leasePaymentId}',
  operationId: 'delete-lease-payment',
};

export const tool: Tool = {
  name: 'delete_lease_payments',
  description: 'Deletes a Lease Payment',
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
  return client.leasePayments.delete(leasePaymentId);
};

export default { metadata, tool, handler };
