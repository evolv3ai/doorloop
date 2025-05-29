// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users',
  operationId: 'get-users',
};

export const tool: Tool = {
  name: 'list_users',
  description: 'Retrieve a list of all users in the account',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  return client.users.list();
};

export default { metadata, tool, handler };
