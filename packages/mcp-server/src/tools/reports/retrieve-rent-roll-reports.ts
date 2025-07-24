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
  httpPath: '/reports/rent-roll',
  operationId: 'get-reports-rent-roll',
};

export const tool: Tool = {
  name: 'retrieve_rent_roll_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRent Roll\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    active: {\n      type: 'boolean'\n    },\n    baths: {\n      type: 'integer'\n    },\n    beds: {\n      type: 'integer'\n    },\n    bedsAndBaths: {\n      type: 'string'\n    },\n    end: {\n      type: 'string'\n    },\n    lastPaymentAmount: {\n      type: 'number'\n    },\n    lastPaymentDate: {\n      type: 'string',\n      description: 'Format: YYYY-MM-DD'\n    },\n    lastReturnedPaymentAmount: {\n      type: 'number'\n    },\n    lastReturnedPaymentDate: {\n      type: 'string',\n      description: 'Format: YYYY-MM-DD'\n    },\n    leaseId: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    leaseName: {\n      type: 'string'\n    },\n    leaseStatus: {\n      type: 'string',\n      enum: [        'ACTIVE',\n        'INACTIVE'\n      ]\n    },\n    marketRent: {\n      type: 'number'\n    },\n    nextLeaseId: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    nextLeaseName: {\n      type: 'string'\n    },\n    nextLeaseStart: {\n      type: 'string',\n      description: 'Format: YYYY-MM-DD'\n    },\n    occupied: {\n      type: 'boolean'\n    },\n    pictures: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          rank: {\n            type: 'integer'\n          },\n          url: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    property: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    renewalStage: {\n      type: 'string',\n      enum: [        'NOT_STARTED',\n        'RENEWAL_DRAFT',\n        'RENEWAL_OFFER',\n        'NOT_RENEWING'\n      ]\n    },\n    rentPerSize: {\n      type: 'number'\n    },\n    rolloverToAtWill: {\n      type: 'boolean'\n    },\n    size: {\n      type: 'number'\n    },\n    start: {\n      type: 'string'\n    },\n    term: {\n      type: 'string',\n      enum: [        'FIXED',\n        'AT_WILL'\n      ]\n    },\n    totalBalanceDue: {\n      type: 'number'\n    },\n    totalDepositsHeld: {\n      type: 'number'\n    },\n    totalRecurringCharges: {\n      type: 'number'\n    },\n    totalRecurringCredits: {\n      type: 'number'\n    },\n    totalRecurringPayments: {\n      type: 'number'\n    },\n    totalRecurringRent: {\n      type: 'number'\n    },\n    unitAmenities: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    unitId: {\n      type: 'string'\n    },\n    unitName: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter_asOfDate: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_group: {
        type: 'string',
        description: 'Filter by Portfolio Id',
      },
      filter_owner: {
        type: 'string',
        description: 'Filter by Owner Id',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.reports.retrieveRentRoll(body)));
};

export default { metadata, tool, handler };
