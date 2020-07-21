import React from 'react';
import Head from 'next/head';
import config from '@/config';

export const NotFound = () => (
  <>
    <Head>
      <title>{config.title}</title>
    </Head>
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
      <div className="inline-block align-middle">
        <h2 className="font-weight-normal lead" id="desc">
          The page you requested was not found.
        </h2>
      </div>
    </div>
  </>
);
