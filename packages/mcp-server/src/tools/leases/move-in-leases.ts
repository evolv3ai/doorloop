// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/leases/move-in',
  operationId: 'post-leases-move-in',
};

export const tool: Tool = {
  name: 'move_in_leases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMoves in a Tenant\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Lease',\n  properties: {\n    name: {\n      type: 'string'\n    },\n    property: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    start: {\n      type: 'string',\n      description: 'Format: YYYY-MM-DD'\n    },\n    status: {\n      type: 'string',\n      description: 'Read Only',\n      enum: [        'ACTIVE',\n        'INACTIVE'\n      ]\n    },\n    term: {\n      type: 'string',\n      enum: [        'Fixed',\n        'AtWill'\n      ]\n    },\n    units: {\n      type: 'array',\n      description: 'An array of Unit Ids for this lease',\n      items: {\n        type: 'string',\n        title: 'mongoId'\n      }\n    },\n    id: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    end: {\n      type: 'string',\n      description: 'Required if term == AtWill. Format: YYYY-MM-DD'\n    },\n    evictonPending: {\n      type: 'boolean'\n    },\n    notes: {\n      type: 'string'\n    },\n    proofOfInsuranceRequired: {\n      type: 'boolean'\n    },\n    reference: {\n      type: 'string',\n      description: 'Read Only'\n    },\n    rolloverToAtWill: {\n      type: 'string',\n      description: 'If set to true, the lease will automatically rollover to \"At Will\" (Month to Month) at the end of the fixed term.'\n    },\n    totalBalancedue: {\n      type: 'number',\n      description: 'Read Only'\n    },\n    totalDepositsHeld: {\n      type: 'number',\n      description: 'Read Only'\n    },\n    TotalRecurringCharges: {\n      type: 'number',\n      description: 'Read Only'\n    },\n    totalRecurringCredits: {\n      type: 'number',\n      description: 'Read Only'\n    },\n    totalRecurringPayments: {\n      type: 'number',\n      description: 'Read Only'\n    },\n    totalRecurringRent: {\n      type: 'number',\n      description: 'Read Only'\n    }\n  },\n  required: [    'name',\n    'property',\n    'start',\n    'status',\n    'term',\n    'units'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'string',
        title: 'mongoId',
      },
      moveInAt: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      portalEnabled: {
        type: 'boolean',
      },
      tenantIds: {
        type: 'array',
        description: 'An array of Tenant Ids to move in',
        items: {
          type: 'string',
          title: 'mongoId',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['leaseId', 'moveInAt', 'portalEnabled', 'tenantIds'],
  },
  annotations: {},
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.leases.moveIn(body)));
};

export default { metadata, tool, handler };
