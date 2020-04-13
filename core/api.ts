import { Post } from './models';
import { ContentfulService, IntegrationService } from './integrations';

export enum Integrations {
  CONTENTFUL = 'contentful'
}

export class API {
  private _client: IntegrationService;

  constructor(integration: Integrations = Integrations.CONTENTFUL) {
    switch (integration) {
      case Integrations.CONTENTFUL:
        this._client = new ContentfulService();
        break;
      default:
        throw new Error(`${integration} invalid`);
    }
  }

  getPostBySlug(slug: string): Promise<Post> {
    return this._client.getPostBySlug(slug);
  }
}
