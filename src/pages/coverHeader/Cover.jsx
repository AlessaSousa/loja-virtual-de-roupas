import './Cover.css'
import imageHomePage from '../../assets/svg/imageHomePage.svg';
import { Link } from 'react-router-dom';
const Cover = () => {
  return (
    <div className="image-section">
    <img className='image-home-page' src={imageHomePage} alt="Home Page" />
    <div className='text-image-home'>
        <p className='title-catalago'>Conheça nosso catálago</p>
        <p className='description-catalago'>O trendix conta com um catálago variado de peças ecológicas. Por que escolher<br></br>
            entre preço baixo e sustentabilidade quando se pode ter os dois?
        </p>
        <Link to='./catalogo'><button className='btn-catalago'>Catálago</button> </Link>
    </div>
</div>
  )
}

export default Cover