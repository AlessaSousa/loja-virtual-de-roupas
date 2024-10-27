function Items(){
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


<div style={{padding:'0 50px'}} class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      class="w-100 h-50 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-100 h-25 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 h-25 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      class="w-100 h-25 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />
        <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      class="w-100 h-25 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

  </div>

</div>

</>
    )
}
export default Items