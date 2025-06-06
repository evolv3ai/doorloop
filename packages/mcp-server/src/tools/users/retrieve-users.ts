// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/{userId}',
  operationId: 'get-user',
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

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { userId, ...body } = args as any;
  return asTextContentResult(await client.users.retrieve(userId));
};

export default { metadata, tool, handler };
