// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Owners extends APIResource {
  /**
   * Creates an Owner
   *
   * @example
   * ```ts
   * const owner = await client.owners.create({
   *   active: true,
   *   firstName: 'firstName',
   *   lastName: 'lastName',
   * });
   * ```
   */
  create(body: OwnerCreateParams, options?: RequestOptions): APIPromise<OwnerCreateResponse> {
    return this._client.post('/owners', { body, ...options });
  }

  /**
   * Retrieves an Owner
   *
   * @example
   * ```ts
   * const owner = await client.owners.retrieve('ownerId');
   * ```
   */
  retrieve(ownerID: string, options?: RequestOptions): APIPromise<OwnerRetrieveResponse> {
    return this._client.get(path`/owners/${ownerID}`, options);
  }

  /**
   * Updates an Owner
   *
   * @example
   * ```ts
   * const owner = await client.owners.update('ownerId', {
   *   active: true,
   *   firstName: 'firstName',
   *   lastName: 'lastName',
   * });
   * ```
   */
  update(
    ownerID: string,
    body: OwnerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OwnerUpdateResponse> {
    return this._client.put(path`/owners/${ownerID}`, { body, ...options });
  }

  /**
   * Lists all Owners
   *
   * @example
   * ```ts
   * const owners = await client.owners.list();
   * ```
   */
  list(
    query: OwnerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OwnerListResponse> {
    return this._client.get('/owners', { query, ...options });
  }

  /**
   * Deletes an Owner
   *
   * @example
   * ```ts
   * const owner = await client.owners.delete('ownerId');
   * ```
   */
  delete(ownerID: string, options?: RequestOptions): APIPromise<OwnerDeleteResponse> {
    return this._client.delete(path`/owners/${ownerID}`, options);
  }
}

export interface OwnerCreateResponse {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<OwnerCreateResponse.Email>;

  federalTaxInfo?: OwnerCreateResponse.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementEndDate?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementStartDate?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<OwnerCreateResponse.Phone>;

  pictureUrl?: string;

  primaryAddress?: OwnerCreateResponse.PrimaryAddress;

  timezone?: string;
}

export namespace OwnerCreateResponse {
  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface FederalTaxInfo {
    /**
     * If set to "true", will use the primaryAddress on the 1099 form. Otherwise
     * addressFor1099 will be required.
     */
    addressFor1099SameAsPrimaryAddress: boolean;

    taxpayerId: string;

    taxpayerName: string;

    addressFor1099?: FederalTaxInfo.AddressFor1099;
  }

  export namespace FederalTaxInfo {
    export interface AddressFor1099 {
      city?: string;

      country?: string;

      lat?: string;

      lng?: string;

      street1?: string;

      street2?: string;

      zip?: string;
    }
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PrimaryAddress {
    city?: string;

    country?: string;

    lat?: string;

    lng?: string;

    street1?: string;

    street2?: string;

    zip?: string;
  }
}

export interface OwnerRetrieveResponse {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<OwnerRetrieveResponse.Email>;

  federalTaxInfo?: OwnerRetrieveResponse.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementEndDate?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementStartDate?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<OwnerRetrieveResponse.Phone>;

  pictureUrl?: string;

  primaryAddress?: OwnerRetrieveResponse.PrimaryAddress;

  timezone?: string;
}

export namespace OwnerRetrieveResponse {
  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface FederalTaxInfo {
    /**
     * If set to "true", will use the primaryAddress on the 1099 form. Otherwise
     * addressFor1099 will be required.
     */
    addressFor1099SameAsPrimaryAddress: boolean;

    taxpayerId: string;

    taxpayerName: string;

    addressFor1099?: FederalTaxInfo.AddressFor1099;
  }

  export namespace FederalTaxInfo {
    export interface AddressFor1099 {
      city?: string;

      country?: string;

      lat?: string;

      lng?: string;

      street1?: string;

      street2?: string;

      zip?: string;
    }
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PrimaryAddress {
    city?: string;

    country?: string;

    lat?: string;

    lng?: string;

    street1?: string;

    street2?: string;

    zip?: string;
  }
}

export interface OwnerUpdateResponse {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<OwnerUpdateResponse.Email>;

  federalTaxInfo?: OwnerUpdateResponse.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementEndDate?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementStartDate?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<OwnerUpdateResponse.Phone>;

  pictureUrl?: string;

  primaryAddress?: OwnerUpdateResponse.PrimaryAddress;

  timezone?: string;
}

export namespace OwnerUpdateResponse {
  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface FederalTaxInfo {
    /**
     * If set to "true", will use the primaryAddress on the 1099 form. Otherwise
     * addressFor1099 will be required.
     */
    addressFor1099SameAsPrimaryAddress: boolean;

    taxpayerId: string;

    taxpayerName: string;

    addressFor1099?: FederalTaxInfo.AddressFor1099;
  }

  export namespace FederalTaxInfo {
    export interface AddressFor1099 {
      city?: string;

      country?: string;

      lat?: string;

      lng?: string;

      street1?: string;

      street2?: string;

      zip?: string;
    }
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PrimaryAddress {
    city?: string;

    country?: string;

    lat?: string;

    lng?: string;

    street1?: string;

    street2?: string;

    zip?: string;
  }
}

export interface OwnerListResponse {
  data?: Array<OwnerListResponse.Data>;

  total?: number;
}

export namespace OwnerListResponse {
  export interface Data {
    active: boolean;

    firstName: string;

    lastName: string;

    id?: string;

    company?: string;

    companyName?: string;

    /**
     * Format: YYYY-MM-DD
     */
    dateOfBirth?: string;

    emails?: Array<Data.Email>;

    federalTaxInfo?: Data.FederalTaxInfo;

    /**
     * Read Only
     */
    fullName?: string;

    gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

    jobTitle?: string;

    /**
     * Format: YYYY-MM-DD
     */
    managementEndDate?: string;

    /**
     * Format: YYYY-MM-DD
     */
    managementStartDate?: string;

    middleName?: string;

    /**
     * Read Only
     */
    name?: string;

    notes?: string;

    phones?: Array<Data.Phone>;

    pictureUrl?: string;

    primaryAddress?: Data.PrimaryAddress;

    timezone?: string;
  }

  export namespace Data {
    export interface Email {
      address: string;

      type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
    }

    export interface FederalTaxInfo {
      /**
       * If set to "true", will use the primaryAddress on the 1099 form. Otherwise
       * addressFor1099 will be required.
       */
      addressFor1099SameAsPrimaryAddress: boolean;

      taxpayerId: string;

      taxpayerName: string;

      addressFor1099?: FederalTaxInfo.AddressFor1099;
    }

    export namespace FederalTaxInfo {
      export interface AddressFor1099 {
        city?: string;

        country?: string;

        lat?: string;

        lng?: string;

        street1?: string;

        street2?: string;

        zip?: string;
      }
    }

    export interface Phone {
      number: string;

      type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
    }

    export interface PrimaryAddress {
      city?: string;

      country?: string;

      lat?: string;

      lng?: string;

      street1?: string;

      street2?: string;

      zip?: string;
    }
  }
}

export interface OwnerDeleteResponse {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<OwnerDeleteResponse.Email>;

  federalTaxInfo?: OwnerDeleteResponse.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementEndDate?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementStartDate?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<OwnerDeleteResponse.Phone>;

  pictureUrl?: string;

  primaryAddress?: OwnerDeleteResponse.PrimaryAddress;

  timezone?: string;
}

export namespace OwnerDeleteResponse {
  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface FederalTaxInfo {
    /**
     * If set to "true", will use the primaryAddress on the 1099 form. Otherwise
     * addressFor1099 will be required.
     */
    addressFor1099SameAsPrimaryAddress: boolean;

    taxpayerId: string;

    taxpayerName: string;

    addressFor1099?: FederalTaxInfo.AddressFor1099;
  }

  export namespace FederalTaxInfo {
    export interface AddressFor1099 {
      city?: string;

      country?: string;

      lat?: string;

      lng?: string;

      street1?: string;

      street2?: string;

      zip?: string;
    }
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PrimaryAddress {
    city?: string;

    country?: string;

    lat?: string;

    lng?: string;

    street1?: string;

    street2?: string;

    zip?: string;
  }
}

export interface OwnerCreateParams {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<OwnerCreateParams.Email>;

  federalTaxInfo?: OwnerCreateParams.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementEndDate?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementStartDate?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<OwnerCreateParams.Phone>;

  pictureUrl?: string;

  primaryAddress?: OwnerCreateParams.PrimaryAddress;

  timezone?: string;
}

export namespace OwnerCreateParams {
  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface FederalTaxInfo {
    /**
     * If set to "true", will use the primaryAddress on the 1099 form. Otherwise
     * addressFor1099 will be required.
     */
    addressFor1099SameAsPrimaryAddress: boolean;

    taxpayerId: string;

    taxpayerName: string;

    addressFor1099?: FederalTaxInfo.AddressFor1099;
  }

  export namespace FederalTaxInfo {
    export interface AddressFor1099 {
      city?: string;

      country?: string;

      lat?: string;

      lng?: string;

      street1?: string;

      street2?: string;

      zip?: string;
    }
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PrimaryAddress {
    city?: string;

    country?: string;

    lat?: string;

    lng?: string;

    street1?: string;

    street2?: string;

    zip?: string;
  }
}

export interface OwnerUpdateParams {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<OwnerUpdateParams.Email>;

  federalTaxInfo?: OwnerUpdateParams.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementEndDate?: string;

  /**
   * Format: YYYY-MM-DD
   */
  managementStartDate?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<OwnerUpdateParams.Phone>;

  pictureUrl?: string;

  primaryAddress?: OwnerUpdateParams.PrimaryAddress;

  timezone?: string;
}

export namespace OwnerUpdateParams {
  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface FederalTaxInfo {
    /**
     * If set to "true", will use the primaryAddress on the 1099 form. Otherwise
     * addressFor1099 will be required.
     */
    addressFor1099SameAsPrimaryAddress: boolean;

    taxpayerId: string;

    taxpayerName: string;

    addressFor1099?: FederalTaxInfo.AddressFor1099;
  }

  export namespace FederalTaxInfo {
    export interface AddressFor1099 {
      city?: string;

      country?: string;

      lat?: string;

      lng?: string;

      street1?: string;

      street2?: string;

      zip?: string;
    }
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PrimaryAddress {
    city?: string;

    country?: string;

    lat?: string;

    lng?: string;

    street1?: string;

    street2?: string;

    zip?: string;
  }
}

export interface OwnerListParams {
  /**
   * Filter by Active/Inactive
   */
  filter_active?: boolean;

  /**
   * Format: YYYY-MM-DD
   */
  filter_createdAt_from?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_createdAt_to?: string;

  /**
   * Filter by Portfolio Id
   */
  filter_group?: string;

  /**
   * Format: YYYY-MM-DD
   */
  filter_management_ends_before?: string;

  /**
   * Filter by Property Id
   */
  filter_property?: string;

  /**
   * Filter by Owner Name / Email
   */
  filter_text?: string;
}

export declare namespace Owners {
  export {
    type OwnerCreateResponse as OwnerCreateResponse,
    type OwnerRetrieveResponse as OwnerRetrieveResponse,
    type OwnerUpdateResponse as OwnerUpdateResponse,
    type OwnerListResponse as OwnerListResponse,
    type OwnerDeleteResponse as OwnerDeleteResponse,
    type OwnerCreateParams as OwnerCreateParams,
    type OwnerUpdateParams as OwnerUpdateParams,
    type OwnerListParams as OwnerListParams,
  };
}
