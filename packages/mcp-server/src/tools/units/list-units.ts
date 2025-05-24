// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'units',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_units',
  description: 'Lists all Units',
  inputSchema: {
    type: 'object',
    properties: {
      filter_group: {
        type: 'string',
        description: 'Filters by Portfolio Id',
      },
      filter_owner: {
        type: 'string',
        description: 'Filter by Owner Id',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      filter_text: {
        type: 'string',
        description: 'Filter by Unit Name',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.units.list(body);
};

export default { metadata, tool, handler };
