// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'property_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/property-groups',
  operationId: 'get-property-groups',
};

export const tool: Tool = {
  name: 'list_property_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all Portfolios\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        properties: {\n          type: 'array',\n          description: 'An array of Property Ids for properties in this portfolio.',\n          items: {\n            type: 'string'\n          }\n        },\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'name',\n        'properties'\n      ]\n    },\n    total: {\n      type: 'string'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.propertyGroups.list()));
};

export default { metadata, tool, handler };
