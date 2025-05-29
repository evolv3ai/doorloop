// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'notes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/notes/{noteId}',
  operationId: 'get-note',
};

export const tool: Tool = {
  name: 'retrieve_notes',
  description: 'Retrieve a Note',
  inputSchema: {
    type: 'object',
    properties: {
      noteId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { noteId, ...body } = args as any;
  return client.notes.retrieve(noteId);
};

export default { metadata, tool, handler };
