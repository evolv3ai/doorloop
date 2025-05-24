// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_leases',
  description: 'Lists all Leases',
  inputSchema: {
    type: 'object',
    properties: {
      filter_end_date_from: {
        type: 'string',
        description: 'Filter by End Date (YYYY-MM-DD)',
      },
      filter_end_date_to: {
        type: 'string',
        description: 'Filter by End Date (YYYY-MM-DD)',
      },
      filter_group: {
        type: 'string',
        description: 'Filters by Portfolio Id',
      },
      filter_outstandingBalanceGreaterThan: {
        type: 'number',
        description: 'Filter by Min Outstanding Balance',
      },
      filter_owner: {
        type: 'string',
        description: 'Filter by Owner Id',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      filter_propertyClass: {
        type: 'string',
        description: 'Filter by Property Class',
        enum: ['RESIDENTIAL', 'COMMERCIAL'],
      },
      filter_start_date_from: {
        type: 'string',
        description: 'Filter by Start Date (YYYY-MM-DD)',
      },
      filter_start_date_to: {
        type: 'string',
        description: 'Filter by Start Date (YYYY-MM-DD)',
      },
      filter_status: {
        type: 'string',
        description: 'Filter by Status',
        enum: ['ACTIVE', 'INACTIVE'],
      },
      filter_tenant: {
        type: 'string',
        description: 'Filter by Tenant Id',
      },
      filter_term: {
        type: 'string',
        description: 'Filter by Term',
        enum: ['Rollover', 'AtWill'],
      },
      filter_text: {
        type: 'string',
        description: 'Filter by Lease Name',
      },
      filter_unit: {
        type: 'string',
        description: 'Filter by Unit Id',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.leases.list(body);
};

export default { metadata, tool, handler };
