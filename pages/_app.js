import '../styles/globals.css'
import MainMenu from '../component/MainMenu'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Footer from '../components/templetes/footer/Footer'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { loadState } from '../redux/storeSaveAndLoad'
import { isPhone, reloadStateFromLocalStorage } from '../redux/actionCreators'
import { NextSeo } from 'next-seo'
import Whatsapp from 'component/atoms/Whatsapp'
import Script from 'next/script'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => {
  scroll(0, 0)
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    store.dispatch(reloadStateFromLocalStorage(loadState()))
    if (innerWidth < 1024) {
      store.dispatch(isPhone(true))
    } else {
      store.dispatch(isPhone(false))
    }
  }, [])

  const router = useRouter()

  return (
    <Provider store={store}>
      <NextSeo
        title={`${process.env.SITE_NAME} | todos los deportes en un solo lugar`}
        description="Bienvenido(a) a Fabian Sport. Encuentra en esta tienda online zapatillas, ropa y accesorios deportivos de tus marcas favoritas."
        openGraph={{
          type: "website",
          locale: "es_PE",
          site_name: "Fabian Sport",
          url: `${process.env.WEB}${router.asPath}`,
          title: `${process.env.SITE_NAME} | Todos los deportes en un solo lugar`,
          description: "Bienvenido(a) a Fabian Sport. Encuentra en esta tienda online zapatillas, ropa y accesorios deportivos de tus marcas favoritas.",
          images: [
            {
              url: `${process.env.WEB}/images/facebook.jpg`,
              width: 998,
              height: 522,
              alt: "FabianSport",
            },
            {
              url: `${process.env.WEB}/images/logo_og_192.jpg`,
              width: 192,
              height: 192,
              alt: "FabianSport",
            }
          ],
        }}
      />
      <Head>
        <meta name="author" content="https://tuemprende.com" />
        <meta name="keywords" content="zapatos, zapato, ropas, accesorios, deporte, zapatilla, calzado, ropa, fabian, sport, fabiansport, fs, lima" />
        <meta name="theme-color" content="#202020" />
        <meta name="msapplication-navbutton-color" content="#202020" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#202020" />

        <link rel="icon" type="image.png" sizes="192x192" href="/images/favicon.png" />
      </Head>
      
      <Script src="https://sdk.mercadopago.com/js/v2" />
      
      <MainMenu />
      <div className="section-height">
        <Component {...pageProps} />
      </div>
      <Footer />
      <Whatsapp />

    </Provider>
  )
}

export default MyApp
