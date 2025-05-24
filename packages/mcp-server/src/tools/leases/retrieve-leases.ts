// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_leases',
  description: 'Retrieves a Lease',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { leaseId, ...body } = args as any;
  return client.leases.retrieve(leaseId);
};

export default { metadata, tool, handler };
