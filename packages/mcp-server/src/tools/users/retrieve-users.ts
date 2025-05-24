// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_users',
  description: 'Retrieves a User',
  inputSchema: {
    type: 'object',
    properties: {
      userId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { userId, ...body } = args as any;
  return client.users.retrieve(userId);
};

export default { metadata, tool, handler };
