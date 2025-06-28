// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

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

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { noteId, ...body } = args as any;
  const response = await client.notes.retrieve(noteId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
