import imageWoman from '../../assets/svg/mulher.svg'
import sueter  from '../../assets/svg/sueter.svg'
import ecoFriendly from '../../assets/svg/Eco-friendly.svg'


function Itens(){
    return(
<>
    <div style={{
        width:'100%',
        height:'100px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: '0 60px',
        fontSize:'18px'
    }}>
       <i className='bi bi-truck'>     Entrega Grátis</i>
       <i className='bi bi-currency-dollar'>     Pagamento Seguro</i>
       <i className='bi bi-piggy-bank'>     Economia e qualidade</i>
       <i className='bi bi-chat-left'>     Fale Conosco</i>
    </div>


<div style={{padding:'0 50px', marginLeft:'100px'}} class="row">
  <div class="col-4">
    <img style={{height:'100%'}}
      src={imageWoman}
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-4">
    <img style={{marginBottom:'48px'}}
      src={sueter}
      alt="Mountains in the Clouds"
    />

    <img 
      src={ecoFriendly}
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-4">
    <img style={{marginBottom:'48px'}}
      src={sueter}
      alt="Mountains in the Clouds"
    />
    <img 
      src={ecoFriendly}
      alt="Boat on Calm Water"
    />

  </div>

</div>

</>
    )
}
export default Itens