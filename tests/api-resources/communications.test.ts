// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Doorloop from 'doorloop';

const client = new Doorloop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource communications', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.communications.create({
      from: { address: 'address', linkedToId: '507f191e810c19729de860ea', linkedToType: 'USER' },
      sentAt: 0,
      status: 'DRAFT',
      subject: 'subject',
      type: 'EMAIL',
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
    const response = await client.communications.create({
      from: {
        address: 'address',
        linkedToId: '507f191e810c19729de860ea',
        linkedToType: 'USER',
        displayName: 'displayName',
      },
      sentAt: 0,
      status: 'DRAFT',
      subject: 'subject',
      type: 'EMAIL',
      id: '00000020f51bb4362eee2a4d',
      announcement: '00000020f51bb4362eee2a4d',
      bcc: [
        {
          address: 'address',
          linkedToId: '507f191e810c19729de860ea',
          linkedToType: 'USER',
          displayName: 'displayName',
        },
      ],
      bodyHtml: 'bodyHtml',
      bodyPreview: 'bodyPreview',
      bouncedAt: [0],
      cc: [
        {
          address: 'address',
          linkedToId: '507f191e810c19729de860ea',
          linkedToType: 'USER',
          displayName: 'displayName',
        },
      ],
      clickedAt: [0],
      externalId: 'externalId',
      openedAt: [0],
      threadId: 'threadId',
      to: [
        {
          address: 'address',
          linkedToId: '507f191e810c19729de860ea',
          linkedToType: 'USER',
          displayName: 'displayName',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.communications.retrieve('communicationId');
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
    const responsePromise = client.communications.update('communicationId', {
      from: { address: 'address', linkedToId: '507f191e810c19729de860ea', linkedToType: 'USER' },
      sentAt: 0,
      status: 'DRAFT',
      subject: 'subject',
      type: 'EMAIL',
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
    const response = await client.communications.update('communicationId', {
      from: {
        address: 'address',
        linkedToId: '507f191e810c19729de860ea',
        linkedToType: 'USER',
        displayName: 'displayName',
      },
      sentAt: 0,
      status: 'DRAFT',
      subject: 'subject',
      type: 'EMAIL',
      id: '00000020f51bb4362eee2a4d',
      announcement: '00000020f51bb4362eee2a4d',
      bcc: [
        {
          address: 'address',
          linkedToId: '507f191e810c19729de860ea',
          linkedToType: 'USER',
          displayName: 'displayName',
        },
      ],
      bodyHtml: 'bodyHtml',
      bodyPreview: 'bodyPreview',
      bouncedAt: [0],
      cc: [
        {
          address: 'address',
          linkedToId: '507f191e810c19729de860ea',
          linkedToType: 'USER',
          displayName: 'displayName',
        },
      ],
      clickedAt: [0],
      externalId: 'externalId',
      openedAt: [0],
      threadId: 'threadId',
      to: [
        {
          address: 'address',
          linkedToId: '507f191e810c19729de860ea',
          linkedToType: 'USER',
          displayName: 'displayName',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.communications.list();
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
      client.communications.list(
        {
          filter_participantLinkedToId: 'filter_participantLinkedToId',
          filter_participantLinkedToType: 'TENANT',
          filter_sentAt_from: 'filter_sentAt_from',
          filter_sentAt_to: 'filter_sentAt_to',
          filter_status: 'DRAFT',
          filter_threadId: 'filter_threadId',
          filter_type: 'EMAIL',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doorloop.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.communications.delete('communicationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
