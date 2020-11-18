import { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';
import Head from 'next/head';


class unko {

  getPhoto() {
    console.log(1);
    fetch("https://photography.microcms.io/api/v1/photo/z9638pyxg", {
      headers:
        "X-API-KEY: d0498078-9c01-460b-bd63-4998725a4014"
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      document.getElementById("title").innerHTML = json.title;
      document.getElementById("image").innerHTML = json.image;
    })
  };
}

const portrait = () => {
  <Head>
    <title>その他 - 写真家 伊藤惇</title>
    <meta property="og:title" content="CONTACT - 写真家 伊藤惇" />
    <meta property="og:url" content="https://studio-rem.jp/contact" />
  </Head>

  return (
    <div>
      <Layout>
        <h1>ポートレート</h1>
        {/* // 多分ここらへんで関数実行するのか？ → getPhoto */}
        {/* 実行されない */}
        <button onClick={unko.getPhoto}>click</button>
      </Layout>
    </div>
  )
}

export default portrait