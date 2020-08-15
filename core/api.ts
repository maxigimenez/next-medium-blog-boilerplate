import { Post, Category } from './models';
import { ContentfulService, IntegrationService } from './integrations';
import { Integrations } from './typings';
import config from '@/config';

export class API {
  private _client: IntegrationService;

  constructor() {
    const integration = this._resolveIntegration();
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

  getCategoriesPaths(): Promise<string[]> {
    return this._client.getCategoriesPaths();
  }

  private _resolveIntegration(): Integrations {
    if (config.integration && Object.values(Integrations).includes(config.integration)) {
      return config.integration;
    }
    return Integrations.CONTENTFUL;
  }
}
