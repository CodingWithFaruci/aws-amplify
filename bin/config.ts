import { IAwsAmplifyStackProps } from './types';

export const stackConfig: IAwsAmplifyStackProps = {
  roleName: 'amplify-role',
  roleDesc: 'role used for amplify',
  secretName: 'github-token',
  appName: 'domain.com',
  appDesc: 'amplify webshop',
  gitOwner: 'GitHub',
  gitRepo: 'repository',
  gitBranch: 'main',
};