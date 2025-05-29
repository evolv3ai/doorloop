// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/files/{fileId}',
  operationId: 'delete-file',
};

export const tool: Tool = {
  name: 'delete_files',
  description: 'Deletes a File',
  inputSchema: {
    type: 'object',
    properties: {
      fileId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { fileId, ...body } = args as any;
  return client.files.delete(fileId);
};

export default { metadata, tool, handler };
