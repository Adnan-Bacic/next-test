import '../styles/globals.css'
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
      <footer>
        <p>
          footer
        </p>
      </footer>
    </>
  )
}

export default MyApp
