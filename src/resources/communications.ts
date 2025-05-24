// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Communications extends APIResource {
  /**
   * Creates a Communication Log Entry
   *
   * @example
   * ```ts
   * const communication = await client.communications.create({
   *   from: {
   *     address: 'address',
   *     linkedToId: '507f191e810c19729de860ea',
   *     linkedToType: 'USER',
   *   },
   *   sentAt: 0,
   *   status: 'DRAFT',
   *   subject: 'subject',
   *   type: 'EMAIL',
   * });
   * ```
   */
  create(body: CommunicationCreateParams, options?: RequestOptions): APIPromise<CommunicationCreateResponse> {
    return this._client.post('/communications', { body, ...options });
  }

  /**
   * Retrieves a Communication Log Entry
   *
   * @example
   * ```ts
   * const communication = await client.communications.retrieve(
   *   'communicationId',
   * );
   * ```
   */
  retrieve(communicationID: string, options?: RequestOptions): APIPromise<CommunicationRetrieveResponse> {
    return this._client.get(path`/communications/${communicationID}`, options);
  }

  /**
   * Updates a Communication Log Entry
   *
   * @example
   * ```ts
   * const communication = await client.communications.update(
   *   'communicationId',
   *   {
   *     from: {
   *       address: 'address',
   *       linkedToId: '507f191e810c19729de860ea',
   *       linkedToType: 'USER',
   *     },
   *     sentAt: 0,
   *     status: 'DRAFT',
   *     subject: 'subject',
   *     type: 'EMAIL',
   *   },
   * );
   * ```
   */
  update(
    communicationID: string,
    body: CommunicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CommunicationUpdateResponse> {
    return this._client.put(path`/communications/${communicationID}`, { body, ...options });
  }

  /**
   * Lists all Communication Log Entries
   *
   * @example
   * ```ts
   * const communications = await client.communications.list();
   * ```
   */
  list(
    query: CommunicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommunicationListResponse> {
    return this._client.get('/communications', { query, ...options });
  }

  /**
   * Deletes a Communication Log Entry
   *
   * @example
   * ```ts
   * const communication = await client.communications.delete(
   *   'communicationId',
   * );
   * ```
   */
  delete(communicationID: string, options?: RequestOptions): APIPromise<CommunicationDeleteResponse> {
    return this._client.delete(path`/communications/${communicationID}`, options);
  }
}

export interface CommunicationCreateResponse {
  from: CommunicationCreateResponse.From;

  sentAt: number;

  status: 'DRAFT' | 'FAILED' | 'BOUNCED' | 'COMPLAINT' | 'SENT' | 'DELIVERED' | 'OPENED' | 'CLICKED';

  subject: string;

  type: 'EMAIL' | 'PHONE' | 'TEXT';

  id?: string;

  announcement?: string;

  bcc?: Array<CommunicationCreateResponse.Bcc>;

  /**
   * For performance reasons, bodyHtml will only be returned when retrieving a single
   * communication
   */
  bodyHtml?: string;

  bodyPreview?: string;

  bouncedAt?: Array<number>;

  cc?: Array<CommunicationCreateResponse.Cc>;

  clickedAt?: Array<number>;

  externalId?: string;

  openedAt?: Array<number>;

  threadId?: string;

  to?: Array<CommunicationCreateResponse.To>;
}

export namespace CommunicationCreateResponse {
  export interface From {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Bcc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Cc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface To {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }
}

export interface CommunicationRetrieveResponse {
  from: CommunicationRetrieveResponse.From;

  sentAt: number;

  status: 'DRAFT' | 'FAILED' | 'BOUNCED' | 'COMPLAINT' | 'SENT' | 'DELIVERED' | 'OPENED' | 'CLICKED';

  subject: string;

  type: 'EMAIL' | 'PHONE' | 'TEXT';

  id?: string;

  announcement?: string;

  bcc?: Array<CommunicationRetrieveResponse.Bcc>;

  /**
   * For performance reasons, bodyHtml will only be returned when retrieving a single
   * communication
   */
  bodyHtml?: string;

  bodyPreview?: string;

  bouncedAt?: Array<number>;

  cc?: Array<CommunicationRetrieveResponse.Cc>;

  clickedAt?: Array<number>;

  externalId?: string;

  openedAt?: Array<number>;

  threadId?: string;

  to?: Array<CommunicationRetrieveResponse.To>;
}

export namespace CommunicationRetrieveResponse {
  export interface From {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Bcc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Cc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface To {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }
}

export interface CommunicationUpdateResponse {
  from: CommunicationUpdateResponse.From;

  sentAt: number;

  status: 'DRAFT' | 'FAILED' | 'BOUNCED' | 'COMPLAINT' | 'SENT' | 'DELIVERED' | 'OPENED' | 'CLICKED';

  subject: string;

  type: 'EMAIL' | 'PHONE' | 'TEXT';

  id?: string;

  announcement?: string;

  bcc?: Array<CommunicationUpdateResponse.Bcc>;

  /**
   * For performance reasons, bodyHtml will only be returned when retrieving a single
   * communication
   */
  bodyHtml?: string;

  bodyPreview?: string;

  bouncedAt?: Array<number>;

  cc?: Array<CommunicationUpdateResponse.Cc>;

  clickedAt?: Array<number>;

  externalId?: string;

  openedAt?: Array<number>;

  threadId?: string;

  to?: Array<CommunicationUpdateResponse.To>;
}

export namespace CommunicationUpdateResponse {
  export interface From {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Bcc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Cc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface To {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }
}

export interface CommunicationListResponse {
  data?: Array<CommunicationListResponse.Data>;

  total?: number;
}

export namespace CommunicationListResponse {
  export interface Data {
    from: Data.From;

    sentAt: number;

    status: 'DRAFT' | 'FAILED' | 'BOUNCED' | 'COMPLAINT' | 'SENT' | 'DELIVERED' | 'OPENED' | 'CLICKED';

    subject: string;

    type: 'EMAIL' | 'PHONE' | 'TEXT';

    id?: string;

    announcement?: string;

    bcc?: Array<Data.Bcc>;

    /**
     * For performance reasons, bodyHtml will only be returned when retrieving a single
     * communication
     */
    bodyHtml?: string;

    bodyPreview?: string;

    bouncedAt?: Array<number>;

    cc?: Array<Data.Cc>;

    clickedAt?: Array<number>;

    externalId?: string;

    openedAt?: Array<number>;

    threadId?: string;

    to?: Array<Data.To>;
  }

  export namespace Data {
    export interface From {
      address: string;

      linkedToId: string;

      linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

      displayName?: string;
    }

    export interface Bcc {
      address: string;

      linkedToId: string;

      linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

      displayName?: string;
    }

    export interface Cc {
      address: string;

      linkedToId: string;

      linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

      displayName?: string;
    }

    export interface To {
      address: string;

      linkedToId: string;

      linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

      displayName?: string;
    }
  }
}

export interface CommunicationDeleteResponse {
  from: CommunicationDeleteResponse.From;

  sentAt: number;

  status: 'DRAFT' | 'FAILED' | 'BOUNCED' | 'COMPLAINT' | 'SENT' | 'DELIVERED' | 'OPENED' | 'CLICKED';

  subject: string;

  type: 'EMAIL' | 'PHONE' | 'TEXT';

  id?: string;

  announcement?: string;

  bcc?: Array<CommunicationDeleteResponse.Bcc>;

  /**
   * For performance reasons, bodyHtml will only be returned when retrieving a single
   * communication
   */
  bodyHtml?: string;

  bodyPreview?: string;

  bouncedAt?: Array<number>;

  cc?: Array<CommunicationDeleteResponse.Cc>;

  clickedAt?: Array<number>;

  externalId?: string;

  openedAt?: Array<number>;

  threadId?: string;

  to?: Array<CommunicationDeleteResponse.To>;
}

export namespace CommunicationDeleteResponse {
  export interface From {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Bcc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Cc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface To {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }
}

export interface CommunicationCreateParams {
  from: CommunicationCreateParams.From;

  sentAt: number;

  status: 'DRAFT' | 'FAILED' | 'BOUNCED' | 'COMPLAINT' | 'SENT' | 'DELIVERED' | 'OPENED' | 'CLICKED';

  subject: string;

  type: 'EMAIL' | 'PHONE' | 'TEXT';

  id?: string;

  announcement?: string;

  bcc?: Array<CommunicationCreateParams.Bcc>;

  /**
   * For performance reasons, bodyHtml will only be returned when retrieving a single
   * communication
   */
  bodyHtml?: string;

  bodyPreview?: string;

  bouncedAt?: Array<number>;

  cc?: Array<CommunicationCreateParams.Cc>;

  clickedAt?: Array<number>;

  externalId?: string;

  openedAt?: Array<number>;

  threadId?: string;

  to?: Array<CommunicationCreateParams.To>;
}

export namespace CommunicationCreateParams {
  export interface From {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Bcc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Cc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface To {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }
}

export interface CommunicationUpdateParams {
  from: CommunicationUpdateParams.From;

  sentAt: number;

  status: 'DRAFT' | 'FAILED' | 'BOUNCED' | 'COMPLAINT' | 'SENT' | 'DELIVERED' | 'OPENED' | 'CLICKED';

  subject: string;

  type: 'EMAIL' | 'PHONE' | 'TEXT';

  id?: string;

  announcement?: string;

  bcc?: Array<CommunicationUpdateParams.Bcc>;

  /**
   * For performance reasons, bodyHtml will only be returned when retrieving a single
   * communication
   */
  bodyHtml?: string;

  bodyPreview?: string;

  bouncedAt?: Array<number>;

  cc?: Array<CommunicationUpdateParams.Cc>;

  clickedAt?: Array<number>;

  externalId?: string;

  openedAt?: Array<number>;

  threadId?: string;

  to?: Array<CommunicationUpdateParams.To>;
}

export namespace CommunicationUpdateParams {
  export interface From {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Bcc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface Cc {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }

  export interface To {
    address: string;

    linkedToId: string;

    linkedToType: 'USER' | 'TENANT' | 'OWNER' | 'VENDOR' | 'SYSTEM';

    displayName?: string;
  }
}

export interface CommunicationListParams {
  filter_participantLinkedToId?: string;

  filter_participantLinkedToType?: 'TENANT' | 'OWNER' | 'VENDOR' | 'USER' | 'SYSTEM';

  /**
   * Format: YYYY-MM-DD
   */
  filter_sentAt_from?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_sentAt_to?: string;

  filter_status?: 'DRAFT' | 'FAILED' | 'BOUNCED' | 'COMPLAINT' | 'SENT' | 'DELIVERED' | 'OPENED' | 'CLICKED';

  filter_threadId?: string;

  filter_type?: 'EMAIL' | 'PHONE' | 'TEXT';
}

export declare namespace Communications {
  export {
    type CommunicationCreateResponse as CommunicationCreateResponse,
    type CommunicationRetrieveResponse as CommunicationRetrieveResponse,
    type CommunicationUpdateResponse as CommunicationUpdateResponse,
    type CommunicationListResponse as CommunicationListResponse,
    type CommunicationDeleteResponse as CommunicationDeleteResponse,
    type CommunicationCreateParams as CommunicationCreateParams,
    type CommunicationUpdateParams as CommunicationUpdateParams,
    type CommunicationListParams as CommunicationListParams,
  };
}
