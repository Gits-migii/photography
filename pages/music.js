import { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout'
import Head from 'next/head'


const music = () => {
  <Head>
    <title>MUSIC - 写真家 伊藤惇</title>
    <meta property="og:title" content="CONTACT - 写真家 伊藤惇" />
    <meta property="og:url" content="https://studio-rem.jp/contact" />
  </Head>

  return (
    <div>
      <Layout>
        <h1>ミュージック</h1>
      </Layout>
    </div>
  )
}

export default music