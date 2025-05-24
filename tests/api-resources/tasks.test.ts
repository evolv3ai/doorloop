// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Doorloop from 'doorloop';

const client = new Doorloop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.tasks.create({
      status: 'NOT_STARTED',
      subject: 'subject',
      type: 'INTERNAL_TASK',
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
    const response = await client.tasks.create({
      status: 'NOT_STARTED',
      subject: 'subject',
      type: 'INTERNAL_TASK',
      id: '00000020f51bb4362eee2a4d',
      assignedToUsers: ['507f191e810c19729de860ea'],
      createdAt: 0,
      description: 'description',
      dueDate: 'dueDate',
      entryNotes: 'entryNotes',
      entryPermission: 'NOT_APPLICABLE',
      notifyAssignees: true,
      notifyTenant: true,
      priority: 'LOW',
      property: '00000020f51bb4362eee2a4d',
      reference: 'reference',
      requestedByOwner: 'requestedByOwner',
      requestedByTenant: 'requestedByTenant',
      requestedByUser: 'requestedByUser',
      unit: '00000020f51bb4362eee2a4d',
      updatedAt: 0,
      workOrder: {
        assignedToVendor: '507f191e810c19729de860ea',
        approvedByOwner: true,
        billed: true,
        instructionsToVendor: 'instructionsToVendor',
        vendorBill: '507f191e810c19729de860ea',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.tasks.retrieve('taskId');
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
    const responsePromise = client.tasks.update('taskId', {
      status: 'NOT_STARTED',
      subject: 'subject',
      type: 'INTERNAL_TASK',
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
    const response = await client.tasks.update('taskId', {
      status: 'NOT_STARTED',
      subject: 'subject',
      type: 'INTERNAL_TASK',
      id: '00000020f51bb4362eee2a4d',
      assignedToUsers: ['507f191e810c19729de860ea'],
      createdAt: 0,
      description: 'description',
      dueDate: 'dueDate',
      entryNotes: 'entryNotes',
      entryPermission: 'NOT_APPLICABLE',
      notifyAssignees: true,
      notifyTenant: true,
      priority: 'LOW',
      property: '00000020f51bb4362eee2a4d',
      reference: 'reference',
      requestedByOwner: 'requestedByOwner',
      requestedByTenant: 'requestedByTenant',
      requestedByUser: 'requestedByUser',
      unit: '00000020f51bb4362eee2a4d',
      updatedAt: 0,
      workOrder: {
        assignedToVendor: '507f191e810c19729de860ea',
        approvedByOwner: true,
        billed: true,
        instructionsToVendor: 'instructionsToVendor',
        vendorBill: '507f191e810c19729de860ea',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.tasks.list();
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
      client.tasks.list(
        {
          filter_assignedToUser: 'filter_assignedToUser',
          filter_completedAt_from: 'filter_completedAt_from',
          filter_completedAt_to: 'filter_completedAt_to',
          filter_createdAt_from: 'filter_createdAt_from',
          filter_createdAt_to: 'filter_createdAt_to',
          filter_dueDate_from: 'filter_dueDate_from',
          filter_dueDate_to: 'filter_dueDate_to',
          filter_property: 'filter_property',
          filter_propertyGroup: 'filter_propertyGroup',
          filter_requestedById: 'filter_requestedById',
          filter_status: 'NOT_STARTED',
          filter_text: 'filter_text',
          filter_type: 'INTERNAL_TASK',
          filter_unit: 'filter_unit',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Doorloop.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.tasks.delete('taskId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('postUpdate: only required params', async () => {
    const responsePromise = client.tasks.postUpdate({ taskId: '00000020f51bb4362eee2a4d' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('postUpdate: required and optional params', async () => {
    const response = await client.tasks.postUpdate({
      taskId: '00000020f51bb4362eee2a4d',
      assignedToUsers: ['507f191e810c19729de860ea'],
      dueDate: 'dueDate',
      message: 'message',
      notifyAssignees: true,
      notifyTenant: true,
      priority: 'LOW',
      status: 'NOT_STARTED',
    });
  });
});
