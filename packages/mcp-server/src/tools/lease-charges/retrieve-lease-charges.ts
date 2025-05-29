// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'lease_charges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/lease-charges/{leaseChargeId}',
  operationId: 'get-lease-charge',
};

export const tool: Tool = {
  name: 'retrieve_lease_charges',
  description: 'Retrieves a Lease Charge',
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
  return client.leaseCharges.retrieve(leaseChargeId);
};

export default { metadata, tool, handler };
