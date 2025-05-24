// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Notes extends APIResource {
  /**
   * Creates a Note
   *
   * @example
   * ```ts
   * const note = await client.notes.create({
   *   linkedResource: {
   *     resourceId: '507f191e810c19729de860ea',
   *     resourceType: 'TENANT',
   *   },
   *   title: 'title',
   * });
   * ```
   */
  create(body: NoteCreateParams, options?: RequestOptions): APIPromise<NoteCreateResponse> {
    return this._client.post('/notes', { body, ...options });
  }

  /**
   * Retrieve a Note
   *
   * @example
   * ```ts
   * await client.notes.retrieve('noteId');
   * ```
   */
  retrieve(noteID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/notes/${noteID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates a Note
   *
   * @example
   * ```ts
   * const note = await client.notes.update('noteId', {
   *   linkedResource: {
   *     resourceId: '507f191e810c19729de860ea',
   *     resourceType: 'TENANT',
   *   },
   *   title: 'title',
   * });
   * ```
   */
  update(noteID: string, body: NoteUpdateParams, options?: RequestOptions): APIPromise<NoteUpdateResponse> {
    return this._client.put(path`/notes/${noteID}`, { body, ...options });
  }

  /**
   * Lists all Notes
   *
   * @example
   * ```ts
   * const notes = await client.notes.list();
   * ```
   */
  list(
    query: NoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NoteListResponse> {
    return this._client.get('/notes', { query, ...options });
  }

  /**
   * Deletes a Note
   *
   * @example
   * ```ts
   * const note = await client.notes.delete('noteId');
   * ```
   */
  delete(noteID: string, options?: RequestOptions): APIPromise<NoteDeleteResponse> {
    return this._client.delete(path`/notes/${noteID}`, options);
  }
}

export interface NoteCreateResponse {
  linkedResource: NoteCreateResponse.LinkedResource;

  title: string;

  id?: string;

  body?: string;

  /**
   * Read Only
   */
  createdAt?: number;

  /**
   * Read Only
   */
  createdBy?: string;

  tags?: Array<string>;
}

export namespace NoteCreateResponse {
  export interface LinkedResource {
    resourceId: string;

    resourceType:
      | 'TENANT'
      | 'OWNER'
      | 'VENDOR'
      | 'PROPERTY'
      | 'UNIT'
      | 'LEASE'
      | 'LEASE_DRAFT'
      | 'TASK'
      | 'RENTAL_APPLICATION';
  }
}

export interface NoteUpdateResponse {
  linkedResource: NoteUpdateResponse.LinkedResource;

  title: string;

  id?: string;

  body?: string;

  /**
   * Read Only
   */
  createdAt?: number;

  /**
   * Read Only
   */
  createdBy?: string;

  tags?: Array<string>;
}

export namespace NoteUpdateResponse {
  export interface LinkedResource {
    resourceId: string;

    resourceType:
      | 'TENANT'
      | 'OWNER'
      | 'VENDOR'
      | 'PROPERTY'
      | 'UNIT'
      | 'LEASE'
      | 'LEASE_DRAFT'
      | 'TASK'
      | 'RENTAL_APPLICATION';
  }
}

export interface NoteListResponse {
  data?: Array<NoteListResponse.Data>;

  total?: number;
}

export namespace NoteListResponse {
  export interface Data {
    linkedResource: Data.LinkedResource;

    title: string;

    id?: string;

    body?: string;

    /**
     * Read Only
     */
    createdAt?: number;

    /**
     * Read Only
     */
    createdBy?: string;

    tags?: Array<string>;
  }

  export namespace Data {
    export interface LinkedResource {
      resourceId: string;

      resourceType:
        | 'TENANT'
        | 'OWNER'
        | 'VENDOR'
        | 'PROPERTY'
        | 'UNIT'
        | 'LEASE'
        | 'LEASE_DRAFT'
        | 'TASK'
        | 'RENTAL_APPLICATION';
    }
  }
}

export interface NoteDeleteResponse {
  linkedResource: NoteDeleteResponse.LinkedResource;

  title: string;

  id?: string;

  body?: string;

  /**
   * Read Only
   */
  createdAt?: number;

  /**
   * Read Only
   */
  createdBy?: string;

  tags?: Array<string>;
}

export namespace NoteDeleteResponse {
  export interface LinkedResource {
    resourceId: string;

    resourceType:
      | 'TENANT'
      | 'OWNER'
      | 'VENDOR'
      | 'PROPERTY'
      | 'UNIT'
      | 'LEASE'
      | 'LEASE_DRAFT'
      | 'TASK'
      | 'RENTAL_APPLICATION';
  }
}

export interface NoteCreateParams {
  linkedResource: NoteCreateParams.LinkedResource;

  title: string;

  id?: string;

  body?: string;

  /**
   * Read Only
   */
  createdAt?: number;

  /**
   * Read Only
   */
  createdBy?: string;

  tags?: Array<string>;
}

export namespace NoteCreateParams {
  export interface LinkedResource {
    resourceId: string;

    resourceType:
      | 'TENANT'
      | 'OWNER'
      | 'VENDOR'
      | 'PROPERTY'
      | 'UNIT'
      | 'LEASE'
      | 'LEASE_DRAFT'
      | 'TASK'
      | 'RENTAL_APPLICATION';
  }
}

export interface NoteUpdateParams {
  linkedResource: NoteUpdateParams.LinkedResource;

  title: string;

  id?: string;

  body?: string;

  /**
   * Read Only
   */
  createdAt?: number;

  /**
   * Read Only
   */
  createdBy?: string;

  tags?: Array<string>;
}

export namespace NoteUpdateParams {
  export interface LinkedResource {
    resourceId: string;

    resourceType:
      | 'TENANT'
      | 'OWNER'
      | 'VENDOR'
      | 'PROPERTY'
      | 'UNIT'
      | 'LEASE'
      | 'LEASE_DRAFT'
      | 'TASK'
      | 'RENTAL_APPLICATION';
  }
}

export interface NoteListParams {
  /**
   * Format: YYYY-MM-DD
   */
  filter_createdAt_from?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_createdAt_to?: string;

  filter_createdBy?: string;

  filter_resourceId?: string;

  filter_tags?: string;

  /**
   * Filter by Note Title or Body
   */
  filter_text?: string;
}

export declare namespace Notes {
  export {
    type NoteCreateResponse as NoteCreateResponse,
    type NoteUpdateResponse as NoteUpdateResponse,
    type NoteListResponse as NoteListResponse,
    type NoteDeleteResponse as NoteDeleteResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteUpdateParams as NoteUpdateParams,
    type NoteListParams as NoteListParams,
  };
}
