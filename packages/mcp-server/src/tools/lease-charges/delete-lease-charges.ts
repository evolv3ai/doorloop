// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'lease_charges',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/lease-charges/{leaseChargeId}',
  operationId: 'delete-lease-charge',
};

export const tool: Tool = {
  name: 'delete_lease_charges',
  description: 'Deletes a Lease Credit',
  inputSchema: {
    type: 'object',
    properties: {
      leaseChargeId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { leaseChargeId, ...body } = args as any;
  return client.leaseCharges.delete(leaseChargeId);
};

export default { metadata, tool, handler };
