// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Reports extends APIResource {
  /**
   * Balance Sheet
   */
  retrieveBalanceSheetSummary(
    query: ReportRetrieveBalanceSheetSummaryParams,
    options?: RequestOptions,
  ): APIPromise<ReportRetrieveBalanceSheetSummaryResponse> {
    return this._client.get('/reports/balance-sheet-summary', { query, ...options });
  }

  /**
   * Cash Flow Statement
   */
  retrieveCashFlowStatement(
    query: ReportRetrieveCashFlowStatementParams,
    options?: RequestOptions,
  ): APIPromise<ReportRetrieveCashFlowStatementResponse> {
    return this._client.get('/reports/cash-flow-statement', { query, ...options });
  }

  /**
   * Profit & Loss
   */
  retrieveProfitAndLossSummary(
    query: ReportRetrieveProfitAndLossSummaryParams,
    options?: RequestOptions,
  ): APIPromise<ReportRetrieveProfitAndLossSummaryResponse> {
    return this._client.get('/reports/profit-and-loss-summary', { query, ...options });
  }

  /**
   * Rent Roll
   */
  retrieveRentRoll(
    query: ReportRetrieveRentRollParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportRetrieveRentRollResponse> {
    return this._client.get('/reports/rent-roll', { query, ...options });
  }
}

export interface ReportRetrieveBalanceSheetSummaryResponse {
  columns?: Array<ReportRetrieveBalanceSheetSummaryResponse.Column>;

  data?: Array<ReportRetrieveBalanceSheetSummaryResponse.Data>;
}

export namespace ReportRetrieveBalanceSheetSummaryResponse {
  export interface Column {
    field?: string;

    title?: string;
  }

  export interface Data {
    accountId?: string;

    accountName?: string;

    accountType?: string;

    groupBy?: unknown;

    parentAccountId?: null;

    rootAccount?: boolean;

    total?: number;

    totalWithSubAccounts?: number;
  }
}

export interface ReportRetrieveCashFlowStatementResponse {
  columns?: Array<ReportRetrieveCashFlowStatementResponse.Column>;

  data?: Array<ReportRetrieveCashFlowStatementResponse.Data>;
}

export namespace ReportRetrieveCashFlowStatementResponse {
  export interface Column {
    field?: string;

    title?: string;
  }

  export interface Data {
    accountId?: string;

    accountName?: string;

    accountType?: string;

    groupBy?: unknown;

    parentAccountId?: null;

    rootAccount?: boolean;

    total?: number;

    totalWithSubAccounts?: number;
  }
}

export interface ReportRetrieveProfitAndLossSummaryResponse {
  columns?: Array<ReportRetrieveProfitAndLossSummaryResponse.Column>;

  data?: Array<ReportRetrieveProfitAndLossSummaryResponse.Data>;
}

export namespace ReportRetrieveProfitAndLossSummaryResponse {
  export interface Column {
    field?: string;

    title?: string;
  }

  export interface Data {
    accountId?: string;

    accountName?: string;

    accountType?: string;

    groupBy?: unknown;

    parentAccountId?: null;

    rootAccount?: boolean;

    total?: number;

    totalWithSubAccounts?: number;
  }
}

export interface ReportRetrieveRentRollResponse {
  active?: boolean;

  baths?: number;

  beds?: number;

  bedsAndBaths?: string;

  end?: string;

  lastPaymentAmount?: number;

  /**
   * Format: YYYY-MM-DD
   */
  lastPaymentDate?: string;

  lastReturnedPaymentAmount?: number;

  /**
   * Format: YYYY-MM-DD
   */
  lastReturnedPaymentDate?: string;

  leaseId?: string;

  leaseName?: string;

  leaseStatus?: 'ACTIVE' | 'INACTIVE';

  marketRent?: number;

  nextLeaseId?: string;

  nextLeaseName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  nextLeaseStart?: string;

  occupied?: boolean;

  pictures?: Array<ReportRetrieveRentRollResponse.Picture>;

  property?: string;

  renewalStage?: 'NOT_STARTED' | 'RENEWAL_DRAFT' | 'RENEWAL_OFFER' | 'NOT_RENEWING';

  rentPerSize?: number;

  rolloverToAtWill?: boolean;

  size?: number;

  start?: string;

  term?: 'FIXED' | 'AT_WILL';

  totalBalanceDue?: number;

  totalDepositsHeld?: number;

  totalRecurringCharges?: number;

  totalRecurringCredits?: number;

  totalRecurringPayments?: number;

  totalRecurringRent?: number;

  unitAmenities?: Array<string>;

  unitId?: string;

  unitName?: string;
}

export namespace ReportRetrieveRentRollResponse {
  export interface Picture {
    rank?: number;

    url?: string;
  }
}

export interface ReportRetrieveBalanceSheetSummaryParams {
  /**
   * Cash / Accrual
   */
  filter_accountingMethod: 'CASH' | 'ACCRUAL';

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
   * Filter by Property Id
   */
  filter_property?: string;

  /**
   * Filter by Owner Id
   */
  filter_propertyOwner?: string;
}

export interface ReportRetrieveCashFlowStatementParams {
  /**
   * Cash / Accrual
   */
  filter_accountingMethod: 'CASH' | 'ACCRUAL';

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
   * Filter by Property Id
   */
  filter_property?: string;

  /**
   * Filter by Owner Id
   */
  filter_propertyOwner?: string;
}

export interface ReportRetrieveProfitAndLossSummaryParams {
  /**
   * Cash / Accrual
   */
  filter_accountingMethod: 'CASH' | 'ACCRUAL';

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
   * Filter by Property Id
   */
  filter_property?: string;

  /**
   * Filter by Owner Id
   */
  filter_propertyOwner?: string;
}

export interface ReportRetrieveRentRollParams {
  /**
   * Format: YYYY-MM-DD
   */
  filter_asOfDate?: string;

  /**
   * Filter by Portfolio Id
   */
  filter_group?: string;

  /**
   * Filter by Owner Id
   */
  filter_owner?: string;

  /**
   * Filter by Property Id
   */
  filter_property?: string;
}

export declare namespace Reports {
  export {
    type ReportRetrieveBalanceSheetSummaryResponse as ReportRetrieveBalanceSheetSummaryResponse,
    type ReportRetrieveCashFlowStatementResponse as ReportRetrieveCashFlowStatementResponse,
    type ReportRetrieveProfitAndLossSummaryResponse as ReportRetrieveProfitAndLossSummaryResponse,
    type ReportRetrieveRentRollResponse as ReportRetrieveRentRollResponse,
    type ReportRetrieveBalanceSheetSummaryParams as ReportRetrieveBalanceSheetSummaryParams,
    type ReportRetrieveCashFlowStatementParams as ReportRetrieveCashFlowStatementParams,
    type ReportRetrieveProfitAndLossSummaryParams as ReportRetrieveProfitAndLossSummaryParams,
    type ReportRetrieveRentRollParams as ReportRetrieveRentRollParams,
  };
}
