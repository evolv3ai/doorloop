// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/leases/move-out',
  operationId: 'post-leases-move-out',
};

export const tool: Tool = {
  name: 'move_out_leases',
  description: 'Moves out a Tenant',
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'string',
        title: 'mongoId',
      },
      movedOutAt: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      portalEnabled: {
        type: 'boolean',
      },
      tenants: {
        type: 'array',
        description: 'An array of Tenant Ids to move in',
        items: {
          type: 'string',
          title: 'mongoId',
        },
      },
      moveOutNoticeAt: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      moveOutReason: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.leases.moveOut(body);
};

export default { metadata, tool, handler };
