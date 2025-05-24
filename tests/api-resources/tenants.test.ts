// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Doorloop from 'doorloop';

const client = new Doorloop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tenants', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.tenants.create({ firstName: 'firstName', lastName: 'lastName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.tenants.create({
      firstName: 'firstName',
      lastName: 'lastName',
      id: '00000020f51bb4362eee2a4d',
      company: 'company',
      companyName: 'companyName',
      dateOfBirth: 'dateOfBirth',
      dependants: [
        {
          dateOfBirth: 'dateOfBirth',
          firstName: 'firstName',
          lastName: 'lastName',
          middleName: 'middleName',
          relationship: 'relationship',
        },
      ],
      emails: [{ address: 'address', type: 'Primary' }],
      emergencyContacts: [{ email: 'email', name: 'name', phone: 'phone', relationship: 'relationship' }],
      fullName: 'fullName',
      gender: 'MALE',
      jobTitle: 'jobTitle',
      middleName: 'middleName',
      name: 'name',
      notes: 'notes',
      pets: [
        {
          age: 0,
          breed: 'breed',
          color: 'color',
          gender: 'gender',
          isServiceAnimal: true,
          isSpayedOrNeutered: true,
          name: 'name',
          notes: 'notes',
          petType: 'petType',
          weight: 0,
        },
      ],
      phones: [{ number: 'number', type: 'Home' }],
      pictureUrl: 'pictureUrl',
      portalInfo: {
        allowAccess: true,
        invitationLastSentAt: 'invitationLastSentAt',
        lastSeenAt: 'lastSeenAt',
        loginEmail: 'loginEmail',
        status: 'ACTIVE',
      },
      primaryAddress: {
        city: 'city',
        country: 'country',
        lat: 'lat',
        lng: 'lng',
        street1: 'street1',
        street2: 'street2',
        zip: 'zip',
      },
      prospectInfo: {
        assignedToUser: 'assignedToUser',
        campaignContent: 'campaignContent',
        campaignMedium: 'campaignMedium',
        campaignName: 'campaignName',
        campaignSource: 'campaignSource',
        campaignTerm: 'campaignTerm',
        creditScore: 0,
        expectedMoveInDate: 'expectedMoveInDate',
        interests: [{ property: 'property', unit: 'unit' }],
        leadSource: 'leadSource',
        maxRent: 0,
        minBathrooms: 0,
        minBedrooms: 0,
        monthlyIncome: 0,
        nextTaskDate: 'nextTaskDate',
        status: 'NEW',
      },
      timezone: 'timezone',
      type: 'LEASE_TENANT',
      vehicles: [
        {
          color: 'color',
          licensePlatae: 'licensePlatae',
          make: 'make',
          model: 'model',
          notes: 'notes',
          state: 'state',
          year: 1950,
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.tenants.retrieve('tenantId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.tenants.update('tenantId', {
      firstName: 'firstName',
      lastName: 'lastName',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.tenants.update('tenantId', {
      firstName: 'firstName',
      lastName: 'lastName',
      id: '00000020f51bb4362eee2a4d',
      company: 'company',
      companyName: 'companyName',
      dateOfBirth: 'dateOfBirth',
      dependants: [
        {
          dateOfBirth: 'dateOfBirth',
          firstName: 'firstName',
          lastName: 'lastName',
          middleName: 'middleName',
          relationship: 'relationship',
        },
      ],
      emails: [{ address: 'address', type: 'Primary' }],
      emergencyContacts: [{ email: 'email', name: 'name', phone: 'phone', relationship: 'relationship' }],
      fullName: 'fullName',
      gender: 'MALE',
      jobTitle: 'jobTitle',
      middleName: 'middleName',
      name: 'name',
      notes: 'notes',
      pets: [
        {
          age: 0,
          breed: 'breed',
          color: 'color',
          gender: 'gender',
          isServiceAnimal: true,
          isSpayedOrNeutered: true,
          name: 'name',
          notes: 'notes',
          petType: 'petType',
          weight: 0,
        },
      ],
      phones: [{ number: 'number', type: 'Home' }],
      pictureUrl: 'pictureUrl',
      portalInfo: {
        allowAccess: true,
        invitationLastSentAt: 'invitationLastSentAt',
        lastSeenAt: 'lastSeenAt',
        loginEmail: 'loginEmail',
        status: 'ACTIVE',
      },
      primaryAddress: {
        city: 'city',
        country: 'country',
        lat: 'lat',
        lng: 'lng',
        street1: 'street1',
        street2: 'street2',
        zip: 'zip',
      },
      prospectInfo: {
        assignedToUser: 'assignedToUser',
        campaignContent: 'campaignContent',
        campaignMedium: 'campaignMedium',
        campaignName: 'campaignName',
        campaignSource: 'campaignSource',
        campaignTerm: 'campaignTerm',
        creditScore: 0,
        expectedMoveInDate: 'expectedMoveInDate',
        interests: [{ property: 'property', unit: 'unit' }],
        leadSource: 'leadSource',
        maxRent: 0,
        minBathrooms: 0,
        minBedrooms: 0,
        monthlyIncome: 0,
        nextTaskDate: 'nextTaskDate',
        status: 'NEW',
      },
      timezone: 'timezone',
      type: 'LEASE_TENANT',
      vehicles: [
        {
          color: 'color',
          licensePlatae: 'licensePlatae',
          make: 'make',
          model: 'model',
          notes: 'notes',
          state: 'state',
          year: 1950,
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.tenants.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tenants.list(
        {
          filter_group: 'filter_group',
          filter_lease: 'filter_lease',
          filter_property: 'filter_property',
          filter_text: 'filter_text',
          filter_type: 'LEASE_TENANT',
          filter_unit: 'filter_unit',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doorloop.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.tenants.delete('tenantId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
