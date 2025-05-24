# Users

Types:

- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/users.ts">UserGetCurrentResponse</a></code>

Methods:

- <code title="get /users/{userId}">client.users.<a href="./src/resources/users.ts">retrieve</a>(userID) -> UserRetrieveResponse</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>() -> UserListResponse</code>
- <code title="get /users/me">client.users.<a href="./src/resources/users.ts">getCurrent</a>() -> UserGetCurrentResponse</code>

# Properties

Types:

- <code><a href="./src/resources/properties.ts">PropertyRetrieveResponse</a></code>
- <code><a href="./src/resources/properties.ts">PropertyListResponse</a></code>

Methods:

- <code title="get /properties/{propertyId}">client.properties.<a href="./src/resources/properties.ts">retrieve</a>(propertyID) -> PropertyRetrieveResponse</code>
- <code title="get /properties">client.properties.<a href="./src/resources/properties.ts">list</a>({ ...params }) -> PropertyListResponse</code>

# Units

Types:

- <code><a href="./src/resources/units.ts">UnitRetrieveResponse</a></code>
- <code><a href="./src/resources/units.ts">UnitListResponse</a></code>

Methods:

- <code title="get /units/{unitId}">client.units.<a href="./src/resources/units.ts">retrieve</a>(unitID) -> UnitRetrieveResponse</code>
- <code title="get /units">client.units.<a href="./src/resources/units.ts">list</a>({ ...params }) -> UnitListResponse</code>

# Leases

Types:

- <code><a href="./src/resources/leases.ts">LeaseRetrieveResponse</a></code>
- <code><a href="./src/resources/leases.ts">LeaseListResponse</a></code>
- <code><a href="./src/resources/leases.ts">LeaseListTenantsResponse</a></code>
- <code><a href="./src/resources/leases.ts">LeaseMoveInResponse</a></code>

Methods:

- <code title="get /leases/{leaseId}">client.leases.<a href="./src/resources/leases.ts">retrieve</a>(leaseID) -> LeaseRetrieveResponse</code>
- <code title="get /leases">client.leases.<a href="./src/resources/leases.ts">list</a>({ ...params }) -> LeaseListResponse</code>
- <code title="get /leases/tenants">client.leases.<a href="./src/resources/leases.ts">listTenants</a>({ ...params }) -> LeaseListTenantsResponse</code>
- <code title="post /leases/move-in">client.leases.<a href="./src/resources/leases.ts">moveIn</a>({ ...params }) -> LeaseMoveInResponse</code>
- <code title="post /leases/move-out">client.leases.<a href="./src/resources/leases.ts">moveOut</a>({ ...params }) -> void</code>

# Tenants

Types:

- <code><a href="./src/resources/tenants.ts">TenantCreateResponse</a></code>
- <code><a href="./src/resources/tenants.ts">TenantRetrieveResponse</a></code>
- <code><a href="./src/resources/tenants.ts">TenantUpdateResponse</a></code>
- <code><a href="./src/resources/tenants.ts">TenantListResponse</a></code>
- <code><a href="./src/resources/tenants.ts">TenantDeleteResponse</a></code>

Methods:

- <code title="post /tenants">client.tenants.<a href="./src/resources/tenants.ts">create</a>({ ...params }) -> TenantCreateResponse</code>
- <code title="get /tenants/{tenantId}">client.tenants.<a href="./src/resources/tenants.ts">retrieve</a>(tenantID) -> TenantRetrieveResponse</code>
- <code title="put /tenants/{tenantId}">client.tenants.<a href="./src/resources/tenants.ts">update</a>(tenantID, { ...params }) -> TenantUpdateResponse</code>
- <code title="get /tenants">client.tenants.<a href="./src/resources/tenants.ts">list</a>({ ...params }) -> TenantListResponse</code>
- <code title="delete /tenants/{tenantId}">client.tenants.<a href="./src/resources/tenants.ts">delete</a>(tenantID) -> TenantDeleteResponse</code>

# LeasePayments

Types:

- <code><a href="./src/resources/lease-payments.ts">LeasePaymentCreateResponse</a></code>
- <code><a href="./src/resources/lease-payments.ts">LeasePaymentRetrieveResponse</a></code>
- <code><a href="./src/resources/lease-payments.ts">LeasePaymentUpdateResponse</a></code>
- <code><a href="./src/resources/lease-payments.ts">LeasePaymentListResponse</a></code>
- <code><a href="./src/resources/lease-payments.ts">LeasePaymentDeleteResponse</a></code>

Methods:

