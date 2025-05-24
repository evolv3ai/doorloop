// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'post_update_tasks',
  description: 'Posts an update on a task',
  inputSchema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'string',
        title: 'mongoId',
      },
      assignedToUsers: {
        type: 'array',
        items: {
          type: 'string',
          title: 'mongoId',
        },
      },
      dueDate: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      message: {
        type: 'string',
        description: '10000',
      },
      notifyAssignees: {
        type: 'boolean',
      },
      notifyTenant: {
        type: 'boolean',
      },
      priority: {
        type: 'string',
        enum: ['LOW', 'MEDIUM', 'HIGH'],
      },
      status: {
        type: 'string',
        enum: ['NOT_STARTED', 'RECEIVED', 'IN_PROGRESS', 'COMPLETED', 'ARCHIVED'],
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.tasks.postUpdate(body);
};

export default { metadata, tool, handler };
