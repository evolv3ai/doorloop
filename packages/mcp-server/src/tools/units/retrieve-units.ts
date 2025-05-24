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
  name: 'retrieve_units',
  description: 'Retrieves a Unit',
  inputSchema: {
    type: 'object',
    properties: {
      unitId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { unitId, ...body } = args as any;
  return client.units.retrieve(unitId);
};

export default { metadata, tool, handler };
