import styles from './Carousel.module.css'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'


class CarouselC extends React.Component {

    render() {
        return <Carousel autoPlay showThumbs={false} infiniteLoop stopOnHover>
            {/* <div className={styles.left}></div> */}
            <div className={styles.item}>
                <div>
                    <a target="_blank" href="https://www.pechinchou.com.br"><img src="/assets/images/carousel/pechincha.png" /></a>
                </div>
                <div>
                    Website developed using Wordpress
                    </div>
                <div>
                    <a target="_blank" href="https://www.pechinchou.com.br">Pechinchou Site</a>
                </div>
            </div>
            <div className={styles.item}>
                <div>
                    <a target="_blank" href="https://www.siasp.com.br/"><img src="/assets/images/carousel/siasp.png" /></a>
                </div>
                <div>
                    Internship at Siasp
                    </div>
                <div>
                    <a target="_blank" href="https://www.siasp.com.br/">SIASP</a>
                </div>
            </div>
            <div className={styles.item}>
                <div>
                    <a target="_blank" href="https://www.pechinchou.com.br"><img src="/assets/images/carousel/pechinchaapp.png" /></a></div>
                <div>
                    App developed using Flutter
                    </div>
                <div>
                    <a target="_blank" href="https://www.pechinchou.com.br">Pechinchou App (coming soon)</a>
                </div>
            </div>
            <div className={styles.item}>
                <div>
                    <a target="_blank" href="https://www.quadrocriativo.com.br"><img src="/assets/images/carousel/quadro.png" /></a>
                </div>
                <div>
                    Website developed using Next.js
                    </div>
                <div>
                    <a target="_blank" href="https://www.quadrocriativo.com.br">Quadro Criativo Site (coming soon)</a>
                </div>
            </div>
            {/* <div className={styles.right} onClick={this.nextPage}></div> */}
        </Carousel>
    }
}

export default CarouselC