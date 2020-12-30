import Footer from '../components/Footer';
import Head from 'next/head'
import style from '../components/Index.module.scss';



class home extends React.Component {



  render() {
    return (
      <div>

        <Head>
          <title>写真家 伊藤惇</title>
          <meta property="og:title" content="写真家 伊藤惇" />
          <meta property="og:url" content="https://studio-rem.jp" />
        </Head>

        <div className={style.container}>
          <div className={style.inner}>
            <div className={style.clm}>
              <div className={style.imagecont}>
                <ul>
                  <img src="/images/index/keyvisual.jpg" />
                </ul>
              </div>
              <div className={style.navArea}>
                <h1 className={style.heading}>Atsushi ito<span>PHOTO GRAPFER</span></h1>
                <nav className={style.indexNav} role="navigation">
                  <ul>
                    <li>
                      <a href="/profile"><span>PROFILE</span></a>
                    </li>
                    <li>
                      <a href="/arts"><span>ARTS</span></a>
                    </li>
                    <li>
                      <a href="/works"><span>WORKS</span></a>
                    </li>
                    <li>
                      <a href="/contact"><span>CONTACT</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }

}

export default home
