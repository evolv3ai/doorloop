// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'lease_credits',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/lease-credits/{leaseCreditId}',
  operationId: 'get-lease-credit',
};

export const tool: Tool = {
  name: 'retrieve_lease_credits',
  description: 'Retrieves a Lease Credits',
  inputSchema: {
    type: 'object',
    properties: {
      leaseCreditId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { leaseCreditId, ...body } = args as any;
  return asTextContentResult(await client.leaseCredits.retrieve(leaseCreditId));
};

export default { metadata, tool, handler };
