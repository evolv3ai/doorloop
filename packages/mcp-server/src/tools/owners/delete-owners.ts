// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'owners',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_owners',
  description: 'Deletes an Owner',
  inputSchema: {
    type: 'object',
    properties: {
      ownerId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { ownerId, ...body } = args as any;
  return client.owners.delete(ownerId);
};

export default { metadata, tool, handler };
