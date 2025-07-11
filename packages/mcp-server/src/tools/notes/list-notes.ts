// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'notes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/notes',
  operationId: 'get-notes',
};

export const tool: Tool = {
  name: 'list_notes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all Notes\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'note',\n        properties: {\n          linkedResource: {\n            type: 'object',\n            title: 'noteLinkedResource',\n            properties: {\n              resourceId: {\n                type: 'string',\n                title: 'mongoId'\n              },\n              resourceType: {\n                type: 'string',\n                enum: [                  'TENANT',\n                  'OWNER',\n                  'VENDOR',\n                  'PROPERTY',\n                  'UNIT',\n                  'LEASE',\n                  'LEASE_DRAFT',\n                  'TASK',\n                  'RENTAL_APPLICATION'\n                ]\n              }\n            },\n            required: [              'resourceId',\n              'resourceType'\n            ]\n          },\n          title: {\n            type: 'string'\n          },\n          id: {\n            type: 'string',\n            title: 'mongoId'\n          },\n          body: {\n            type: 'string'\n          },\n          createdAt: {\n            type: 'number',\n            description: 'Read Only'\n          },\n          createdBy: {\n            type: 'string',\n            description: 'Read Only'\n          },\n          tags: {\n            type: 'array',\n            items: {\n              type: 'string',\n              title: 'mongoId'\n            }\n          }\n        },\n        required: [          'linkedResource',\n          'title'\n        ]\n      }\n    },\n    total: {\n      type: 'number'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter_createdAt_from: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_createdAt_to: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_createdBy: {
        type: 'string',
      },
      filter_resourceId: {
        type: 'string',
      },
      filter_tags: {
        type: 'string',
      },
      filter_text: {
        type: 'string',
        description: 'Filter by Note Title or Body',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.notes.list(body)));
};

export default { metadata, tool, handler };
