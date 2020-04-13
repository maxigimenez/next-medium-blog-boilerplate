import { Post, Category } from '../models';

export interface IntegrationService {
  getPostBySlug(slug: string): Promise<Post>;
  getPostsByCategory(categorySlug: string): Promise<Post[]>;
  getCategories(): Promise<Category[]>;
}
