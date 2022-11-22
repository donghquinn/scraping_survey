import '../styles/global.css';
import '../styles/font.css';
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  return (
  <>
    <Head>
      <title> 246 조 </title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1431674278951978"
        crossOrigin="anonymous"></script>
    </Head>
    <div>
      <RecoilRoot>
        <Component  {...pageProps}></Component>
      </RecoilRoot>
    </div>
    {/* <Component {...pageProps} /> */}
  </>
  )
}

export default MyApp;