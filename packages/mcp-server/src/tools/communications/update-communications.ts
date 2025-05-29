// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'communications',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/communications/{communicationId}',
  operationId: 'put-communication',
};

export const tool: Tool = {
  name: 'update_communications',
  description: 'Updates a Communication Log Entry',
  inputSchema: {
    type: 'object',
    properties: {
      communicationId: {
        type: 'string',
      },
      from: {
        type: 'object',
        title: 'communicationParticipant',
        properties: {
          address: {
            type: 'string',
          },
          linkedToId: {
            type: 'string',
            title: 'mongoId',
          },
          linkedToType: {
            type: 'string',
            enum: ['USER', 'TENANT', 'OWNER', 'VENDOR', 'SYSTEM'],
          },
          displayName: {
            type: 'string',
          },
        },
        required: ['address', 'linkedToId', 'linkedToType'],
      },
      sentAt: {
        type: 'number',
      },
      status: {
        type: 'string',
        enum: ['DRAFT', 'FAILED', 'BOUNCED', 'COMPLAINT', 'SENT', 'DELIVERED', 'OPENED', 'CLICKED'],
      },
      subject: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['EMAIL', 'PHONE', 'TEXT'],
      },
      id: {
        type: 'string',
        title: 'mongoId',
      },
      announcement: {
        type: 'string',
        title: 'mongoId',
      },
      bcc: {
        type: 'array',
        items: {
          type: 'object',
          title: 'communicationParticipant',
          properties: {
            address: {
              type: 'string',
            },
            linkedToId: {
              type: 'string',
              title: 'mongoId',
            },
            linkedToType: {
              type: 'string',
              enum: ['USER', 'TENANT', 'OWNER', 'VENDOR', 'SYSTEM'],
            },
            displayName: {
              type: 'string',
            },
          },
          required: ['address', 'linkedToId', 'linkedToType'],
        },
      },
      bodyHtml: {
        type: 'string',
        description:
          'For performance reasons, bodyHtml will only be returned when retrieving a single communication',
      },
      bodyPreview: {
        type: 'string',
      },
      bouncedAt: {
        type: 'array',
        items: {
          type: 'number',
        },
      },
      cc: {
        type: 'array',
        items: {
          type: 'object',
          title: 'communicationParticipant',
          properties: {
            address: {
              type: 'string',
            },
            linkedToId: {
              type: 'string',
              title: 'mongoId',
            },
            linkedToType: {
              type: 'string',
              enum: ['USER', 'TENANT', 'OWNER', 'VENDOR', 'SYSTEM'],
            },
            displayName: {
              type: 'string',
            },
          },
          required: ['address', 'linkedToId', 'linkedToType'],
        },
      },
      clickedAt: {
        type: 'array',
        items: {
          type: 'number',
        },
      },
      externalId: {
        type: 'string',
      },
      openedAt: {
        type: 'array',
        items: {
          type: 'number',
        },
      },
      threadId: {
        type: 'string',
      },
      to: {
        type: 'array',
        items: {
          type: 'object',
          title: 'communicationParticipant',
          properties: {
            address: {
              type: 'string',
            },
            linkedToId: {
              type: 'string',
              title: 'mongoId',
            },
            linkedToType: {
              type: 'string',
              enum: ['USER', 'TENANT', 'OWNER', 'VENDOR', 'SYSTEM'],
            },
            displayName: {
              type: 'string',
            },
          },
          required: ['address', 'linkedToId', 'linkedToType'],
        },
      },
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { communicationId, ...body } = args as any;
  return client.communications.update(communicationId, body);
};

export default { metadata, tool, handler };
