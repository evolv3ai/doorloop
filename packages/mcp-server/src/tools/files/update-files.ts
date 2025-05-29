// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/files/{fileId}',
  operationId: 'put-file',
};

export const tool: Tool = {
  name: 'update_files',
  description: 'Updates a File Metadata',
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
  return client.files.update(fileId);
};

export default { metadata, tool, handler };
