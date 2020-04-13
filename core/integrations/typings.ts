import { Post } from '../models';

export interface IntegrationService {
  getPostBySlug(slug: string): Promise<Post>;
}
