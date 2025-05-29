// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'lease_credits',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/lease-credits/{leaseCreditId}',
  operationId: 'delete-lease-credits-leaseCreditId',
};

export const tool: Tool = {
  name: 'delete_lease_credits',
  description: 'Delete Lease Credits',
  inputSchema: {
    type: 'object',
    properties: {
      leaseCreditId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { leaseCreditId, ...body } = args as any;
  return client.leaseCredits.delete(leaseCreditId);
};

export default { metadata, tool, handler };
