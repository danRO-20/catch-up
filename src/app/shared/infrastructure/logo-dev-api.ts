import {environment} from '../../../environments/environment';

export class LogoDevApi {
  baseUrl = environment.logoProviderApiBaseUrl;
  apiKey = environment.logoProviderPublishableKey;

  constructor(){}

  getUrlToLogo(url: string): string {
    return `${this.baseUrl}${new URL(url).hostname}?token=${this.apiKey}`;
  }
}
