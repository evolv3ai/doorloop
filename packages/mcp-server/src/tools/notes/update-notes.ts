// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'notes',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/notes/{noteId}',
  operationId: 'put-note',
};

export const tool: Tool = {
  name: 'update_notes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a Note\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'note',\n  properties: {\n    linkedResource: {\n      type: 'object',\n      title: 'noteLinkedResource',\n      properties: {\n        resourceId: {\n          type: 'string',\n          title: 'mongoId'\n        },\n        resourceType: {\n          type: 'string',\n          enum: [            'TENANT',\n            'OWNER',\n            'VENDOR',\n            'PROPERTY',\n            'UNIT',\n            'LEASE',\n            'LEASE_DRAFT',\n            'TASK',\n            'RENTAL_APPLICATION'\n          ]\n        }\n      },\n      required: [        'resourceId',\n        'resourceType'\n      ]\n    },\n    title: {\n      type: 'string'\n    },\n    id: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    body: {\n      type: 'string'\n    },\n    createdAt: {\n      type: 'number',\n      description: 'Read Only'\n    },\n    createdBy: {\n      type: 'string',\n      description: 'Read Only'\n    },\n    tags: {\n      type: 'array',\n      items: {\n        type: 'string',\n        title: 'mongoId'\n      }\n    }\n  },\n  required: [    'linkedResource',\n    'title'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      noteId: {
        type: 'string',
      },
      linkedResource: {
        type: 'object',
        title: 'noteLinkedResource',
        properties: {
          resourceId: {
            type: 'string',
            title: 'mongoId',
          },
          resourceType: {
            type: 'string',
            enum: [
              'TENANT',
              'OWNER',
              'VENDOR',
              'PROPERTY',
              'UNIT',
              'LEASE',
              'LEASE_DRAFT',
              'TASK',
              'RENTAL_APPLICATION',
            ],
          },
        },
        required: ['resourceId', 'resourceType'],
      },
      title: {
        type: 'string',
      },
      id: {
        type: 'string',
        title: 'mongoId',
      },
      body: {
        type: 'string',
      },
      createdAt: {
        type: 'number',
        description: 'Read Only',
      },
      createdBy: {
        type: 'string',
        description: 'Read Only',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
          title: 'mongoId',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['noteId', 'linkedResource', 'title'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { noteId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.notes.update(noteId, body)));
};

export default { metadata, tool, handler };
