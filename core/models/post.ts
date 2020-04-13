import { Category } from './category';
import { Author } from './author';

export interface Post {
  title: string;
  slug: string;
  heroImage: string;
  shortBody: string;
  body: string;
  publishedAt: Date;
  author: Author;
  category: Category;
}
