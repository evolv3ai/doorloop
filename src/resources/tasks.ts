// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Creates a Task
   *
   * @example
   * ```ts
   * const task = await client.tasks.create({
   *   status: 'NOT_STARTED',
   *   subject: 'subject',
   *   type: 'INTERNAL_TASK',
   * });
   * ```
   */
  create(body: TaskCreateParams, options?: RequestOptions): APIPromise<TaskCreateResponse> {
    return this._client.post('/tasks', { body, ...options });
  }

  /**
   * Retrieves a Task
   *
   * @example
   * ```ts
   * const task = await client.tasks.retrieve('taskId');
   * ```
   */
  retrieve(taskID: string, options?: RequestOptions): APIPromise<TaskRetrieveResponse> {
    return this._client.get(path`/tasks/${taskID}`, options);
  }

  /**
   * Updates a Task
   *
   * @example
   * ```ts
   * const task = await client.tasks.update('taskId', {
   *   status: 'NOT_STARTED',
   *   subject: 'subject',
   *   type: 'INTERNAL_TASK',
   * });
   * ```
   */
  update(taskID: string, body: TaskUpdateParams, options?: RequestOptions): APIPromise<TaskUpdateResponse> {
    return this._client.put(path`/tasks/${taskID}`, { body, ...options });
  }

  /**
   * Retrieves all Tasks
   *
   * @example
   * ```ts
   * const tasks = await client.tasks.list();
   * ```
   */
  list(
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskListResponse> {
    return this._client.get('/tasks', { query, ...options });
  }

  /**
   * Deletes a Task
   *
   * @example
   * ```ts
   * const task = await client.tasks.delete('taskId');
   * ```
   */
  delete(taskID: string, options?: RequestOptions): APIPromise<TaskDeleteResponse> {
    return this._client.delete(path`/tasks/${taskID}`, options);
  }

  /**
   * Posts an update on a task
   *
   * @example
   * ```ts
   * const response = await client.tasks.postUpdate({
   *   taskId: '00000020f51bb4362eee2a4d',
   * });
   * ```
   */
  postUpdate(body: TaskPostUpdateParams, options?: RequestOptions): APIPromise<TaskPostUpdateResponse> {
    return this._client.post('/tasks/update', { body, ...options });
  }
}

export interface TaskCreateResponse {
  status: 'NOT_STARTED' | 'RECEIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';

  subject: string;

  type: 'INTERNAL_TASK' | 'TENANT_REQUEST' | 'OWNER_REQUEST' | 'WORK_ORDER';

  id?: string;

  assignedToUsers?: Array<string>;

  createdAt?: number;

  description?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dueDate?: string;

  entryNotes?: string;

  entryPermission?: 'NOT_APPLICABLE' | 'YES' | 'NO';

  /**
   * If set to "true", the assigned to users will be notified when this task is
   * created or updated.
   */
  notifyAssignees?: boolean;

  /**
   * If type = TENANT_REQUEST and notifyTenant = "true" the tenants will be notified
   * when this task is created or updated.
   */
  notifyTenant?: boolean;

  priority?: 'LOW' | 'MEDIUM' | 'HIGH';

  property?: string;

  reference?: string;

  /**
   * The Owner Id who requested this task. Required if type == OWNER_REQUEST.
   */
  requestedByOwner?: string;

  /**
   * The Tenant Id who requested this task. Required if type == TENANT_REQUEST.
   */
  requestedByTenant?: string;

  /**
   * The User Id who requested this task. Required if type == INTERNAL_TASK.
   */
  requestedByUser?: string;

  unit?: string;

  updatedAt?: number;

  /**
   * Required if type == WORK_ORDER
   */
  workOrder?: TaskCreateResponse.WorkOrder;
}

export namespace TaskCreateResponse {
  /**
   * Required if type == WORK_ORDER
   */
  export interface WorkOrder {
    assignedToVendor: string;

    approvedByOwner?: boolean;

