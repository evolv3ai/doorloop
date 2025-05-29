// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/files',
  operationId: 'get-files',
};

export const tool: Tool = {
  name: 'list_files',
  description: 'Lists all Files',
  inputSchema: {
    type: 'object',
    properties: {
      filter_createdAt_from: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_createdAt_to: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_createdBy: {
        type: 'string',
      },
      filter_resourceId: {
        type: 'string',
      },
      filter_tags: {
        type: 'string',
      },
      filter_text: {
        type: 'string',
        description: 'Filter by File Name or Notes',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.files.list(body);
};

export default { metadata, tool, handler };
