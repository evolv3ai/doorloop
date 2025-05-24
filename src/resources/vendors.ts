// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Vendors extends APIResource {
  /**
   * Creates a Vendor
   *
   * @example
   * ```ts
   * const vendor = await client.vendors.create({
   *   active: true,
   *   firstName: 'firstName',
   *   lastName: 'lastName',
   * });
   * ```
   */
  create(body: VendorCreateParams, options?: RequestOptions): APIPromise<VendorCreateResponse> {
    return this._client.post('/vendors', { body, ...options });
  }

  /**
   * Retrieves a Vendor
   *
   * @example
   * ```ts
   * const vendor = await client.vendors.retrieve('vendorId');
   * ```
   */
  retrieve(vendorID: string, options?: RequestOptions): APIPromise<VendorRetrieveResponse> {
    return this._client.get(path`/vendors/${vendorID}`, options);
  }

  /**
   * Updates a Vendor
   *
   * @example
   * ```ts
   * const vendor = await client.vendors.update('vendorId', {
   *   active: true,
   *   firstName: 'firstName',
   *   lastName: 'lastName',
   * });
   * ```
   */
  update(
    vendorID: string,
    body: VendorUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VendorUpdateResponse> {
    return this._client.put(path`/vendors/${vendorID}`, { body, ...options });
  }

  /**
   * Lists all Vendors
   *
   * @example
   * ```ts
   * const vendors = await client.vendors.list();
   * ```
   */
  list(
    query: VendorListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VendorListResponse> {
    return this._client.get('/vendors', { query, ...options });
  }

  /**
   * Deletes a Vendor
   *
   * @example
   * ```ts
   * const vendor = await client.vendors.delete('vendorId');
   * ```
   */
  delete(vendorID: string, options?: RequestOptions): APIPromise<VendorDeleteResponse> {
    return this._client.delete(path`/vendors/${vendorID}`, options);
  }
}

export interface VendorCreateResponse {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  /**
   * Read Only
   */
  balance?: number;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<VendorCreateResponse.Email>;

  federalTaxInfo?: VendorCreateResponse.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  insuranceInfo?: VendorCreateResponse.InsuranceInfo;

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<VendorCreateResponse.Phone>;

  pictureUrl?: string;

  primaryAddress?: VendorCreateResponse.PrimaryAddress;

  /**
   * References the properties served by this vendor
   */
  properties?: Array<string>;

  timezone?: string;
}

export namespace VendorCreateResponse {
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

  export interface InsuranceInfo {
    coverage: number;

    /**
     * Format: YYYY-MM-DD. Must be before expirationDate.
     */
    effectiveDate: string;

    /**
     * Format: YYYY-MM-DD. Must be after effectiveDate.
     */
    expirationDate: string;

    policyNumber: string;

    provider: string;
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

export interface VendorRetrieveResponse {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  /**
   * Read Only
   */
  balance?: number;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<VendorRetrieveResponse.Email>;

  federalTaxInfo?: VendorRetrieveResponse.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  insuranceInfo?: VendorRetrieveResponse.InsuranceInfo;

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<VendorRetrieveResponse.Phone>;

  pictureUrl?: string;

  primaryAddress?: VendorRetrieveResponse.PrimaryAddress;

  /**
   * References the properties served by this vendor
   */
  properties?: Array<string>;

  timezone?: string;
}

export namespace VendorRetrieveResponse {
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

  export interface InsuranceInfo {
    coverage: number;

    /**
     * Format: YYYY-MM-DD. Must be before expirationDate.
     */
    effectiveDate: string;

    /**
     * Format: YYYY-MM-DD. Must be after effectiveDate.
     */
    expirationDate: string;

    policyNumber: string;

    provider: string;
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

export interface VendorUpdateResponse {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  /**
   * Read Only
   */
  balance?: number;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<VendorUpdateResponse.Email>;

  federalTaxInfo?: VendorUpdateResponse.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  insuranceInfo?: VendorUpdateResponse.InsuranceInfo;

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<VendorUpdateResponse.Phone>;

  pictureUrl?: string;

  primaryAddress?: VendorUpdateResponse.PrimaryAddress;

  /**
   * References the properties served by this vendor
   */
  properties?: Array<string>;

  timezone?: string;
}

export namespace VendorUpdateResponse {
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

  export interface InsuranceInfo {
    coverage: number;

    /**
     * Format: YYYY-MM-DD. Must be before expirationDate.
     */
    effectiveDate: string;

    /**
     * Format: YYYY-MM-DD. Must be after effectiveDate.
     */
    expirationDate: string;

    policyNumber: string;

    provider: string;
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

export interface VendorListResponse {
  data?: Array<VendorListResponse.Data>;

  total?: number;
}

export namespace VendorListResponse {
  export interface Data {
    active: boolean;

    firstName: string;

    lastName: string;

    id?: string;

    /**
     * Read Only
     */
    balance?: number;

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

    insuranceInfo?: Data.InsuranceInfo;

    jobTitle?: string;

    middleName?: string;

    /**
     * Read Only
     */
    name?: string;

    notes?: string;

    phones?: Array<Data.Phone>;

    pictureUrl?: string;

    primaryAddress?: Data.PrimaryAddress;

    /**
     * References the properties served by this vendor
     */
    properties?: Array<string>;

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

    export interface InsuranceInfo {
      coverage: number;

      /**
       * Format: YYYY-MM-DD. Must be before expirationDate.
       */
      effectiveDate: string;

      /**
       * Format: YYYY-MM-DD. Must be after effectiveDate.
       */
      expirationDate: string;

      policyNumber: string;

      provider: string;
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

export interface VendorDeleteResponse {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  /**
   * Read Only
   */
  balance?: number;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<VendorDeleteResponse.Email>;

  federalTaxInfo?: VendorDeleteResponse.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  insuranceInfo?: VendorDeleteResponse.InsuranceInfo;

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<VendorDeleteResponse.Phone>;

  pictureUrl?: string;

  primaryAddress?: VendorDeleteResponse.PrimaryAddress;

  /**
   * References the properties served by this vendor
   */
  properties?: Array<string>;

  timezone?: string;
}

export namespace VendorDeleteResponse {
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

  export interface InsuranceInfo {
    coverage: number;

    /**
     * Format: YYYY-MM-DD. Must be before expirationDate.
     */
    effectiveDate: string;

    /**
     * Format: YYYY-MM-DD. Must be after effectiveDate.
     */
    expirationDate: string;

    policyNumber: string;

    provider: string;
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

export interface VendorCreateParams {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  /**
   * Read Only
   */
  balance?: number;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<VendorCreateParams.Email>;

  federalTaxInfo?: VendorCreateParams.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  insuranceInfo?: VendorCreateParams.InsuranceInfo;

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<VendorCreateParams.Phone>;

  pictureUrl?: string;

  primaryAddress?: VendorCreateParams.PrimaryAddress;

  /**
   * References the properties served by this vendor
   */
  properties?: Array<string>;

  timezone?: string;
}

export namespace VendorCreateParams {
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

  export interface InsuranceInfo {
    coverage: number;

    /**
     * Format: YYYY-MM-DD. Must be before expirationDate.
     */
    effectiveDate: string;

    /**
     * Format: YYYY-MM-DD. Must be after effectiveDate.
     */
    expirationDate: string;

    policyNumber: string;

    provider: string;
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

export interface VendorUpdateParams {
  active: boolean;

  firstName: string;

  lastName: string;

  id?: string;

  /**
   * Read Only
   */
  balance?: number;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<VendorUpdateParams.Email>;

  federalTaxInfo?: VendorUpdateParams.FederalTaxInfo;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  insuranceInfo?: VendorUpdateParams.InsuranceInfo;

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<VendorUpdateParams.Phone>;

  pictureUrl?: string;

  primaryAddress?: VendorUpdateParams.PrimaryAddress;

  /**
   * References the properties served by this vendor
   */
  properties?: Array<string>;

  timezone?: string;
}

export namespace VendorUpdateParams {
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

  export interface InsuranceInfo {
    coverage: number;

    /**
     * Format: YYYY-MM-DD. Must be before expirationDate.
     */
    effectiveDate: string;

    /**
     * Format: YYYY-MM-DD. Must be after effectiveDate.
     */
    expirationDate: string;

    policyNumber: string;

    provider: string;
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

export interface VendorListParams {
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
   * Format: YYYY-MM-DD
   */
  filter_insurance_expires_before?: string;

  /**
   * If true, will return only vendors with an open balance
   */
  filter_openBalance?: boolean;

  /**
   * Filter by Property Id
   */
  filter_property?: string;
}

export declare namespace Vendors {
  export {
    type VendorCreateResponse as VendorCreateResponse,
    type VendorRetrieveResponse as VendorRetrieveResponse,
    type VendorUpdateResponse as VendorUpdateResponse,
    type VendorListResponse as VendorListResponse,
    type VendorDeleteResponse as VendorDeleteResponse,
    type VendorCreateParams as VendorCreateParams,
    type VendorUpdateParams as VendorUpdateParams,
    type VendorListParams as VendorListParams,
  };
}
