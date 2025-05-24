// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PropertyGroups extends APIResource {
  /**
   * Retreieves a Portfolio
   */
  retrieve(portfolioID: string, options?: RequestOptions): APIPromise<PropertyGroupRetrieveResponse> {
    return this._client.get(path`/property-groups/${portfolioID}`, options);
  }

  /**
   * Lists all Portfolios
   */
  list(options?: RequestOptions): APIPromise<PropertyGroupListResponse> {
    return this._client.get('/property-groups', options);
  }
}

export interface PropertyGroupRetrieveResponse {
  data?: PropertyGroupRetrieveResponse.Data;

  total?: string;
}

export namespace PropertyGroupRetrieveResponse {
  export interface Data {
    name: string;

    /**
     * An array of Property Ids for properties in this portfolio.
     */
    properties: Array<string>;

    id?: string;
  }
}

export interface PropertyGroupListResponse {
  data?: PropertyGroupListResponse.Data;

  total?: string;
}

export namespace PropertyGroupListResponse {
  export interface Data {
    name: string;

    /**
     * An array of Property Ids for properties in this portfolio.
     */
    properties: Array<string>;

    id?: string;
  }
}

export declare namespace PropertyGroups {
  export {
    type PropertyGroupRetrieveResponse as PropertyGroupRetrieveResponse,
    type PropertyGroupListResponse as PropertyGroupListResponse,
  };
}
