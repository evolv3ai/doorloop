// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tasks',
  operationId: 'get-tasks',
};

export const tool: Tool = {
  name: 'list_tasks',
  description: 'Retrieves all Tasks',
  inputSchema: {
    type: 'object',
    properties: {
      filter_assignedToUser: {
        type: 'string',
        description: 'Filter by User Id or "unassigned"',
      },
      filter_completedAt_from: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_completedAt_to: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_createdAt_from: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_createdAt_to: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_dueDate_from: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_dueDate_to: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_property: {
        type: 'string',
        description: 'Filter by Property Id',
      },
      filter_propertyGroup: {
        type: 'string',
        description: 'Filter by Portfolio Id',
      },
      filter_requestedById: {
        type: 'string',
        description: 'Filter by Requested by User, Tenant or Owner Id',
      },
      filter_status: {
        type: 'string',
        description: 'Filter by Task Status',
        enum: ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'NOT_COMPLETED', 'RECEIVED', 'ARCHIVED'],
      },
      filter_text: {
        type: 'string',
        description: 'Filter by Subject, Description or Reference',
      },
      filter_type: {
        type: 'string',
        description: 'Filter by Task Type',
        enum: ['INTERNAL_TASK', 'WORK_ORDER', 'TENANT_REQUEST', 'OWNER_REQUEST'],
      },
      filter_unit: {
        type: 'string',
        description: 'Filter by Unit Id',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tasks.list(body));
};

export default { metadata, tool, handler };
