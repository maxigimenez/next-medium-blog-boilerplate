import Head from 'next/head';
import Link from 'next/link';

import ReactMarkdown from 'react-markdown';

import { API } from '@/core/api';
import config from '@/config';
import { Post, Category as CategoryModel } from '@/core/models';
import { Subscription } from '@/components';

type Props = {
  posts?: Post[];
  category?: CategoryModel;
};

const Category = ({ posts, category }: Props) => {
  const [first] = posts;

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div className="container mt-5 mb-5 first-container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="font-weight-bold spanborder">
              <span>Featured in {category.name}</span>
            </h5>
            {first && (
              <div className="card border-0 mb-5 box-shadow">
                <div
                  style={{ backgroundImage: `url(${first.heroImage})`, backgroundSize: 'cover', height: '350px' }}
                ></div>
                <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                  <h2 className="h2 font-weight-bold">
                    <Link href={`/post/${first.slug}`}>
                      <a href={`/post/${first.slug}`} className="text-dark">
                        {first.title}
                      </a>
                    </Link>
                  </h2>
                  <ReactMarkdown source={first.shortBody} className="card-text" />
                  <div>
                    <small className="d-block text-muted">
                      {first.author.name} in {first.category.name}
                    </small>
                    <small className="text-muted">
                      {first.publishedAt} · {first.readingTime}
                    </small>
                  </div>
                </div>
              </div>
            )}
            <h5 className="font-weight-bold spanborder">
              <span>Latest</span>
            </h5>
            {posts.map((post: Post) => {
              return (
                <div key={post.slug} className="mb-3 d-flex justify-content-between">
                  <div className="pr-3">
                    <h2 className="mb-1 h4 font-weight-bold">
                      <Link href={`/post/${post.slug}`}>
                        <a href={`/post/${post.slug}`} className="text-dark">
                          {post.title}
                        </a>
                      </Link>
                    </h2>
                    <ReactMarkdown source={post.shortBody} />
                    <div className="card-text text-muted small">
                      {post.author.name} in {post.category.name}
                    </div>
                    <small className="text-muted">
                      {post.publishedAt} · {post.readingTime}
                    </small>
                  </div>
                  <img height="120" src={post.heroImage} alt={post.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {config.subscription.enabled && (
        <div className="container pt-4 pb-4">
          <Subscription />
        </div>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const apiRef = new API();
  const slugs = await apiRef.getCategoriesPaths();
  return {
    paths: slugs.map((slug) => `/category/${slug}`),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const apiRef = new API();
  const category = await apiRef.getCategory(params.id);
  const posts = await apiRef.getPostsByCategory(params.id);
  return {
    props: {
      posts,
      category,
    },
    revalidate: 1,
  };
};

export default Category;
