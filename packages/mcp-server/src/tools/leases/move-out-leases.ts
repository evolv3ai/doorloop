// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'leases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/leases/move-out',
  operationId: 'post-leases-move-out',
};

export const tool: Tool = {
  name: 'move_out_leases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMoves out a Tenant\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      leaseId: {
        type: 'string',
        title: 'mongoId',
      },
      movedOutAt: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      portalEnabled: {
        type: 'boolean',
      },
      tenants: {
        type: 'array',
        description: 'An array of Tenant Ids to move in',
        items: {
          type: 'string',
          title: 'mongoId',
        },
      },
      moveOutNoticeAt: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      moveOutReason: {
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
  const body = args as any;
  const response = await client.leases.moveOut(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
