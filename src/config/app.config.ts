interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read user information',
    'Read employee information',
    'Read vacation information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company details',
    'Manage employee data',
    'Manage payroll and performance reviews',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/006b04ac-268b-417a-bf80-a18a82ddf431',
};
