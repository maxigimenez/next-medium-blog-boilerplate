import Head from 'next/head';
import { Footer } from '../components/footer';

const Home = () => {
  return <>
    <Head>
      <title>Next.js Medium Style Blog</title>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Source+Sans+Pro:400,600,700" rel="stylesheet"></link>
    </Head>

    <div className="container">
      <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
        <div className="pl-4 pr-0 h-100 tofront">
          <div className="row justify-content-between">
            <div className="col-md-6 pt-6 pb-6 align-self-center">
              <h1 className="secondfont mb-3 font-weight-bold">Mundana is an HTML Bootstrap Template for Professional Blogging</h1>
              <p className="mb-3">
                Beautifully crafted with the latest technologies, SASS & Bootstrap 4.1.3, Mundana is the perfect design for your professional blog. Homepage, post article and category layouts available.
              </p>
              <a href="./article.html" className="btn btn-dark">Read More</a>
            </div>
            <div className="col-md-6 d-none d-md-block pr-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586765677067-f8030bd8e303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)', backgroundSize: 'cover' }}></div>
          </div>
        </div>
      </div>
    </div>

    <div className="container pt-4 pb-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="card border-0 mb-4 box-shadow h-xl-300">
            <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586765677067-f8030bd8e303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)', backgroundSize: 'cover', height: '150px' }}></div>
            <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
              <h2 className="h4 font-weight-bold">
                <a className="text-dark" href="./article.html">Brain Stimulation Relieves Depression Symptoms</a>
              </h2>
              <p className="card-text">
                Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.
              </p>
              <div>
                <small className="d-block"><a className="text-muted" href="./author.html">Favid Rick</a></small>
                <small className="text-muted">Dec 12 &middot; 5 min read</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="flex-md-row mb-4 box-shadow h-xl-300">
            <div className="mb-3 d-flex align-items-center">
              <img height="80" src="https://images.unsplash.com/photo-1586765677067-f8030bd8e303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
              <div className="pl-3">
                <h2 className="mb-2 h6 font-weight-bold">
                  <a className="text-dark" href="./article.html">Nasa's IceSat space laser makes height maps of Earth</a>
                </h2>
                <div className="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small className="text-muted">Dec 12 &middot; 5 min read</small>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img height="80" src="https://images.unsplash.com/photo-1586765677067-f8030bd8e303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
              <div className="pl-3">
                <h2 className="mb-2 h6 font-weight-bold">
                  <a className="text-dark" href="./article.html">Underwater museum brings hope to Lake Titicaca</a>
                </h2>
                <div className="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small className="text-muted">Dec 12 &middot; 5 min read</small>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img height="80" src="https://images.unsplash.com/photo-1586765677067-f8030bd8e303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
              <div className="pl-3">
                <h2 className="mb-2 h6 font-weight-bold">
                  <a className="text-dark" href="./article.html">Sun-skimming probe starts calling home</a>
                </h2>
                <div className="card-text text-muted small">
                  Jake Bittle in LOVE/HATE
                </div>
                <small className="text-muted">Dec 12 &middot; 5 min read</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-8">
          <h5 className="font-weight-bold spanborder"><span>All Stories</span></h5>
          <div className="mb-3 d-flex justify-content-between">
            <div className="pr-3">
              <h2 className="mb-1 h4 font-weight-bold">
                <a className="text-dark" href="./article.html">Nearly 200 Great Barrier Reef coral species also live in the deep sea</a>
              </h2>
              <p>
                There are more coral species lurking in the deep ocean that previously thought.
              </p>
              <div className="card-text text-muted small">
                Jake Bittle in SCIENCE
              </div>
              <small className="text-muted">Dec 12 &middot; 5 min read</small>
            </div>
            <img height="120" src="https://images.unsplash.com/photo-1586712447133-1d8836ca525c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <div className="pr-3">
              <h2 className="mb-1 h4 font-weight-bold">
                <a className="text-dark" href="./article.html">East Antarctica's glaciers are stirring</a>
              </h2>
              <p>
                Nasa says it has detected the first signs of significant melting in a swathe of glaciers in East Antarctica.
              </p>
              <div className="card-text text-muted small">
                Jake Bittle in SCIENCE
              </div>
              <small className="text-muted">Dec 12 &middot; 5 min read</small>
            </div>
            <img height="120" src="https://images.unsplash.com/photo-1586712447133-1d8836ca525c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <div className="pr-3">
              <h2 className="mb-1 h4 font-weight-bold">
                <a className="text-dark" href="./article.html">50 years ago, armadillos hinted that DNA wasn’t destiny</a>
              </h2>
              <p>
                Nasa says it has detected the first signs of significant melting in a swathe of glaciers in East Antarctica.
              </p>
              <div className="card-text text-muted small">
                Jake Bittle in SCIENCE
              </div>
              <small className="text-muted">Dec 12 &middot; 5 min read</small>
            </div>
            <img height="120" src="https://images.unsplash.com/photo-1586712447133-1d8836ca525c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          </div>
        </div>
        <div className="col-md-4 pl-4">
          <h5 className="font-weight-bold spanborder"><span>Popular</span></h5>
          <ol className="list-featured">
            <li>
              <span>
                <h6 className="font-weight-bold">
                  <a href="./article.html" className="text-dark">Did Supernovae Kill Off Large Ocean Animals?</a>
                </h6>
                <p className="text-muted">
                  Jake Bittle in SCIENCE
                </p>
              </span>
            </li>
            <li>
              <span>
                <h6 className="font-weight-bold">
                  <a href="./article.html" className="text-dark">Humans Reversing Climate Clock: 50 Million Years</a>
                </h6>
                <p className="text-muted">
                  Jake Bittle in SCIENCE
                </p>
              </span>
            </li>
            <li>
              <span>
                <h6 className="font-weight-bold">
                  <a href="./article.html" className="text-dark">Unprecedented Views of the Birth of Planets</a>
                </h6>
                <p className="text-muted">
                  Jake Bittle in SCIENCE
                </p>
              </span>
            </li>
            <li>
              <span>
                <h6 className="font-weight-bold">
                  <a href="./article.html" className="text-dark">Effective New Target for Mood-Boosting Brain Stimulation Found</a>
                </h6>
                <p className="text-muted">
                  Jake Bittle in SCIENCE
                </p>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </>
}

export default Home;
