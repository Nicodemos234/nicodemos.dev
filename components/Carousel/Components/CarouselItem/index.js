import { Carousel } from "react-responsive-carousel"

function CarouselItem( {className, href, desc, pname} ) {
    return <div className={className}>
                <div>
                    <a target="_blank" href={href}><img src={src} /></a>
                </div>
                <div>
                    {desc}
                </div>
                <div>
                    <a target="_blank" href={href}>{ pname }</a>
                </div>
            </div>
}

export default CarouselItem;