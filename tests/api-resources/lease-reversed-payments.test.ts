// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Doorloop from 'doorloop';

const client = new Doorloop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource leaseReversedPayments', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.leaseReversedPayments.create({
      date: 'date',
      lease: '00000020f51bb4362eee2a4d',
      leasePayment: 'leasePayment',
      lines: [{ account: 'account', amount: 0 }],
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
    const response = await client.leaseReversedPayments.create({
      date: 'date',
      lease: '00000020f51bb4362eee2a4d',
      leasePayment: 'leasePayment',
      lines: [
        { account: 'account', amount: 0, id: '507f191e810c19729de860ea', balance: 'balance', memo: 'memo' },
      ],
      batch: 'batch',
      memo: 'memo',
      reference: 'reference',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.leaseReversedPayments.retrieve('leaseReversedPaymentId');
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
    const responsePromise = client.leaseReversedPayments.list();
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
      client.leaseReversedPayments.list(
        {
          filter_date_from: 'filter_date_from',
          filter_date_to: 'filter_date_to',
          filter_lease: 'filter_lease',
          filter_owner: 'filter_owner',
          filter_paymentMethod: 'CASH',
          filter_property: 'filter_property',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doorloop.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.leaseReversedPayments.delete('leaseReversedPaymentId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
