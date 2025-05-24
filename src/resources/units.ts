// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Units extends APIResource {
  /**
   * Retrieves a Unit
   */
  retrieve(unitID: string, options?: RequestOptions): APIPromise<UnitRetrieveResponse> {
    return this._client.get(path`/units/${unitID}`, options);
  }

  /**
   * Lists all Units
   */
  list(
    query: UnitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnitListResponse> {
    return this._client.get('/units', { query, ...options });
  }
}

export interface UnitRetrieveResponse {
  name: string;

  property: string;

  id?: string;

  active?: boolean;

  address?: UnitRetrieveResponse.Address;

  /**
   * If set to true, the address of this unit will be the same as the property it is
   * linked to and the value in the "address" property will be ignored.
   */
  addressSameAsProperty?: boolean;

  /**
   * Please refer to the MITS standard for a list of possible values
   */
  amenities?: Array<string>;

  baths?: number;

  beds?: number;

  description?: string;

  listing?: UnitRetrieveResponse.Listing;

  marketRent?: number;

  pictures?: Array<UnitRetrieveResponse.Picture>;

  size?: number;
}

export namespace UnitRetrieveResponse {
  export interface Address {
    city?: string;

    country?: string;

    lat?: string;

    lng?: string;

    street1?: string;

    street2?: string;

    zip?: string;
  }

  export interface Listing {
    activeListing?: boolean;

    /**
     * Reference to the User Id who is the listing contact person. The user's contact
     * information (Phone number, Email address) will be posted
     */
    contact?: string;

    dateAvailable?: string;

    deposit?: number;

    leaseLength?: string;

    rent?: number;
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

export interface UnitListResponse {
  data?: Array<UnitListResponse.Data>;

  total?: number;
}

export namespace UnitListResponse {
  export interface Data {
    name: string;

    property: string;

    id?: string;

    active?: boolean;

    address?: Data.Address;

    /**
     * If set to true, the address of this unit will be the same as the property it is
     * linked to and the value in the "address" property will be ignored.
     */
    addressSameAsProperty?: boolean;

    /**
     * Please refer to the MITS standard for a list of possible values
     */
    amenities?: Array<string>;

    baths?: number;

    beds?: number;

    description?: string;

    listing?: Data.Listing;

    marketRent?: number;

    pictures?: Array<Data.Picture>;

    size?: number;
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

    export interface Listing {
      activeListing?: boolean;

      /**
       * Reference to the User Id who is the listing contact person. The user's contact
       * information (Phone number, Email address) will be posted
       */
      contact?: string;

      dateAvailable?: string;

      deposit?: number;

      leaseLength?: string;

      rent?: number;
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

export interface UnitListParams {
  /**
   * Filters by Portfolio Id
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

  /**
   * Filter by Unit Name
   */
  filter_text?: string;
}

export declare namespace Units {
  export {
    type UnitRetrieveResponse as UnitRetrieveResponse,
    type UnitListResponse as UnitListResponse,
    type UnitListParams as UnitListParams,
  };
}
