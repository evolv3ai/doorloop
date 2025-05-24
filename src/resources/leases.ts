// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Leases extends APIResource {
  /**
   * Retrieves a Lease
   *
   * @example
   * ```ts
   * const lease = await client.leases.retrieve('leaseId');
   * ```
   */
  retrieve(leaseID: string, options?: RequestOptions): APIPromise<LeaseRetrieveResponse> {
    return this._client.get(path`/leases/${leaseID}`, options);
  }

  /**
   * Lists all Leases
   *
   * @example
   * ```ts
   * const leases = await client.leases.list();
   * ```
   */
  list(
    query: LeaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeaseListResponse> {
    return this._client.get('/leases', { query, ...options });
  }

  /**
   * Retrieves a list of all lease tenants, meaning, tenants that have been
   * associated with an active list.
   *
   * This endpoint includes additional information related to the lease for each
   * tenant in DoorLoop, with the full Tenant object included as well.
   *
   * If a tenant is associated with multiple leases, the tenant will appear in the
   * results here once for each lease it is associated with.
   *
   * @example
   * ```ts
   * const response = await client.leases.listTenants();
   * ```
   */
  listTenants(
    query: LeaseListTenantsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeaseListTenantsResponse> {
    return this._client.get('/leases/tenants', { query, ...options });
  }

  /**
   * Moves in a Tenant
   *
   * @example
   * ```ts
   * const response = await client.leases.moveIn({
   *   leaseId: '00000020f51bb4362eee2a4d',
   *   moveInAt: 'moveInAt',
   *   portalEnabled: true,
   *   tenantIds: ['507f191e810c19729de860ea'],
   * });
   * ```
   */
  moveIn(body: LeaseMoveInParams, options?: RequestOptions): APIPromise<LeaseMoveInResponse> {
    return this._client.post('/leases/move-in', { body, ...options });
  }

  /**
   * Moves out a Tenant
   *
   * @example
   * ```ts
   * await client.leases.moveOut({
   *   leaseId: '00000020f51bb4362eee2a4d',
   *   movedOutAt: 'movedOutAt',
   *   portalEnabled: true,
   *   tenants: ['507f191e810c19729de860ea'],
   * });
   * ```
   */
  moveOut(body: LeaseMoveOutParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/leases/move-out', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LeaseRetrieveResponse {
  name: string;

  property: string;

  /**
   * Format: YYYY-MM-DD
   */
  start: string;

  /**
   * Read Only
   */
  status: 'ACTIVE' | 'INACTIVE';

  term: 'Fixed' | 'AtWill';

  /**
   * An array of Unit Ids for this lease
   */
  units: Array<string>;

  id?: string;

  /**
   * Required if term == AtWill. Format: YYYY-MM-DD
   */
  end?: string;

  evictonPending?: boolean;

  notes?: string;

  proofOfInsuranceRequired?: boolean;

  /**
   * Read Only
   */
  reference?: string;

  /**
   * If set to true, the lease will automatically rollover to "At Will" (Month to
   * Month) at the end of the fixed term.
   */
  rolloverToAtWill?: string;

  /**
   * Read Only
   */
  totalBalancedue?: number;

  /**
   * Read Only
   */
  totalDepositsHeld?: number;

  /**
   * Read Only
   */
  TotalRecurringCharges?: number;

  /**
   * Read Only
   */
  totalRecurringCredits?: number;

  /**
   * Read Only
   */
  totalRecurringPayments?: number;

  /**
   * Read Only
   */
  totalRecurringRent?: number;
}

export interface LeaseListResponse {
  data?: Array<LeaseListResponse.Data>;

  total?: number;
}

export namespace LeaseListResponse {
  export interface Data {
    name: string;

    property: string;

    /**
     * Format: YYYY-MM-DD
     */
    start: string;

    /**
     * Read Only
     */
    status: 'ACTIVE' | 'INACTIVE';

    term: 'Fixed' | 'AtWill';

    /**
     * An array of Unit Ids for this lease
     */
    units: Array<string>;

    id?: string;

    /**
     * Required if term == AtWill. Format: YYYY-MM-DD
     */
    end?: string;

    evictonPending?: boolean;

    notes?: string;

    proofOfInsuranceRequired?: boolean;

    /**
     * Read Only
     */
    reference?: string;

    /**
     * If set to true, the lease will automatically rollover to "At Will" (Month to
     * Month) at the end of the fixed term.
     */
    rolloverToAtWill?: string;

    /**
     * Read Only
     */
    totalBalancedue?: number;

    /**
     * Read Only
     */
    totalDepositsHeld?: number;

    /**
     * Read Only
     */
    TotalRecurringCharges?: number;

    /**
     * Read Only
     */
    totalRecurringCredits?: number;

    /**
     * Read Only
     */
    totalRecurringPayments?: number;

    /**
     * Read Only
     */
    totalRecurringRent?: number;
  }
}

export interface LeaseListTenantsResponse {
  data?: Array<LeaseListTenantsResponse.Data>;

  total?: number;
}

export namespace LeaseListTenantsResponse {
  export interface Data {
    id: string;

    lease: string;

    /**
     * The display name for this tenant
     */
    name: string;

    property: string;

    /**
     * The current status of this tenant
     */
    status: 'PAST' | 'FUTURE' | 'CURRENT';

    /**
     * An array of unit Ids for this tenant
     */
    units: Array<string>;

    /**
     * Format: YYYY-MM-DD
     */
    moveInAt?: string;

    /**
     * Format: YYYY-MM-DD
     */
    moveOutAt?: string;

    /**
     * Format: YYYY-MM-DD
     */
    moveOutNoticeAt?: string;

    portalEnabled?: boolean;

    tenant?: Data.Tenant;
  }

  export namespace Data {
    export interface Tenant {
      firstName: string;

      lastName: string;

      id?: string;

      company?: string;

      companyName?: string;

      /**
       * Format: YYYY-MM-DD
       */
      dateOfBirth?: string;

      dependants?: Array<Tenant.Dependant>;

      emails?: Array<Tenant.Email>;

      emergencyContacts?: Array<Tenant.EmergencyContact>;

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

      pets?: Array<Tenant.Pet>;

      phones?: Array<Tenant.Phone>;

      pictureUrl?: string;

      portalInfo?: Tenant.PortalInfo;

      primaryAddress?: Tenant.PrimaryAddress;

      prospectInfo?: Tenant.ProspectInfo;

      timezone?: string;

      type?: 'LEASE_TENANT' | 'PROSPECT_TENANT';

      vehicles?: Array<Tenant.Vehicle>;
    }

    export namespace Tenant {
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
}

export interface LeaseMoveInResponse {
  name: string;

  property: string;

  /**
   * Format: YYYY-MM-DD
   */
  start: string;

  /**
   * Read Only
   */
  status: 'ACTIVE' | 'INACTIVE';

  term: 'Fixed' | 'AtWill';

  /**
   * An array of Unit Ids for this lease
   */
  units: Array<string>;

  id?: string;

  /**
   * Required if term == AtWill. Format: YYYY-MM-DD
   */
  end?: string;

  evictonPending?: boolean;

  notes?: string;

  proofOfInsuranceRequired?: boolean;

  /**
   * Read Only
   */
  reference?: string;

  /**
   * If set to true, the lease will automatically rollover to "At Will" (Month to
   * Month) at the end of the fixed term.
   */
  rolloverToAtWill?: string;

  /**
   * Read Only
   */
  totalBalancedue?: number;

  /**
   * Read Only
   */
  totalDepositsHeld?: number;

  /**
   * Read Only
   */
  TotalRecurringCharges?: number;

  /**
   * Read Only
   */
  totalRecurringCredits?: number;

  /**
   * Read Only
   */
  totalRecurringPayments?: number;

  /**
   * Read Only
   */
  totalRecurringRent?: number;
}

export interface LeaseListParams {
  /**
   * Filter by End Date (YYYY-MM-DD)
   */
  filter_end_date_from?: string;

  /**
   * Filter by End Date (YYYY-MM-DD)
   */
  filter_end_date_to?: string;

  /**
   * Filters by Portfolio Id
   */
  filter_group?: string;

  /**
   * Filter by Min Outstanding Balance
   */
  filter_outstandingBalanceGreaterThan?: number;

  /**
   * Filter by Owner Id
   */
  filter_owner?: string;

  /**
   * Filter by Property Id
   */
  filter_property?: string;

  /**
   * Filter by Property Class
   */
  filter_propertyClass?: 'RESIDENTIAL' | 'COMMERCIAL';

  /**
   * Filter by Start Date (YYYY-MM-DD)
   */
  filter_start_date_from?: string;

  /**
   * Filter by Start Date (YYYY-MM-DD)
   */
  filter_start_date_to?: string;

  /**
   * Filter by Status
   */
  filter_status?: 'ACTIVE' | 'INACTIVE';

  /**
   * Filter by Tenant Id
   */
  filter_tenant?: string;

  /**
   * Filter by Term
   */
  filter_term?: 'Rollover' | 'AtWill';

  /**
   * Filter by Lease Name
   */
  filter_text?: string;

  /**
   * Filter by Unit Id
   */
  filter_unit?: string;
}

export interface LeaseListTenantsParams {
  /**
   * Filter by Portfolio Id
   */
  filter_group?: string;

  /**
   * Filter by Lease Id
   */
  filter_lease?: string;

  /**
   * Filter by Move In Date (YYYY-MM-DD)
   */
  filter_movedInAt_from?: string;

  /**
   * Filter by Move In Date (YYYY-MM-DD)
   */
  filter_movedInAt_to?: string;

  /**
   * Filter by Move Out Date (YYYY-MM-DD)
   */
  filter_movedOutAt_from?: string;

  /**
   * Filter by Move Out Date (YYYY-MM-DD)
   */
  filter_movedOutAt_To?: string;

  /**
   * Filter by Property Id
   */
  filter_property?: string;

  /**
   * Filter by Status
   */
  filter_status?: string;

  /**
   * Filter by Tenant Name / Email
   */
  filter_text?: string;
}

export interface LeaseMoveInParams {
  leaseId: string;

  /**
   * Format: YYYY-MM-DD
   */
  moveInAt: string;

  portalEnabled: boolean;

  /**
   * An array of Tenant Ids to move in
   */
  tenantIds: Array<string>;
}

export interface LeaseMoveOutParams {
  leaseId: string;

  /**
   * Format: YYYY-MM-DD
   */
  movedOutAt: string;

  portalEnabled: boolean;

  /**
   * An array of Tenant Ids to move in
   */
  tenants: Array<string>;

  /**
   * Format: YYYY-MM-DD
   */
  moveOutNoticeAt?: string;

  moveOutReason?: string;
}

export declare namespace Leases {
  export {
    type LeaseRetrieveResponse as LeaseRetrieveResponse,
    type LeaseListResponse as LeaseListResponse,
    type LeaseListTenantsResponse as LeaseListTenantsResponse,
    type LeaseMoveInResponse as LeaseMoveInResponse,
    type LeaseListParams as LeaseListParams,
    type LeaseListTenantsParams as LeaseListTenantsParams,
    type LeaseMoveInParams as LeaseMoveInParams,
    type LeaseMoveOutParams as LeaseMoveOutParams,
  };
}
