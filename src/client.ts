// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  CommunicationCreateParams,
  CommunicationCreateResponse,
  CommunicationDeleteResponse,
  CommunicationListParams,
  CommunicationListResponse,
  CommunicationRetrieveResponse,
  CommunicationUpdateParams,
  CommunicationUpdateResponse,
  Communications,
} from './resources/communications';
import {
  ExpenseCreateParams,
  ExpenseCreateResponse,
  ExpenseDeleteResponse,
  ExpenseListParams,
  ExpenseListResponse,
  ExpenseRetrieveResponse,
  ExpenseUpdateParams,
  ExpenseUpdateResponse,
  Expenses,
} from './resources/expenses';
import {
  FileDeleteResponse,
  FileListParams,
  FileListResponse,
  FileRetrieveResponse,
  FileUploadParams,
  Files,
} from './resources/files';
import {
  LeaseChargeCreateParams,
  LeaseChargeCreateResponse,
  LeaseChargeDeleteResponse,
  LeaseChargeListParams,
  LeaseChargeListResponse,
  LeaseChargeRetrieveResponse,
  LeaseChargeUpdateParams,
  LeaseChargeUpdateResponse,
  LeaseCharges,
} from './resources/lease-charges';
import {
  LeaseCreditCreateParams,
  LeaseCreditCreateResponse,
  LeaseCreditDeleteResponse,
  LeaseCreditListParams,
  LeaseCreditListResponse,
  LeaseCreditRetrieveResponse,
  LeaseCreditUpdateParams,
  LeaseCreditUpdateResponse,
  LeaseCredits,
} from './resources/lease-credits';
import {
  LeasePaymentCreateParams,
  LeasePaymentCreateResponse,
  LeasePaymentDeleteResponse,
  LeasePaymentListParams,
  LeasePaymentListResponse,
  LeasePaymentRetrieveResponse,
  LeasePaymentUpdateParams,
  LeasePaymentUpdateResponse,
  LeasePayments,
} from './resources/lease-payments';
import {
  LeaseReversedPaymentCreateParams,
  LeaseReversedPaymentCreateResponse,
  LeaseReversedPaymentDeleteResponse,
  LeaseReversedPaymentListParams,
  LeaseReversedPaymentListResponse,
  LeaseReversedPaymentRetrieveResponse,
  LeaseReversedPayments,
} from './resources/lease-reversed-payments';
import {
  LeaseListParams,
  LeaseListResponse,
  LeaseListTenantsParams,
  LeaseListTenantsResponse,
  LeaseMoveInParams,
  LeaseMoveInResponse,
  LeaseMoveOutParams,
  LeaseRetrieveResponse,
  Leases,
} from './resources/leases';
import {
  NoteCreateParams,
  NoteCreateResponse,
  NoteDeleteResponse,
  NoteListParams,
  NoteListResponse,
  NoteUpdateParams,
  NoteUpdateResponse,
  Notes,
} from './resources/notes';
import {
  OwnerCreateParams,
  OwnerCreateResponse,
  OwnerDeleteResponse,
  OwnerListParams,
  OwnerListResponse,
  OwnerRetrieveResponse,
  OwnerUpdateParams,
  OwnerUpdateResponse,
  Owners,
} from './resources/owners';
import {
  Properties,
  PropertyListParams,
  PropertyListResponse,
  PropertyRetrieveResponse,
} from './resources/properties';
import {
  PropertyGroupListResponse,
  PropertyGroupRetrieveResponse,
  PropertyGroups,
} from './resources/property-groups';
import {
  ReportRetrieveBalanceSheetSummaryParams,
  ReportRetrieveBalanceSheetSummaryResponse,
  ReportRetrieveCashFlowStatementParams,
  ReportRetrieveCashFlowStatementResponse,
  ReportRetrieveProfitAndLossSummaryParams,
  ReportRetrieveProfitAndLossSummaryResponse,
  ReportRetrieveRentRollParams,
  ReportRetrieveRentRollResponse,
  Reports,
} from './resources/reports';
import {
  TaskCreateParams,
  TaskCreateResponse,
  TaskDeleteResponse,
  TaskListParams,
  TaskListResponse,
  TaskPostUpdateParams,
  TaskPostUpdateResponse,
  TaskRetrieveResponse,
  TaskUpdateParams,
  TaskUpdateResponse,
  Tasks,
} from './resources/tasks';
import {
  TenantCreateParams,
  TenantCreateResponse,
  TenantDeleteResponse,
  TenantListParams,
  TenantListResponse,
  TenantRetrieveResponse,
  TenantUpdateParams,
  TenantUpdateResponse,
  Tenants,
} from './resources/tenants';
import { UnitListParams, UnitListResponse, UnitRetrieveResponse, Units } from './resources/units';
import { UserGetCurrentResponse, UserListResponse, UserRetrieveResponse, Users } from './resources/users';
import {
  VendorBillCreateParams,
  VendorBillCreateResponse,
  VendorBillDeleteResponse,
  VendorBillListParams,
  VendorBillListResponse,
  VendorBillRetrieveResponse,
  VendorBillUpdateParams,
  VendorBillUpdateResponse,
  VendorBills,
} from './resources/vendor-bills';
import {
  VendorCreditCreateParams,
  VendorCreditCreateResponse,
  VendorCreditDeleteResponse,
  VendorCreditListParams,
  VendorCreditListResponse,
  VendorCreditRetrieveResponse,
  VendorCreditUpdateParams,
  VendorCreditUpdateResponse,
  VendorCredits,
} from './resources/vendor-credits';
import {
  VendorCreateParams,
  VendorCreateResponse,
  VendorDeleteResponse,
  VendorListParams,
  VendorListResponse,
  VendorRetrieveResponse,
  VendorUpdateParams,
  VendorUpdateResponse,
  Vendors,
} from './resources/vendors';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Your API key should go here, for example bearer dl_api_key_A11I3SasdCkasdkjVJh20jG00czp5f7q6
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['DOORLOOP_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['DOORLOOP_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Doorloop API.
 */
export class Doorloop {
  apiKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Doorloop API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['DOORLOOP_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['DOORLOOP_BASE_URL'] ?? https://app.doorloop.com/api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('DOORLOOP_BASE_URL'),
    apiKey = readEnv('DOORLOOP_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.DoorloopError(
        "The DOORLOOP_API_KEY environment variable is missing or empty; either provide it, or instantiate the Doorloop client with an apiKey option, like new Doorloop({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://app.doorloop.com/api`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Doorloop.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('DOORLOOP_LOG'), "process.env['DOORLOOP_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    return new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://app.doorloop.com/api';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected authHeaders(opts: FinalRequestOptions): NullableHeaders | undefined {
    return buildHeaders([{ Authorization: this.apiKey }]);
  }

  /**
   * Basic re-implementation of `qs.stringify` for primitive types.
   */
  protected stringifyQuery(query: Record<string, unknown>): string {
    return Object.entries(query)
      .filter(([_, value]) => typeof value !== 'undefined')
      .map(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        if (value === null) {
          return `${encodeURIComponent(key)}=`;
        }
        throw new Errors.DoorloopError(
          `Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
        );
      })
      .join('&');
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private shouldRetry(response: Response): boolean {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): { req: FinalizedRequestInit; url: string; timeout: number } {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Headers {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Doorloop = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static DoorloopError = Errors.DoorloopError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  users: API.Users = new API.Users(this);
  properties: API.Properties = new API.Properties(this);
  units: API.Units = new API.Units(this);
  leases: API.Leases = new API.Leases(this);
  tenants: API.Tenants = new API.Tenants(this);
  leasePayments: API.LeasePayments = new API.LeasePayments(this);
  leaseReversedPayments: API.LeaseReversedPayments = new API.LeaseReversedPayments(this);
  leaseCharges: API.LeaseCharges = new API.LeaseCharges(this);
  leaseCredits: API.LeaseCredits = new API.LeaseCredits(this);
  propertyGroups: API.PropertyGroups = new API.PropertyGroups(this);
  tasks: API.Tasks = new API.Tasks(this);
  owners: API.Owners = new API.Owners(this);
  vendors: API.Vendors = new API.Vendors(this);
  expenses: API.Expenses = new API.Expenses(this);
  vendorBills: API.VendorBills = new API.VendorBills(this);
  vendorCredits: API.VendorCredits = new API.VendorCredits(this);
  reports: API.Reports = new API.Reports(this);
  communications: API.Communications = new API.Communications(this);
  notes: API.Notes = new API.Notes(this);
  files: API.Files = new API.Files(this);
}
Doorloop.Users = Users;
Doorloop.Properties = Properties;
Doorloop.Units = Units;
Doorloop.Leases = Leases;
Doorloop.Tenants = Tenants;
Doorloop.LeasePayments = LeasePayments;
Doorloop.LeaseReversedPayments = LeaseReversedPayments;
Doorloop.LeaseCharges = LeaseCharges;
Doorloop.LeaseCredits = LeaseCredits;
Doorloop.PropertyGroups = PropertyGroups;
Doorloop.Tasks = Tasks;
Doorloop.Owners = Owners;
Doorloop.Vendors = Vendors;
Doorloop.Expenses = Expenses;
Doorloop.VendorBills = VendorBills;
Doorloop.VendorCredits = VendorCredits;
Doorloop.Reports = Reports;
Doorloop.Communications = Communications;
Doorloop.Notes = Notes;
Doorloop.Files = Files;
export declare namespace Doorloop {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Users as Users,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserGetCurrentResponse as UserGetCurrentResponse,
  };

  export {
    Properties as Properties,
    type PropertyRetrieveResponse as PropertyRetrieveResponse,
    type PropertyListResponse as PropertyListResponse,
    type PropertyListParams as PropertyListParams,
  };

  export {
    Units as Units,
    type UnitRetrieveResponse as UnitRetrieveResponse,
    type UnitListResponse as UnitListResponse,
    type UnitListParams as UnitListParams,
  };

  export {
    Leases as Leases,
    type LeaseRetrieveResponse as LeaseRetrieveResponse,
    type LeaseListResponse as LeaseListResponse,
    type LeaseListTenantsResponse as LeaseListTenantsResponse,
    type LeaseMoveInResponse as LeaseMoveInResponse,
    type LeaseListParams as LeaseListParams,
    type LeaseListTenantsParams as LeaseListTenantsParams,
    type LeaseMoveInParams as LeaseMoveInParams,
    type LeaseMoveOutParams as LeaseMoveOutParams,
  };

  export {
    Tenants as Tenants,
    type TenantCreateResponse as TenantCreateResponse,
    type TenantRetrieveResponse as TenantRetrieveResponse,
    type TenantUpdateResponse as TenantUpdateResponse,
    type TenantListResponse as TenantListResponse,
    type TenantDeleteResponse as TenantDeleteResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
  };

  export {
    LeasePayments as LeasePayments,
    type LeasePaymentCreateResponse as LeasePaymentCreateResponse,
    type LeasePaymentRetrieveResponse as LeasePaymentRetrieveResponse,
    type LeasePaymentUpdateResponse as LeasePaymentUpdateResponse,
    type LeasePaymentListResponse as LeasePaymentListResponse,
    type LeasePaymentDeleteResponse as LeasePaymentDeleteResponse,
    type LeasePaymentCreateParams as LeasePaymentCreateParams,
    type LeasePaymentUpdateParams as LeasePaymentUpdateParams,
    type LeasePaymentListParams as LeasePaymentListParams,
  };

  export {
    LeaseReversedPayments as LeaseReversedPayments,
    type LeaseReversedPaymentCreateResponse as LeaseReversedPaymentCreateResponse,
    type LeaseReversedPaymentRetrieveResponse as LeaseReversedPaymentRetrieveResponse,
    type LeaseReversedPaymentListResponse as LeaseReversedPaymentListResponse,
    type LeaseReversedPaymentDeleteResponse as LeaseReversedPaymentDeleteResponse,
    type LeaseReversedPaymentCreateParams as LeaseReversedPaymentCreateParams,
    type LeaseReversedPaymentListParams as LeaseReversedPaymentListParams,
  };

  export {
    LeaseCharges as LeaseCharges,
    type LeaseChargeCreateResponse as LeaseChargeCreateResponse,
    type LeaseChargeRetrieveResponse as LeaseChargeRetrieveResponse,
    type LeaseChargeUpdateResponse as LeaseChargeUpdateResponse,
    type LeaseChargeListResponse as LeaseChargeListResponse,
    type LeaseChargeDeleteResponse as LeaseChargeDeleteResponse,
    type LeaseChargeCreateParams as LeaseChargeCreateParams,
    type LeaseChargeUpdateParams as LeaseChargeUpdateParams,
    type LeaseChargeListParams as LeaseChargeListParams,
  };

  export {
    LeaseCredits as LeaseCredits,
    type LeaseCreditCreateResponse as LeaseCreditCreateResponse,
    type LeaseCreditRetrieveResponse as LeaseCreditRetrieveResponse,
    type LeaseCreditUpdateResponse as LeaseCreditUpdateResponse,
    type LeaseCreditListResponse as LeaseCreditListResponse,
    type LeaseCreditDeleteResponse as LeaseCreditDeleteResponse,
    type LeaseCreditCreateParams as LeaseCreditCreateParams,
    type LeaseCreditUpdateParams as LeaseCreditUpdateParams,
    type LeaseCreditListParams as LeaseCreditListParams,
  };

  export {
    PropertyGroups as PropertyGroups,
    type PropertyGroupRetrieveResponse as PropertyGroupRetrieveResponse,
    type PropertyGroupListResponse as PropertyGroupListResponse,
  };

  export {
    Tasks as Tasks,
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

  export {
    Owners as Owners,
    type OwnerCreateResponse as OwnerCreateResponse,
    type OwnerRetrieveResponse as OwnerRetrieveResponse,
    type OwnerUpdateResponse as OwnerUpdateResponse,
    type OwnerListResponse as OwnerListResponse,
    type OwnerDeleteResponse as OwnerDeleteResponse,
    type OwnerCreateParams as OwnerCreateParams,
    type OwnerUpdateParams as OwnerUpdateParams,
    type OwnerListParams as OwnerListParams,
  };

  export {
    Vendors as Vendors,
    type VendorCreateResponse as VendorCreateResponse,
    type VendorRetrieveResponse as VendorRetrieveResponse,
    type VendorUpdateResponse as VendorUpdateResponse,
    type VendorListResponse as VendorListResponse,
    type VendorDeleteResponse as VendorDeleteResponse,
    type VendorCreateParams as VendorCreateParams,
    type VendorUpdateParams as VendorUpdateParams,
    type VendorListParams as VendorListParams,
  };

  export {
    Expenses as Expenses,
    type ExpenseCreateResponse as ExpenseCreateResponse,
    type ExpenseRetrieveResponse as ExpenseRetrieveResponse,
    type ExpenseUpdateResponse as ExpenseUpdateResponse,
    type ExpenseListResponse as ExpenseListResponse,
    type ExpenseDeleteResponse as ExpenseDeleteResponse,
    type ExpenseCreateParams as ExpenseCreateParams,
    type ExpenseUpdateParams as ExpenseUpdateParams,
    type ExpenseListParams as ExpenseListParams,
  };

  export {
    VendorBills as VendorBills,
    type VendorBillCreateResponse as VendorBillCreateResponse,
    type VendorBillRetrieveResponse as VendorBillRetrieveResponse,
    type VendorBillUpdateResponse as VendorBillUpdateResponse,
    type VendorBillListResponse as VendorBillListResponse,
    type VendorBillDeleteResponse as VendorBillDeleteResponse,
    type VendorBillCreateParams as VendorBillCreateParams,
    type VendorBillUpdateParams as VendorBillUpdateParams,
    type VendorBillListParams as VendorBillListParams,
  };

  export {
    VendorCredits as VendorCredits,
    type VendorCreditCreateResponse as VendorCreditCreateResponse,
    type VendorCreditRetrieveResponse as VendorCreditRetrieveResponse,
    type VendorCreditUpdateResponse as VendorCreditUpdateResponse,
    type VendorCreditListResponse as VendorCreditListResponse,
    type VendorCreditDeleteResponse as VendorCreditDeleteResponse,
    type VendorCreditCreateParams as VendorCreditCreateParams,
    type VendorCreditUpdateParams as VendorCreditUpdateParams,
    type VendorCreditListParams as VendorCreditListParams,
  };

  export {
    Reports as Reports,
    type ReportRetrieveBalanceSheetSummaryResponse as ReportRetrieveBalanceSheetSummaryResponse,
    type ReportRetrieveCashFlowStatementResponse as ReportRetrieveCashFlowStatementResponse,
    type ReportRetrieveProfitAndLossSummaryResponse as ReportRetrieveProfitAndLossSummaryResponse,
    type ReportRetrieveRentRollResponse as ReportRetrieveRentRollResponse,
    type ReportRetrieveBalanceSheetSummaryParams as ReportRetrieveBalanceSheetSummaryParams,
    type ReportRetrieveCashFlowStatementParams as ReportRetrieveCashFlowStatementParams,
    type ReportRetrieveProfitAndLossSummaryParams as ReportRetrieveProfitAndLossSummaryParams,
    type ReportRetrieveRentRollParams as ReportRetrieveRentRollParams,
  };

  export {
    Communications as Communications,
    type CommunicationCreateResponse as CommunicationCreateResponse,
    type CommunicationRetrieveResponse as CommunicationRetrieveResponse,
    type CommunicationUpdateResponse as CommunicationUpdateResponse,
    type CommunicationListResponse as CommunicationListResponse,
    type CommunicationDeleteResponse as CommunicationDeleteResponse,
    type CommunicationCreateParams as CommunicationCreateParams,
    type CommunicationUpdateParams as CommunicationUpdateParams,
    type CommunicationListParams as CommunicationListParams,
  };

  export {
    Notes as Notes,
    type NoteCreateResponse as NoteCreateResponse,
    type NoteUpdateResponse as NoteUpdateResponse,
    type NoteListResponse as NoteListResponse,
    type NoteDeleteResponse as NoteDeleteResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };

  export {
    Files as Files,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileListParams as FileListParams,
    type FileUploadParams as FileUploadParams,
  };
}
