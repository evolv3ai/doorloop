// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Doorloop from 'doorloop';

const client = new Doorloop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource owners', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.owners.create({
      active: true,
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
  test.skip('create: required and optional params', async () => {
    const response = await client.owners.create({
      active: true,
      firstName: 'firstName',
      lastName: 'lastName',
      id: '00000020f51bb4362eee2a4d',
      company: 'company',
      companyName: 'companyName',
      dateOfBirth: 'dateOfBirth',
      emails: [{ address: 'address', type: 'Primary' }],
      federalTaxInfo: {
        addressFor1099SameAsPrimaryAddress: true,
        taxpayerId: 'taxpayerId',
        taxpayerName: 'taxpayerName',
        addressFor1099: {
          city: 'city',
          country: 'country',
          lat: 'lat',
          lng: 'lng',
          street1: 'street1',
          street2: 'street2',
          zip: 'zip',
        },
      },
      fullName: 'fullName',
      gender: 'MALE',
      jobTitle: 'jobTitle',
      managementEndDate: 'managementEndDate',
      managementStartDate: 'managementStartDate',
      middleName: 'middleName',
      name: 'name',
      notes: 'notes',
      phones: [{ number: 'number', type: 'Home' }],
      pictureUrl: 'pictureUrl',
      primaryAddress: {
        city: 'city',
        country: 'country',
        lat: 'lat',
        lng: 'lng',
        street1: 'street1',
        street2: 'street2',
        zip: 'zip',
      },
      timezone: 'timezone',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.owners.retrieve('ownerId');
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
    const responsePromise = client.owners.update('ownerId', {
      active: true,
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
    const response = await client.owners.update('ownerId', {
      active: true,
      firstName: 'firstName',
      lastName: 'lastName',
      id: '00000020f51bb4362eee2a4d',
      company: 'company',
      companyName: 'companyName',
      dateOfBirth: 'dateOfBirth',
      emails: [{ address: 'address', type: 'Primary' }],
      federalTaxInfo: {
        addressFor1099SameAsPrimaryAddress: true,
        taxpayerId: 'taxpayerId',
        taxpayerName: 'taxpayerName',
        addressFor1099: {
          city: 'city',
          country: 'country',
          lat: 'lat',
          lng: 'lng',
          street1: 'street1',
          street2: 'street2',
          zip: 'zip',
        },
      },
      fullName: 'fullName',
      gender: 'MALE',
      jobTitle: 'jobTitle',
      managementEndDate: 'managementEndDate',
      managementStartDate: 'managementStartDate',
      middleName: 'middleName',
      name: 'name',
      notes: 'notes',
      phones: [{ number: 'number', type: 'Home' }],
      pictureUrl: 'pictureUrl',
      primaryAddress: {
        city: 'city',
        country: 'country',
        lat: 'lat',
        lng: 'lng',
        street1: 'street1',
        street2: 'street2',
        zip: 'zip',
      },
      timezone: 'timezone',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.owners.list();
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
      client.owners.list(
        {
          filter_active: true,
          filter_createdAt_from: 'filter_createdAt_from',
          filter_createdAt_to: 'filter_createdAt_to',
          filter_group: 'filter_group',
          filter_management_ends_before: 'filter_management_ends_before',
          filter_property: 'filter_property',
          filter_text: 'filter_text',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doorloop.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.owners.delete('ownerId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
