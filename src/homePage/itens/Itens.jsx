import imageWoman from '../../assets/svg/mulher.svg';
import sueter from '../../assets/svg/sueter.svg';
import ecoFriendly from '../../assets/svg/Eco-friendly.svg';
import imageRoupas from '../../assets/svg/imageRoupas.svg'
import './Itens.css';

function Itens() {
    return (
        <>
            <div className="info-bar">
                <i className="bi bi-truck"> Entrega Grátis</i>
                <i className="bi bi-currency-dollar"> Pagamento Seguro</i>
                <i className="bi bi-piggy-bank"> Economia e qualidade</i>
                <i className="bi bi-chat-left"> Fale Conosco</i>
            </div>

            {/* <div className="image-row ">
                <div className="col-4">
                    <img className="image-full" src={imageWoman} alt="Mulher" />
                </div>

                <div className="col-4">
                    <img className="image-small" src={sueter} alt="Suéter" />
                    <img className="image-small" src={ecoFriendly} alt="Eco-friendly" />
                </div>

            </div>
                
            <div className='grid'>
                <div className="col-6">
                    <img className="image-small" src={sueter} alt="Suéter" />
                </div>
            </div> */}

<div class="image-row row">  
   <div class="col-4">
        <img src={imageWoman} class="w-100 text-center rounded fw-bold"></img>
    </div>
    <div class="col-8">
        <div class="image-small row">
            <div class="col-6">
                <img className="" src={sueter} class="image-small w-100 text-center rounded fw-bold"></img>
            </div>
            <div class="col-6">
                <img className="" src={ecoFriendly} class="image-small w-100 text-center rounded fw-bold"></img>
            </div>
            <div class="col-12">
                <img className="" src={imageRoupas} class="image-small-baixo w-100 text-center rounded fw-bold"></img>
            </div>
        </div>
    </div>
 
</div>

            
        </>
    );
}

export default Itens;
