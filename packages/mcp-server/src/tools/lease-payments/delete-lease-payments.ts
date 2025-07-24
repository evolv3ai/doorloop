// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'lease_payments',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/lease-payments/{leasePaymentId}',
  operationId: 'delete-lease-payment',
};

export const tool: Tool = {
  name: 'delete_lease_payments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a Lease Payment\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Lease-Payment',\n  properties: {\n    amountReceived: {\n      type: 'number'\n    },\n    autoApplyPaymentOnCharges: {\n      type: 'boolean'\n    },\n    depositToAccount: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    lease: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    paymentMethod: {\n      type: 'string',\n      description: 'Lists all possible payment methods that can be used in payable and receivable transactions.',\n      enum: [        'CASH',\n        'CHECK',\n        'WIRE',\n        'CREDIT_CARD',\n        'CASHIERS_CHECK',\n        'MONEY_ORDER',\n        'OTHER',\n        'EPAY'\n      ]\n    },\n    id: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    autoDeposit: {\n      type: 'boolean'\n    },\n    depositStatus: {\n      type: 'string',\n      description: 'Read Only',\n      enum: [        'DEPOSITED',\n        'UNDEPOSITED'\n      ]\n    },\n    receivedFromTenant: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    reference: {\n      type: 'string'\n    },\n    reversedPayment: {\n      type: 'string',\n      description: 'If this payment was returned, will reference the returned payment'\n    }\n  },\n  required: [    'amountReceived',\n    'autoApplyPaymentOnCharges',\n    'depositToAccount',\n    'lease',\n    'paymentMethod'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      leasePaymentId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['leasePaymentId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { leasePaymentId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.leasePayments.delete(leasePaymentId)));
};

export default { metadata, tool, handler };
