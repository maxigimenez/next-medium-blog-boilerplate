import App from 'next/app'
import Head from 'next/head';

import { Nav } from '../components/nav';
import { Footer } from '../components/footer';

import '../scss/main.scss';
import { API } from '../core';
import config from '../config';

const CustomApp = ({ Component, pageProps, categories }) => {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Source+Sans+Pro:400,600,700" rel="stylesheet"></link>
      {!!config.googleTracking && <script dangerouslySetInnerHTML={{__html: `(function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
          'gtm.start':
            new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${config.googleTracking}');`}}></script>}
    </Head>
    {!pageProps.error && <Nav categories={categories} />}
    <Component {...pageProps} />
    {!pageProps.error && <Footer />}
  </>;
};

CustomApp.getInitialProps = async context => {
  const apiRef = new API();
  const appProps = await App.getInitialProps(context);
  const categories = await apiRef.getCategories();
  return { ...appProps, categories };
}

export default CustomApp;
