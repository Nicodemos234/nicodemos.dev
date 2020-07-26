import styles from './Carousel.module.css'

function CarouselW() {
    return <div className={styles.carousel}>
        <div className={styles.left}></div>
        <div className={styles.content}>
            <div className={styles.item}>
                <div><a target="_blank" href="https://www.pechinchou.com.br"><img src="/assets/images/carousel/pechincha.png" /></a></div>
                <div>
                    Website developed using Wordpress
                </div>
                <div><a target="_blank" href="https://www.pechinchou.com.br">Pechinchou Site</a></div>
            </div>
            {/* <div className={styles.item}>
                <div><a target="_blank" href="https://www.pechinchou.com.br"><img src="/assets/images/carousel/pechincha.png" /></a></div>
                <div>
                    Website developed using Wordpress
                </div>
                <div><a target="_blank" href="https://www.pechinchou.com.br">Pechinchou Site</a></div>
            </div> */}
        </div>
        <div className={styles.right}></div>
    </div>

}

export default CarouselW