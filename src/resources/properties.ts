// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Properties extends APIResource {
  /**
   * Retrieves a Property
   */
  retrieve(propertyID: string, options?: RequestOptions): APIPromise<PropertyRetrieveResponse> {
    return this._client.get(path`/properties/${propertyID}`, options);
  }

  /**
   * Lists all Properties
   */
  list(
    query: PropertyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PropertyListResponse> {
    return this._client.get('/properties', { query, ...options });
  }
}

export interface PropertyRetrieveResponse {
  address: PropertyRetrieveResponse.Address;

  name: string;

  type: string;

  id?: string;

  /**
   * Please refer to the MITS standard documentation for a list of possible values
   */
  amenities?: Array<string>;

  /**
   * Read Only
   */
  class?: 'RESIDENTIAL' | 'COMMERCIAL';

  description?: string;

  owners?: Array<PropertyRetrieveResponse.Owner>;

  pictures?: Array<PropertyRetrieveResponse.Picture>;
}

export namespace PropertyRetrieveResponse {
  export interface Address {
    city?: string;

    country?: string;

    lat?: string;

    lng?: string;

    street1?: string;

    street2?: string;

    zip?: string;
  }

  export interface Owner {
    owner: string;

    ownershipPercentage: number;
  }

  export interface Picture {
    /**
     * Represents the index of this picture in ascending order
     */
    rank?: number;

    /**
     * The URL of the picture
     */
    url?: string;
  }
}

export interface PropertyListResponse {
  data?: Array<PropertyListResponse.Data>;

  total?: number;
}

export namespace PropertyListResponse {
  export interface Data {
    address: Data.Address;

    name: string;

    type: string;

    id?: string;

    /**
     * Please refer to the MITS standard documentation for a list of possible values
     */
    amenities?: Array<string>;

    /**
     * Read Only
     */
    class?: 'RESIDENTIAL' | 'COMMERCIAL';

    description?: string;

    owners?: Array<Data.Owner>;

    pictures?: Array<Data.Picture>;
  }

  export namespace Data {
    export interface Address {
      city?: string;

      country?: string;

      lat?: string;

      lng?: string;

      street1?: string;

      street2?: string;

      zip?: string;
    }

    export interface Owner {
      owner: string;

      ownershipPercentage: number;
    }

    export interface Picture {
      /**
       * Represents the index of this picture in ascending order
       */
      rank?: number;

      /**
       * The URL of the picture
       */
      url?: string;
    }
  }
}

export interface PropertyListParams {
  /**
   * Filter by Property Class
   */
  filter_class?: 'RESIDENTIAL' | 'COMMERCIAL';

  /**
   * Filter by Portfolio Id
   */
  filter_group?: string;

  /**
   * Filter by Property Owner
   */
  filter_owner?: string;

  /**
   * Filter by Property Name
   */
  filter_text?: string;
}

export declare namespace Properties {
  export {
    type PropertyRetrieveResponse as PropertyRetrieveResponse,
    type PropertyListResponse as PropertyListResponse,
    type PropertyListParams as PropertyListParams,
  };
}