    /**
     * Read Only. If billed == true, the Vendor Bill Id be referenced under
     * "vendorBill"
     */
    billed?: boolean;

    instructionsToVendor?: string;

    vendorBill?: string;
  }
}

export interface TaskRetrieveResponse {
  status: 'NOT_STARTED' | 'RECEIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';

  subject: string;

  type: 'INTERNAL_TASK' | 'TENANT_REQUEST' | 'OWNER_REQUEST' | 'WORK_ORDER';

  id?: string;

  assignedToUsers?: Array<string>;

  createdAt?: number;

  description?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dueDate?: string;

  entryNotes?: string;

  entryPermission?: 'NOT_APPLICABLE' | 'YES' | 'NO';

  /**
   * If set to "true", the assigned to users will be notified when this task is
   * created or updated.
   */
  notifyAssignees?: boolean;

  /**
   * If type = TENANT_REQUEST and notifyTenant = "true" the tenants will be notified
   * when this task is created or updated.
   */
  notifyTenant?: boolean;

  priority?: 'LOW' | 'MEDIUM' | 'HIGH';

  property?: string;

  reference?: string;

  /**
   * The Owner Id who requested this task. Required if type == OWNER_REQUEST.
   */
  requestedByOwner?: string;

  /**
   * The Tenant Id who requested this task. Required if type == TENANT_REQUEST.
   */
  requestedByTenant?: string;

  /**
   * The User Id who requested this task. Required if type == INTERNAL_TASK.
   */
  requestedByUser?: string;

  unit?: string;

  updatedAt?: number;

  /**
   * Required if type == WORK_ORDER
   */
  workOrder?: TaskRetrieveResponse.WorkOrder;
}

export namespace TaskRetrieveResponse {
  /**
   * Required if type == WORK_ORDER
   */
  export interface WorkOrder {
    assignedToVendor: string;

    approvedByOwner?: boolean;

    /**
     * Read Only. If billed == true, the Vendor Bill Id be referenced under
     * "vendorBill"
     */
    billed?: boolean;

    instructionsToVendor?: string;

    vendorBill?: string;
  }
}

export interface TaskUpdateResponse {
  status: 'NOT_STARTED' | 'RECEIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';

  subject: string;

  type: 'INTERNAL_TASK' | 'TENANT_REQUEST' | 'OWNER_REQUEST' | 'WORK_ORDER';

  id?: string;

  assignedToUsers?: Array<string>;

  createdAt?: number;

  description?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dueDate?: string;

  entryNotes?: string;

  entryPermission?: 'NOT_APPLICABLE' | 'YES' | 'NO';

  /**
   * If set to "true", the assigned to users will be notified when this task is
   * created or updated.
   */
  notifyAssignees?: boolean;

  /**
   * If type = TENANT_REQUEST and notifyTenant = "true" the tenants will be notified
   * when this task is created or updated.
   */
  notifyTenant?: boolean;

  priority?: 'LOW' | 'MEDIUM' | 'HIGH';

  property?: string;

  reference?: string;

  /**
   * The Owner Id who requested this task. Required if type == OWNER_REQUEST.
   */
  requestedByOwner?: string;

  /**
   * The Tenant Id who requested this task. Required if type == TENANT_REQUEST.
   */
  requestedByTenant?: string;

  /**
   * The User Id who requested this task. Required if type == INTERNAL_TASK.
   */
  requestedByUser?: string;

  unit?: string;

  updatedAt?: number;

  /**
   * Required if type == WORK_ORDER
   */
  workOrder?: TaskUpdateResponse.WorkOrder;
}

export namespace TaskUpdateResponse {
  /**
   * Required if type == WORK_ORDER
   */
  export interface WorkOrder {
    assignedToVendor: string;

    approvedByOwner?: boolean;

    /**
     * Read Only. If billed == true, the Vendor Bill Id be referenced under
     * "vendorBill"
     */
    billed?: boolean;

