// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Doorloop from 'doorloop';

const client = new Doorloop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource expenses', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.expenses.create({
      date: 'date',
      lines: [
        {
          account: '507f191e810c19729de860ea',
          linkedToResourceId: 'linkedToResourceId',
          linkedToResourceType: 'property',
        },
      ],
      payFromAccount: 'payFromAccount',
      paymentMethod: 'CASH',
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
    const response = await client.expenses.create({
      date: 'date',
      lines: [
        {
          account: '507f191e810c19729de860ea',
          linkedToResourceId: 'linkedToResourceId',
          linkedToResourceType: 'property',
          id: '507f191e810c19729de860ea',
          amount: 0,
          balance: 0,
          memo: 'memo',
        },
      ],
      payFromAccount: 'payFromAccount',
      paymentMethod: 'CASH',
      id: '00000020f51bb4362eee2a4d',
      batch: 'batch',
      memo: 'memo',
      payToResourceId: 'payToResourceId',
      payToResourceType: 'payToResourceType',
      reference: 'reference',
      totalAmount: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.expenses.retrieve('expenseId');
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
    const responsePromise = client.expenses.update('expenseId', {
      date: 'date',
      lines: [
        {
          account: '507f191e810c19729de860ea',
          linkedToResourceId: 'linkedToResourceId',
          linkedToResourceType: 'property',
        },
      ],
      payFromAccount: 'payFromAccount',
      paymentMethod: 'CASH',
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
    const response = await client.expenses.update('expenseId', {
      date: 'date',
      lines: [
        {
          account: '507f191e810c19729de860ea',
          linkedToResourceId: 'linkedToResourceId',
          linkedToResourceType: 'property',
          id: '507f191e810c19729de860ea',
          amount: 0,
          balance: 0,
          memo: 'memo',
        },
      ],
      payFromAccount: 'payFromAccount',
      paymentMethod: 'CASH',
      id: '00000020f51bb4362eee2a4d',
      batch: 'batch',
      memo: 'memo',
      payToResourceId: 'payToResourceId',
      payToResourceType: 'payToResourceType',
      reference: 'reference',
      totalAmount: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.expenses.list();
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
      client.expenses.list(
        {
          filter_date_from: 'filter_date_from',
          filter_date_to: 'filter_date_to',
          filter_group: 'filter_group',
          filter_owner: 'filter_owner',
          filter_payFromAccount: 'filter_payFromAccount',
          filter_property: 'filter_property',
          filter_tenant: 'filter_tenant',
          filter_vendor: 'filter_vendor',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doorloop.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.expenses.delete('expenseId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
