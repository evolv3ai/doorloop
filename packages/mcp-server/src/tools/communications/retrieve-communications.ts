// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'communications',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_communications',
  description: 'Retrieves a Communication Log Entry',
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
  return client.communications.retrieve(communicationId);
};

export default { metadata, tool, handler };
