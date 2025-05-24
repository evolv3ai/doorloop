// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Doorloop from 'doorloop';

const client = new Doorloop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource leases', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.leases.retrieve('leaseId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.leases.list();
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
      client.leases.list(
        {
          filter_end_date_from: 'filter_end_date_from',
          filter_end_date_to: 'filter_end_date_to',
          filter_group: 'filter_group',
          filter_outstandingBalanceGreaterThan: 0,
          filter_owner: 'filter_owner',
          filter_property: 'filter_property',
          filter_propertyClass: 'RESIDENTIAL',
          filter_start_date_from: 'filter_start_date_from',
          filter_start_date_to: 'filter_start_date_to',
          filter_status: 'ACTIVE',
          filter_tenant: 'filter_tenant',
          filter_term: 'Rollover',
          filter_text: 'filter_text',
          filter_unit: 'filter_unit',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doorloop.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTenants', async () => {
    const responsePromise = client.leases.listTenants();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTenants: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.leases.listTenants(
        {
          filter_group: 'filter_group',
          filter_lease: 'filter_lease',
          filter_movedInAt_from: 'filter_movedInAt_from',
          filter_movedInAt_to: 'filter_movedInAt_to',
          filter_movedOutAt_from: 'filter_movedOutAt_from',
          filter_movedOutAt_To: 'filter_movedOutAt_To',
          filter_property: 'filter_property',
          filter_status: 'filter_status',
          filter_text: 'filter_text',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doorloop.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('moveIn: only required params', async () => {
    const responsePromise = client.leases.moveIn({
      leaseId: '00000020f51bb4362eee2a4d',
      moveInAt: 'moveInAt',
      portalEnabled: true,
      tenantIds: ['507f191e810c19729de860ea'],
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
  test.skip('moveIn: required and optional params', async () => {
    const response = await client.leases.moveIn({
      leaseId: '00000020f51bb4362eee2a4d',
      moveInAt: 'moveInAt',
      portalEnabled: true,
      tenantIds: ['507f191e810c19729de860ea'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('moveOut: only required params', async () => {
    const responsePromise = client.leases.moveOut({
      leaseId: '00000020f51bb4362eee2a4d',
      movedOutAt: 'movedOutAt',
      portalEnabled: true,
      tenants: ['507f191e810c19729de860ea'],
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
  test.skip('moveOut: required and optional params', async () => {
    const response = await client.leases.moveOut({
      leaseId: '00000020f51bb4362eee2a4d',
      movedOutAt: 'movedOutAt',
      portalEnabled: true,
      tenants: ['507f191e810c19729de860ea'],
      moveOutNoticeAt: 'moveOutNoticeAt',
      moveOutReason: 'moveOutReason',
    });
  });
});
