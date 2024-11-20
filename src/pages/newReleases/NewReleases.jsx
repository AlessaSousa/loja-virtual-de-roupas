import calcaAlfaiataria from '../../assets/svg/calça-alfaiataria.svg'
import camisaMasculina from '../../assets/svg/camisa-masculina-branca.svg'
import sobretudoBege from '../../assets/svg/sobretudo-bege.svg'
import Slider from "react-slick";
import './NewReleases.css'
// import { Link } from 'react-router-dom';
import { useCarrinho } from '../../context/carrinhoContext'
import { useNavigate }  from 'react-router-dom';

function NewReleases() {

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

    const comprarAgora = (item) => {
        adicionarAoCarrinho(item);
        navigate('/carrinho');
    }

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

                    {roupas.map((item, index) =>
                        <div key={index} className='cards'>
                            <img className='item-cards' src={item.img} alt={item.title}/>
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

            <div>
                <p className='discover'>Descubra os fundamentos do desperdício zero</p>
                <p className='discover-text'>Lixo zero significa reduzir seu desperdício individual
                    o máximo possível. Não é bom apenas para o meio ambiente,
                    mas também mantém sua saúde no lugar, economiza dinheiro
                    e simplifica sua vida. Na Green Feels, ajudamos você a
                    encontrar itens essenciais diários de desperdício zero
                    que reduzem seu desperdício com conveniência e facilidade</p>
            </div>
        </>
    )
}
export default NewReleases