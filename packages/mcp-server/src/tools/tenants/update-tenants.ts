// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'tenants',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/tenants/{tenantId}',
  operationId: 'put-tenant',
};

export const tool: Tool = {
  name: 'update_tenants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a Tenant",
  inputSchema: {
    type: 'object',
    properties: {
      tenantId: {
        type: 'string',
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
      dependants: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            dateOfBirth: {
              type: 'string',
            },
            firstName: {
              type: 'string',
            },
            lastName: {
              type: 'string',
            },
            middleName: {
              type: 'string',
            },
            relationship: {
              type: 'string',
            },
          },
        },
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
      emergencyContacts: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            phone: {
              type: 'string',
            },
            relationship: {
              type: 'string',
            },
          },
        },
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
      pets: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            age: {
              type: 'integer',
            },
            breed: {
              type: 'string',
            },
            color: {
              type: 'string',
            },
            gender: {
              type: 'string',
            },
            isServiceAnimal: {
              type: 'boolean',
            },
            isSpayedOrNeutered: {
              type: 'boolean',
            },
            name: {
              type: 'string',
            },
            notes: {
              type: 'string',
            },
            petType: {
              type: 'string',
            },
            weight: {
              type: 'number',
            },
          },
        },
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
      portalInfo: {
        type: 'object',
        properties: {
          allowAccess: {
            type: 'boolean',
          },
          invitationLastSentAt: {
            type: 'string',
            description: 'Read Only. Format: YYYY-MM-DD',
          },
          lastSeenAt: {
            type: 'string',
            description: 'Read Only. Format: YYYY-MM-DD',
          },
          loginEmail: {
            type: 'string',
          },
          status: {
            type: 'string',
            description: 'Read Only',
            enum: ['ACTIVE', 'INACTIVE', 'INVITED'],
          },
        },
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
      },
      prospectInfo: {
        type: 'object',
        properties: {
          assignedToUser: {
            type: 'string',
            description: 'The User Id this Prospect is assigned to',
          },
          campaignContent: {
            type: 'string',
          },
          campaignMedium: {
            type: 'string',
          },
          campaignName: {
            type: 'string',
          },
          campaignSource: {
            type: 'string',
          },
          campaignTerm: {
            type: 'string',
          },
          creditScore: {
            type: 'integer',
          },
          expectedMoveInDate: {
            type: 'string',
            description: 'Format: YYYY-MM-DD',
          },
          interests: {
            type: 'array',
            description: 'Represents all the properties and/or units this prospect is interested moving into',
            items: {
              type: 'object',
              properties: {
                property: {
                  type: 'string',
                  description: 'Reference the Property Id',
                },
                unit: {
                  type: 'string',
                  description: 'Reference the Unit Id',
                },
              },
            },
          },
          leadSource: {
            type: 'string',
            description: 'References to the Tag Id',
          },
          maxRent: {
            type: 'number',
          },
          minBathrooms: {
            type: 'number',
          },
          minBedrooms: {
            type: 'number',
          },
          monthlyIncome: {
            type: 'number',
          },
          nextTaskDate: {
            type: 'string',
            description: 'Read Only. Format: YYYY-MM-DD',
          },
          status: {
            type: 'string',
            enum: [
              'NEW',
              'CONTACT_ATTEMPTED',
              'CONTACT_MADE',
              'SHOWING_SCHEDULED',
              'SHOWING_COMPLETED',
              'APPLICATION_SENT',
              'APPLICATION_SUBMITTED',
              'LEASE_OFFER_MADE',
              'LEASE_OFFER_ACCEPTED',
              'LEASE_SENT_FOR_SIGNATURE',
              'CLOSED_MOVED_IN',
              'CLOSED_LOST',
            ],
          },
        },
      },
      timezone: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['LEASE_TENANT', 'PROSPECT_TENANT'],
      },
      vehicles: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            color: {
              type: 'string',
            },
            licensePlatae: {
              type: 'string',
            },
            make: {
              type: 'string',
            },
            model: {
              type: 'string',
            },
            notes: {
              type: 'string',
            },
            state: {
              type: 'string',
            },
            year: {
              type: 'integer',
            },
          },
        },
      },
    },
    required: ['tenantId', 'firstName', 'lastName'],
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const { tenantId, ...body } = args as any;
  return asTextContentResult(await client.tenants.update(tenantId, body));
};

export default { metadata, tool, handler };
