import './Reviews.css'
import clienteManish from '../../assets/svg/cliente-manish.svg'
import clienteAnanya from '../../assets/svg/cliente-ananya.svg'
import clienteSanjana from '../../assets/svg/cliente-sanjana.svg'
import clienteVikram from '../../assets/svg/cliente-vikram.svg'
import Slider from 'react-slick'

function Reviews() {

    const customers = [
        {
            img: clienteManish,
            name: 'Manish Rajput',
            occupation: 'Empresário',
            description: "Estou comprando na Natural Spirit Boutique há meses, e amo o compromisso deles com a sustentabilidade! Desde a embalagem ecológica até os produtos de alta qualidade, cada compra parece um passo em direção a um futuro mais verde. Super recomendo!",

        },
        {
            img: clienteAnanya,
            name: 'Ananya',
            occupation: 'Secretária',
            description: "Encontrei a Natural Spirit Boutique enquanto procurava por alternativas ecológicas, e estou muito feliz por isso! As escovas de bambu deles são fantásticas, e me sinto muito bem sabendo que estou reduzindo o desperdício de plástico a cada escovação. Obrigado por tornar mais fácil viver de forma sustentável.",

        },
        {
            img: clienteVikram,
            name: 'Vikram',
            occupation: 'Investidor',
            description: "Como alguém apaixonado por reduzir plásticos de uso único, estou muito feliz por ter encontrado a Natural Spirit Boutique. Seus canudos de aço inoxidável são duráveis, elegantes e perfeitos para aproveitar minhas bebidas favoritas sem culpa. Mal posso esperar para experimentar mais produtos ecológicos deles!",

        },
        {
            img: clienteSanjana,
            name: 'Sanjana',
            occupation: 'Modelo',
            description: "Recentemente comprei um conjunto de envoltórios de cera de abelha na N.S.B e estou impressionado com a qualidade e versatilidade deles! Além de manterem meus alimentos frescos, eles também ajudam a reduzir o desperdício de plástico na minha cozinha. Com certeza farei mais pedidos em breve.",

        }
    ]

    const slideConfig = {
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
            <div className='container-review'>
                <p className='title1'>Avaliações</p>
                <p className='title2'>Veja o que nossos clientes acham</p>
                    <Slider {...slideConfig}>

                        {customers.map((image, index) =>
                            <div key={index}>
                                <div className='image-customer'>
                                    <img src={image.img}></img>
                                </div>

                                <div className='box-customer'>
                                    <p className='text-name'>{image.name}</p>
                                    <p className='text-occupation'>{image.occupation}</p>
                                    <p className='text-description'>{image.description}</p>

                                </div>

                            </div>
                        )}
                    </Slider>
                </div>
        </>
    )
}

export default Reviews