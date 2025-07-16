// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/reports/cash-flow-statement',
  operationId: 'get-reports-cash-flow-statement',
};

export const tool: Tool = {
  name: 'retrieve_cash_flow_statement_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCash Flow Statement\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    columns: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          field: {\n            type: 'string'\n          },\n          title: {\n            type: 'string'\n          }\n        },\n        required: []\n      }\n    },\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          accountId: {\n            type: 'string'\n          },\n          accountName: {\n            type: 'string'\n          },\n          accountType: {\n            type: 'string'\n          },\n          groupBy: {\n            type: 'object'\n          },\n          parentAccountId: {\n            type: 'null'\n          },\n          rootAccount: {\n            type: 'boolean'\n          },\n          total: {\n            type: 'integer'\n          },\n          totalWithSubAccounts: {\n            type: 'integer'\n          }\n        },\n        required: []\n      }\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter_accountingMethod: {
        type: 'string',
        description: 'Cash / Accrual',
        enum: ['CASH', 'ACCRUAL'],
      },
      filter_date_from: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_date_to: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_group: {
        type: 'string',
        description: 'Filter by Portfolio Id',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      filter_propertyOwner: {
        type: 'string',
        description: 'Filter by Owner Id',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.reports.retrieveCashFlowStatement(body)));
};

export default { metadata, tool, handler };
