import { Category } from './category';
import { Author } from './author';

export interface Post {
  title: string;
  slug: string;
  heroImage: string;
  shortBody: string;
  body: string;
  publishedAt: string;
  author: Author;
  category: Category;
  readingTime: string;
}
