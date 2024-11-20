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
import { useNavigate } from 'react-router-dom';
import { useCarrinho } from '../../context/carrinhoContext';


function ItensCatalago({ selectedCategory }) {

  const { adicionarAoCarrinho } = useCarrinho();
  const navigate = useNavigate();
  const roupas = [
    { id: 1, img: calcaAlfaiataria, title: 'Conjunto paletó e calça', value: 45.00, category: 'Calças' },
    { id: 2, img: camisaMasculina, title: 'Camisa oversize branca', value: 45.00, category: 'Camisas' },
    { id: 3, img: sobretudoBege, title: 'Sobretudo bege', value: 45.00, category: 'Sobretudos' },
    { id: 4, img: camisaXadrez, title: "Camisa xadrez clássica", value: 49.90, category: "Masculino" },
    { id: 5, img: JaquetaTreino, title: "Jaqueta de treino", value: 199.90, category: "Esporte" },
    { id: 6, img: CamisaInfantil, title: "Camiseta Infantil", value: 29.90, category: "Infantil" },
    { id: 7, img: BlusaFeminina, title: "Blusa feminina", value: 59.90, category: "Feminino" },
    { id: 8, img: CalçaJeans, title: "Calça jeans", value: 89.90, category: "Masculino" },
    { id: 9, img: ShortsCorrida, title: "Shorts de corrida", value: 49.90, categor: "Esporte" },
    { id: 10, img: Saia, title: "Saia Jeans", value: 69.90, categoy: "Feminino" },
    { id: 11, img: TopEsportivo, title: "Conjunto Esportivo", value: 139.90, category: "Esporte" },
    { id: 12, img: JaquetaCouro, title: "Jaqueta de couro", value: 129.90, category: "Feminino" },
  ];

  // Filtra os itens com base na categoria selecionada
  const filteredRoupas = selectedCategory ? roupas.filter(item => item.category === selectedCategory) : roupas;


  const comprarAgora = (item) => {
    adicionarAoCarrinho(item);
    navigate('/carrinho');
  }
  
  return (
    <div className="container-cards-catalago">
      {filteredRoupas.map((item, index) => (
        <div key={index} className='cards-catalago'>
          <img className='image-cards-catalago' src={item.img} alt={item.title} />
          <p className='text-catalago'>{item.title}</p>
          <div className='value-button'>
            <p className='text-catalago'>R$ {item.value.toFixed(2)}</p>
            <i className="bi bi-bag pointer"
              onClick={() => adicionarAoCarrinho(item)}
              title="Adicionar ao Carrinho">
            </i>
            <button className="button-buy"
              onClick={() => comprarAgora(item)} >
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItensCatalago;
