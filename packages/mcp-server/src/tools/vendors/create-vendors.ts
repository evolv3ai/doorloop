// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'doorloop-mcp/filtering';
import { Metadata, asTextContentResult } from 'doorloop-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Doorloop from 'doorloop';

export const metadata: Metadata = {
  resource: 'vendors',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/vendors',
  operationId: 'post-vendor',
};

export const tool: Tool = {
  name: 'create_vendors',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a Vendor\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    active: {\n      type: 'boolean'\n    },\n    firstName: {\n      type: 'string'\n    },\n    lastName: {\n      type: 'string'\n    },\n    id: {\n      type: 'string',\n      title: 'mongoId'\n    },\n    balance: {\n      type: 'number',\n      description: 'Read Only'\n    },\n    company: {\n      type: 'string'\n    },\n    companyName: {\n      type: 'string'\n    },\n    dateOfBirth: {\n      type: 'string',\n      description: 'Format: YYYY-MM-DD'\n    },\n    emails: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'email',\n        properties: {\n          address: {\n            type: 'string'\n          },\n          type: {\n            type: 'string',\n            enum: [              'Primary',\n              'Secondary',\n              'Personal',\n              'Work',\n              'Other'\n            ]\n          }\n        },\n        required: [          'address',\n          'type'\n        ]\n      }\n    },\n    federalTaxInfo: {\n      type: 'object',\n      title: 'federalTaxInfo',\n      properties: {\n        addressFor1099SameAsPrimaryAddress: {\n          type: 'boolean',\n          description: 'If set to \"true\", will use the primaryAddress on the 1099 form. Otherwise addressFor1099 will be required.'\n        },\n        taxpayerId: {\n          type: 'string'\n        },\n        taxpayerName: {\n          type: 'string'\n        },\n        addressFor1099: {\n          type: 'object',\n          title: 'address',\n          properties: {\n            city: {\n              type: 'string'\n            },\n            country: {\n              type: 'string'\n            },\n            lat: {\n              type: 'string'\n            },\n            lng: {\n              type: 'string'\n            },\n            street1: {\n              type: 'string'\n            },\n            street2: {\n              type: 'string'\n            },\n            zip: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'addressFor1099SameAsPrimaryAddress',\n        'taxpayerId',\n        'taxpayerName'\n      ]\n    },\n    fullName: {\n      type: 'string',\n      description: 'Read Only'\n    },\n    gender: {\n      type: 'string',\n      enum: [        'MALE',\n        'FEMALE',\n        'PREFER_NOT_TO_SAY'\n      ]\n    },\n    insuranceInfo: {\n      type: 'object',\n      title: 'insuranceInfo',\n      properties: {\n        coverage: {\n          type: 'number'\n        },\n        effectiveDate: {\n          type: 'string',\n          description: 'Format: YYYY-MM-DD. Must be before expirationDate.'\n        },\n        expirationDate: {\n          type: 'string',\n          description: 'Format: YYYY-MM-DD. Must be after effectiveDate.'\n        },\n        policyNumber: {\n          type: 'string'\n        },\n        provider: {\n          type: 'string'\n        }\n      },\n      required: [        'coverage',\n        'effectiveDate',\n        'expirationDate',\n        'policyNumber',\n        'provider'\n      ]\n    },\n    jobTitle: {\n      type: 'string'\n    },\n    middleName: {\n      type: 'string'\n    },\n    name: {\n      type: 'string',\n      description: 'Read Only'\n    },\n    notes: {\n      type: 'string'\n    },\n    phones: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'phone',\n        properties: {\n          number: {\n            type: 'string'\n          },\n          type: {\n            type: 'string',\n            enum: [              'Home',\n              'Work',\n              'Mobile',\n              'Fax',\n              'Other'\n            ]\n          }\n        },\n        required: [          'number',\n          'type'\n        ]\n      }\n    },\n    pictureUrl: {\n      type: 'string'\n    },\n    primaryAddress: {\n      type: 'object',\n      title: 'address',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        lat: {\n          type: 'string'\n        },\n        lng: {\n          type: 'string'\n        },\n        street1: {\n          type: 'string'\n        },\n        street2: {\n          type: 'string'\n        },\n        zip: {\n          type: 'string'\n        }\n      }\n    },\n    properties: {\n      type: 'array',\n      description: 'References the properties served by this vendor',\n      items: {\n        type: 'string',\n        title: 'mongoId'\n      }\n    },\n    timezone: {\n      type: 'string'\n    }\n  },\n  required: [    'active',\n    'firstName',\n    'lastName'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
      balance: {
        type: 'number',
        description: 'Read Only',
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
      insuranceInfo: {
        type: 'object',
        title: 'insuranceInfo',
        properties: {
          coverage: {
            type: 'number',
          },
          effectiveDate: {
            type: 'string',
            description: 'Format: YYYY-MM-DD. Must be before expirationDate.',
          },
          expirationDate: {
            type: 'string',
            description: 'Format: YYYY-MM-DD. Must be after effectiveDate.',
          },
          policyNumber: {
            type: 'string',
          },
          provider: {
            type: 'string',
          },
        },
        required: ['coverage', 'effectiveDate', 'expirationDate', 'policyNumber', 'provider'],
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
      },
      properties: {
        type: 'array',
        description: 'References the properties served by this vendor',
        items: {
          type: 'string',
          title: 'mongoId',
        },
      },
      timezone: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['active', 'firstName', 'lastName'],
  },
};

export const handler = async (client: Doorloop, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.vendors.create(body)));
};

export default { metadata, tool, handler };
