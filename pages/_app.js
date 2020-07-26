import '../assets/styles/reset.css'
import '../assets/styles/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}