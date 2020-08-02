import dynamic from "next/dynamic"
import Head from 'next/head'

const Form = dynamic(import('../components/Form'));

function Contact() {

    return <div className="container-main">
        <Head>
            <title>Contact - Nicodemos.dev</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="nico-flex" >
            <Form />
        </div>
    </div>
}

export default Contact