- <code title="post /lease-payments">client.leasePayments.<a href="./src/resources/lease-payments.ts">create</a>({ ...params }) -> LeasePaymentCreateResponse</code>
- <code title="get /lease-payments/{leasePaymentId}">client.leasePayments.<a href="./src/resources/lease-payments.ts">retrieve</a>(leasePaymentID) -> LeasePaymentRetrieveResponse</code>
- <code title="put /lease-payments/{leasePaymentId}">client.leasePayments.<a href="./src/resources/lease-payments.ts">update</a>(leasePaymentID, { ...params }) -> LeasePaymentUpdateResponse</code>
- <code title="get /lease-payments">client.leasePayments.<a href="./src/resources/lease-payments.ts">list</a>({ ...params }) -> LeasePaymentListResponse</code>
- <code title="delete /lease-payments/{leasePaymentId}">client.leasePayments.<a href="./src/resources/lease-payments.ts">delete</a>(leasePaymentID) -> LeasePaymentDeleteResponse</code>

# LeaseReversedPayments

Types:

- <code><a href="./src/resources/lease-reversed-payments.ts">LeaseReversedPaymentCreateResponse</a></code>
- <code><a href="./src/resources/lease-reversed-payments.ts">LeaseReversedPaymentRetrieveResponse</a></code>
- <code><a href="./src/resources/lease-reversed-payments.ts">LeaseReversedPaymentListResponse</a></code>
- <code><a href="./src/resources/lease-reversed-payments.ts">LeaseReversedPaymentDeleteResponse</a></code>

Methods:

- <code title="post /lease-reversed-payments">client.leaseReversedPayments.<a href="./src/resources/lease-reversed-payments.ts">create</a>({ ...params }) -> LeaseReversedPaymentCreateResponse</code>
- <code title="get /lease-reversed-payments/{leaseReversedPaymentId}">client.leaseReversedPayments.<a href="./src/resources/lease-reversed-payments.ts">retrieve</a>(leaseReversedPaymentID) -> LeaseReversedPaymentRetrieveResponse</code>
- <code title="get /lease-reversed-payments">client.leaseReversedPayments.<a href="./src/resources/lease-reversed-payments.ts">list</a>({ ...params }) -> LeaseReversedPaymentListResponse</code>
- <code title="delete /lease-reversed-payments/{leaseReversedPaymentId}">client.leaseReversedPayments.<a href="./src/resources/lease-reversed-payments.ts">delete</a>(leaseReversedPaymentID) -> LeaseReversedPaymentDeleteResponse</code>

# LeaseCharges

Types:

- <code><a href="./src/resources/lease-charges.ts">LeaseChargeCreateResponse</a></code>
- <code><a href="./src/resources/lease-charges.ts">LeaseChargeRetrieveResponse</a></code>
- <code><a href="./src/resources/lease-charges.ts">LeaseChargeUpdateResponse</a></code>
- <code><a href="./src/resources/lease-charges.ts">LeaseChargeListResponse</a></code>
- <code><a href="./src/resources/lease-charges.ts">LeaseChargeDeleteResponse</a></code>

Methods:

- <code title="post /lease-charges">client.leaseCharges.<a href="./src/resources/lease-charges.ts">create</a>({ ...params }) -> LeaseChargeCreateResponse</code>
- <code title="get /lease-charges/{leaseChargeId}">client.leaseCharges.<a href="./src/resources/lease-charges.ts">retrieve</a>(leaseChargeID) -> LeaseChargeRetrieveResponse</code>
- <code title="put /lease-charges/{leaseChargeId}">client.leaseCharges.<a href="./src/resources/lease-charges.ts">update</a>(leaseChargeID, { ...params }) -> LeaseChargeUpdateResponse</code>
- <code title="get /lease-charges">client.leaseCharges.<a href="./src/resources/lease-charges.ts">list</a>({ ...params }) -> LeaseChargeListResponse</code>
- <code title="delete /lease-charges/{leaseChargeId}">client.leaseCharges.<a href="./src/resources/lease-charges.ts">delete</a>(leaseChargeID) -> LeaseChargeDeleteResponse</code>

# LeaseCredits

Types:

- <code><a href="./src/resources/lease-credits.ts">LeaseCreditCreateResponse</a></code>
- <code><a href="./src/resources/lease-credits.ts">LeaseCreditRetrieveResponse</a></code>
- <code><a href="./src/resources/lease-credits.ts">LeaseCreditUpdateResponse</a></code>
- <code><a href="./src/resources/lease-credits.ts">LeaseCreditListResponse</a></code>
- <code><a href="./src/resources/lease-credits.ts">LeaseCreditDeleteResponse</a></code>

Methods:

