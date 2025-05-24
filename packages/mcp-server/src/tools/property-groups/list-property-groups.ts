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
  name: 'list_property_groups',
  description: 'Lists all Portfolios',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  return client.propertyGroups.list();
};

export default { metadata, tool, handler };
