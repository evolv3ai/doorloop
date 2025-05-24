// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'properties',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_properties',
  description: 'Retrieves a Property',
  inputSchema: {
    type: 'object',
    properties: {
      propertyId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { propertyId, ...body } = args as any;
  return client.properties.retrieve(propertyId);
};

export default { metadata, tool, handler };
