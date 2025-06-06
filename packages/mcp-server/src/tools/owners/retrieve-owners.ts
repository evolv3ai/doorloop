// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'owners',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/owners/{ownerId}',
  operationId: 'get-owner',
};

export const tool: Tool = {
  name: 'retrieve_owners',
  description: 'Retrieves an Owner',
  inputSchema: {
    type: 'object',
    properties: {
      ownerId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { ownerId, ...body } = args as any;
  return asTextContentResult(await client.owners.retrieve(ownerId));
};

export default { metadata, tool, handler };
