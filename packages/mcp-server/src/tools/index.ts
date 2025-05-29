// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Doorloop from 'doorloop';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import retrieve_users from './users/retrieve-users';
import list_users from './users/list-users';
import get_current_users from './users/get-current-users';
import retrieve_properties from './properties/retrieve-properties';
import list_properties from './properties/list-properties';
import retrieve_units from './units/retrieve-units';
import list_units from './units/list-units';
import retrieve_leases from './leases/retrieve-leases';
import list_leases from './leases/list-leases';
import list_tenants_leases from './leases/list-tenants-leases';
import move_in_leases from './leases/move-in-leases';
import move_out_leases from './leases/move-out-leases';
import create_tenants from './tenants/create-tenants';
import retrieve_tenants from './tenants/retrieve-tenants';
import update_tenants from './tenants/update-tenants';
import list_tenants from './tenants/list-tenants';
import delete_tenants from './tenants/delete-tenants';
import create_lease_payments from './lease-payments/create-lease-payments';
import retrieve_lease_payments from './lease-payments/retrieve-lease-payments';
import update_lease_payments from './lease-payments/update-lease-payments';
import list_lease_payments from './lease-payments/list-lease-payments';
import delete_lease_payments from './lease-payments/delete-lease-payments';
import create_lease_reversed_payments from './lease-reversed-payments/create-lease-reversed-payments';
import retrieve_lease_reversed_payments from './lease-reversed-payments/retrieve-lease-reversed-payments';
import list_lease_reversed_payments from './lease-reversed-payments/list-lease-reversed-payments';
import delete_lease_reversed_payments from './lease-reversed-payments/delete-lease-reversed-payments';
import create_lease_charges from './lease-charges/create-lease-charges';
import retrieve_lease_charges from './lease-charges/retrieve-lease-charges';
import update_lease_charges from './lease-charges/update-lease-charges';
import list_lease_charges from './lease-charges/list-lease-charges';
import delete_lease_charges from './lease-charges/delete-lease-charges';
import create_lease_credits from './lease-credits/create-lease-credits';
import retrieve_lease_credits from './lease-credits/retrieve-lease-credits';
import update_lease_credits from './lease-credits/update-lease-credits';
import list_lease_credits from './lease-credits/list-lease-credits';
import delete_lease_credits from './lease-credits/delete-lease-credits';
import retrieve_property_groups from './property-groups/retrieve-property-groups';
import list_property_groups from './property-groups/list-property-groups';
import create_tasks from './tasks/create-tasks';
import retrieve_tasks from './tasks/retrieve-tasks';
import update_tasks from './tasks/update-tasks';
import list_tasks from './tasks/list-tasks';
import delete_tasks from './tasks/delete-tasks';
import post_update_tasks from './tasks/post-update-tasks';
import create_owners from './owners/create-owners';
import retrieve_owners from './owners/retrieve-owners';
import update_owners from './owners/update-owners';
import list_owners from './owners/list-owners';
import delete_owners from './owners/delete-owners';
import create_vendors from './vendors/create-vendors';
import retrieve_vendors from './vendors/retrieve-vendors';
import update_vendors from './vendors/update-vendors';
import list_vendors from './vendors/list-vendors';
import delete_vendors from './vendors/delete-vendors';
import create_expenses from './expenses/create-expenses';
import retrieve_expenses from './expenses/retrieve-expenses';
import update_expenses from './expenses/update-expenses';
import list_expenses from './expenses/list-expenses';
import delete_expenses from './expenses/delete-expenses';
import create_vendor_bills from './vendor-bills/create-vendor-bills';
import retrieve_vendor_bills from './vendor-bills/retrieve-vendor-bills';
import update_vendor_bills from './vendor-bills/update-vendor-bills';
import list_vendor_bills from './vendor-bills/list-vendor-bills';
import delete_vendor_bills from './vendor-bills/delete-vendor-bills';
import create_vendor_credits from './vendor-credits/create-vendor-credits';
import retrieve_vendor_credits from './vendor-credits/retrieve-vendor-credits';
import update_vendor_credits from './vendor-credits/update-vendor-credits';
import list_vendor_credits from './vendor-credits/list-vendor-credits';
import delete_vendor_credits from './vendor-credits/delete-vendor-credits';
import retrieve_balance_sheet_summary_reports from './reports/retrieve-balance-sheet-summary-reports';
import retrieve_cash_flow_statement_reports from './reports/retrieve-cash-flow-statement-reports';
import retrieve_profit_and_loss_summary_reports from './reports/retrieve-profit-and-loss-summary-reports';
import retrieve_rent_roll_reports from './reports/retrieve-rent-roll-reports';
import create_communications from './communications/create-communications';
import retrieve_communications from './communications/retrieve-communications';
import update_communications from './communications/update-communications';
import list_communications from './communications/list-communications';
import delete_communications from './communications/delete-communications';
import create_notes from './notes/create-notes';
import retrieve_notes from './notes/retrieve-notes';
import update_notes from './notes/update-notes';
import list_notes from './notes/list-notes';
import delete_notes from './notes/delete-notes';
import retrieve_files from './files/retrieve-files';
import update_files from './files/update-files';
import list_files from './files/list-files';
import delete_files from './files/delete-files';
import download_files from './files/download-files';
import upload_files from './files/upload-files';

