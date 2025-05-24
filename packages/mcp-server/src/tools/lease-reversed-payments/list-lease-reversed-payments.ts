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
  name: 'list_lease_reversed_payments',
  description: 'Lists all Lease Returned Payments',
  inputSchema: {
    type: 'object',
    properties: {
      filter_date_from: {
        type: 'string',
        description: 'Filter by Date (YYYY-MM-DD)',
      },
      filter_date_to: {
        type: 'string',
        description: 'Filter by Date (YYYY-MM-DD)',
      },
      filter_lease: {
        type: 'string',
        description: 'Filter by Lease Id',
      },
      filter_owner: {
        type: 'string',
        description: 'Filter by Owner Id',
      },
      filter_paymentMethod: {
        type: 'string',
        description: 'Filter by Payment Method',
        enum: ['CASH', 'CHECK', 'WIRE', 'CREDIT_CARD', 'CASHIERS_CHECK', 'MONEY_ORDER', 'OTHER', 'EPAY'],
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.leaseReversedPayments.list(body);
};

export default { metadata, tool, handler };
