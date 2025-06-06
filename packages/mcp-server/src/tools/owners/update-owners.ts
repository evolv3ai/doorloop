// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'owners',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/owners/{ownerId}',
  operationId: 'put-owner',
};

export const tool: Tool = {
  name: 'update_owners',
  description: 'Updates an Owner',
  inputSchema: {
    type: 'object',
    properties: {
      ownerId: {
        type: 'string',
      },
      active: {
        type: 'boolean',
      },
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      },
      id: {
        type: 'string',
        title: 'mongoId',
      },
      company: {
        type: 'string',
      },
      companyName: {
        type: 'string',
      },
      dateOfBirth: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      emails: {
        type: 'array',
        items: {
          type: 'object',
          title: 'email',
          properties: {
            address: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['Primary', 'Secondary', 'Personal', 'Work', 'Other'],
            },
          },
          required: ['address', 'type'],
        },
      },
      federalTaxInfo: {
        type: 'object',
        title: 'federalTaxInfo',
        properties: {
          addressFor1099SameAsPrimaryAddress: {
            type: 'boolean',
            description:
              'If set to "true", will use the primaryAddress on the 1099 form. Otherwise addressFor1099 will be required.',
          },
          taxpayerId: {
            type: 'string',
          },
          taxpayerName: {
            type: 'string',
          },
          addressFor1099: {
            type: 'object',
            title: 'address',
            properties: {
              city: {
                type: 'string',
              },
              country: {
                type: 'string',
              },
              lat: {
                type: 'string',
              },
              lng: {
                type: 'string',
              },
              street1: {
                type: 'string',
              },
              street2: {
                type: 'string',
              },
              zip: {
                type: 'string',
              },
            },
            required: [],
          },
        },
        required: ['addressFor1099SameAsPrimaryAddress', 'taxpayerId', 'taxpayerName'],
      },
      fullName: {
        type: 'string',
        description: 'Read Only',
      },
      gender: {
        type: 'string',
        enum: ['MALE', 'FEMALE', 'PREFER_NOT_TO_SAY'],
      },
      jobTitle: {
        type: 'string',
      },
      managementEndDate: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      managementStartDate: {
        type: 'string',
        description: 'Format: YYYY-MM-DD',
      },
      middleName: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Read Only',
      },
      notes: {
        type: 'string',
      },
      phones: {
        type: 'array',
        items: {
          type: 'object',
          title: 'phone',
          properties: {
            number: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['Home', 'Work', 'Mobile', 'Fax', 'Other'],
            },
          },
          required: ['number', 'type'],
        },
      },
      pictureUrl: {
        type: 'string',
      },
      primaryAddress: {
        type: 'object',
        title: 'address',
        properties: {
          city: {
            type: 'string',
          },
          country: {
            type: 'string',
          },
          lat: {
            type: 'string',
          },
          lng: {
            type: 'string',
          },
          street1: {
            type: 'string',
          },
          street2: {
            type: 'string',
          },
          zip: {
            type: 'string',
          },
        },
        required: [],
      },
      timezone: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { ownerId, ...body } = args as any;
  return asTextContentResult(await client.owners.update(ownerId, body));
};

export default { metadata, tool, handler };
