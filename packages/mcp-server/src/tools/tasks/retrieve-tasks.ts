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
  httpPath: '/tasks/{taskId}',
  operationId: 'get-task',
};

export const tool: Tool = {
  name: 'retrieve_tasks',
  description: 'Retrieves a Task',
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
  return asTextContentResult(await client.tasks.retrieve(taskId));
};

export default { metadata, tool, handler };
