// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Retrieves a File Metadata
   *
   * @example
   * ```ts
   * const file = await client.files.retrieve('fileId');
   * ```
   */
  retrieve(fileID: string, options?: RequestOptions): APIPromise<FileRetrieveResponse> {
    return this._client.get(path`/files/${fileID}`, options);
  }

  /**
   * Updates a File Metadata
   *
   * @example
   * ```ts
   * await client.files.update('fileId');
   * ```
   */
  update(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all Files
   *
   * @example
   * ```ts
   * const files = await client.files.list();
   * ```
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/files', { query, ...options });
  }

  /**
   * Deletes a File
   *
   * @example
   * ```ts
   * const file = await client.files.delete('fileId');
   * ```
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<FileDeleteResponse> {
    return this._client.delete(path`/files/${fileID}`, options);
  }

  /**
   * Downloads a File
   *
   * @example
   * ```ts
   * await client.files.download('fileId');
   * ```
   */
  download(fileID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/files/${fileID}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upoads a File
   *
   * @example
   * ```ts
   * await client.files.upload({
   *   file: ['string'],
   *   linkedResource: {
   *     resourceId: '507f191e810c19729de860ea',
   *     resourceType: 'TENANT',
   *   },
   *   name: 'name',
   * });
   * ```
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/files',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export interface FileRetrieveResponse {
  linkedResource: FileRetrieveResponse.LinkedResource;

  /**
   * The name of the file. Must be a valid unix file name.
   */
  name: string;

  id?: string;

  createdAt?: string;

  createdBy?: string;

  /**
   * Read Only. References the URL from which this file can be downloaded
   */
  downloadUrl?: string;

  mimeType?: string;

  notes?: string;

  size?: number;

  tags?: Array<string>;
}

export namespace FileRetrieveResponse {
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
      | 'RENTAL_APPLICATION'
      | 'BILL'
      | 'BILL_PAYMENT'
      | 'VENDOR_CREDIT'
      | 'NOTE'
      | 'INSURANCE_POLICY'
      | 'COMMUNICATION';
  }
}

export interface FileListResponse {
  data?: Array<FileListResponse.Data>;

  total?: number;
}

export namespace FileListResponse {
  export interface Data {
    linkedResource: Data.LinkedResource;

    /**
     * The name of the file. Must be a valid unix file name.
     */
    name: string;

    id?: string;

    createdAt?: string;

    createdBy?: string;

    /**
     * Read Only. References the URL from which this file can be downloaded
     */
    downloadUrl?: string;

    mimeType?: string;

    notes?: string;

    size?: number;

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
        | 'RENTAL_APPLICATION'
        | 'BILL'
        | 'BILL_PAYMENT'
        | 'VENDOR_CREDIT'
        | 'NOTE'
        | 'INSURANCE_POLICY'
        | 'COMMUNICATION';
    }
  }
}

export interface FileDeleteResponse {
  linkedResource: FileDeleteResponse.LinkedResource;

  /**
   * The name of the file. Must be a valid unix file name.
   */
  name: string;

  id?: string;

  createdAt?: string;

  createdBy?: string;

  /**
   * Read Only. References the URL from which this file can be downloaded
   */
  downloadUrl?: string;

  mimeType?: string;

  notes?: string;

  size?: number;

  tags?: Array<string>;
}

export namespace FileDeleteResponse {
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
      | 'RENTAL_APPLICATION'
      | 'BILL'
      | 'BILL_PAYMENT'
      | 'VENDOR_CREDIT'
      | 'NOTE'
      | 'INSURANCE_POLICY'
      | 'COMMUNICATION';
  }
}

export interface FileListParams {
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
   * Filter by File Name or Notes
   */
  filter_text?: string;
}

export interface FileUploadParams {
  /**
   * The binary file data. Max file size 50MB.
   */
  file: Array<string>;

  linkedResource: FileUploadParams.LinkedResource;

  /**
   * The name of the file. Must be a valid unix file name.
   */
  name: string;

  id?: string;

  createdAt?: string;

  createdBy?: string;

  /**
   * Read Only. References the URL from which this file can be downloaded
   */
  downloadUrl?: string;

  mimeType?: string;

  notes?: string;

  size?: number;

  tags?: Array<string>;
}

export namespace FileUploadParams {
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
      | 'RENTAL_APPLICATION'
      | 'BILL'
      | 'BILL_PAYMENT'
      | 'VENDOR_CREDIT'
      | 'NOTE'
      | 'INSURANCE_POLICY'
      | 'COMMUNICATION';
  }
}

export declare namespace Files {
  export {
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileListParams as FileListParams,
    type FileUploadParams as FileUploadParams,
  };
}
