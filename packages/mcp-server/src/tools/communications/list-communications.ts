// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'communications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/communications',
  operationId: 'get-communications',
};

export const tool: Tool = {
  name: 'list_communications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all Communication Log Entries\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'communication',\n        properties: {\n          from: {\n            type: 'object',\n            title: 'communicationParticipant',\n            properties: {\n              address: {\n                type: 'string'\n              },\n              linkedToId: {\n                type: 'string',\n                title: 'mongoId'\n              },\n              linkedToType: {\n                type: 'string',\n                enum: [                  'USER',\n                  'TENANT',\n                  'OWNER',\n                  'VENDOR',\n                  'SYSTEM'\n                ]\n              },\n              displayName: {\n                type: 'string'\n              }\n            },\n            required: [              'address',\n              'linkedToId',\n              'linkedToType'\n            ]\n          },\n          sentAt: {\n            type: 'number'\n          },\n          status: {\n            type: 'string',\n            enum: [              'DRAFT',\n              'FAILED',\n              'BOUNCED',\n              'COMPLAINT',\n              'SENT',\n              'DELIVERED',\n              'OPENED',\n              'CLICKED'\n            ]\n          },\n          subject: {\n            type: 'string'\n          },\n          type: {\n            type: 'string',\n            enum: [              'EMAIL',\n              'PHONE',\n              'TEXT'\n            ]\n          },\n          id: {\n            type: 'string',\n            title: 'mongoId'\n          },\n          announcement: {\n            type: 'string',\n            title: 'mongoId'\n          },\n          bcc: {\n            type: 'array',\n            items: {\n              type: 'object',\n              title: 'communicationParticipant',\n              properties: {\n                address: {\n                  type: 'string'\n                },\n                linkedToId: {\n                  type: 'string',\n                  title: 'mongoId'\n                },\n                linkedToType: {\n                  type: 'string',\n                  enum: [                    'USER',\n                    'TENANT',\n                    'OWNER',\n                    'VENDOR',\n                    'SYSTEM'\n                  ]\n                },\n                displayName: {\n                  type: 'string'\n                }\n              },\n              required: [                'address',\n                'linkedToId',\n                'linkedToType'\n              ]\n            }\n          },\n          bodyHtml: {\n            type: 'string',\n            description: 'For performance reasons, bodyHtml will only be returned when retrieving a single communication'\n          },\n          bodyPreview: {\n            type: 'string'\n          },\n          bouncedAt: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          },\n          cc: {\n            type: 'array',\n            items: {\n              type: 'object',\n              title: 'communicationParticipant',\n              properties: {\n                address: {\n                  type: 'string'\n                },\n                linkedToId: {\n                  type: 'string',\n                  title: 'mongoId'\n                },\n                linkedToType: {\n                  type: 'string',\n                  enum: [                    'USER',\n                    'TENANT',\n                    'OWNER',\n                    'VENDOR',\n                    'SYSTEM'\n                  ]\n                },\n                displayName: {\n                  type: 'string'\n                }\n              },\n              required: [                'address',\n                'linkedToId',\n                'linkedToType'\n              ]\n            }\n          },\n          clickedAt: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          },\n          externalId: {\n            type: 'string'\n          },\n          openedAt: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          },\n          threadId: {\n            type: 'string'\n          },\n          to: {\n            type: 'array',\n            items: {\n              type: 'object',\n              title: 'communicationParticipant',\n              properties: {\n                address: {\n                  type: 'string'\n                },\n                linkedToId: {\n                  type: 'string',\n                  title: 'mongoId'\n                },\n                linkedToType: {\n                  type: 'string',\n                  enum: [                    'USER',\n                    'TENANT',\n                    'OWNER',\n                    'VENDOR',\n                    'SYSTEM'\n                  ]\n                },\n                displayName: {\n                  type: 'string'\n                }\n              },\n              required: [                'address',\n                'linkedToId',\n                'linkedToType'\n              ]\n            }\n          }\n        },\n        required: [          'from',\n          'sentAt',\n          'status',\n          'subject',\n          'type'\n        ]\n      }\n    },\n    total: {\n      type: 'integer'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter_participantLinkedToId: {
        type: 'string',
      },
      filter_participantLinkedToType: {
        type: 'string',
        enum: ['TENANT', 'OWNER', 'VENDOR', 'USER', 'SYSTEM'],
      },
      filter_sentAt_from: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_sentAt_to: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      filter_status: {
        type: 'string',
        enum: ['DRAFT', 'FAILED', 'BOUNCED', 'COMPLAINT', 'SENT', 'DELIVERED', 'OPENED', 'CLICKED'],
      },
      filter_threadId: {
        type: 'string',
      },
      filter_type: {
        type: 'string',
        enum: ['EMAIL', 'PHONE', 'TEXT'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.communications.list(body)));
};

export default { metadata, tool, handler };
