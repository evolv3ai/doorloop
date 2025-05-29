// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'vendors',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/vendors',
  operationId: 'get-vendors',
};

export const tool: Tool = {
  name: 'list_vendors',
  description: 'Lists all Vendors',
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
      filter_insurance_expires_before: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_openBalance: {
        type: 'boolean',
        description: 'If true, will return only vendors with an open balance',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.vendors.list(body);
};

export default { metadata, tool, handler };
