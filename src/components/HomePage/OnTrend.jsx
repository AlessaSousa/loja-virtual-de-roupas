import BestSellers from "./BestSellers";
import NewReleases from "./NewReleases";
import React, { useState } from 'react';

function OnTrend(){
    const[showComponent, setShowComponent] = useState(true);
return(
    <>
    <div style={{
        width:'100%',
    }}>
        <div style={{
            textAlign:'center',
            fontSize:'33px',
            fontWeight:'600',
        }}>
            <p class='m-0'>Em Alta</p>
        </div>
        <div style={{justifyContent:'center', display:'flex'}}>
        <button style={{padding:'5px 20px', background:'#86D293', borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px'}} onClick={() => setShowComponent(true)}>Novos lançamentos</button>
            <button style={{borderTopRightRadius:'10px', borderBottomRightRadius:'10px'}} onClick={() => setShowComponent(false)}>Mais vendidos</button>

            <div style={{ marginTop: '20px' }}>
                {showComponent ? <NewReleases/> : <BestSellers/>}
            </div>
        </div>
    </div>
    </>
)
}

export default OnTrend