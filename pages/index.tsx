import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Post } from '@/core/models';
import { API } from '@/core/api';
import config from '@/config';

const Home = ({ posts }: { posts: Post[] }) => {
  const [first] = posts;

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      {first && (
        <div className="container first-container">
          <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
            <div className="pl-4 pr-0 h-100 tofront">
              <div className="row justify-content-between">
                <div className="col-md-6 pt-6 pb-6 align-self-center">
                  <h1 className="secondfont mb-3 font-weight-bold">{first.title}</h1>
                  <ReactMarkdown source={first.shortBody} className="mb-3" />
                  <Link href={`/post/${first.slug}`}>
                    <a href={`/post/${first.slug}`} className="btn btn-dark">
                      Read More
                    </a>
                  </Link>
                </div>
                <div
                  className="col-md-6 d-none d-md-block pr-0"
                  style={{
                    backgroundImage: `url(${first.heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container pt-4">
        <div className="row justify-content-between">
          <div className="col-md-12">
            <h5 className="font-weight-bold spanborder">
              <span>All Stories</span>
            </h5>
            {posts.map((post) => {
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
                      {post.publishedAt} &middot; {post.readingTime}
                    </small>
                  </div>
                  <img height="120" src={post.heroImage} alt={post.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const apiRef = new API();
  const posts = await apiRef.getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export default Home;
