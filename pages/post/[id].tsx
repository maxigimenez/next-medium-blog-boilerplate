import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Post as PostModel } from '@/core/models';
import config from '@/config';
import { API } from '@/core/api';

import { Subscription } from '@/components';

const Post = ({ post }: { post: PostModel }) => {
  return (
    <>
      <Head>
        <title>
          {post.title} - {config.title}
        </title>
        <meta property="og:title" content={`${post.title} - ${config.title}`} />
        <meta property="og:site_name" content={config.domain} />
        <meta property="og:url" content={`https://${config.domain}/post/${post.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={post.heroImage} />
        <meta property="og:description" content={post.shortBody} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.shortBody} />
        <meta name="twitter:image" content={post.heroImage} />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <script async src="//static.addtoany.com/menu/page.js"></script>
      </Head>

      <div className="container first-container">
        <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
          <div className="h-100 tofront">
            <div className="row justify-content-between">
              <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                <p className="text-uppercase font-weight-bold">
                  <Link href={`/category/${post.category.slug}`}>
                    <a href={`/category/${post.category.slug}`} className="text-danger">
                      {post.category.name}
                    </a>
                  </Link>
                </p>
                <h1 className="display-4 secondfont mb-3 font-weight-bold">{post.title}</h1>
                <ReactMarkdown source={post.shortBody} className="mb-3" />
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src={post.author.photo}
                    width="70"
                    height="70"
                    style={{ objectFit: 'cover' }}
                    alt={post.author.name}
                  />
                  <small className="ml-2">
                    {post.author.name}{' '}
                    <span className="text-muted d-block">
                      {post.publishedAt} &middot; {post.readingTime}
                    </span>
                  </small>
                </div>
              </div>
              <div className="col-md-6 pr-0">
                <img
                  src={post.heroImage}
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  alt={post.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-4 pb-4">
        <div className="row justify-content-center">
          <div className="col-lg-2 pr-4 mb-4 col-md-12">
            <div className="sticky-top text-center">
              <div className="text-muted">Share this</div>
              <div className="share d-inline-block">
                <div
                  className="a2a_kit a2a_kit_size_32 a2a_default_style"
                  dangerouslySetInnerHTML={{
                    __html: `
                <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
                <a class="a2a_button_facebook"></a>
                <a class="a2a_button_twitter"></a>
                <a class="a2a_button_email"></a>
              `,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <article className="article-post">
              <ReactMarkdown source={post.body} />
            </article>
            {config.subscription.enabled && <Subscription />}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const apiRef = new API();
  const slugs = await apiRef.getPostsPaths();
  return {
    paths: slugs.map((slug) => `/post/${slug}`),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const apiRef = new API();
  const post = await apiRef.getPostBySlug(params.id);
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export default Post;
