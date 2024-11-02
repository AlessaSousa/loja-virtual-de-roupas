import calcaAlfaiataria from '../../assets/svg/calça-alfaiataria.svg'
import camisaMasculina from '../../assets/svg/camisa-masculina-branca.svg'
import sobretudoBege from '../../assets/svg/sobretudo-bege.svg'
import Slider from "react-slick";

function NewReleases(){

    const roupas = [
        {
            img: calcaAlfaiataria,
        },
        {
            img: camisaMasculina,
        },
        {
            img: sobretudoBege,
        },
        {
            img: calcaAlfaiataria,
        },
        {
            img: camisaMasculina,
        },
        {
            img: sobretudoBege,
        },
        {
            img: calcaAlfaiataria,
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
    arrows: true
    }

    return(
        <>
        <div >
    <Slider {...sliderConfig}>
        {roupas.map((image, index) => 
          <img  key={index} src={image.img}></img>
        )}
    </Slider>
    </div>
        </>
    )
}
export default NewReleases