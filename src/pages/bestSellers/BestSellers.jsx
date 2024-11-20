import calcaAlfaiataria from '../../assets/svg/calça-alfaiataria.svg'
import camisaMasculina from '../../assets/svg/camisa-masculina-branca.svg'
import sobretudoBege from '../../assets/svg/sobretudo-bege.svg'
import Slider from "react-slick";
// import { Link } from 'react-router-dom';
import { useCarrinho } from '../../context/carrinhoContext'
import { useNavigate }  from 'react-router-dom';
function BestSellers() {
    const { adicionarAoCarrinho } = useCarrinho();
    const navigate = useNavigate();
    const roupas = [
        {
            id: 1,
            img: calcaAlfaiataria,
            title: 'Conjunto paletó e calça',
            value: 45.00
        },
        {
            id: 2,
            img: camisaMasculina,
            title: 'Camisa oversize branca',
            value: 45.00
        },
        {
            id: 3,
            img: sobretudoBege,
            title: 'Sobretudo bege',
            value: 45.00
        },
        {
            id: 4,
            img: calcaAlfaiataria,
            title: 'Conjunto paletó e calça',
            value: 45.00
        },
        {
            id: 5,
            img: camisaMasculina,
            title: 'Camisa oversize branca',
            value: 45.00
        },
        {
            id: 6,
            img: sobretudoBege,
            title: 'Sobretuto bege',
            value: 45.00
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
    const comprarAgora = (item) => {
        adicionarAoCarrinho(item);
        navigate('/carrinho');
    }
    return (
        <>
            <div className='container-cards'>
                <Slider {...sliderConfig}>

                    {roupas.map((item, index) =>
                        <div className='cards'>
                            <img className='item-cards' key={index} src={item.img}></img>
                            <p className='text'>{item.title}</p>
                            <div className='value-button'>
                                <p className='text'>R$ {item.value.toFixed(2)}</p>
                                <i className="bi bi-bag pointer"
                                    onClick={() => adicionarAoCarrinho(item)}
                                    title="Adicionar ao Carrinho">
                                </i>
                                <button className="button-buy-releases"
                                    onClick={() => comprarAgora(item)}>
                                    Comprar
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