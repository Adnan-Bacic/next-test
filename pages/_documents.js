import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        {/* Add Bootstrap CSS CDN */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-pzjw8f+ua7Kw1TIq0Gv9Yp6J8p2Fw8qKNhgsApk5gYY/69Asv5URB4bIX3gB3bY2"
          crossorigin="anonymous"
        />
        {/* Optional: Add Bootstrap JS CDN (if needed for modals, tooltips, etc.) */}
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zyG1WvXyXzGyxXyXxGoXg5/2X+g6tfK1zfo75Kcm"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
          integrity="sha384-pzjw8f+ua7Kw1TIq0Gv9Yp6J8p2Fw8qKNhgsApk5gYY/69Asv5URB4bIX3gB3bY2"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          integrity="sha384-pzjw8f+ua7Kw1TIq0Gv9Yp6J8p2Fw8qKNhgsApk5gYY/69Asv5URB4bIX3gB3bY2"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}