import { Post, Category } from '../models';

export interface IntegrationService {
  getPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post>;
  getPostsByCategory(categorySlug: string): Promise<Post[]>;
  getCategories(): Promise<Category[]>;
  getCategory(slug: string): Promise<Category>;
  getPostsPaths(): Promise<string[]>;
  getCategoriesPaths(): Promise<string[]>;
}
