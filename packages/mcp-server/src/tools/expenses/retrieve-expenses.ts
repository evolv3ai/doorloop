// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { asTextContentResult } from 'doorloop-mcp/tools/types';

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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves an Expense\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'expense',\n  properties: {\n    date: {\n      type: 'string',\n      description: 'Format: YYYY-MM-DD'\n    },\n    lines: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'expenseTransactionLine',\n        properties: {\n          account: {\n            type: 'string',\n            title: 'mongoId'\n          },\n          linkedToResourceId: {\n            type: 'string',\n            description: 'The Property Id for this line.'\n          },\n          linkedToResourceType: {\n            type: 'string',\n            description: 'At the monent, only \"property\" is supported',\n            enum: [              'property'\n            ]\n          },\n          id: {\n            type: 'string',\n            title: 'mongoId'\n          },\n          amount: {\n            type: 'number'\n          },\n          balance: {\n            type: 'number',\n            description: 'Read Only'\n          },\n          memo: {\n            type: 'string'\n          }\n        },\n        required: [          'account',\n          'linkedToResourceId',\n          'linkedToResourceType'\n        ]\n      }\n    },\n    payFromAccount: {\n      type: 'string'\n    },\n    paymentMethod: {\n      type: 'string',\n      enum: [        'CASH',\n        'CHECK',\n        'WIRE',\n        'CREDIT_CARD',\n        'CASHIERS_CHECK',\n        'MONEY_ORDER',\n        'OTHER',\n        'EPAY'\n      ]\n    },\n    id: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    batch: {\n      type: 'string'\n    },\n    memo: {\n      type: 'string'\n    },\n    payToResourceId: {\n      type: 'string'\n    },\n    payToResourceType: {\n      type: 'string'\n    },\n    reference: {\n      type: 'string',\n      description: 'If not provided will be generated automatically by the server.'\n    },\n    totalAmount: {\n      type: 'number',\n      description: 'Read Only. Calculated as sum of lines.amount.'\n    }\n  },\n  required: [    'date',\n    'lines',\n    'payFromAccount',\n    'paymentMethod'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      expenseId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { expenseId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.expenses.retrieve(expenseId)));
};

export default { metadata, tool, handler };
