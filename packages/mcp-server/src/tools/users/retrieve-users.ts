// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/{userId}',
  operationId: 'get-user',
};

export const tool: Tool = {
  name: 'retrieve_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a User\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'user',\n  properties: {\n    active: {\n      type: 'boolean'\n    },\n    firstName: {\n      type: 'string'\n    },\n    lastName: {\n      type: 'string'\n    },\n    loginEmail: {\n      type: 'string'\n    },\n    role: {\n      type: 'string'\n    },\n    id: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    company: {\n      type: 'string'\n    },\n    companyName: {\n      type: 'string'\n    },\n    dateOfBirth: {\n      type: 'string',\n      description: 'Format: YYYY-MM-DD'\n    },\n    emails: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'email',\n        properties: {\n          address: {\n            type: 'string'\n          },\n          type: {\n            type: 'string',\n            enum: [              'Primary',\n              'Secondary',\n              'Personal',\n              'Work',\n              'Other'\n            ]\n          }\n        },\n        required: [          'address',\n          'type'\n        ]\n      }\n    },\n    fullName: {\n      type: 'string',\n      description: 'Read Only'\n    },\n    gender: {\n      type: 'string',\n      enum: [        'MALE',\n        'FEMALE',\n        'PREFER_NOT_TO_SAY'\n      ]\n    },\n    jobTitle: {\n      type: 'string'\n    },\n    lastSeenAt: {\n      type: 'string'\n    },\n    middleName: {\n      type: 'string'\n    },\n    name: {\n      type: 'string',\n      description: 'Read Only'\n    },\n    notes: {\n      type: 'string'\n    },\n    phones: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'phone',\n        properties: {\n          number: {\n            type: 'string'\n          },\n          type: {\n            type: 'string',\n            enum: [              'Home',\n              'Work',\n              'Mobile',\n              'Fax',\n              'Other'\n            ]\n          }\n        },\n        required: [          'number',\n          'type'\n        ]\n      }\n    },\n    pictureUrl: {\n      type: 'string'\n    },\n    primaryAddress: {\n      type: 'object',\n      title: 'address',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        lat: {\n          type: 'string'\n        },\n        lng: {\n          type: 'string'\n        },\n        street1: {\n          type: 'string'\n        },\n        street2: {\n          type: 'string'\n        },\n        zip: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    properties: {\n      type: 'string'\n    },\n    timezone: {\n      type: 'string'\n    }\n  },\n  required: [    'active',\n    'firstName',\n    'lastName',\n    'loginEmail',\n    'role'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      userId: {
        type: 'string',
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
  const { userId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.users.retrieve(userId)));
};

export default { metadata, tool, handler };
