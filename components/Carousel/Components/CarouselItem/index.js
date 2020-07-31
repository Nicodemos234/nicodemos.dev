import { Carousel } from "react-responsive-carousel"

function CarouselItem( props ) {
    return <div className={props.className}>
                <div>
                    <a target="_blank" href={props.href}><img src={props.src} /></a>
                </div>
                <div>
                    {props.desc}
                </div>
                <div>
                    <a target="_blank" href={props.href}>{ props.pname }</a>
                </div>
            </div>
}

export default CarouselItem;