    instructionsToVendor?: string;

    vendorBill?: string;
  }
}

export interface TaskListResponse {
  data?: Array<TaskListResponse.Data>;

  total?: number;
}

export namespace TaskListResponse {
  export interface Data {
    status: 'NOT_STARTED' | 'RECEIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';

    subject: string;

    type: 'INTERNAL_TASK' | 'TENANT_REQUEST' | 'OWNER_REQUEST' | 'WORK_ORDER';

    id?: string;

    assignedToUsers?: Array<string>;

    createdAt?: number;

    description?: string;

    /**
     * Format: YYYY-MM-DD
     */
    dueDate?: string;

    entryNotes?: string;

    entryPermission?: 'NOT_APPLICABLE' | 'YES' | 'NO';

    /**
     * If set to "true", the assigned to users will be notified when this task is
     * created or updated.
     */
    notifyAssignees?: boolean;

    /**
     * If type = TENANT_REQUEST and notifyTenant = "true" the tenants will be notified
     * when this task is created or updated.
     */
    notifyTenant?: boolean;

    priority?: 'LOW' | 'MEDIUM' | 'HIGH';

    property?: string;

    reference?: string;

    /**
     * The Owner Id who requested this task. Required if type == OWNER_REQUEST.
     */
    requestedByOwner?: string;

    /**
     * The Tenant Id who requested this task. Required if type == TENANT_REQUEST.
     */
    requestedByTenant?: string;

    /**
     * The User Id who requested this task. Required if type == INTERNAL_TASK.
     */
    requestedByUser?: string;

    unit?: string;

    updatedAt?: number;

    /**
     * Required if type == WORK_ORDER
     */
    workOrder?: Data.WorkOrder;
  }

  export namespace Data {
    /**
     * Required if type == WORK_ORDER
     */
    export interface WorkOrder {
      assignedToVendor: string;

      approvedByOwner?: boolean;

      /**
       * Read Only. If billed == true, the Vendor Bill Id be referenced under
       * "vendorBill"
       */
      billed?: boolean;

      instructionsToVendor?: string;

      vendorBill?: string;
    }
  }
}

export interface TaskDeleteResponse {
  status: 'NOT_STARTED' | 'RECEIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';

  subject: string;

  type: 'INTERNAL_TASK' | 'TENANT_REQUEST' | 'OWNER_REQUEST' | 'WORK_ORDER';

  id?: string;

  assignedToUsers?: Array<string>;

  createdAt?: number;

  description?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dueDate?: string;

  entryNotes?: string;

  entryPermission?: 'NOT_APPLICABLE' | 'YES' | 'NO';

  /**
   * If set to "true", the assigned to users will be notified when this task is
   * created or updated.
   */
  notifyAssignees?: boolean;

  /**
   * If type = TENANT_REQUEST and notifyTenant = "true" the tenants will be notified
   * when this task is created or updated.
   */
  notifyTenant?: boolean;

  priority?: 'LOW' | 'MEDIUM' | 'HIGH';

  property?: string;

  reference?: string;

  /**
   * The Owner Id who requested this task. Required if type == OWNER_REQUEST.
   */
  requestedByOwner?: string;

  /**
   * The Tenant Id who requested this task. Required if type == TENANT_REQUEST.
   */
  requestedByTenant?: string;

  /**
   * The User Id who requested this task. Required if type == INTERNAL_TASK.
   */
  requestedByUser?: string;

  unit?: string;

  updatedAt?: number;

  /**
   * Required if type == WORK_ORDER
   */
  workOrder?: TaskDeleteResponse.WorkOrder;
}

export namespace TaskDeleteResponse {
  /**
   * Required if type == WORK_ORDER
   */
  export interface WorkOrder {
    assignedToVendor: string;

    approvedByOwner?: boolean;

    /**
     * Read Only. If billed == true, the Vendor Bill Id be referenced under
     * "vendorBill"
     */
    billed?: boolean;

