// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/tasks',
  operationId: 'post-task',
};

export const tool: Tool = {
  name: 'create_tasks',
  description: 'Creates a Task',
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'string',
        enum: ['NOT_STARTED', 'RECEIVED', 'IN_PROGRESS', 'COMPLETED', 'ARCHIVED'],
      },
      subject: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['INTERNAL_TASK', 'TENANT_REQUEST', 'OWNER_REQUEST', 'WORK_ORDER'],
      },
      id: {
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
      createdAt: {
        type: 'number',
      },
      description: {
        type: 'string',
      },
      dueDate: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      entryNotes: {
        type: 'string',
      },
      entryPermission: {
        type: 'string',
        enum: ['NOT_APPLICABLE', 'YES', 'NO'],
      },
      notifyAssignees: {
        type: 'boolean',
        description:
          'If set to "true", the assigned to users will be notified when this task is created or updated.',
      },
      notifyTenant: {
        type: 'boolean',
        description:
          'If type = TENANT_REQUEST and notifyTenant = "true" the tenants will be notified when this task is created or updated.',
      },
      priority: {
        type: 'string',
        enum: ['LOW', 'MEDIUM', 'HIGH'],
      },
      property: {
        type: 'string',
        title: 'mongoId',
      },
      reference: {
        type: 'string',
      },
      requestedByOwner: {
        type: 'string',
        description: 'The Owner Id who requested this task. \nRequired if type == OWNER_REQUEST.',
      },
      requestedByTenant: {
        type: 'string',
        description: 'The Tenant Id who requested this task. \nRequired if type == TENANT_REQUEST.',
      },
      requestedByUser: {
        type: 'string',
        description: 'The User Id who requested this task. \nRequired if type == INTERNAL_TASK.',
      },
      unit: {
        type: 'string',
        title: 'mongoId',
      },
      updatedAt: {
        type: 'number',
      },
      workOrder: {
        type: 'object',
        description: 'Required if type == WORK_ORDER',
        properties: {
          assignedToVendor: {
            type: 'string',
            title: 'mongoId',
          },
          approvedByOwner: {
            type: 'boolean',
          },
          billed: {
            type: 'boolean',
            description: 'Read Only. If billed == true, the Vendor Bill Id be referenced under "vendorBill"',
          },
          instructionsToVendor: {
            type: 'string',
          },
          vendorBill: {
            type: 'string',
            title: 'mongoId',
          },
        },
        required: ['assignedToVendor'],
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.tasks.create(body);
};

export default { metadata, tool, handler };
