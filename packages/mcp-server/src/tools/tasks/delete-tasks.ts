// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/tasks/{taskId}',
  operationId: 'delete-task',
};

export const tool: Tool = {
  name: 'delete_tasks',
  description: 'Deletes a Task',
  inputSchema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { taskId, ...body } = args as any;
  return asTextContentResult(await client.tasks.delete(taskId));
};

export default { metadata, tool, handler };
