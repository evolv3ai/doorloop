// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Doorloop from 'doorloop';

const client = new Doorloop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reports', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveBalanceSheetSummary: only required params', async () => {
    const responsePromise = client.reports.retrieveBalanceSheetSummary({ filter_accountingMethod: 'CASH' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBalanceSheetSummary: required and optional params', async () => {
    const response = await client.reports.retrieveBalanceSheetSummary({
      filter_accountingMethod: 'CASH',
      filter_date_from: 'filter_date_from',
      filter_date_to: 'filter_date_to',
      filter_group: 'filter_group',
      filter_property: 'filter_property',
      filter_propertyOwner: 'filter_propertyOwner',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCashFlowStatement: only required params', async () => {
    const responsePromise = client.reports.retrieveCashFlowStatement({ filter_accountingMethod: 'CASH' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCashFlowStatement: required and optional params', async () => {
    const response = await client.reports.retrieveCashFlowStatement({
      filter_accountingMethod: 'CASH',
      filter_date_from: 'filter_date_from',
      filter_date_to: 'filter_date_to',
      filter_group: 'filter_group',
      filter_property: 'filter_property',
      filter_propertyOwner: 'filter_propertyOwner',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveProfitAndLossSummary: only required params', async () => {
    const responsePromise = client.reports.retrieveProfitAndLossSummary({ filter_accountingMethod: 'CASH' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveProfitAndLossSummary: required and optional params', async () => {
    const response = await client.reports.retrieveProfitAndLossSummary({
      filter_accountingMethod: 'CASH',
      filter_date_from: 'filter_date_from',
      filter_date_to: 'filter_date_to',
      filter_group: 'filter_group',
      filter_property: 'filter_property',
      filter_propertyOwner: 'filter_propertyOwner',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRentRoll', async () => {
    const responsePromise = client.reports.retrieveRentRoll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRentRoll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reports.retrieveRentRoll(
        {
          filter_asOfDate: 'filter_asOfDate',
          filter_group: 'filter_group',
          filter_owner: 'filter_owner',
          filter_property: 'filter_property',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doorloop.NotFoundError);
  });
});
