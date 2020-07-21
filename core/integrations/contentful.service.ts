import { createClient } from 'contentful';
import { IntegrationService } from './typings';
import { Post, Category } from '../models';
import readingTime from 'reading-time';
import dayjs from 'dayjs';

enum ContentType {
  POST = 'post',
  CATEGORY = 'category',
}

export class ContentfulService implements IntegrationService {
  private _client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  getPosts(): Promise<Post[]> {
    return this._getPosts().then((items) => items.map((item) => createPost(item)));
  }

  getPostBySlug(slug: string): Promise<Post> {
    return new Promise(async (resolve, reject) => {
      try {
        const { items }: any = await this._client.getEntries({
          content_type: ContentType.POST,
          'fields.slug[in]': slug,
        });
        const [post] = items;
        if (!post) {
          return reject();
        }
        return resolve(createPost(post));
      } catch (e) {
        return reject(e);
      }
    });
  }

  getPostsByCategory(categorySlug: string): Promise<Post[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const { items } = await this._client.getEntries({
          content_type: ContentType.POST,
          'fields.category.fields.slug[match]': categorySlug,
          'fields.category.sys.contentType.sys.id': ContentType.CATEGORY,
          order: '-fields.publishedAt',
        });
        resolve(items.map((item) => createPost(item)));
      } catch (e) {
        return reject(e);
      }
    });
  }

  getCategories(): Promise<Category[]> {
    return this._getCategories().then((items) => items.map((item) => createCategory(item)));
  }

  getCategory(slug: string): Promise<Category> {
    return new Promise(async (resolve, reject) => {
      try {
        const { items }: any = await this._client.getEntries({
          content_type: ContentType.CATEGORY,
          'fields.slug[in]': slug,
        });
        const [category] = items;
        if (!category) {
          return reject();
        }
        return resolve(createCategory(category));
      } catch (e) {
        return reject(e);
      }
    });
  }

  getPostsPaths(): Promise<string[]> {
    return this._getPosts('fields.slug').then((items) => items.map((item) => item.fields.slug));
  }

  getCategoriesPaths(): Promise<string[]> {
    return this._getCategories('fields.slug').then((items) => items.map((item) => item.fields.slug));
  }

  private _getPosts(select?: string): Promise<any[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const { items } = await this._client.getEntries({
          content_type: ContentType.POST,
          order: '-fields.publishedAt',
          select: select,
        });
        resolve(items);
      } catch (e) {
        return reject(e);
      }
    });
  }

  private _getCategories(select?: string): Promise<any[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const { items } = await this._client.getEntries({
          content_type: ContentType.CATEGORY,
          select: select,
        });
        resolve(items);
      } catch (e) {
        return reject(e);
      }
    });
  }
}

const createPost = (data: any): Post => {
  const { fields } = data;
  const { title, slug, shortBody, body, publishedAt, hero } = fields;
  return {
    title,
    slug,
    shortBody,
    body,
    publishedAt: dayjs(publishedAt).format('MMMM DD'),
    heroImage: hero.fields.file.url,
    author: {
      name: fields.author.fields.name,
      photo: fields.author.fields.photo.fields.file.url,
    },
    category: {
      name: fields.category.fields.name,
      slug: fields.category.fields.slug,
    },
    readingTime: readingTime(body).text,
  };
};

const createCategory = (data: any): Category => {
  const { name, slug } = data.fields;
  return {
    name,
    slug,
  };
};
