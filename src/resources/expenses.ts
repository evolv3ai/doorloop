// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Expenses extends APIResource {
  /**
   * Creates an Expense
   *
   * @example
   * ```ts
   * const expense = await client.expenses.create({
   *   date: 'date',
   *   lines: [
   *     {
   *       account: '507f191e810c19729de860ea',
   *       linkedToResourceId: 'linkedToResourceId',
   *       linkedToResourceType: 'property',
   *     },
   *   ],
   *   payFromAccount: 'payFromAccount',
   *   paymentMethod: 'CASH',
   * });
   * ```
   */
  create(body: ExpenseCreateParams, options?: RequestOptions): APIPromise<ExpenseCreateResponse> {
    return this._client.post('/expenses', { body, ...options });
  }

  /**
   * Retrieves an Expense
   *
   * @example
   * ```ts
   * const expense = await client.expenses.retrieve('expenseId');
   * ```
   */
  retrieve(expenseID: string, options?: RequestOptions): APIPromise<ExpenseRetrieveResponse> {
    return this._client.get(path`/expenses/${expenseID}`, options);
  }

  /**
   * Updates an Expense
   *
   * @example
   * ```ts
   * const expense = await client.expenses.update('expenseId', {
   *   date: 'date',
   *   lines: [
   *     {
   *       account: '507f191e810c19729de860ea',
   *       linkedToResourceId: 'linkedToResourceId',
   *       linkedToResourceType: 'property',
   *     },
   *   ],
   *   payFromAccount: 'payFromAccount',
   *   paymentMethod: 'CASH',
   * });
   * ```
   */
  update(
    expenseID: string,
    body: ExpenseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExpenseUpdateResponse> {
    return this._client.put(path`/expenses/${expenseID}`, { body, ...options });
  }

  /**
   * Lists all Expenses
   *
   * @example
   * ```ts
   * const expenses = await client.expenses.list();
   * ```
   */
  list(
    query: ExpenseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExpenseListResponse> {
    return this._client.get('/expenses', { query, ...options });
  }

  /**
   * Deletes an Expense
   *
   * @example
   * ```ts
   * const expense = await client.expenses.delete('expenseId');
   * ```
   */
  delete(expenseID: string, options?: RequestOptions): APIPromise<ExpenseDeleteResponse> {
    return this._client.delete(path`/expenses/${expenseID}`, options);
  }
}

export interface ExpenseCreateResponse {
  /**
   * Format: YYYY-MM-DD
   */
  date: string;

  lines: Array<ExpenseCreateResponse.Line>;

  payFromAccount: string;

  paymentMethod:
    | 'CASH'
    | 'CHECK'
    | 'WIRE'
    | 'CREDIT_CARD'
    | 'CASHIERS_CHECK'
    | 'MONEY_ORDER'
    | 'OTHER'
    | 'EPAY';

  id?: string;

  batch?: string;

  memo?: string;

  payToResourceId?: string;

  payToResourceType?: string;

  /**
   * If not provided will be generated automatically by the server.
   */
  reference?: string;

  /**
   * Read Only. Calculated as sum of lines.amount.
   */
  totalAmount?: number;
}

export namespace ExpenseCreateResponse {
  export interface Line {
    account: string;

    /**
     * The Property Id for this line.
     */
    linkedToResourceId: string;

    /**
     * At the monent, only "property" is supported
     */
    linkedToResourceType: 'property';

    id?: string;

    amount?: number;

    /**
     * Read Only
     */
    balance?: number;

    memo?: string;
  }
}

export interface ExpenseRetrieveResponse {
  /**
   * Format: YYYY-MM-DD
   */
  date: string;

  lines: Array<ExpenseRetrieveResponse.Line>;

  payFromAccount: string;

  paymentMethod:
    | 'CASH'
    | 'CHECK'
    | 'WIRE'
    | 'CREDIT_CARD'
    | 'CASHIERS_CHECK'
    | 'MONEY_ORDER'
    | 'OTHER'
    | 'EPAY';

  id?: string;

  batch?: string;

  memo?: string;

  payToResourceId?: string;

  payToResourceType?: string;

  /**
   * If not provided will be generated automatically by the server.
   */
  reference?: string;

  /**
   * Read Only. Calculated as sum of lines.amount.
   */
  totalAmount?: number;
}

export namespace ExpenseRetrieveResponse {
  export interface Line {
    account: string;

    /**
     * The Property Id for this line.
     */
    linkedToResourceId: string;

    /**
     * At the monent, only "property" is supported
     */
    linkedToResourceType: 'property';

    id?: string;

    amount?: number;

    /**
     * Read Only
     */
    balance?: number;

    memo?: string;
  }
}

export interface ExpenseUpdateResponse {
  /**
   * Format: YYYY-MM-DD
   */
  date: string;

  lines: Array<ExpenseUpdateResponse.Line>;

  payFromAccount: string;

  paymentMethod:
    | 'CASH'
    | 'CHECK'
    | 'WIRE'
    | 'CREDIT_CARD'
    | 'CASHIERS_CHECK'
    | 'MONEY_ORDER'
    | 'OTHER'
    | 'EPAY';

  id?: string;

  batch?: string;

  memo?: string;

  payToResourceId?: string;

  payToResourceType?: string;

  /**
   * If not provided will be generated automatically by the server.
   */
  reference?: string;

  /**
   * Read Only. Calculated as sum of lines.amount.
   */
  totalAmount?: number;
}

export namespace ExpenseUpdateResponse {
  export interface Line {
    account: string;

    /**
     * The Property Id for this line.
     */
    linkedToResourceId: string;

    /**
     * At the monent, only "property" is supported
     */
    linkedToResourceType: 'property';

    id?: string;

    amount?: number;

    /**
     * Read Only
     */
    balance?: number;

    memo?: string;
  }
}

export interface ExpenseListResponse {
  data?: Array<ExpenseListResponse.Data>;

  total?: number;
}

export namespace ExpenseListResponse {
  export interface Data {
    /**
     * Format: YYYY-MM-DD
     */
    date: string;

    lines: Array<Data.Line>;

    payFromAccount: string;

    paymentMethod:
      | 'CASH'
      | 'CHECK'
      | 'WIRE'
      | 'CREDIT_CARD'
      | 'CASHIERS_CHECK'
      | 'MONEY_ORDER'
      | 'OTHER'
      | 'EPAY';

    id?: string;

    batch?: string;

    memo?: string;

    payToResourceId?: string;

    payToResourceType?: string;

    /**
     * If not provided will be generated automatically by the server.
     */
    reference?: string;

    /**
     * Read Only. Calculated as sum of lines.amount.
     */
    totalAmount?: number;
  }

  export namespace Data {
    export interface Line {
      account: string;

      /**
       * The Property Id for this line.
       */
      linkedToResourceId: string;

      /**
       * At the monent, only "property" is supported
       */
      linkedToResourceType: 'property';

      id?: string;

      amount?: number;

      /**
       * Read Only
       */
      balance?: number;

      memo?: string;
    }
  }
}

export interface ExpenseDeleteResponse {
  /**
   * Format: YYYY-MM-DD
   */
  date: string;

  lines: Array<ExpenseDeleteResponse.Line>;

  payFromAccount: string;

  paymentMethod:
    | 'CASH'
    | 'CHECK'
    | 'WIRE'
    | 'CREDIT_CARD'
    | 'CASHIERS_CHECK'
    | 'MONEY_ORDER'
    | 'OTHER'
    | 'EPAY';

  id?: string;

  batch?: string;

  memo?: string;

  payToResourceId?: string;

  payToResourceType?: string;

  /**
   * If not provided will be generated automatically by the server.
   */
  reference?: string;

  /**
   * Read Only. Calculated as sum of lines.amount.
   */
  totalAmount?: number;
}

export namespace ExpenseDeleteResponse {
  export interface Line {
    account: string;

    /**
     * The Property Id for this line.
     */
    linkedToResourceId: string;

    /**
     * At the monent, only "property" is supported
     */
    linkedToResourceType: 'property';

    id?: string;

    amount?: number;

    /**
     * Read Only
     */
    balance?: number;

    memo?: string;
  }
}

export interface ExpenseCreateParams {
  /**
   * Format: YYYY-MM-DD
   */
  date: string;

  lines: Array<ExpenseCreateParams.Line>;

  payFromAccount: string;

  paymentMethod:
    | 'CASH'
    | 'CHECK'
    | 'WIRE'
    | 'CREDIT_CARD'
    | 'CASHIERS_CHECK'
    | 'MONEY_ORDER'
    | 'OTHER'
    | 'EPAY';

  id?: string;

  batch?: string;

  memo?: string;

  payToResourceId?: string;

  payToResourceType?: string;

  /**
   * If not provided will be generated automatically by the server.
   */
  reference?: string;

  /**
   * Read Only. Calculated as sum of lines.amount.
   */
  totalAmount?: number;
}

export namespace ExpenseCreateParams {
  export interface Line {
    account: string;

    /**
     * The Property Id for this line.
     */
    linkedToResourceId: string;

    /**
     * At the monent, only "property" is supported
     */
    linkedToResourceType: 'property';

    id?: string;

    amount?: number;

    /**
     * Read Only
     */
    balance?: number;

    memo?: string;
  }
}

export interface ExpenseUpdateParams {
  /**
   * Format: YYYY-MM-DD
   */
  date: string;

  lines: Array<ExpenseUpdateParams.Line>;

  payFromAccount: string;

  paymentMethod:
    | 'CASH'
    | 'CHECK'
    | 'WIRE'
    | 'CREDIT_CARD'
    | 'CASHIERS_CHECK'
    | 'MONEY_ORDER'
    | 'OTHER'
    | 'EPAY';

  id?: string;

  batch?: string;

  memo?: string;

  payToResourceId?: string;

  payToResourceType?: string;

  /**
   * If not provided will be generated automatically by the server.
   */
  reference?: string;

  /**
   * Read Only. Calculated as sum of lines.amount.
   */
  totalAmount?: number;
}

export namespace ExpenseUpdateParams {
  export interface Line {
    account: string;

    /**
     * The Property Id for this line.
     */
    linkedToResourceId: string;

    /**
     * At the monent, only "property" is supported
     */
    linkedToResourceType: 'property';

    id?: string;

    amount?: number;

    /**
     * Read Only
     */
    balance?: number;

    memo?: string;
  }
}

export interface ExpenseListParams {
  /**
   * Format: YYYY-MM-DD
   */
  filter_date_from?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_date_to?: string;

  /**
   * Filter by Portfolio Id
   */
  filter_group?: string;

  /**
   * Filter by Owner Id
   */
  filter_owner?: string;

  /**
   * Filter by Pay From Account Id
   */
  filter_payFromAccount?: string;

  /**
   * Filter by Property Id
   */
  filter_property?: string;

  /**
   * Filter by Tenant Id
   */
  filter_tenant?: string;

  /**
   * Filter by Vendor Id
   */
  filter_vendor?: string;
}

export declare namespace Expenses {
  export {
    type ExpenseCreateResponse as ExpenseCreateResponse,
    type ExpenseRetrieveResponse as ExpenseRetrieveResponse,
    type ExpenseUpdateResponse as ExpenseUpdateResponse,
    type ExpenseListResponse as ExpenseListResponse,
    type ExpenseDeleteResponse as ExpenseDeleteResponse,
    type ExpenseCreateParams as ExpenseCreateParams,
    type ExpenseUpdateParams as ExpenseUpdateParams,
    type ExpenseListParams as ExpenseListParams,
  };
}
