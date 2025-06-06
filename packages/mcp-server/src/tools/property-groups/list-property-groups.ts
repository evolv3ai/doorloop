// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'property_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/property-groups',
  operationId: 'get-property-groups',
};

export const tool: Tool = {
  name: 'list_property_groups',
  description: 'Lists all Portfolios',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.propertyGroups.list());
};

export default { metadata, tool, handler };