- <code title="post /lease-credits">client.leaseCredits.<a href="./src/resources/lease-credits.ts">create</a>({ ...params }) -> LeaseCreditCreateResponse</code>
- <code title="get /lease-credits/{leaseCreditId}">client.leaseCredits.<a href="./src/resources/lease-credits.ts">retrieve</a>(leaseCreditID) -> LeaseCreditRetrieveResponse</code>
- <code title="put /lease-credits/{leaseCreditId}">client.leaseCredits.<a href="./src/resources/lease-credits.ts">update</a>(leaseCreditID, { ...params }) -> LeaseCreditUpdateResponse</code>
- <code title="get /lease-credits">client.leaseCredits.<a href="./src/resources/lease-credits.ts">list</a>({ ...params }) -> LeaseCreditListResponse</code>
- <code title="delete /lease-credits/{leaseCreditId}">client.leaseCredits.<a href="./src/resources/lease-credits.ts">delete</a>(leaseCreditID) -> LeaseCreditDeleteResponse</code>

# PropertyGroups

Types:

- <code><a href="./src/resources/property-groups.ts">PropertyGroupRetrieveResponse</a></code>
- <code><a href="./src/resources/property-groups.ts">PropertyGroupListResponse</a></code>

Methods:

- <code title="get /property-groups/{portfolioId}">client.propertyGroups.<a href="./src/resources/property-groups.ts">retrieve</a>(portfolioID) -> PropertyGroupRetrieveResponse</code>
- <code title="get /property-groups">client.propertyGroups.<a href="./src/resources/property-groups.ts">list</a>() -> PropertyGroupListResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">TaskCreateResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskUpdateResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskDeleteResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskPostUpdateResponse</a></code>

Methods:

- <code title="post /tasks">client.tasks.<a href="./src/resources/tasks.ts">create</a>({ ...params }) -> TaskCreateResponse</code>
- <code title="get /tasks/{taskId}">client.tasks.<a href="./src/resources/tasks.ts">retrieve</a>(taskID) -> TaskRetrieveResponse</code>
- <code title="put /tasks/{taskId}">client.tasks.<a href="./src/resources/tasks.ts">update</a>(taskID, { ...params }) -> TaskUpdateResponse</code>
- <code title="get /tasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>
- <code title="delete /tasks/{taskId}">client.tasks.<a href="./src/resources/tasks.ts">delete</a>(taskID) -> TaskDeleteResponse</code>
- <code title="post /tasks/update">client.tasks.<a href="./src/resources/tasks.ts">postUpdate</a>({ ...params }) -> TaskPostUpdateResponse</code>

# Owners

Types:

- <code><a href="./src/resources/owners.ts">OwnerCreateResponse</a></code>
- <code><a href="./src/resources/owners.ts">OwnerRetrieveResponse</a></code>
- <code><a href="./src/resources/owners.ts">OwnerUpdateResponse</a></code>
- <code><a href="./src/resources/owners.ts">OwnerListResponse</a></code>
- <code><a href="./src/resources/owners.ts">OwnerDeleteResponse</a></code>

Methods:

- <code title="post /owners">client.owners.<a href="./src/resources/owners.ts">create</a>({ ...params }) -> OwnerCreateResponse</code>
- <code title="get /owners/{ownerId}">client.owners.<a href="./src/resources/owners.ts">retrieve</a>(ownerID) -> OwnerRetrieveResponse</code>
- <code title="put /owners/{ownerId}">client.owners.<a href="./src/resources/owners.ts">update</a>(ownerID, { ...params }) -> OwnerUpdateResponse</code>
- <code title="get /owners">client.owners.<a href="./src/resources/owners.ts">list</a>({ ...params }) -> OwnerListResponse</code>
- <code title="delete /owners/{ownerId}">client.owners.<a href="./src/resources/owners.ts">delete</a>(ownerID) -> OwnerDeleteResponse</code>

# Vendors

Types:

- <code><a href="./src/resources/vendors.ts">VendorCreateResponse</a></code>
- <code><a href="./src/resources/vendors.ts">VendorRetrieveResponse</a></code>
- <code><a href="./src/resources/vendors.ts">VendorUpdateResponse</a></code>
- <code><a href="./src/resources/vendors.ts">VendorListResponse</a></code>
- <code><a href="./src/resources/vendors.ts">VendorDeleteResponse</a></code>

Methods:

