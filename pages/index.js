import Layout from '../components/Layout'
import Head from 'next/head'




class home extends React.Component {



  render() {
    return (

      <Layout>
        <Head>
          <title>写真家 伊藤惇</title>
          <meta property="og:title" content="写真家 伊藤惇" />
          <meta property="og:url" content="https://studio-rem.jp" />
        </Head>


        <div><img src="/images/index/keyvisual.jpg" /></div>

      </Layout>
    )
  }

}

export default home
