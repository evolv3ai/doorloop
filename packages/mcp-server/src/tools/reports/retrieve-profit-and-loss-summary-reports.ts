// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/reports/profit-and-loss-summary',
  operationId: 'get-reports-profit-and-loss',
};

export const tool: Tool = {
  name: 'retrieve_profit_and_loss_summary_reports',
  description: 'Profit & Loss',
  inputSchema: {
    type: 'object',
    properties: {
      filter_accountingMethod: {
        type: 'string',
        description: 'Cash / Accrual',
        enum: ['CASH', 'ACCRUAL'],
      },
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
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      filter_propertyOwner: {
        type: 'string',
        description: 'Filter by Owner Id',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.reports.retrieveProfitAndLossSummary(body));
};

export default { metadata, tool, handler };
