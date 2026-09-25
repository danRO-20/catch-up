/**
 * Production environment configuration for the application.
 * This file contains settings and variables specific to the development environment, such as API endpoints, feature flags, and other configurations that may differ from production or testing environments.
 * It is used to facilitate development and testing of the application in a local or development setting.
 */


export const environment = {
  production: true,
  newsProviderApiBaseUrl: 'https://newsapi.org/v2',
  newsProviderNewsEndpointPath: '/top-headlines',
  newsProviderSourcesEndpointPath: '/top-headlines/sources',
  newProviderApiKey: 'YOUR_NEWS_PROVIDER_API_KEY',
  logoProviderApiBaseUrl: 'https://img.logo.dev',
  logoProviderPublishableKey: 'YOUR_LOGO_PROVIDER_PUBLISHABLE_KEY'
};
