// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'upload_files',
  description: 'Upoads a File',
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
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.files.upload(body);
};

export default { metadata, tool, handler };
