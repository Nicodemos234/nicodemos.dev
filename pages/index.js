import Head from 'next/head'
import SocialButton from '../components/SocialButton'

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
          <p>Hi, my name is Nicodemos, I'm a programmer, video editor and passionate about technology.</p>
          <div className="socials">
            <SocialButton href="https://www.twitch.tv/nicodemos234"
              src="/assets/images/socials/twitch.png"
              alt="Twitch logo" />
            <SocialButton href="https://www.youtube.com/nicodemos234"
              src="/assets/images/socials/youtube.png"
              alt="Youtube logo" />
            <SocialButton href="https://www.instagram.com/nicodemos234/"
              src="/assets/images/socials/instagram.png"
              alt="Instagram logo" />
            <SocialButton href="https://github.com/nicodemos234"
              src="/assets/images/socials/github.png"
              alt="Github logo" />
            <SocialButton href="https://www.linkedin.com/in/nicodemossouza/"
              src="/assets/images/socials/linkedin.png"
              alt="Linkedin logo" />
          </div>
        </div>
        <div>
          <img className="nicoimage" src="/assets/images/nico.png" alt="Nico image" />
        </div>
      </div>
    </div>
  )
}
