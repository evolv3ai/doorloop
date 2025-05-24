// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'reports',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_rent_roll_reports',
  description: 'Rent Roll',
  inputSchema: {
    type: 'object',
    properties: {
      filter_asOfDate: {
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
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.reports.retrieveRentRoll(body);
};

export default { metadata, tool, handler };
