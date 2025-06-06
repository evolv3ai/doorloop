// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'expenses',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/expenses',
  operationId: 'post-expense',
};

export const tool: Tool = {
  name: 'create_expenses',
  description: 'Creates an Expense',
  inputSchema: {
    type: 'object',
    properties: {
      date: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      lines: {
        type: 'array',
        items: {
          type: 'object',
          title: 'expenseTransactionLine',
          properties: {
            account: {
              type: 'string',
              title: 'mongoId',
            },
            linkedToResourceId: {
              type: 'string',
              description: 'The Property Id for this line.',
            },
            linkedToResourceType: {
              type: 'string',
              description: 'At the monent, only "property" is supported',
              enum: ['property'],
            },
            id: {
              type: 'string',
              title: 'mongoId',
            },
            amount: {
              type: 'number',
            },
            balance: {
              type: 'number',
              description: 'Read Only',
            },
            memo: {
              type: 'string',
            },
          },
          required: ['account', 'linkedToResourceId', 'linkedToResourceType'],
        },
      },
      payFromAccount: {
        type: 'string',
      },
      paymentMethod: {
        type: 'string',
        enum: ['CASH', 'CHECK', 'WIRE', 'CREDIT_CARD', 'CASHIERS_CHECK', 'MONEY_ORDER', 'OTHER', 'EPAY'],
      },
      id: {
        type: 'string',
        title: 'mongoId',
      },
      batch: {
        type: 'string',
      },
      memo: {
        type: 'string',
      },
      payToResourceId: {
        type: 'string',
      },
      payToResourceType: {
        type: 'string',
      },
      reference: {
        type: 'string',
        description: 'If not provided will be generated automatically by the server.',
      },
      totalAmount: {
        type: 'number',
        description: 'Read Only. Calculated as sum of lines.amount.',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.expenses.create(body));
};

export default { metadata, tool, handler };
