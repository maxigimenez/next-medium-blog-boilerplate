import { Post, Category } from './models';
import { ContentfulService, IntegrationService } from './integrations';

export enum Integrations {
  CONTENTFUL = 'contentful'
}

export class API implements IntegrationService {
  private _client: IntegrationService;

  constructor(integration: Integrations = Integrations.CONTENTFUL) {
    switch (integration) {
      case Integrations.CONTENTFUL:
        this._client = new ContentfulService();
        break;
      default:
        throw new Error(`Invalid integration: ${integration}`);
    }
  }

  getPostBySlug(slug: string): Promise<Post> {
    return this._client.getPostBySlug(slug);
  }

  getPostsByCategory(categorySlug: string): Promise<Post[]> {
    return this._client.getPostsByCategory(categorySlug);
  }

  getCategories(): Promise<Category[]> {
    return this._client.getCategories();
  }
}
