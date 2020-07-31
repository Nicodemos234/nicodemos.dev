import styles from './Carousel.module.css'
import { Carousel } from 'react-responsive-carousel'
import CarouselItem from './Components/CarouselItem'

function CarouselCom() {
    return <Carousel autoPlay showThumbs={false} infiniteLoop stopOnHover>
        <CarouselItem className={styles.item} href="https://www.pechinchou.com.br"
            src="/assets/images/carousel/pechincha.png"
            desc="Website developed using Wordpress" pname="Pechinchou Site" />
        <CarouselItem className={styles.item} href="https://www.siasp.com.br/"
            src="/assets/images/carousel/siasp.png"
            desc="Internship at Siasp" pname="SIASP" />
        <CarouselItem className={styles.item} href="https://www.pechinchou.com.br"
            src="/assets/images/carousel/pechinchaapp.png"
            desc="App developed using Flutter" pname="Pechinchou App (coming soon)" />
        <CarouselItem className={styles.item} href="https://www.quadrocriativo.com.br"
            src="/assets/images/carousel/quadro.png"
            desc="Website developed using Next.js" pname="Quadro Criativo Site (coming soon)" />
    </Carousel>
}

export default CarouselCom