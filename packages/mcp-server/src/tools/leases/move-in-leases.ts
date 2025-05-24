// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'move_in_leases',
  description: 'Moves in a Tenant',
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
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.leases.moveIn(body);
};

export default { metadata, tool, handler };
