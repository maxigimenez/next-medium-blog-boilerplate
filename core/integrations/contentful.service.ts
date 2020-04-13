import { createClient } from 'contentful';
import { IntegrationService } from './typings';
import { Post } from '../models';

enum ContentType {
  POST = 'postMedium'
}

export class ContentfulService implements IntegrationService {
  private _client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  // async getPosts() {
  //   try {
  //     const posts = await this._client.getEntries({
  //       'content_type': ContentType.BLOG_POST
  //     });
  //     return posts.items.map((post: any) => {
  //       return new Post({
  //         title: post.fields.title,
  //         image: post.fields.image.fields.file.url,
  //         body: post.fields.body,
  //         introBody: post.fields.introBody,
  //         imageAlt: post.fields.image.fields.description,
  //         slug: post.fields.slug
  //       });
  //     });
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // }

  getPostBySlug(slug: string): Promise<Post> {
    return new Promise(async (resolve, reject) => {
      try {
        const { items }: any = await this._client.getEntries({
          'content_type': ContentType.POST,
          'fields.slug[in]': slug
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
}

const createPost = (data: any): Post => {
  const { fields } = data;
  const { title, slug, shortBody, body, publishedAt, hero } = fields;
  return {
    title,
    slug,
    shortBody,
    body,
    publishedAt,
    heroImage: hero.fields.file.url,
    author: {
      name: fields.author.fields.name,
      photo: fields.author.fields.photo.fields.file.url
    },
    category: {
      name: fields.category.fields.name,
      slug: fields.category.fields.slug
    }
  };
}
