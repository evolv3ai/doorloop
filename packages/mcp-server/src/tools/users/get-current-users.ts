// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/me',
  operationId: 'get-current-user',
};

export const tool: Tool = {
  name: 'get_current_users',
  description: 'Retrieves the the user that created this api key',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  return client.users.getCurrent();
};

export default { metadata, tool, handler };
