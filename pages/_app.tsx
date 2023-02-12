import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
config.autoAddCss = false

function Layout({ children }: { children: ReactElement }) {
  return (
    <>

      <Head>
        <title>GBKP KMKJ</title>
        <link rel="icon" href="/gbkp-logo.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)
  return getLayout(<Component {...pageProps} />);
}