- <code title="post /vendors">client.vendors.<a href="./src/resources/vendors.ts">create</a>({ ...params }) -> VendorCreateResponse</code>
- <code title="get /vendors/{vendorId}">client.vendors.<a href="./src/resources/vendors.ts">retrieve</a>(vendorID) -> VendorRetrieveResponse</code>
- <code title="put /vendors/{vendorId}">client.vendors.<a href="./src/resources/vendors.ts">update</a>(vendorID, { ...params }) -> VendorUpdateResponse</code>
- <code title="get /vendors">client.vendors.<a href="./src/resources/vendors.ts">list</a>({ ...params }) -> VendorListResponse</code>
- <code title="delete /vendors/{vendorId}">client.vendors.<a href="./src/resources/vendors.ts">delete</a>(vendorID) -> VendorDeleteResponse</code>

# Expenses

Types:

- <code><a href="./src/resources/expenses.ts">ExpenseCreateResponse</a></code>
- <code><a href="./src/resources/expenses.ts">ExpenseRetrieveResponse</a></code>
- <code><a href="./src/resources/expenses.ts">ExpenseUpdateResponse</a></code>
- <code><a href="./src/resources/expenses.ts">ExpenseListResponse</a></code>
- <code><a href="./src/resources/expenses.ts">ExpenseDeleteResponse</a></code>

Methods:

- <code title="post /expenses">client.expenses.<a href="./src/resources/expenses.ts">create</a>({ ...params }) -> ExpenseCreateResponse</code>
- <code title="get /expenses/{expenseId}">client.expenses.<a href="./src/resources/expenses.ts">retrieve</a>(expenseID) -> ExpenseRetrieveResponse</code>
- <code title="put /expenses/{expenseId}">client.expenses.<a href="./src/resources/expenses.ts">update</a>(expenseID, { ...params }) -> ExpenseUpdateResponse</code>
- <code title="get /expenses">client.expenses.<a href="./src/resources/expenses.ts">list</a>({ ...params }) -> ExpenseListResponse</code>
- <code title="delete /expenses/{expenseId}">client.expenses.<a href="./src/resources/expenses.ts">delete</a>(expenseID) -> ExpenseDeleteResponse</code>

# VendorBills

Types:

- <code><a href="./src/resources/vendor-bills.ts">VendorBillCreateResponse</a></code>
- <code><a href="./src/resources/vendor-bills.ts">VendorBillRetrieveResponse</a></code>
- <code><a href="./src/resources/vendor-bills.ts">VendorBillUpdateResponse</a></code>
- <code><a href="./src/resources/vendor-bills.ts">VendorBillListResponse</a></code>
- <code><a href="./src/resources/vendor-bills.ts">VendorBillDeleteResponse</a></code>

Methods:

- <code title="post /vendor-bills">client.vendorBills.<a href="./src/resources/vendor-bills.ts">create</a>({ ...params }) -> VendorBillCreateResponse</code>
- <code title="get /vendor-bills/{vendorBillId}">client.vendorBills.<a href="./src/resources/vendor-bills.ts">retrieve</a>(vendorBillID) -> VendorBillRetrieveResponse</code>
- <code title="put /vendor-bills/{vendorBillId}">client.vendorBills.<a href="./src/resources/vendor-bills.ts">update</a>(vendorBillID, { ...params }) -> VendorBillUpdateResponse</code>
- <code title="get /vendor-bills">client.vendorBills.<a href="./src/resources/vendor-bills.ts">list</a>({ ...params }) -> VendorBillListResponse</code>
- <code title="delete /vendor-bills/{vendorBillId}">client.vendorBills.<a href="./src/resources/vendor-bills.ts">delete</a>(vendorBillID) -> VendorBillDeleteResponse</code>

# VendorCredits

Types:

- <code><a href="./src/resources/vendor-credits.ts">VendorCreditCreateResponse</a></code>
- <code><a href="./src/resources/vendor-credits.ts">VendorCreditRetrieveResponse</a></code>
- <code><a href="./src/resources/vendor-credits.ts">VendorCreditUpdateResponse</a></code>
- <code><a href="./src/resources/vendor-credits.ts">VendorCreditListResponse</a></code>
- <code><a href="./src/resources/vendor-credits.ts">VendorCreditDeleteResponse</a></code>

Methods:

- <code title="post /vendor-credits">client.vendorCredits.<a href="./src/resources/vendor-credits.ts">create</a>({ ...params }) -> VendorCreditCreateResponse</code>
- <code title="get /vendor-credits/{vendorCreditId}">client.vendorCredits.<a href="./src/resources/vendor-credits.ts">retrieve</a>(vendorCreditID) -> VendorCreditRetrieveResponse</code>
- <code title="put /vendor-credits/{vendorCreditId}">client.vendorCredits.<a href="./src/resources/vendor-credits.ts">update</a>(vendorCreditID, { ...params }) -> VendorCreditUpdateResponse</code>
- <code title="get /vendor-credits">client.vendorCredits.<a href="./src/resources/vendor-credits.ts">list</a>({ ...params }) -> VendorCreditListResponse</code>
- <code title="delete /vendor-credits/{vendorCreditId}">client.vendorCredits.<a href="./src/resources/vendor-credits.ts">delete</a>(vendorCreditID) -> VendorCreditDeleteResponse</code>

