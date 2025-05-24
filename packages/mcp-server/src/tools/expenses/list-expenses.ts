// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'expenses',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_expenses',
  description: 'Lists all Expenses',
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
      filter_group: {
        type: 'string',
        description: 'Filter by Portfolio Id',
      },
      filter_owner: {
        type: 'string',
        description: 'Filter by Owner Id',
      },
      filter_payFromAccount: {
        type: 'string',
        description: 'Filter by Pay From Account Id',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      filter_tenant: {
        type: 'string',
        description: 'Filter by Tenant Id',
      },
      filter_vendor: {
        type: 'string',
        description: 'Filter by Vendor Id',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.expenses.list(body);
};

export default { metadata, tool, handler };
