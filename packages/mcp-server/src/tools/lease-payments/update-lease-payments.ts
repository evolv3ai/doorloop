// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'lease_payments',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/lease-payments/{leasePaymentId}',
  operationId: 'put-lease-payment',
};

export const tool: Tool = {
  name: 'update_lease_payments',
  description: 'Updates a Lease Payment',
  inputSchema: {
    type: 'object',
    properties: {
      leasePaymentId: {
        type: 'string',
      },
      amountReceived: {
        type: 'number',
      },
      autoApplyPaymentOnCharges: {
        type: 'boolean',
      },
      depositToAccount: {
        type: 'string',
        title: 'mongoId',
      },
      lease: {
        type: 'string',
        title: 'mongoId',
      },
      paymentMethod: {
        type: 'string',
        description:
          'Lists all possible payment methods that can be used in payable and receivable transactions.',
        enum: ['CASH', 'CHECK', 'WIRE', 'CREDIT_CARD', 'CASHIERS_CHECK', 'MONEY_ORDER', 'OTHER', 'EPAY'],
      },
      id: {
        type: 'string',
        title: 'mongoId',
      },
      autoDeposit: {
        type: 'boolean',
      },
      depositStatus: {
        type: 'string',
        description: 'Read Only',
        enum: ['DEPOSITED', 'UNDEPOSITED'],
      },
      receivedFromTenant: {
        type: 'string',
        title: 'mongoId',
      },
      reference: {
        type: 'string',
      },
      reversedPayment: {
        type: 'string',
        description: 'If this payment was returned, will reference the returned payment',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { leasePaymentId, ...body } = args as any;
  return asTextContentResult(await client.leasePayments.update(leasePaymentId, body));
};

export default { metadata, tool, handler };
