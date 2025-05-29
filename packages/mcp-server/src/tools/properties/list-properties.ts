// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'properties',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/properties',
  operationId: 'get-properties',
};

export const tool: Tool = {
  name: 'list_properties',
  description: 'Lists all Properties',
  inputSchema: {
    type: 'object',
    properties: {
      filter_class: {
        type: 'string',
        description: 'Filter by Property Class',
        enum: ['RESIDENTIAL', 'COMMERCIAL'],
      },
      filter_group: {
        type: 'string',
        description: 'Filter by Portfolio Id',
      },
      filter_owner: {
        type: 'string',
        description: 'Filter by Property Owner',
      },
      filter_text: {
        type: 'string',
        description: 'Filter by Property Name',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.properties.list(body);
};

export default { metadata, tool, handler };
