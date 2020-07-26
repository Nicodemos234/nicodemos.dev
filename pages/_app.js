import '../assets/styles/reset.css'
import '../assets/styles/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { PageTransition } from 'next-page-transitions'
import dynamic from "next/dynamic"
const Header = dynamic(import("../components/Header"))

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <div id="main">
    <Header />
    <PageTransition timeout={300} classNames="page-transition">
      <Component {...pageProps} />
    </PageTransition>
    <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            height: inherit;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 0.2s;
            height: inherit;
          }
          .page-transition-exit {
            opacity: 1;
            height: inherit;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 0.2;
            height: inherit;
          }
          .page-transition-enter-done {
            height: inherit;
          }
        `}</style>
  </div>
}