// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/tasks/update',
  operationId: 'post-task-update',
};

export const tool: Tool = {
  name: 'post_update_tasks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPosts an update on a task\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'task',\n  properties: {\n    status: {\n      type: 'string',\n      enum: [        'NOT_STARTED',\n        'RECEIVED',\n        'IN_PROGRESS',\n        'COMPLETED',\n        'ARCHIVED'\n      ]\n    },\n    subject: {\n      type: 'string'\n    },\n    type: {\n      type: 'string',\n      enum: [        'INTERNAL_TASK',\n        'TENANT_REQUEST',\n        'OWNER_REQUEST',\n        'WORK_ORDER'\n      ]\n    },\n    id: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    assignedToUsers: {\n      type: 'array',\n      items: {\n        type: 'string',\n        title: 'mongoId'\n      }\n    },\n    createdAt: {\n      type: 'number'\n    },\n    description: {\n      type: 'string'\n    },\n    dueDate: {\n      type: 'string',\n      description: 'Format: YYYY-MM-DD'\n    },\n    entryNotes: {\n      type: 'string'\n    },\n    entryPermission: {\n      type: 'string',\n      enum: [        'NOT_APPLICABLE',\n        'YES',\n        'NO'\n      ]\n    },\n    notifyAssignees: {\n      type: 'boolean',\n      description: 'If set to \"true\", the assigned to users will be notified when this task is created or updated.'\n    },\n    notifyTenant: {\n      type: 'boolean',\n      description: 'If type = TENANT_REQUEST and notifyTenant = \"true\" the tenants will be notified when this task is created or updated.'\n    },\n    priority: {\n      type: 'string',\n      enum: [        'LOW',\n        'MEDIUM',\n        'HIGH'\n      ]\n    },\n    property: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    reference: {\n      type: 'string'\n    },\n    requestedByOwner: {\n      type: 'string',\n      description: 'The Owner Id who requested this task. \\nRequired if type == OWNER_REQUEST.'\n    },\n    requestedByTenant: {\n      type: 'string',\n      description: 'The Tenant Id who requested this task. \\nRequired if type == TENANT_REQUEST.'\n    },\n    requestedByUser: {\n      type: 'string',\n      description: 'The User Id who requested this task. \\nRequired if type == INTERNAL_TASK.'\n    },\n    unit: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    updatedAt: {\n      type: 'number'\n    },\n    workOrder: {\n      type: 'object',\n      description: 'Required if type == WORK_ORDER',\n      properties: {\n        assignedToVendor: {\n          type: 'string',\n          title: 'mongoId'\n        },\n        approvedByOwner: {\n          type: 'boolean'\n        },\n        billed: {\n          type: 'boolean',\n          description: 'Read Only. If billed == true, the Vendor Bill Id be referenced under \"vendorBill\"'\n        },\n        instructionsToVendor: {\n          type: 'string'\n        },\n        vendorBill: {\n          type: 'string',\n          title: 'mongoId'\n        }\n      },\n      required: [        'assignedToVendor'\n      ]\n    }\n  },\n  required: [    'status',\n    'subject',\n    'type'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['taskId'],
  },
  annotations: {},
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.tasks.postUpdate(body)));
};

export default { metadata, tool, handler };
