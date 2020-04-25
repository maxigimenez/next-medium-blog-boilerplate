import { Post, Category } from './models';
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
        throw new Error(`Invalid integration: ${integration}`);
    }
  }

  getPosts(): Promise<Post[]> {
    return this._client.getPosts();
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

  getCategory(slug: string): Promise<Category> {
    return this._client.getCategory(slug);
  }

  getPostsPaths(): Promise<string[]> {
    return this._client.getPostsPaths();
  }
}
