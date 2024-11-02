import calcaAlfaiataria from '../../assets/svg/calça-alfaiataria.svg'
import camisaMasculina from '../../assets/svg/camisa-masculina-branca.svg'
import sobretudoBege from '../../assets/svg/sobretudo-bege.svg'
import Slider from "react-slick";
import './BestSellers.css'
import { Link } from 'react-router-dom';

function BestSellers() {

    const roupas = [
        {
            img: calcaAlfaiataria,
            title: 'Conjunto paletó e calça',
            value: 'R$ 45.00'
        },
        {
            img: camisaMasculina,
            title: 'Camisa oversize branca',
            value: 'R$ 45.00'
        },
        {
            img: sobretudoBege,
            title: 'Sobretuto bege',
            value: 'R$ 45.00'
        },
        {
            img: calcaAlfaiataria,
            title: 'Conjunto paletó e calça',
            value: 'R$ 45.00'
        },
        {
            img: camisaMasculina,
            title: 'Camisa oversize branca',
            value: 'R$ 45.00'
        },
        {
            img: sobretudoBege,
            title: 'Sobretuto bege',
            value: 'R$ 45.00'
        },

    ]
    const sliderConfig = {
        centerMode: false,
        centerPadding: '20px',
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    return (
        <>
            <div className='container-cards'>
                <Slider {...sliderConfig}>

                    {roupas.map((image, index) =>
                        <div className='cards'>
                            <img className='image-cards' key={index} src={image.img}></img>
                            <p className='text'>{image.title}</p>
                            <div className='value-button'>
                                <p className='text'>{image.value}</p>
                                <button className="button-buy">
                                    <Link>Comprar</Link>
                                </button>
                            </div>
                        </div>
                    )}
                </Slider>
            </div>
        </>
    )
}
export default BestSellers