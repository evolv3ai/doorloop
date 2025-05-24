// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LeasePayments extends APIResource {
  /**
   * Creates a Lease Payment
   *
   * @example
   * ```ts
   * const leasePayment = await client.leasePayments.create({
   *   amountReceived: 1000.5,
   *   autoApplyPaymentOnCharges: true,
   *   depositToAccount: '00000020f51bb4362eee2a4d',
   *   lease: '00000020f51bb4362eee2a4d',
   *   paymentMethod: 'CASH',
   * });
   * ```
   */
  create(body: LeasePaymentCreateParams, options?: RequestOptions): APIPromise<LeasePaymentCreateResponse> {
    return this._client.post('/lease-payments', { body, ...options });
  }

  /**
   * Retrieves a Lease Payment
   *
   * @example
   * ```ts
   * const leasePayment = await client.leasePayments.retrieve(
   *   'leasePaymentId',
   * );
   * ```
   */
  retrieve(leasePaymentID: string, options?: RequestOptions): APIPromise<LeasePaymentRetrieveResponse> {
    return this._client.get(path`/lease-payments/${leasePaymentID}`, options);
  }

  /**
   * Updates a Lease Payment
   *
   * @example
   * ```ts
   * const leasePayment = await client.leasePayments.update(
   *   'leasePaymentId',
   *   {
   *     amountReceived: 1000.5,
   *     autoApplyPaymentOnCharges: true,
   *     depositToAccount: '00000020f51bb4362eee2a4d',
   *     lease: '00000020f51bb4362eee2a4d',
   *     paymentMethod: 'CASH',
   *   },
   * );
   * ```
   */
  update(
    leasePaymentID: string,
    body: LeasePaymentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LeasePaymentUpdateResponse> {
    return this._client.put(path`/lease-payments/${leasePaymentID}`, { body, ...options });
  }

  /**
   * Lists all Lease Payments
   *
   * @example
   * ```ts
   * const leasePayments = await client.leasePayments.list();
   * ```
   */
  list(
    query: LeasePaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeasePaymentListResponse> {
    return this._client.get('/lease-payments', { query, ...options });
  }

  /**
   * Deletes a Lease Payment
   *
   * @example
   * ```ts
   * const leasePayment = await client.leasePayments.delete(
   *   'leasePaymentId',
   * );
   * ```
   */
  delete(leasePaymentID: string, options?: RequestOptions): APIPromise<LeasePaymentDeleteResponse> {
    return this._client.delete(path`/lease-payments/${leasePaymentID}`, options);
  }
}

export interface LeasePaymentCreateResponse {
  amountReceived: number;

  autoApplyPaymentOnCharges: boolean;

  depositToAccount: string;

  lease: string;

  /**
   * Lists all possible payment methods that can be used in payable and receivable
   * transactions.
   */
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

  autoDeposit?: boolean;

  /**
   * Read Only
   */
  depositStatus?: 'DEPOSITED' | 'UNDEPOSITED';

  receivedFromTenant?: string;

  reference?: string;

  /**
   * If this payment was returned, will reference the returned payment
   */
  reversedPayment?: string;
}

export interface LeasePaymentRetrieveResponse {
  amountReceived: number;

  autoApplyPaymentOnCharges: boolean;

  depositToAccount: string;

  lease: string;

  /**
   * Lists all possible payment methods that can be used in payable and receivable
   * transactions.
   */
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

  autoDeposit?: boolean;

  /**
   * Read Only
   */
  depositStatus?: 'DEPOSITED' | 'UNDEPOSITED';

  receivedFromTenant?: string;

  reference?: string;

  /**
   * If this payment was returned, will reference the returned payment
   */
  reversedPayment?: string;
}

export interface LeasePaymentUpdateResponse {
  amountReceived: number;

  autoApplyPaymentOnCharges: boolean;

  depositToAccount: string;

  lease: string;

  /**
   * Lists all possible payment methods that can be used in payable and receivable
   * transactions.
   */
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

  autoDeposit?: boolean;

  /**
   * Read Only
   */
  depositStatus?: 'DEPOSITED' | 'UNDEPOSITED';

  receivedFromTenant?: string;

  reference?: string;

  /**
   * If this payment was returned, will reference the returned payment
   */
  reversedPayment?: string;
}

export interface LeasePaymentListResponse {
  data?: Array<LeasePaymentListResponse.Data>;

  total?: number;
}

export namespace LeasePaymentListResponse {
  export interface Data {
    amountReceived: number;

    autoApplyPaymentOnCharges: boolean;

    depositToAccount: string;

    lease: string;

    /**
     * Lists all possible payment methods that can be used in payable and receivable
     * transactions.
     */
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

    autoDeposit?: boolean;

    /**
     * Read Only
     */
    depositStatus?: 'DEPOSITED' | 'UNDEPOSITED';

    receivedFromTenant?: string;

    reference?: string;

    /**
     * If this payment was returned, will reference the returned payment
     */
    reversedPayment?: string;
  }
}

export interface LeasePaymentDeleteResponse {
  amountReceived: number;

  autoApplyPaymentOnCharges: boolean;

  depositToAccount: string;

  lease: string;

  /**
   * Lists all possible payment methods that can be used in payable and receivable
   * transactions.
   */
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

  autoDeposit?: boolean;

  /**
   * Read Only
   */
  depositStatus?: 'DEPOSITED' | 'UNDEPOSITED';

  receivedFromTenant?: string;

  reference?: string;

  /**
   * If this payment was returned, will reference the returned payment
   */
  reversedPayment?: string;
}

export interface LeasePaymentCreateParams {
  amountReceived: number;

  autoApplyPaymentOnCharges: boolean;

  depositToAccount: string;

  lease: string;

  /**
   * Lists all possible payment methods that can be used in payable and receivable
   * transactions.
   */
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

  autoDeposit?: boolean;

  /**
   * Read Only
   */
  depositStatus?: 'DEPOSITED' | 'UNDEPOSITED';

  receivedFromTenant?: string;

  reference?: string;

  /**
   * If this payment was returned, will reference the returned payment
   */
  reversedPayment?: string;
}

export interface LeasePaymentUpdateParams {
  amountReceived: number;

  autoApplyPaymentOnCharges: boolean;

  depositToAccount: string;

  lease: string;

  /**
   * Lists all possible payment methods that can be used in payable and receivable
   * transactions.
   */
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

  autoDeposit?: boolean;

  /**
   * Read Only
   */
  depositStatus?: 'DEPOSITED' | 'UNDEPOSITED';

  receivedFromTenant?: string;

  reference?: string;

  /**
   * If this payment was returned, will reference the returned payment
   */
  reversedPayment?: string;
}

export interface LeasePaymentListParams {
  /**
   * Filter by Date (YYYY-MM-DD)
   */
  filter_date_from?: string;

  /**
   * Filter by Date (YYYY-MM-DD)
   */
  filter_date_to?: string;

  /**
   * Filter by Lease Id
   */
  filter_lease?: string;

  /**
   * Filter by Owner Id
   */
  filter_owner?: string;

  /**
   * Filter by Payment Method
   */
  filter_paymentMethod?:
    | 'CASH'
    | 'CHECK'
    | 'WIRE'
    | 'CREDIT_CARD'
    | 'CASHIERS_CHECK'
    | 'MONEY_ORDER'
    | 'OTHER'
    | 'EPAY';

  /**
   * Filter by Property Id
   */
  filter_property?: string;
}

export declare namespace LeasePayments {
  export {
    type LeasePaymentCreateResponse as LeasePaymentCreateResponse,
    type LeasePaymentRetrieveResponse as LeasePaymentRetrieveResponse,
    type LeasePaymentUpdateResponse as LeasePaymentUpdateResponse,
    type LeasePaymentListResponse as LeasePaymentListResponse,
    type LeasePaymentDeleteResponse as LeasePaymentDeleteResponse,
    type LeasePaymentCreateParams as LeasePaymentCreateParams,
    type LeasePaymentUpdateParams as LeasePaymentUpdateParams,
    type LeasePaymentListParams as LeasePaymentListParams,
  };
}
