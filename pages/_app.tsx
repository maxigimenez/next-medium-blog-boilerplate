import App from 'next/app';
import Head from 'next/head';

import { Nav } from '../components/nav';
import { Footer } from '../components/footer';

import '../scss/main.scss';
import { API } from '../core';
import config from '../config';

const CustomApp = ({ Component, pageProps, categories, isErrorPage }) => {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Source+Sans+Pro:400,600,700" rel="stylesheet"></link>
      {/* Enable google analytics tracking */}
      {!!config.googleAnalytics && <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${config.googleAnalytics}');`}}></script>}
      {!!config.googleAnalytics && <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics}`}></script>}
    </Head>

    {!isErrorPage && <Nav categories={categories} />}

    <Component {...pageProps} />

    {!isErrorPage && <Footer />}
  </>;
};

CustomApp.getInitialProps = async context => {
  const apiRef = new API();
  const appProps = await App.getInitialProps(context);
  const categories = await apiRef.getCategories();
  const isErrorPage = context.ctx.res.statusCode === 404 || false;
  return { ...appProps, categories, isErrorPage };
}

export default CustomApp;
