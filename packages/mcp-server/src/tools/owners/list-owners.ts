// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'owners',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/owners',
  operationId: 'get-owners',
};

export const tool: Tool = {
  name: 'list_owners',
  description: 'Lists all Owners',
  inputSchema: {
    type: 'object',
    properties: {
      filter_active: {
        type: 'boolean',
        description: 'Filter by Active/Inactive',
      },
      filter_createdAt_from: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_createdAt_to: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_group: {
        type: 'string',
        description: 'Filter by Portfolio Id',
      },
      filter_management_ends_before: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      filter_text: {
        type: 'string',
        description: 'Filter by Owner Name / Email',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.owners.list(body);
};

export default { metadata, tool, handler };
