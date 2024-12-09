import "./Pedidos.css"
import calcaAlfaiataria from '../../../../assets/svg/calça-alfaiataria.svg';
import camisaMasculina from '../../../../assets/svg/camisa-masculina-branca.svg';
import sobretudoBege from '../../../../assets/svg/sobretudo-bege.svg';
import camisaXadrez from '../../../../assets/png/camisa-xadrez.png';
import JaquetaTreino from '../../../../assets/png/jaqueta-treino.png';
import CamisaInfantil from '../../../../assets/png/camiseta-infantil.png';
import BlusaFeminina from '../../../../assets/png/blusa-feminina.png';
import CalçaJeans from '../../../../assets/png/calça-jeans.png';
import ShortsCorrida from '../../../../assets/png/shorts-corrida.png';
import Saia from '../../../../assets/png/saia.png';
import TopEsportivo from '../../../../assets/png/top-esportivo.png';
import JaquetaCouro from '../../../../assets/png/jaqueta-couro.png';
import { Badge } from "primereact/badge";

const endereco = 'Rua não sei o que';
const cep = '69059-555';
const cidade = 'Manaus';
const estado = 'Amazonas';

const tipoPagamento = 'Cartão de Débito';
const nomeCartao = 'Gojo Satoru';
const numeroCartao = '4565 8569 5236 7854';
const validade = '05/26';
const cvv = 785;

const Pedidos = () => {

    const roupas = [
        { id: 1, img: calcaAlfaiataria, title: 'Conjunto paletó e calça', value: 45.00, category: 'Calças', quantidade: 3 },
        { id: 2, img: camisaMasculina, title: 'Camisa oversize branca hrhrdth', value: 45.00, category: 'Camisas', quantidade: 1 },
        { id: 3, img: sobretudoBege, title: 'Sobretudo bege', value: 45.00, category: 'Sobretudos', quantidade: 4 },
        { id: 4, img: camisaXadrez, title: "Camisa xadrez clássica", value: 49.90, category: "Masculino", quantidade: 6 },
        { id: 5, img: JaquetaTreino, title: "Jaqueta de treino", value: 199.90, category: "Esporte", quantidade: 7 },
        { id: 6, img: CamisaInfantil, title: "Camiseta Infantil", value: 29.90, category: "Infantil", quantidade: 3 },
        { id: 7, img: BlusaFeminina, title: "Blusa feminina", value: 59.90, category: "Feminino", quantidade: 2 },
        { id: 8, img: CalçaJeans, title: "Calça jeans", value: 89.90, category: "Masculino", quantidade: 2 },
        { id: 9, img: ShortsCorrida, title: "Shorts de corrida", value: 49.90, categor: "Esporte", quantidade: 9 },
        { id: 10, img: Saia, title: "Saia Jeans", value: 69.90, categoy: "Feminino", quantidade: 1 },
        { id: 11, img: TopEsportivo, title: "Conjunto Esportivo", value: 139.90, category: "Esporte", quantidade: 8 },
        { id: 12, img: JaquetaCouro, title: "Jaqueta de couro", value: 129.90, category: "Feminino", quantidade: 5 },
    ];
    const total = roupas.reduce((acc, item) => acc + item.value, 0);

    return (
        <div className="container-resume-pedido">
            <h2>Resumo da Compra</h2>
            <div className="grid">
                <div className="col-8">
                    <div className="container-dados">
                        <h3>Endereço de entrega</h3>
                        <div className="line"></div>

                        <div className="grid gap-4">
                            <p className="dados col-7 pr-3 pl-3">{endereco}</p>
                            <p className="dados col pr-3 pl-3">{cep}</p>
                        </div>

                        <div className="grid gap-4">
                            <p className="dados col-6 pr-3 pl-3">{cidade}</p>
                            <p className="dados col pr-3 pl-3">{estado}</p>
                        </div>

                    </div>

                    <div className="container-dados">
                        <h3>Forma de Pagamento</h3>
                        <div className="line"></div>
                        <h6 class>{tipoPagamento}</h6>
                        <p className="dados col-12 pr-3 pl-3">{nomeCartao}</p>
                        <p className="dados col-12 pr-3 pl-3">{numeroCartao}</p>

                        <div className="flex gap-4">
                            <p className="dados col-6 pr-3 pl-3">{validade}</p>
                            <p className="dados col pr-3 pl-3">{cvv}</p>
                        </div>

                    </div>
                </div>
                <div className="col-4">
                    <div className="container-dados">
                        <h3>Item</h3>
                        <div className="line"></div>

                        <div className="item">
                            {roupas.map((item, index) => (
                                <div key={index} className='flex mb-3 mt-3 gap-2'>
                                    <div className="container-item-img relative">
                                        <img className='item-img' src={item.img} alt={item.title} />
                                        <Badge id="badge" value={item.quantidade} />
                                    </div>
                                    <div className="col-6">
                                        <p className='item-title font-semibold text-sm white-space-nowrap overflow-hidden text-overflow-ellipsis'>{item.title}</p>
                                    </div>
                                    <div className='col'>
                                        <p className='item-valor font-bold'>R$ {item.value.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="line"></div>
                            <div className="mt-3 mb-3 flex justify-content-between font-semibold text-2xl">
                                <p>Total: </p>
                                <p>R$ {total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pedidos