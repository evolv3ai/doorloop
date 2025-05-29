// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'communications',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/communications/{communicationId}',
  operationId: 'delete-communication',
};

export const tool: Tool = {
  name: 'delete_communications',
  description: 'Deletes a Communication Log Entry',
  inputSchema: {
    type: 'object',
    properties: {
      communicationId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { communicationId, ...body } = args as any;
  return client.communications.delete(communicationId);
};

export default { metadata, tool, handler };
