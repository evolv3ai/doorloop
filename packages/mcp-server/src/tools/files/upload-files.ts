// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/files',
  operationId: 'post-files',
};

export const tool: Tool = {
  name: 'upload_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpoads a File\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'array',
        description: 'The binary file data. Max file size 50MB.',
        items: {
          type: 'string',
        },
      },
      linkedResource: {
        type: 'object',
        title: 'fileLinkedResource',
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
              'BILL',
              'BILL_PAYMENT',
              'VENDOR_CREDIT',
              'NOTE',
              'INSURANCE_POLICY',
              'COMMUNICATION',
            ],
          },
        },
        required: ['resourceId', 'resourceType'],
      },
      name: {
        type: 'string',
        description: 'The name of the file. Must be a valid unix file name.',
      },
      id: {
        type: 'string',
        title: 'mongoId',
      },
      createdAt: {
        type: 'string',
      },
      createdBy: {
        type: 'string',
      },
      downloadUrl: {
        type: 'string',
        description: 'Read Only. References the URL from which this file can be downloaded',
      },
      mimeType: {
        type: 'string',
      },
      notes: {
        type: 'string',
      },
      size: {
        type: 'number',
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
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.files.upload(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