    instructionsToVendor?: string;

    vendorBill?: string;
  }
}

export interface TaskPostUpdateResponse {
  status: 'NOT_STARTED' | 'RECEIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';

  subject: string;

  type: 'INTERNAL_TASK' | 'TENANT_REQUEST' | 'OWNER_REQUEST' | 'WORK_ORDER';

  id?: string;

  assignedToUsers?: Array<string>;

  createdAt?: number;

  description?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dueDate?: string;

  entryNotes?: string;

  entryPermission?: 'NOT_APPLICABLE' | 'YES' | 'NO';

  /**
   * If set to "true", the assigned to users will be notified when this task is
   * created or updated.
   */
  notifyAssignees?: boolean;

  /**
   * If type = TENANT_REQUEST and notifyTenant = "true" the tenants will be notified
   * when this task is created or updated.
   */
  notifyTenant?: boolean;

  priority?: 'LOW' | 'MEDIUM' | 'HIGH';

  property?: string;

  reference?: string;

  /**
   * The Owner Id who requested this task. Required if type == OWNER_REQUEST.
   */
  requestedByOwner?: string;

  /**
   * The Tenant Id who requested this task. Required if type == TENANT_REQUEST.
   */
  requestedByTenant?: string;

  /**
   * The User Id who requested this task. Required if type == INTERNAL_TASK.
   */
  requestedByUser?: string;

  unit?: string;

  updatedAt?: number;

  /**
   * Required if type == WORK_ORDER
   */
  workOrder?: TaskPostUpdateResponse.WorkOrder;
}

export namespace TaskPostUpdateResponse {
  /**
   * Required if type == WORK_ORDER
   */
  export interface WorkOrder {
    assignedToVendor: string;

    approvedByOwner?: boolean;

    /**
     * Read Only. If billed == true, the Vendor Bill Id be referenced under
     * "vendorBill"
     */
    billed?: boolean;

    instructionsToVendor?: string;

    vendorBill?: string;
  }
}

export interface TaskCreateParams {
  status: 'NOT_STARTED' | 'RECEIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';

  subject: string;

  type: 'INTERNAL_TASK' | 'TENANT_REQUEST' | 'OWNER_REQUEST' | 'WORK_ORDER';

  id?: string;

  assignedToUsers?: Array<string>;

  createdAt?: number;

  description?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dueDate?: string;

  entryNotes?: string;

  entryPermission?: 'NOT_APPLICABLE' | 'YES' | 'NO';

  /**
   * If set to "true", the assigned to users will be notified when this task is
   * created or updated.
   */
  notifyAssignees?: boolean;

  /**
   * If type = TENANT_REQUEST and notifyTenant = "true" the tenants will be notified
   * when this task is created or updated.
   */
  notifyTenant?: boolean;

  priority?: 'LOW' | 'MEDIUM' | 'HIGH';

  property?: string;

  reference?: string;

  /**
   * The Owner Id who requested this task. Required if type == OWNER_REQUEST.
   */
  requestedByOwner?: string;

  /**
   * The Tenant Id who requested this task. Required if type == TENANT_REQUEST.
   */
  requestedByTenant?: string;

  /**
   * The User Id who requested this task. Required if type == INTERNAL_TASK.
   */
  requestedByUser?: string;

  unit?: string;

  updatedAt?: number;

  /**
   * Required if type == WORK_ORDER
   */
  workOrder?: TaskCreateParams.WorkOrder;
}

export namespace TaskCreateParams {
  /**
   * Required if type == WORK_ORDER
   */
  export interface WorkOrder {
    assignedToVendor: string;

    approvedByOwner?: boolean;

    /**
     * Read Only. If billed == true, the Vendor Bill Id be referenced under
     * "vendorBill"
     */
    billed?: boolean;

    instructionsToVendor?: string;

    vendorBill?: string;
  }
}

