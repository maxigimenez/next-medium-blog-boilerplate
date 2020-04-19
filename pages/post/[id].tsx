import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { API } from '../../core';
import config from '../../config';
import { Post as PostModel } from '../../core/models';
import { NotFound } from '../../components/not-found';

const Post = ({ post, error }: { post: PostModel, error?: boolean; }) => {
  if (error) {
    return <NotFound />;
  }

  return <>
    <Head>
      <title>{post.title} - {config.title}</title>
      <meta property="og:title" content={`${post.title} - ${config.title}`} />
      <script async src="//static.addtoany.com/menu/page.js"></script>
    </Head>

    <div className="container first-container">
      <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
        <div className="h-100 tofront">
          <div className="row justify-content-between">
            <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
              <p className="text-uppercase font-weight-bold">
                <Link href={`/category/${post.category.slug}`}>
                  <a className="text-danger">{post.category.name}</a>
                </Link>
              </p>
              <h1 className="display-4 secondfont mb-3 font-weight-bold">{post.title}</h1>
              <ReactMarkdown source={post.shortBody} className="mb-3" />
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src={post.author.photo} width="70" height="70" style={{ objectFit: 'cover' }} />
                <small className="ml-2">{post.author.name} <span className="text-muted d-block">{post.publishedAt} &middot; {post.readingTime}</span></small>
              </div>
            </div>
            <div className="col-md-6 pr-0">
              <img src={post.heroImage} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container pt-4 pb-4">
      <div className="row justify-content-center">
        <div className="col-lg-2 pr-4 mb-4 col-md-12">
          <div className="sticky-top text-center">
            <div className="text-muted">
              Share this
            </div>
            <div className="share d-inline-block">
              <div className="a2a_kit a2a_kit_size_32 a2a_default_style" dangerouslySetInnerHTML={{__html: `
                <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
                <a class="a2a_button_facebook"></a>
                <a class="a2a_button_twitter"></a>
                <a class="a2a_button_email"></a>
              `}}></div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-8">
          <article className="article-post">
            <ReactMarkdown source={post.body} />
          </article>
          <div className="border p-5 bg-lightblue">
            <div className="row justify-content-between">
              <div className="col-md-5 mb-2 mb-md-0">
                <h5 className="font-weight-bold secondfont">Become a member</h5>
                Get the latest news right in your inbox. We never spam!
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Enter your e-mail address" />
                  </div>
                  <div className="col-md-12 mt-2">
                    <button type="submit" className="btn btn-success btn-block">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="container pt-4 pb-4">
      <h5 className="font-weight-bold spanborder"><span>Read next</span></h5>
      <div className="row">
        <div className="col-lg-6">
          <div className="card border-0 mb-4 box-shadow h-xl-300">
            <div style="background-image: url(./assets/img/demo/3.jpg); height: 150px; background-size: cover; background-repeat: no-repeat;">
            </div>
            <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
              <h2 className="h4 font-weight-bold">
              <a className="text-dark" href="#">Brain Stimulation Relieves Depression Symptoms</a>
              </h2>
              <p className="card-text">
                Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.
              </p>
              <div>
                <small className="d-block"><a className="text-muted" href="./author.html">Favid Rick</a></small>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="flex-md-row mb-4 box-shadow h-xl-300">
            <div className="mb-3 d-flex align-items-center">
              <img height="80" src="./assets/img/demo/blog4.jpg">
              <div className="pl-3">
                <h2 className="mb-2 h6 font-weight-bold">
                <a className="text-dark" href="./article.html">Nasa's IceSat space laser makes height maps of Earth</a>
                </h2>
                <div className="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img height="80" src="./assets/img/demo/blog5.jpg">
              <div className="pl-3">
                <h2 className="mb-2 h6 font-weight-bold">
                <a className="text-dark" href="./article.html">Underwater museum brings hope to Lake Titicaca</a>
                </h2>
                <div className="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img height="80" src="./assets/img/demo/blog6.jpg">
              <div className="pl-3">
                <h2 className="mb-2 h6 font-weight-bold">
                <a className="text-dark" href="./article.html">Sun-skimming probe starts calling home</a>
                </h2>
                <div className="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </>
}

export const getServerSideProps = async ({ query }) => {
  const apiRef = new API();
  try {
    const post = await apiRef.getPostBySlug(query.id);
    return { props: { post } };
  } catch (e) {
    return { props: { post: null, error: true } }
  }
}

export default Post;