export type HandlerFunction = (client: Doorloop, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];

  httpMethod?: string;
  httpPath?: string;
  operationId?: string;
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_users);
addEndpoint(list_users);
addEndpoint(get_current_users);
addEndpoint(retrieve_properties);
addEndpoint(list_properties);
addEndpoint(retrieve_units);
addEndpoint(list_units);
addEndpoint(retrieve_leases);
addEndpoint(list_leases);
addEndpoint(list_tenants_leases);
addEndpoint(move_in_leases);
addEndpoint(move_out_leases);
addEndpoint(create_tenants);
addEndpoint(retrieve_tenants);
addEndpoint(update_tenants);
addEndpoint(list_tenants);
addEndpoint(delete_tenants);
addEndpoint(create_lease_payments);
addEndpoint(retrieve_lease_payments);
addEndpoint(update_lease_payments);
addEndpoint(list_lease_payments);
addEndpoint(delete_lease_payments);
addEndpoint(create_lease_reversed_payments);
addEndpoint(retrieve_lease_reversed_payments);
addEndpoint(list_lease_reversed_payments);
addEndpoint(delete_lease_reversed_payments);
addEndpoint(create_lease_charges);
addEndpoint(retrieve_lease_charges);
addEndpoint(update_lease_charges);
addEndpoint(list_lease_charges);
addEndpoint(delete_lease_charges);
addEndpoint(create_lease_credits);
addEndpoint(retrieve_lease_credits);
addEndpoint(update_lease_credits);
addEndpoint(list_lease_credits);
addEndpoint(delete_lease_credits);
addEndpoint(retrieve_property_groups);
addEndpoint(list_property_groups);
addEndpoint(create_tasks);
addEndpoint(retrieve_tasks);
addEndpoint(update_tasks);
addEndpoint(list_tasks);
addEndpoint(delete_tasks);
addEndpoint(post_update_tasks);
addEndpoint(create_owners);
addEndpoint(retrieve_owners);
addEndpoint(update_owners);
addEndpoint(list_owners);
addEndpoint(delete_owners);
addEndpoint(create_vendors);
addEndpoint(retrieve_vendors);
addEndpoint(update_vendors);
addEndpoint(list_vendors);
addEndpoint(delete_vendors);
addEndpoint(create_expenses);
addEndpoint(retrieve_expenses);
addEndpoint(update_expenses);
addEndpoint(list_expenses);
addEndpoint(delete_expenses);
addEndpoint(create_vendor_bills);
addEndpoint(retrieve_vendor_bills);
addEndpoint(update_vendor_bills);
addEndpoint(list_vendor_bills);
addEndpoint(delete_vendor_bills);
addEndpoint(create_vendor_credits);
addEndpoint(retrieve_vendor_credits);
addEndpoint(update_vendor_credits);
addEndpoint(list_vendor_credits);
addEndpoint(delete_vendor_credits);
addEndpoint(retrieve_balance_sheet_summary_reports);
addEndpoint(retrieve_cash_flow_statement_reports);
addEndpoint(retrieve_profit_and_loss_summary_reports);
addEndpoint(retrieve_rent_roll_reports);
addEndpoint(create_communications);
addEndpoint(retrieve_communications);
addEndpoint(update_communications);
addEndpoint(list_communications);
addEndpoint(delete_communications);
addEndpoint(create_notes);
addEndpoint(retrieve_notes);
addEndpoint(update_notes);
addEndpoint(list_notes);
addEndpoint(delete_notes);
addEndpoint(retrieve_files);
addEndpoint(update_files);
addEndpoint(list_files);
addEndpoint(delete_files);
addEndpoint(download_files);
addEndpoint(upload_files);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