# Reports

Types:

- <code><a href="./src/resources/reports.ts">ReportRetrieveBalanceSheetSummaryResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportRetrieveCashFlowStatementResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportRetrieveProfitAndLossSummaryResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportRetrieveRentRollResponse</a></code>

Methods:

- <code title="get /reports/balance-sheet-summary">client.reports.<a href="./src/resources/reports.ts">retrieveBalanceSheetSummary</a>({ ...params }) -> ReportRetrieveBalanceSheetSummaryResponse</code>
- <code title="get /reports/cash-flow-statement">client.reports.<a href="./src/resources/reports.ts">retrieveCashFlowStatement</a>({ ...params }) -> ReportRetrieveCashFlowStatementResponse</code>
- <code title="get /reports/profit-and-loss-summary">client.reports.<a href="./src/resources/reports.ts">retrieveProfitAndLossSummary</a>({ ...params }) -> ReportRetrieveProfitAndLossSummaryResponse</code>
- <code title="get /reports/rent-roll">client.reports.<a href="./src/resources/reports.ts">retrieveRentRoll</a>({ ...params }) -> ReportRetrieveRentRollResponse</code>

# Communications

Types:

- <code><a href="./src/resources/communications.ts">CommunicationCreateResponse</a></code>
- <code><a href="./src/resources/communications.ts">CommunicationRetrieveResponse</a></code>
- <code><a href="./src/resources/communications.ts">CommunicationUpdateResponse</a></code>
- <code><a href="./src/resources/communications.ts">CommunicationListResponse</a></code>
- <code><a href="./src/resources/communications.ts">CommunicationDeleteResponse</a></code>

Methods:

- <code title="post /communications">client.communications.<a href="./src/resources/communications.ts">create</a>({ ...params }) -> CommunicationCreateResponse</code>
- <code title="get /communications/{communicationId}">client.communications.<a href="./src/resources/communications.ts">retrieve</a>(communicationID) -> CommunicationRetrieveResponse</code>
- <code title="put /communications/{communicationId}">client.communications.<a href="./src/resources/communications.ts">update</a>(communicationID, { ...params }) -> CommunicationUpdateResponse</code>
- <code title="get /communications">client.communications.<a href="./src/resources/communications.ts">list</a>({ ...params }) -> CommunicationListResponse</code>
- <code title="delete /communications/{communicationId}">client.communications.<a href="./src/resources/communications.ts">delete</a>(communicationID) -> CommunicationDeleteResponse</code>

# Notes

Types:

- <code><a href="./src/resources/notes.ts">NoteCreateResponse</a></code>
- <code><a href="./src/resources/notes.ts">NoteUpdateResponse</a></code>
- <code><a href="./src/resources/notes.ts">NoteListResponse</a></code>
- <code><a href="./src/resources/notes.ts">NoteDeleteResponse</a></code>

Methods:

- <code title="post /notes">client.notes.<a href="./src/resources/notes.ts">create</a>({ ...params }) -> NoteCreateResponse</code>
- <code title="get /notes/{noteId}">client.notes.<a href="./src/resources/notes.ts">retrieve</a>(noteID) -> void</code>
- <code title="put /notes/{noteId}">client.notes.<a href="./src/resources/notes.ts">update</a>(noteID, { ...params }) -> NoteUpdateResponse</code>
- <code title="get /notes">client.notes.<a href="./src/resources/notes.ts">list</a>({ ...params }) -> NoteListResponse</code>
- <code title="delete /notes/{noteId}">client.notes.<a href="./src/resources/notes.ts">delete</a>(noteID) -> NoteDeleteResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="get /files/{fileId}">client.files.<a href="./src/resources/files.ts">retrieve</a>(fileID) -> FileRetrieveResponse</code>
- <code title="put /files/{fileId}">client.files.<a href="./src/resources/files.ts">update</a>(fileID) -> void</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="delete /files/{fileId}">client.files.<a href="./src/resources/files.ts">delete</a>(fileID) -> FileDeleteResponse</code>
- <code title="get /files/{fileId}/download">client.files.<a href="./src/resources/files.ts">download</a>(fileID) -> void</code>
- <code title="post /files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> void</code>
