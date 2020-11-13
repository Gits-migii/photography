import Header from './Header';
import Footer from './Footer';
import style from './Layout.module.scss'
import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content="website" />
      <meta name="description" content="北海道札幌を拠点に活動する写真家 伊藤惇のオフィシャルサイト。「いつもより少しだけオシャレして出かけよう」をコンセプトに「量」の画像では無く「質」の作品という想いのもと、活動しています" />
      <meta property="og:description" content="北海道札幌を拠点に活動する写真家 伊藤惇のオフィシャルサイト。「いつもより少しだけオシャレして出かけよう」をコンセプトに「量」の画像では無く「質」の作品という想いのもと、活動しています" />
      <meta property="og:image" content="https://studio-rem.jp/ogp.jpg" />
      <meta property="og:site_title" content="写真家 伊藤惇" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg" />
      <meta name="twitter:site" content="@inbluemoment" />
      <meta name="twitter:creator" content="@inbluemoment" />
    </Head>
    <div className={style.grid}>
      <div className={style.header}>
        <Header /></div>
      <main className={style.container}>
        {props.children}
      </main>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  </div>
)

export default Layout

