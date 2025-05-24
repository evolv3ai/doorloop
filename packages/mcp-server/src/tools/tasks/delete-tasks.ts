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

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { taskId, ...body } = args as any;
  return client.tasks.delete(taskId);
};

export default { metadata, tool, handler };
