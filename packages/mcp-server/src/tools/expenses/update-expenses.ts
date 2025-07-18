// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'expenses',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/expenses/{expenseId}',
  operationId: 'put-expense',
};

export const tool: Tool = {
  name: 'update_expenses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an Expense\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'expense',\n  properties: {\n    date: {\n      type: 'string',\n      description: 'Format: YYYY-MM-DD'\n    },\n    lines: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'expenseTransactionLine',\n        properties: {\n          account: {\n            type: 'string',\n            title: 'mongoId'\n          },\n          linkedToResourceId: {\n            type: 'string',\n            description: 'The Property Id for this line.'\n          },\n          linkedToResourceType: {\n            type: 'string',\n            description: 'At the monent, only \"property\" is supported',\n            enum: [              'property'\n            ]\n          },\n          id: {\n            type: 'string',\n            title: 'mongoId'\n          },\n          amount: {\n            type: 'number'\n          },\n          balance: {\n            type: 'number',\n            description: 'Read Only'\n          },\n          memo: {\n            type: 'string'\n          }\n        },\n        required: [          'account',\n          'linkedToResourceId',\n          'linkedToResourceType'\n        ]\n      }\n    },\n    payFromAccount: {\n      type: 'string'\n    },\n    paymentMethod: {\n      type: 'string',\n      enum: [        'CASH',\n        'CHECK',\n        'WIRE',\n        'CREDIT_CARD',\n        'CASHIERS_CHECK',\n        'MONEY_ORDER',\n        'OTHER',\n        'EPAY'\n      ]\n    },\n    id: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    batch: {\n      type: 'string'\n    },\n    memo: {\n      type: 'string'\n    },\n    payToResourceId: {\n      type: 'string'\n    },\n    payToResourceType: {\n      type: 'string'\n    },\n    reference: {\n      type: 'string',\n      description: 'If not provided will be generated automatically by the server.'\n    },\n    totalAmount: {\n      type: 'number',\n      description: 'Read Only. Calculated as sum of lines.amount.'\n    }\n  },\n  required: [    'date',\n    'lines',\n    'payFromAccount',\n    'paymentMethod'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      expenseId: {
        type: 'string',
      },
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['expenseId', 'date', 'lines', 'payFromAccount', 'paymentMethod'],
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { expenseId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.expenses.update(expenseId, body)));
};

export default { metadata, tool, handler };
