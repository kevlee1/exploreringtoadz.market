import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function Robes({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            background: #000000e0;
            color: white;
            overflow-x: hidden;
            padding: 0;
            margin: 0;
          }
          canvas {vertical-align: top;}
        `}
      </style>
      <Head>
        <title>exploringtoadz.market</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@kevlee97" />
        <meta property="og:url" content="https://exploringtoadz.market" />
        <meta property="og:title" content="exploringtoadz.market" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:description"
          content="See the floor price of Explorer Toadz from the CrypToadz project."
        />
        <script
          data-goatcounter="https://explorertoadz.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js"></script>
        <script type="text/javascript" src="stars.js"></script>

      </Head>
    </>
  )
}

export default Robes
