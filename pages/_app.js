import '../assets/styles/reset.css'
import '../assets/styles/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { PageTransition } from 'next-page-transitions'
import dynamic from "next/dynamic"
const Header = dynamic(import("../components/Header"))


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  return <>
    <Header />
    <PageTransition timeout={300} classNames="page-transition">
      <Component {...pageProps} key={router.route} />
    </PageTransition>
    <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            height: 90vh;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 0.2s;
            height: 90vh;
          }
          .page-transition-exit {
            opacity: 1;
            height: 90vh;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 0.2s;
            height: 90vh;
          }
          .page-transition-enter-done {
            height: 90vh;
          }
        `}</style>
  </>
}