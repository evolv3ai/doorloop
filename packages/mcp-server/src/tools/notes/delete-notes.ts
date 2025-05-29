// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'notes',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/notes/{noteId}',
  operationId: 'delete-note',
};

export const tool: Tool = {
  name: 'delete_notes',
  description: 'Deletes a Note',
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
  return client.notes.delete(noteId);
};

export default { metadata, tool, handler };
