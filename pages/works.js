import dynamic from "next/dynamic"
import Head from 'next/head'



const Carousel = dynamic(import("../components/Carousel"))

function Works() {
    return <div className="container-main">
        <Head>
            <title>Works - Nicodemos.dev</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="nico-flex">
            <Carousel />
        </div>
    </div>
}

export default Works