// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/files/{fileId}',
  operationId: 'delete-file',
};

export const tool: Tool = {
  name: 'delete_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a File\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'file',\n  properties: {\n    linkedResource: {\n      type: 'object',\n      title: 'fileLinkedResource',\n      properties: {\n        resourceId: {\n          type: 'string',\n          title: 'mongoId'\n        },\n        resourceType: {\n          type: 'string',\n          enum: [            'TENANT',\n            'OWNER',\n            'VENDOR',\n            'PROPERTY',\n            'UNIT',\n            'LEASE',\n            'LEASE_DRAFT',\n            'TASK',\n            'RENTAL_APPLICATION',\n            'BILL',\n            'BILL_PAYMENT',\n            'VENDOR_CREDIT',\n            'NOTE',\n            'INSURANCE_POLICY',\n            'COMMUNICATION'\n          ]\n        }\n      },\n      required: [        'resourceId',\n        'resourceType'\n      ]\n    },\n    name: {\n      type: 'string',\n      description: 'The name of the file. Must be a valid unix file name.'\n    },\n    id: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    createdAt: {\n      type: 'string'\n    },\n    createdBy: {\n      type: 'string'\n    },\n    downloadUrl: {\n      type: 'string',\n      description: 'Read Only. References the URL from which this file can be downloaded'\n    },\n    mimeType: {\n      type: 'string'\n    },\n    notes: {\n      type: 'string'\n    },\n    size: {\n      type: 'number'\n    },\n    tags: {\n      type: 'array',\n      items: {\n        type: 'string',\n        title: 'mongoId'\n      }\n    }\n  },\n  required: [    'linkedResource',\n    'name'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      fileId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['fileId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { fileId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.files.delete(fileId)));
};

export default { metadata, tool, handler };
