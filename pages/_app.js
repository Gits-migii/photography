import '../styles/style.scss';
import * as gtag from '../lib/gtag'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  Router.events.on('routeChangeComplete', url => gtag.pageview(url))
};

export default MyApp;