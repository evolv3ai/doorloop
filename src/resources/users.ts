// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Retrieves a User
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/users/${userID}`, options);
  }

  /**
   * Retrieve a list of all users in the account
   */
  list(options?: RequestOptions): APIPromise<UserListResponse> {
    return this._client.get('/users', options);
  }

  /**
   * Retrieves the the user that created this api key
   */
  getCurrent(options?: RequestOptions): APIPromise<UserGetCurrentResponse> {
    return this._client.get('/users/me', options);
  }
}

export interface UserRetrieveResponse {
  active: boolean;

  firstName: string;

  lastName: string;

  loginEmail: string;

  role: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<UserRetrieveResponse.Email>;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  lastSeenAt?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<UserRetrieveResponse.Phone>;

  pictureUrl?: string;

  primaryAddress?: UserRetrieveResponse.PrimaryAddress;

  properties?: string;

  timezone?: string;
}

export namespace UserRetrieveResponse {
  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
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

export interface UserListResponse {
  data?: Array<UserListResponse.Data>;

  total?: number;
}

export namespace UserListResponse {
  export interface Data {
    active: boolean;

    firstName: string;

    lastName: string;

    loginEmail: string;

    role: string;

    id?: string;

    company?: string;

    companyName?: string;

    /**
     * Format: YYYY-MM-DD
     */
    dateOfBirth?: string;

    emails?: Array<Data.Email>;

    /**
     * Read Only
     */
    fullName?: string;

    gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

    jobTitle?: string;

    lastSeenAt?: string;

    middleName?: string;

    /**
     * Read Only
     */
    name?: string;

    notes?: string;

    phones?: Array<Data.Phone>;

    pictureUrl?: string;

    primaryAddress?: Data.PrimaryAddress;

    properties?: string;

    timezone?: string;
  }

  export namespace Data {
    export interface Email {
      address: string;

      type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
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

export interface UserGetCurrentResponse {
  active: boolean;

  firstName: string;

  lastName: string;

  loginEmail: string;

  role: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  emails?: Array<UserGetCurrentResponse.Email>;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  lastSeenAt?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  phones?: Array<UserGetCurrentResponse.Phone>;

  pictureUrl?: string;

  primaryAddress?: UserGetCurrentResponse.PrimaryAddress;

  properties?: string;

  timezone?: string;
}

export namespace UserGetCurrentResponse {
  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
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

export declare namespace Users {
  export {
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserGetCurrentResponse as UserGetCurrentResponse,
  };
}
