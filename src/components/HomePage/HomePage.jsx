import { Link } from 'react-router-dom';
import logoTrendix from '../../assets/svg/logo-trendix.svg'
// import { SplitButton } from 'primereact/splitbutton';
// import { Toast } from 'primereact/toast';
// import React, { useRef, useState } from 'react';


function HomePage() {

    // const StyledLink = styled(Link);
    // const toast = useRef(null);
    // const items = [
    //     {
    //         label: 'Update',
    //         icon: 'pi pi-refresh',
    //         command: () => {
    //             toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
    //         }
    //     },
    //     {
    //         label: 'Delete',
    //         icon: 'pi pi-times',
    //         command: () => {
    //             toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    //         }
    //     },
    //     {
    //         label: 'React Website',
    //         icon: 'pi pi-external-link',
    //         command: () => {
    //             window.location.href = 'https://reactjs.org/';
    //         }
    //     },
    //     {
    //         label: 'Upload',
    //         icon: 'pi pi-upload',
    //         command: () => {
    //             //router.push('/fileupload');
    //         }
    //     }
    // ];

    // const [loading, setLoading] = useState(false);

    // const save = () => {
    //     setLoading(true);

    //     setTimeout(() => {
    //         setLoading(false);
    //         toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    //     }, 2000);
    // };

    return (
        <>
        <div style={{ 
            padding: "20px",
            width:'100%',
            height: '130px',
            background:'white',
            display: 'flex',
            justifyContent:'space-between'

         }}>
            <img style= {{
                width:'100px'
            }} 
            src={logoTrendix}></img>
            
            <div style={{
                display:'flex',
                justifyContent: 'center',
                alignContent:'center',
                alignSelf:'center',
                gap:'25px'
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
                      justifyContent: 'center',
                      alignContent:'center',
                      alignItems:'center',
                      gap:'25px'
            }}>
                {/* <input style={{
                    borderRadius:'20px',
                    padding:'8px',
                }}>
                </input> */}
                <i className="bi bi-heart"></i>
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
            height:'450px'
        }}>

        </div>
            {/* // <h2>Bem-vindo à Home Page!</h2>
            // <p>Essa é a página inicial do site.</p>
            // <Link to="/login">Ir para Login</Link>
            // <Link to="/register">Ir para Cadastro</Link>
         */}
        </>
        // <>
        // <HeaderPage></HeaderPage>
        // </>
        
    );
}

export default HomePage;