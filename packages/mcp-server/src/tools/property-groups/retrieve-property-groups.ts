// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'property_groups',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_property_groups',
  description: 'Retreieves a Portfolio',
  inputSchema: {
    type: 'object',
    properties: {
      portfolioId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { portfolioId, ...body } = args as any;
  return client.propertyGroups.retrieve(portfolioId);
};

export default { metadata, tool, handler };
