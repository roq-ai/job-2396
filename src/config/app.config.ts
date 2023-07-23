interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Job Seeker'],
  tenantRoles: ['Business Owner', 'Recruitment Agent'],
  tenantName: 'Organization',
  applicationName: 'job',
  addOns: [],
};
