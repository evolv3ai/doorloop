// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'expenses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/expenses/{expenseId}',
  operationId: 'get-expense',
};

export const tool: Tool = {
  name: 'retrieve_expenses',
  description: 'Retrieves an Expense',
  inputSchema: {
    type: 'object',
    properties: {
      expenseId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { expenseId, ...body } = args as any;
  return client.expenses.retrieve(expenseId);
};

export default { metadata, tool, handler };
