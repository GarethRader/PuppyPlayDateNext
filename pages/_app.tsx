import '../styles/globals.css'
import type { AppProps } from 'next/app'


// TODO: add infrastructure for SEO (see https://github.com/garmeeh/next-seo)

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Component {...pageProps} />

  )
}

export default MyApp
