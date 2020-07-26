import dynamic from "next/dynamic"
import Head from 'next/head'

const Header = dynamic(import("../components/Header"));
export default function Home() {
  return (
    <div className="container-main">
      <Head>
        <title>Nicodemos.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="nico-flex">
        <div className="nico-index">
          <h1>Welcome</h1>
          <p>Hi, my name is Nicodemos, I have 18 years old, I'm programmer, video editor and passionate about technology.</p>
          <div className="socials">
            <a target="_blank" href="https://www.twitch.tv/nicodemos234">
              <img className="socialbtn" src="/assets/images/socials/twitch.png" />
            </a>
            <a target="_blank" href="https://www.youtube.com/nicodemos234">
              <img className="socialbtn" src="/assets/images/socials/youtube.png" />
            </a>
            <a target="_blank" href="https://twitter.com/nicodemos234">
              <img className="socialbtn" src="/assets/images/socials/twitter.png" />
            </a>
            <a target="_blank" href="https://www.instagram.com/nicodemos234/">
              <img className="socialbtn" src="/assets/images/socials/instagram.png" />
            </a>
            <a target="_blank" href="https://github.com/nicodemos234">
              <img className="socialbtn" src="/assets/images/socials/github.png" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/nicodemossouza/">
              <img className="socialbtn" src="/assets/images/socials/linkedin.png" />
            </a>
          </div>
        </div>
        <div>
          <img className="nicoimage" src="/assets/images/nico.png" alt="Nico image" />
        </div>
      </div>
    </div>
  )
}
