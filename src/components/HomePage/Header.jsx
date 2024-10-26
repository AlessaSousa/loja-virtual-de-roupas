import { Link } from 'react-router-dom';
import logoTrendix from '../../assets/svg/logo-trendix.svg'
// import { SplitButton } from 'primereact/splitbutton';
// import { Toast } from 'primereact/toast';
// import React, { useRef, useState } from 'react';


function HomePage() {
    return (
        <>
        <div style={{ 
            padding: "20px 40px",
            width:'100%',
            height: '130px',
            background:'white',
            display: 'flex',
            justifyContent:'space-between',
            alignItems:'center'

         }}>
            <img style= {{
                width:'100px'
            }} 
            src={logoTrendix}></img>
            
            <div style={{
                display:'flex',
                justifyContent: 'center',
                alignSelf:'center',
                gap:'35px'
            }}>
            <div>
                <p>Sobre</p>
            </div>
            <div>
                <p>Catálogo</p>
            </div>
       
            {/* <Toast ref={toast}></Toast>
            <SplitButton label="Catálago" onClick={save} model={items} loading={loading} /> */}
           
           <div >
            <button style={{
                    background:'none',
                    border:'#86D293',
                    color:'black'
                }} 
                type="button" data-bs-toggle="dropdown" aria-expanded="false">Categoria <i className="bi-caret-down"></i></button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
           
       
            </div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignContent:'center',
                alignItems:'center'
            }}>
                <input type='search' placeholder='Buscar' style={{
                    borderRadius:'20px',
                    padding:'7px',
                    fontSize:'13px',
                    border:'1px solid gray',
                    width:'15vw'
                }}>
                </input>
            </div>
            <div style={{
                      display:'flex',
                      justifyContent: 'center',
                      alignContent:'center',
                      alignItems:'center',
                      gap:'35px'
            }}>
          
                <i className="bi bi-heart "></i>
                <i className="bi bi-bag"></i>
                <button style={{
                    background:'#86D293',
                    border:'#86D293',
                    color:'white',
                    borderRadius:'8px',
                    padding:'5px 20px'
                }}>
                <Link style={{
                    textDecoration:'none',
                    color:'white'
                }} to="/register"> Cadastro</Link>
                   </button>
            </div>

        </div>

        <div style={{
            background:'#86D293',
            width:'100%',
            height:'450px',
            padding:'60px'
        }}>

        <div style={{
            fontSize:'40px',
            fontWeight:'600'
        }}>
            <p>Conheça nosso catálago</p>
            </div>
            <div style={{
                fontSize:'18px'
            }}>
            <p>O Trendix conta com um catálago variado de peças ecológicas.
                Por que escolher<br></br> entre preço baixo e sustentabilidade quando se pode 
                ter os dois?
            </p>
        </div>
<div>
                <button style={{
                    background:'none',
                    border:'1px solid black',
                    borderRadius:'8px',
                    padding:'7px 20px',
                    margin:'60px 0 0 0'
                }}>
                <Link style={{
                    textDecoration:'none',
                    color:'black'
                }} to="/catalago"> Catálago</Link>
                   </button>
</div>
        </div>

        </>
  
        
    );
}

export default HomePage;