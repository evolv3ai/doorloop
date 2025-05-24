// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'notes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_notes',
  description: 'Creates a Note',
  inputSchema: {
    type: 'object',
    properties: {
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
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.notes.create(body);
};

export default { metadata, tool, handler };
