import Head from 'next/head'
import LinkCard from '../components/LinkCard'


function Links() {

    return <div className="container-main">
        <Head>
            <title>Links - Nicodemos.dev</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div>
            <LinkCard text="TWITCH - ONDE FAÇO MINHAS LIVES" href="https://www.twitch.tv/nicodemos234" />
            <LinkCard text="YOUTUBE - ONDE POSTO VÍDEOS AS VEZES" href="https://www.youtube.com/nicodemos234" />
        </div>
    </div>
}

export default Links