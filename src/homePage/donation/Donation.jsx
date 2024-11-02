import plantWorld from '../../assets/svg/plant-world.svg'
import './Donation.css'
import roupasDonation from '../../assets/svg/roupas-donation.svg'
import imageEco from '../../assets/svg/image-eco.svg'
function Donation() {
    return (
        <>
            <div className='container-cupom'>
                <img className='image' src={plantWorld}></img>
                <p className='text-cupom'>Cadastre-se agora e consiga um cupom de
                    <br></br>
                    20% de desconto em sua primeira compra.
                </p>
                <button className='button-cupom'>Pegar cupom</button>
            </div>
            <div className='container-donation'>
                <div>
                    <img src={roupasDonation}></img>
                </div>
                <div>
                    <p className='title-donation'>Conheça nossa área de doações de roupas</p>
                    <p className='text-donation'>
                        Nosso site permite que você doe roupas que não irá mais usar.<br></br>
                        As peças doadas serão destinadas a pessoas mais<br></br>
                        necessitadas por todo o Brasil.
                    </p>
                    <button className='button-donation'>Doe agora</button>
                </div>
            </div>

            <div className='container-eco'>
                <div >
                    <img src={imageEco}></img>
                </div>
                <div>
                    <p className='title-eco'>
                        A necessidade de produtos<br/> ecológicos
                    </p>
                    <p className='text-eco'>
                    Até 2050, haverá mais plástico no mar do que peixes, o uso constante de<br/>
                     combustíveis fósseis para fazer nossos produtos está aumentando a<br/>
                      temperatura global, temos os maiores aterros sanitários já vistos, nossa <br/>
                      taxa de reciclagem é alarmantemente baixa. Essas estatísticas <br/>
                      perturbadoras são a razão pela qual pedimos que você mude para <br/>
                      produtos ecológicos e viva um estilo de vida mais sustentável. Nós da <br/>
                      Trendix imaginamos um mundo sem desperdício.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Donation