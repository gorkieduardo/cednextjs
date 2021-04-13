import React from 'react'
import Head from "next/head";
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
      <>

       <Head>
        <title>CEED</title>
        <meta name="descripcion" content="CEED" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto+Slab:400,700&display=swap"
          rel="stylesheet"
        />

        <link href="/static/css/custom.css" rel="stylesheet"/>
        </Head>

        <Header/>
     
        <main className="container">{children}</main>
        <script src="static/js/bootstrap.min.js"></script>

        <Footer />
      
        </>
    )
}

export default Layout
