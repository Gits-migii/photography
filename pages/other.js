import { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout'
import Head from 'next/head'


const other = () => {
  <Head>
    <title>その他 - 写真家 伊藤惇</title>
    <meta property="og:title" content="CONTACT - 写真家 伊藤惇" />
    <meta property="og:url" content="https://studio-rem.jp/contact" />
  </Head>

  return (
    <div>
      <Layout>
        <h1>その他</h1>
      </Layout>
    </div>
  )
}

export default other