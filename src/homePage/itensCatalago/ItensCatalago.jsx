import calcaAlfaiataria from '../../assets/svg/calça-alfaiataria.svg';
import camisaMasculina from '../../assets/svg/camisa-masculina-branca.svg';
import sobretudoBege from '../../assets/svg/sobretudo-bege.svg';
import camisaXadrez from '../../assets/png/camisa-xadrez.png';
import JaquetaTreino from '../../assets/png/jaqueta-treino.png';
import CamisaInfantil from '../../assets/png/camiseta-infantil.png';
import BlusaFeminina from '../../assets/png/blusa-feminina.png';
import CalçaJeans from '../../assets/png/calça-jeans.png';
import ShortsCorrida from '../../assets/png/shorts-corrida.png';
import Saia from '../../assets/png/saia.png';
import TopEsportivo from '../../assets/png/top-esportivo.png';
import JaquetaCouro from '../../assets/png/jaqueta-couro.png';
import './ItensCatalago.css';
import { Link } from 'react-router-dom';

function ItensCatalago({ selectedCategory }) {
  const roupas = [
    { img: calcaAlfaiataria, title: 'Conjunto paletó e calça', value: 'R$ 45.00', category: 'Calças' },
    { img: camisaMasculina, title: 'Camisa oversize branca', value: 'R$ 45.00', category: 'Camisas' },
    { img: sobretudoBege, title: 'Sobretudo bege', value: 'R$ 45.00', category: 'Sobretudos' },
    { img: camisaXadrez, title: "Camisa xadrez clássica", value: "R$ 49.90", category: "Masculino" },
    { img: JaquetaTreino, title: "Jaqueta de treino", value: "R$ 199.90", category: "Esporte" },
    { img: CamisaInfantil, title: "Camiseta Infantil", value: "R$ 29.90", category: "Infantil" },
    { img: BlusaFeminina, title: "Blusa feminina", value: "R$ 59.90", category: "Feminino" },
    { img: CalçaJeans, title: "Calça jeans", value: "R$ 89.90", category: "Masculino" },
    { img: ShortsCorrida, title: "Shorts de corrida", value: "R$ 49.90", category: "Esporte" },
    { img: Saia, title: "Saia Jeans", value: "R$ 69.90", category: "Feminino" },
    { img: TopEsportivo, title: "Conjunto Esportivo", value: "R$ 139.90", category: "Esporte" },
    { img: JaquetaCouro, title: "Jaqueta de couro", value: "R$ 129.90", category: "Feminino" },
  ];

  // Filtra os itens com base na categoria selecionada
  const filteredRoupas = selectedCategory ? roupas.filter(item => item.category === selectedCategory) : roupas;

  return (
    <div className="container-cards-catalago">
      {filteredRoupas.map((image, index) =>
        <div key={index} className='cards-catalago'>
          <img className='image-cards-catalago' src={image.img} alt={image.title} />
          <p className='text-catalago'>{image.title}</p>
          <div className='value-button'>
            <p className='text-catalago'>{image.value}</p>
            <button className="button-buy">
              <Link to="#">Comprar</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItensCatalago;
