// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'expenses',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/expenses/{expenseId}',
  operationId: 'delete-expense',
};

export const tool: Tool = {
  name: 'delete_expenses',
  description: 'Deletes an Expense',
  inputSchema: {
    type: 'object',
    properties: {
      expenseId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { expenseId, ...body } = args as any;
  return asTextContentResult(await client.expenses.delete(expenseId));
};

export default { metadata, tool, handler };
