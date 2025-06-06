// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'vendor_credits',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/vendor-credits',
  operationId: 'get-vendor-credits',
};

export const tool: Tool = {
  name: 'list_vendor_credits',
  description: 'Lists all Vendor Credits',
  inputSchema: {
    type: 'object',
    properties: {
      filter_date_from: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_date_to: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_due_date_from: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_due_date_to: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_group: {
        type: 'string',
        description: 'Filter by Portfolio Id',
      },
      filter_openBills: {
        type: 'boolean',
        description: 'If set to true will return only bills with an open balance ',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      filter_vendor: {
        type: 'string',
        description: 'Filter by Vendor Id',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.vendorCredits.list(body));
};

export default { metadata, tool, handler };
