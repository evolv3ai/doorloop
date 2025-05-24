// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'communications',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_communications',
  description: 'Lists all Communication Log Entries',
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
    },
  },
};

export const handler = (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.communications.list(body);
};

export default { metadata, tool, handler };
