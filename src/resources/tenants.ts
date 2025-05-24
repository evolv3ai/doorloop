// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tenants extends APIResource {
  /**
   * Creates a Prospect. In DoorLoop there are 2 types of Tenants: if (type =
   * LEASE_TENANT): This tenant has been associated with a lease. if (type =
   * PROSPECT_TENANT): This tenant has not been associated with a leasa and is
   * considered a "Prospect".
   *
   * All Tenants are created as a PROSPECT_TENANT, and their type changes once they
   * are associated with a lease.
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.create({
   *   firstName: 'firstName',
   *   lastName: 'lastName',
   * });
   * ```
   */
  create(body: TenantCreateParams, options?: RequestOptions): APIPromise<TenantCreateResponse> {
    return this._client.post('/tenants', { body, ...options });
  }

  /**
   * Retrieves a Tenant. In DoorLoop there are 2 types of Tenants: if (type =
   * LEASE_TENANT): This tenant has been associated with a lease. if (type =
   * PROSPECT_TENANT): This tenant has not been associated with a leasa and is
   * considered a "Prospect".
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.retrieve('tenantId');
   * ```
   */
  retrieve(tenantID: string, options?: RequestOptions): APIPromise<TenantRetrieveResponse> {
    return this._client.get(path`/tenants/${tenantID}`, options);
  }

  /**
   * Updates a Tenant
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.update('tenantId', {
   *   firstName: 'firstName',
   *   lastName: 'lastName',
   * });
   * ```
   */
  update(
    tenantID: string,
    body: TenantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TenantUpdateResponse> {
    return this._client.put(path`/tenants/${tenantID}`, { body, ...options });
  }

  /**
   * Retrieves all Tenants. In DoorLoop there are 2 types of Tenants: if (type =
   * LEASE_TENANT): This tenant has been associated with a lease. if (type =
   * PROSPECT_TENANT): This tenant has not been associated with a leasa and is
   * considered a "Prospect".
   *
   * @example
   * ```ts
   * const tenants = await client.tenants.list();
   * ```
   */
  list(
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListResponse> {
    return this._client.get('/tenants', { query, ...options });
  }

  /**
   * Deletes a Tenant
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.delete('tenantId');
   * ```
   */
  delete(tenantID: string, options?: RequestOptions): APIPromise<TenantDeleteResponse> {
    return this._client.delete(path`/tenants/${tenantID}`, options);
  }
}

export interface TenantCreateResponse {
  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  dependants?: Array<TenantCreateResponse.Dependant>;

  emails?: Array<TenantCreateResponse.Email>;

  emergencyContacts?: Array<TenantCreateResponse.EmergencyContact>;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  pets?: Array<TenantCreateResponse.Pet>;

  phones?: Array<TenantCreateResponse.Phone>;

  pictureUrl?: string;

  portalInfo?: TenantCreateResponse.PortalInfo;

  primaryAddress?: TenantCreateResponse.PrimaryAddress;

  prospectInfo?: TenantCreateResponse.ProspectInfo;

  timezone?: string;

  type?: 'LEASE_TENANT' | 'PROSPECT_TENANT';

  vehicles?: Array<TenantCreateResponse.Vehicle>;
}

export namespace TenantCreateResponse {
  export interface Dependant {
    dateOfBirth?: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    relationship?: string;
  }

  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface EmergencyContact {
    email?: string;

    name?: string;

    phone?: string;

    relationship?: string;
  }

  export interface Pet {
    age?: number;

    breed?: string;

    color?: string;

    gender?: string;

    isServiceAnimal?: boolean;

    isSpayedOrNeutered?: boolean;

    name?: string;

    notes?: string;

    petType?: string;

    weight?: number;
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PortalInfo {
    allowAccess?: boolean;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    invitationLastSentAt?: string;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    lastSeenAt?: string;

    loginEmail?: string;

    /**
     * Read Only
     */
    status?: 'ACTIVE' | 'INACTIVE' | 'INVITED';
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

  export interface ProspectInfo {
    /**
     * The User Id this Prospect is assigned to
     */
    assignedToUser?: string;

    campaignContent?: string;

    campaignMedium?: string;

    campaignName?: string;

    campaignSource?: string;

    campaignTerm?: string;

    creditScore?: number;

    /**
     * Format: YYYY-MM-DD
     */
    expectedMoveInDate?: string;

    /**
     * Represents all the properties and/or units this prospect is interested moving
     * into
     */
    interests?: Array<ProspectInfo.Interest>;

    /**
     * References to the Tag Id
     */
    leadSource?: string;

    maxRent?: number;

    minBathrooms?: number;

    minBedrooms?: number;

    monthlyIncome?: number;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    nextTaskDate?: string;

    status?:
      | 'NEW'
      | 'CONTACT_ATTEMPTED'
      | 'CONTACT_MADE'
      | 'SHOWING_SCHEDULED'
      | 'SHOWING_COMPLETED'
      | 'APPLICATION_SENT'
      | 'APPLICATION_SUBMITTED'
      | 'LEASE_OFFER_MADE'
      | 'LEASE_OFFER_ACCEPTED'
      | 'LEASE_SENT_FOR_SIGNATURE'
      | 'CLOSED_MOVED_IN'
      | 'CLOSED_LOST';
  }

  export namespace ProspectInfo {
    export interface Interest {
      /**
       * Reference the Property Id
       */
      property?: string;

      /**
       * Reference the Unit Id
       */
      unit?: string;
    }
  }

  export interface Vehicle {
    color?: string;

    licensePlatae?: string;

    make?: string;

    model?: string;

    notes?: string;

    state?: string;

    year?: number;
  }
}

export interface TenantRetrieveResponse {
  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  dependants?: Array<TenantRetrieveResponse.Dependant>;

  emails?: Array<TenantRetrieveResponse.Email>;

  emergencyContacts?: Array<TenantRetrieveResponse.EmergencyContact>;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  pets?: Array<TenantRetrieveResponse.Pet>;

  phones?: Array<TenantRetrieveResponse.Phone>;

  pictureUrl?: string;

  portalInfo?: TenantRetrieveResponse.PortalInfo;

  primaryAddress?: TenantRetrieveResponse.PrimaryAddress;

  prospectInfo?: TenantRetrieveResponse.ProspectInfo;

  timezone?: string;

  type?: 'LEASE_TENANT' | 'PROSPECT_TENANT';

  vehicles?: Array<TenantRetrieveResponse.Vehicle>;
}

export namespace TenantRetrieveResponse {
  export interface Dependant {
    dateOfBirth?: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    relationship?: string;
  }

  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface EmergencyContact {
    email?: string;

    name?: string;

    phone?: string;

    relationship?: string;
  }

  export interface Pet {
    age?: number;

    breed?: string;

    color?: string;

    gender?: string;

    isServiceAnimal?: boolean;

    isSpayedOrNeutered?: boolean;

    name?: string;

    notes?: string;

    petType?: string;

    weight?: number;
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PortalInfo {
    allowAccess?: boolean;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    invitationLastSentAt?: string;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    lastSeenAt?: string;

    loginEmail?: string;

    /**
     * Read Only
     */
    status?: 'ACTIVE' | 'INACTIVE' | 'INVITED';
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

  export interface ProspectInfo {
    /**
     * The User Id this Prospect is assigned to
     */
    assignedToUser?: string;

    campaignContent?: string;

    campaignMedium?: string;

    campaignName?: string;

    campaignSource?: string;

    campaignTerm?: string;

    creditScore?: number;

    /**
     * Format: YYYY-MM-DD
     */
    expectedMoveInDate?: string;

    /**
     * Represents all the properties and/or units this prospect is interested moving
     * into
     */
    interests?: Array<ProspectInfo.Interest>;

    /**
     * References to the Tag Id
     */
    leadSource?: string;

    maxRent?: number;

    minBathrooms?: number;

    minBedrooms?: number;

    monthlyIncome?: number;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    nextTaskDate?: string;

    status?:
      | 'NEW'
      | 'CONTACT_ATTEMPTED'
      | 'CONTACT_MADE'
      | 'SHOWING_SCHEDULED'
      | 'SHOWING_COMPLETED'
      | 'APPLICATION_SENT'
      | 'APPLICATION_SUBMITTED'
      | 'LEASE_OFFER_MADE'
      | 'LEASE_OFFER_ACCEPTED'
      | 'LEASE_SENT_FOR_SIGNATURE'
      | 'CLOSED_MOVED_IN'
      | 'CLOSED_LOST';
  }

  export namespace ProspectInfo {
    export interface Interest {
      /**
       * Reference the Property Id
       */
      property?: string;

      /**
       * Reference the Unit Id
       */
      unit?: string;
    }
  }

  export interface Vehicle {
    color?: string;

    licensePlatae?: string;

    make?: string;

    model?: string;

    notes?: string;

    state?: string;

    year?: number;
  }
}

export interface TenantUpdateResponse {
  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  dependants?: Array<TenantUpdateResponse.Dependant>;

  emails?: Array<TenantUpdateResponse.Email>;

  emergencyContacts?: Array<TenantUpdateResponse.EmergencyContact>;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  pets?: Array<TenantUpdateResponse.Pet>;

  phones?: Array<TenantUpdateResponse.Phone>;

  pictureUrl?: string;

  portalInfo?: TenantUpdateResponse.PortalInfo;

  primaryAddress?: TenantUpdateResponse.PrimaryAddress;

  prospectInfo?: TenantUpdateResponse.ProspectInfo;

  timezone?: string;

  type?: 'LEASE_TENANT' | 'PROSPECT_TENANT';

  vehicles?: Array<TenantUpdateResponse.Vehicle>;
}

export namespace TenantUpdateResponse {
  export interface Dependant {
    dateOfBirth?: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    relationship?: string;
  }

  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface EmergencyContact {
    email?: string;

    name?: string;

    phone?: string;

    relationship?: string;
  }

  export interface Pet {
    age?: number;

    breed?: string;

    color?: string;

    gender?: string;

    isServiceAnimal?: boolean;

    isSpayedOrNeutered?: boolean;

    name?: string;

    notes?: string;

    petType?: string;

    weight?: number;
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PortalInfo {
    allowAccess?: boolean;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    invitationLastSentAt?: string;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    lastSeenAt?: string;

    loginEmail?: string;

    /**
     * Read Only
     */
    status?: 'ACTIVE' | 'INACTIVE' | 'INVITED';
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

  export interface ProspectInfo {
    /**
     * The User Id this Prospect is assigned to
     */
    assignedToUser?: string;

    campaignContent?: string;

    campaignMedium?: string;

    campaignName?: string;

    campaignSource?: string;

    campaignTerm?: string;

    creditScore?: number;

    /**
     * Format: YYYY-MM-DD
     */
    expectedMoveInDate?: string;

    /**
     * Represents all the properties and/or units this prospect is interested moving
     * into
     */
    interests?: Array<ProspectInfo.Interest>;

    /**
     * References to the Tag Id
     */
    leadSource?: string;

    maxRent?: number;

    minBathrooms?: number;

    minBedrooms?: number;

    monthlyIncome?: number;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    nextTaskDate?: string;

    status?:
      | 'NEW'
      | 'CONTACT_ATTEMPTED'
      | 'CONTACT_MADE'
      | 'SHOWING_SCHEDULED'
      | 'SHOWING_COMPLETED'
      | 'APPLICATION_SENT'
      | 'APPLICATION_SUBMITTED'
      | 'LEASE_OFFER_MADE'
      | 'LEASE_OFFER_ACCEPTED'
      | 'LEASE_SENT_FOR_SIGNATURE'
      | 'CLOSED_MOVED_IN'
      | 'CLOSED_LOST';
  }

  export namespace ProspectInfo {
    export interface Interest {
      /**
       * Reference the Property Id
       */
      property?: string;

      /**
       * Reference the Unit Id
       */
      unit?: string;
    }
  }

  export interface Vehicle {
    color?: string;

    licensePlatae?: string;

    make?: string;

    model?: string;

    notes?: string;

    state?: string;

    year?: number;
  }
}

export interface TenantListResponse {
  data?: Array<TenantListResponse.Data>;

  total?: number;
}

export namespace TenantListResponse {
  export interface Data {
    firstName: string;

    lastName: string;

    id?: string;

    company?: string;

    companyName?: string;

    /**
     * Format: YYYY-MM-DD
     */
    dateOfBirth?: string;

    dependants?: Array<Data.Dependant>;

    emails?: Array<Data.Email>;

    emergencyContacts?: Array<Data.EmergencyContact>;

    /**
     * Read Only
     */
    fullName?: string;

    gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

    jobTitle?: string;

    middleName?: string;

    /**
     * Read Only
     */
    name?: string;

    notes?: string;

    pets?: Array<Data.Pet>;

    phones?: Array<Data.Phone>;

    pictureUrl?: string;

    portalInfo?: Data.PortalInfo;

    primaryAddress?: Data.PrimaryAddress;

    prospectInfo?: Data.ProspectInfo;

    timezone?: string;

    type?: 'LEASE_TENANT' | 'PROSPECT_TENANT';

    vehicles?: Array<Data.Vehicle>;
  }

  export namespace Data {
    export interface Dependant {
      dateOfBirth?: string;

      firstName?: string;

      lastName?: string;

      middleName?: string;

      relationship?: string;
    }

    export interface Email {
      address: string;

      type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
    }

    export interface EmergencyContact {
      email?: string;

      name?: string;

      phone?: string;

      relationship?: string;
    }

    export interface Pet {
      age?: number;

      breed?: string;

      color?: string;

      gender?: string;

      isServiceAnimal?: boolean;

      isSpayedOrNeutered?: boolean;

      name?: string;

      notes?: string;

      petType?: string;

      weight?: number;
    }

    export interface Phone {
      number: string;

      type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
    }

    export interface PortalInfo {
      allowAccess?: boolean;

      /**
       * Read Only. Format: YYYY-MM-DD
       */
      invitationLastSentAt?: string;

      /**
       * Read Only. Format: YYYY-MM-DD
       */
      lastSeenAt?: string;

      loginEmail?: string;

      /**
       * Read Only
       */
      status?: 'ACTIVE' | 'INACTIVE' | 'INVITED';
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

    export interface ProspectInfo {
      /**
       * The User Id this Prospect is assigned to
       */
      assignedToUser?: string;

      campaignContent?: string;

      campaignMedium?: string;

      campaignName?: string;

      campaignSource?: string;

      campaignTerm?: string;

      creditScore?: number;

      /**
       * Format: YYYY-MM-DD
       */
      expectedMoveInDate?: string;

      /**
       * Represents all the properties and/or units this prospect is interested moving
       * into
       */
      interests?: Array<ProspectInfo.Interest>;

      /**
       * References to the Tag Id
       */
      leadSource?: string;

      maxRent?: number;

      minBathrooms?: number;

      minBedrooms?: number;

      monthlyIncome?: number;

      /**
       * Read Only. Format: YYYY-MM-DD
       */
      nextTaskDate?: string;

      status?:
        | 'NEW'
        | 'CONTACT_ATTEMPTED'
        | 'CONTACT_MADE'
        | 'SHOWING_SCHEDULED'
        | 'SHOWING_COMPLETED'
        | 'APPLICATION_SENT'
        | 'APPLICATION_SUBMITTED'
        | 'LEASE_OFFER_MADE'
        | 'LEASE_OFFER_ACCEPTED'
        | 'LEASE_SENT_FOR_SIGNATURE'
        | 'CLOSED_MOVED_IN'
        | 'CLOSED_LOST';
    }

    export namespace ProspectInfo {
      export interface Interest {
        /**
         * Reference the Property Id
         */
        property?: string;

        /**
         * Reference the Unit Id
         */
        unit?: string;
      }
    }

    export interface Vehicle {
      color?: string;

      licensePlatae?: string;

      make?: string;

      model?: string;

      notes?: string;

      state?: string;

      year?: number;
    }
  }
}

export interface TenantDeleteResponse {
  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  dependants?: Array<TenantDeleteResponse.Dependant>;

  emails?: Array<TenantDeleteResponse.Email>;

  emergencyContacts?: Array<TenantDeleteResponse.EmergencyContact>;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  pets?: Array<TenantDeleteResponse.Pet>;

  phones?: Array<TenantDeleteResponse.Phone>;

  pictureUrl?: string;

  portalInfo?: TenantDeleteResponse.PortalInfo;

  primaryAddress?: TenantDeleteResponse.PrimaryAddress;

  prospectInfo?: TenantDeleteResponse.ProspectInfo;

  timezone?: string;

  type?: 'LEASE_TENANT' | 'PROSPECT_TENANT';

  vehicles?: Array<TenantDeleteResponse.Vehicle>;
}

export namespace TenantDeleteResponse {
  export interface Dependant {
    dateOfBirth?: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    relationship?: string;
  }

  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface EmergencyContact {
    email?: string;

    name?: string;

    phone?: string;

    relationship?: string;
  }

  export interface Pet {
    age?: number;

    breed?: string;

    color?: string;

    gender?: string;

    isServiceAnimal?: boolean;

    isSpayedOrNeutered?: boolean;

    name?: string;

    notes?: string;

    petType?: string;

    weight?: number;
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PortalInfo {
    allowAccess?: boolean;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    invitationLastSentAt?: string;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    lastSeenAt?: string;

    loginEmail?: string;

    /**
     * Read Only
     */
    status?: 'ACTIVE' | 'INACTIVE' | 'INVITED';
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

  export interface ProspectInfo {
    /**
     * The User Id this Prospect is assigned to
     */
    assignedToUser?: string;

    campaignContent?: string;

    campaignMedium?: string;

    campaignName?: string;

    campaignSource?: string;

    campaignTerm?: string;

    creditScore?: number;

    /**
     * Format: YYYY-MM-DD
     */
    expectedMoveInDate?: string;

    /**
     * Represents all the properties and/or units this prospect is interested moving
     * into
     */
    interests?: Array<ProspectInfo.Interest>;

    /**
     * References to the Tag Id
     */
    leadSource?: string;

    maxRent?: number;

    minBathrooms?: number;

    minBedrooms?: number;

    monthlyIncome?: number;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    nextTaskDate?: string;

    status?:
      | 'NEW'
      | 'CONTACT_ATTEMPTED'
      | 'CONTACT_MADE'
      | 'SHOWING_SCHEDULED'
      | 'SHOWING_COMPLETED'
      | 'APPLICATION_SENT'
      | 'APPLICATION_SUBMITTED'
      | 'LEASE_OFFER_MADE'
      | 'LEASE_OFFER_ACCEPTED'
      | 'LEASE_SENT_FOR_SIGNATURE'
      | 'CLOSED_MOVED_IN'
      | 'CLOSED_LOST';
  }

  export namespace ProspectInfo {
    export interface Interest {
      /**
       * Reference the Property Id
       */
      property?: string;

      /**
       * Reference the Unit Id
       */
      unit?: string;
    }
  }

  export interface Vehicle {
    color?: string;

    licensePlatae?: string;

    make?: string;

    model?: string;

    notes?: string;

    state?: string;

    year?: number;
  }
}

export interface TenantCreateParams {
  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  dependants?: Array<TenantCreateParams.Dependant>;

  emails?: Array<TenantCreateParams.Email>;

  emergencyContacts?: Array<TenantCreateParams.EmergencyContact>;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  pets?: Array<TenantCreateParams.Pet>;

  phones?: Array<TenantCreateParams.Phone>;

  pictureUrl?: string;

  portalInfo?: TenantCreateParams.PortalInfo;

  primaryAddress?: TenantCreateParams.PrimaryAddress;

  prospectInfo?: TenantCreateParams.ProspectInfo;

  timezone?: string;

  type?: 'LEASE_TENANT' | 'PROSPECT_TENANT';

  vehicles?: Array<TenantCreateParams.Vehicle>;
}

export namespace TenantCreateParams {
  export interface Dependant {
    dateOfBirth?: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    relationship?: string;
  }

  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface EmergencyContact {
    email?: string;

    name?: string;

    phone?: string;

    relationship?: string;
  }

  export interface Pet {
    age?: number;

    breed?: string;

    color?: string;

    gender?: string;

    isServiceAnimal?: boolean;

    isSpayedOrNeutered?: boolean;

    name?: string;

    notes?: string;

    petType?: string;

    weight?: number;
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PortalInfo {
    allowAccess?: boolean;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    invitationLastSentAt?: string;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    lastSeenAt?: string;

    loginEmail?: string;

    /**
     * Read Only
     */
    status?: 'ACTIVE' | 'INACTIVE' | 'INVITED';
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

  export interface ProspectInfo {
    /**
     * The User Id this Prospect is assigned to
     */
    assignedToUser?: string;

    campaignContent?: string;

    campaignMedium?: string;

    campaignName?: string;

    campaignSource?: string;

    campaignTerm?: string;

    creditScore?: number;

    /**
     * Format: YYYY-MM-DD
     */
    expectedMoveInDate?: string;

    /**
     * Represents all the properties and/or units this prospect is interested moving
     * into
     */
    interests?: Array<ProspectInfo.Interest>;

    /**
     * References to the Tag Id
     */
    leadSource?: string;

    maxRent?: number;

    minBathrooms?: number;

    minBedrooms?: number;

    monthlyIncome?: number;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    nextTaskDate?: string;

    status?:
      | 'NEW'
      | 'CONTACT_ATTEMPTED'
      | 'CONTACT_MADE'
      | 'SHOWING_SCHEDULED'
      | 'SHOWING_COMPLETED'
      | 'APPLICATION_SENT'
      | 'APPLICATION_SUBMITTED'
      | 'LEASE_OFFER_MADE'
      | 'LEASE_OFFER_ACCEPTED'
      | 'LEASE_SENT_FOR_SIGNATURE'
      | 'CLOSED_MOVED_IN'
      | 'CLOSED_LOST';
  }

  export namespace ProspectInfo {
    export interface Interest {
      /**
       * Reference the Property Id
       */
      property?: string;

      /**
       * Reference the Unit Id
       */
      unit?: string;
    }
  }

  export interface Vehicle {
    color?: string;

    licensePlatae?: string;

    make?: string;

    model?: string;

    notes?: string;

    state?: string;

    year?: number;
  }
}

export interface TenantUpdateParams {
  firstName: string;

  lastName: string;

  id?: string;

  company?: string;

  companyName?: string;

  /**
   * Format: YYYY-MM-DD
   */
  dateOfBirth?: string;

  dependants?: Array<TenantUpdateParams.Dependant>;

  emails?: Array<TenantUpdateParams.Email>;

  emergencyContacts?: Array<TenantUpdateParams.EmergencyContact>;

  /**
   * Read Only
   */
  fullName?: string;

  gender?: 'MALE' | 'FEMALE' | 'PREFER_NOT_TO_SAY';

  jobTitle?: string;

  middleName?: string;

  /**
   * Read Only
   */
  name?: string;

  notes?: string;

  pets?: Array<TenantUpdateParams.Pet>;

  phones?: Array<TenantUpdateParams.Phone>;

  pictureUrl?: string;

  portalInfo?: TenantUpdateParams.PortalInfo;

  primaryAddress?: TenantUpdateParams.PrimaryAddress;

  prospectInfo?: TenantUpdateParams.ProspectInfo;

  timezone?: string;

  type?: 'LEASE_TENANT' | 'PROSPECT_TENANT';

  vehicles?: Array<TenantUpdateParams.Vehicle>;
}

export namespace TenantUpdateParams {
  export interface Dependant {
    dateOfBirth?: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    relationship?: string;
  }

  export interface Email {
    address: string;

    type: 'Primary' | 'Secondary' | 'Personal' | 'Work' | 'Other';
  }

  export interface EmergencyContact {
    email?: string;

    name?: string;

    phone?: string;

    relationship?: string;
  }

  export interface Pet {
    age?: number;

    breed?: string;

    color?: string;

    gender?: string;

    isServiceAnimal?: boolean;

    isSpayedOrNeutered?: boolean;

    name?: string;

    notes?: string;

    petType?: string;

    weight?: number;
  }

  export interface Phone {
    number: string;

    type: 'Home' | 'Work' | 'Mobile' | 'Fax' | 'Other';
  }

  export interface PortalInfo {
    allowAccess?: boolean;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    invitationLastSentAt?: string;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    lastSeenAt?: string;

    loginEmail?: string;

    /**
     * Read Only
     */
    status?: 'ACTIVE' | 'INACTIVE' | 'INVITED';
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

  export interface ProspectInfo {
    /**
     * The User Id this Prospect is assigned to
     */
    assignedToUser?: string;

    campaignContent?: string;

    campaignMedium?: string;

    campaignName?: string;

    campaignSource?: string;

    campaignTerm?: string;

    creditScore?: number;

    /**
     * Format: YYYY-MM-DD
     */
    expectedMoveInDate?: string;

    /**
     * Represents all the properties and/or units this prospect is interested moving
     * into
     */
    interests?: Array<ProspectInfo.Interest>;

    /**
     * References to the Tag Id
     */
    leadSource?: string;

    maxRent?: number;

    minBathrooms?: number;

    minBedrooms?: number;

    monthlyIncome?: number;

    /**
     * Read Only. Format: YYYY-MM-DD
     */
    nextTaskDate?: string;

    status?:
      | 'NEW'
      | 'CONTACT_ATTEMPTED'
      | 'CONTACT_MADE'
      | 'SHOWING_SCHEDULED'
      | 'SHOWING_COMPLETED'
      | 'APPLICATION_SENT'
      | 'APPLICATION_SUBMITTED'
      | 'LEASE_OFFER_MADE'
      | 'LEASE_OFFER_ACCEPTED'
      | 'LEASE_SENT_FOR_SIGNATURE'
      | 'CLOSED_MOVED_IN'
      | 'CLOSED_LOST';
  }

  export namespace ProspectInfo {
    export interface Interest {
      /**
       * Reference the Property Id
       */
      property?: string;

      /**
       * Reference the Unit Id
       */
      unit?: string;
    }
  }

  export interface Vehicle {
    color?: string;

    licensePlatae?: string;

    make?: string;

    model?: string;

    notes?: string;

    state?: string;

    year?: number;
  }
}

export interface TenantListParams {
  /**
   * Filter by Portfolio Id
   */
  filter_group?: string;

  /**
   * Filter by Lease Id
   */
  filter_lease?: string;

  /**
   * Filter by Property Id
   */
  filter_property?: string;

  /**
   * Filter by Tenant Name / Email
   */
  filter_text?: string;

  /**
   * Filter by Tenant Type
   */
  filter_type?: 'LEASE_TENANT' | 'PROSPECT_TENANT';

  /**
   * Filter by Unit Id
   */
  filter_unit?: string;
}

export declare namespace Tenants {
  export {
    type TenantCreateResponse as TenantCreateResponse,
    type TenantRetrieveResponse as TenantRetrieveResponse,
    type TenantUpdateResponse as TenantUpdateResponse,
    type TenantListResponse as TenantListResponse,
    type TenantDeleteResponse as TenantDeleteResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
  };
}
