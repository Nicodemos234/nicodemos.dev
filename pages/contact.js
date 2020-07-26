import dynamic from "next/dynamic"
import Head from 'next/head'

const Header = dynamic(import("../components/Header"));

function Contact() {
    return <div>
        <Head>
        <title>Contact - Nicodemos.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Header />
        works
    </div>
}

export default Contact