export interface TaskUpdateParams {
  status: 'NOT_STARTED' | 'RECEIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';

  subject: string;

  type: 'INTERNAL_TASK' | 'TENANT_REQUEST' | 'OWNER_REQUEST' | 'WORK_ORDER';

  id?: string;

  assignedToUsers?: Array<string>;

  createdAt?: number;

  description?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dueDate?: string;

  entryNotes?: string;

  entryPermission?: 'NOT_APPLICABLE' | 'YES' | 'NO';

  /**
   * If set to "true", the assigned to users will be notified when this task is
   * created or updated.
   */
  notifyAssignees?: boolean;

  /**
   * If type = TENANT_REQUEST and notifyTenant = "true" the tenants will be notified
   * when this task is created or updated.
   */
  notifyTenant?: boolean;

  priority?: 'LOW' | 'MEDIUM' | 'HIGH';

  property?: string;

  reference?: string;

  /**
   * The Owner Id who requested this task. Required if type == OWNER_REQUEST.
   */
  requestedByOwner?: string;

  /**
   * The Tenant Id who requested this task. Required if type == TENANT_REQUEST.
   */
  requestedByTenant?: string;

  /**
   * The User Id who requested this task. Required if type == INTERNAL_TASK.
   */
  requestedByUser?: string;

  unit?: string;

  updatedAt?: number;

  /**
   * Required if type == WORK_ORDER
   */
  workOrder?: TaskUpdateParams.WorkOrder;
}

export namespace TaskUpdateParams {
  /**
   * Required if type == WORK_ORDER
   */
  export interface WorkOrder {
    assignedToVendor: string;

    approvedByOwner?: boolean;

    /**
     * Read Only. If billed == true, the Vendor Bill Id be referenced under
     * "vendorBill"
     */
    billed?: boolean;

    instructionsToVendor?: string;

    vendorBill?: string;
  }
}

export interface TaskListParams {
  /**
   * Filter by User Id or "unassigned"
   */
  filter_assignedToUser?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_completedAt_from?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_completedAt_to?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_createdAt_from?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_createdAt_to?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_dueDate_from?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_dueDate_to?: string;

  /**
   * Filter by Property Id
   */
  filter_property?: string;

  /**
   * Filter by Portfolio Id
   */
  filter_propertyGroup?: string;

  /**
   * Filter by Requested by User, Tenant or Owner Id
   */
  filter_requestedById?: string;

  /**
   * Filter by Task Status
   */
  filter_status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'NOT_COMPLETED' | 'RECEIVED' | 'ARCHIVED';

  /**
   * Filter by Subject, Description or Reference
   */
  filter_text?: string;

  /**
   * Filter by Task Type
   */
  filter_type?: 'INTERNAL_TASK' | 'WORK_ORDER' | 'TENANT_REQUEST' | 'OWNER_REQUEST';

  /**
   * Filter by Unit Id
   */
  filter_unit?: string;
}

export interface TaskPostUpdateParams {
  taskId: string;

  assignedToUsers?: Array<string>;

  /**
   * Format: YYYY-MM-DD
   */
  dueDate?: string;

  /**
   * 10000
   */
  message?: string;

  notifyAssignees?: boolean;

  notifyTenant?: boolean;

  priority?: 'LOW' | 'MEDIUM' | 'HIGH';

  status?: 'NOT_STARTED' | 'RECEIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';
}

export declare namespace Tasks {
  export {
    type TaskCreateResponse as TaskCreateResponse,
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskUpdateResponse as TaskUpdateResponse,
    type TaskListResponse as TaskListResponse,
    type TaskDeleteResponse as TaskDeleteResponse,
    type TaskPostUpdateResponse as TaskPostUpdateResponse,
    type TaskCreateParams as TaskCreateParams,
    type TaskUpdateParams as TaskUpdateParams,
    type TaskListParams as TaskListParams,
    type TaskPostUpdateParams as TaskPostUpdateParams,
  };
}
