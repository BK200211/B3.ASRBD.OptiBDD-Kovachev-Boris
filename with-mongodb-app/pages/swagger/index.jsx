// pages/swagger/index.jsx

import Head from 'next/head';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const Swagger = () => {
  return (
    <div>
      <Head>
        <title>API Documentation</title>
        <meta name="description" content="API Documentation for Movie Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SwaggerUI url="/api/doc" />
    </div>
  );
};

export default Swagger;
