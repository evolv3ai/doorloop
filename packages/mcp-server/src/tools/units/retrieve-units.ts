// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'units',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/units/{unitId}',
  operationId: 'get-unit',
};

export const tool: Tool = {
  name: 'retrieve_units',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a Unit\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'unit',\n  properties: {\n    name: {\n      type: 'string'\n    },\n    property: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    id: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    active: {\n      type: 'boolean'\n    },\n    address: {\n      type: 'object',\n      title: 'address',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        lat: {\n          type: 'string'\n        },\n        lng: {\n          type: 'string'\n        },\n        street1: {\n          type: 'string'\n        },\n        street2: {\n          type: 'string'\n        },\n        zip: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    addressSameAsProperty: {\n      type: 'boolean',\n      description: 'If set to true, the address of this unit will be the same as the property it is linked to and the value in the \"address\" property will be ignored.'\n    },\n    amenities: {\n      type: 'array',\n      description: 'Please refer to the MITS standard for a list of possible values',\n      items: {\n        type: 'string'\n      }\n    },\n    baths: {\n      type: 'number'\n    },\n    beds: {\n      type: 'number'\n    },\n    description: {\n      type: 'string'\n    },\n    listing: {\n      type: 'object',\n      properties: {\n        activeListing: {\n          type: 'boolean'\n        },\n        contact: {\n          type: 'string',\n          description: 'Reference to the User Id who is the listing contact person. The user\\'s contact information (Phone number, Email address) will be posted'\n        },\n        dateAvailable: {\n          type: 'string'\n        },\n        deposit: {\n          type: 'number'\n        },\n        leaseLength: {\n          type: 'string'\n        },\n        rent: {\n          type: 'number'\n        }\n      },\n      required: []\n    },\n    marketRent: {\n      type: 'number'\n    },\n    pictures: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'picture',\n        properties: {\n          rank: {\n            type: 'integer',\n            description: 'Represents the index of this picture in ascending order'\n          },\n          url: {\n            type: 'string',\n            description: 'The URL of the picture'\n          }\n        },\n        required: []\n      }\n    },\n    size: {\n      type: 'number'\n    }\n  },\n  required: [    'name',\n    'property'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      unitId: {
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
  const { unitId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.units.retrieve(unitId)));
};

export default { metadata, tool, handler };
