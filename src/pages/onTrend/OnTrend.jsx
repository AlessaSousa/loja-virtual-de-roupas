import BestSellers from "../bestSellers/BestSellers";
import NewReleases from "../newReleases/NewReleases";
import React, { useState } from 'react';
import './OnTrend.css';

function OnTrend() {
    const [showComponent, setShowComponent] = useState(true);

    return (
        <>
            <div className="on-trend-container">
                <div className="title">
                    <p className="m-0">Em Alta</p>
                </div>
                <div className="button-container">
                    <button 
                        className={`trend-button ${showComponent ? 'active' : ''}`} 
                        onClick={() => setShowComponent(true)}
                    >
                        Novos lançamentos
                    </button>
                    <button 
                        className={`trend-button ${!showComponent ? 'active' : ''}`} 
                        onClick={() => setShowComponent(false)}
                    >
                        Mais vendidos
                    </button>
                </div>

                <div style={{ margin: '20px 50px' }}>
                    {showComponent ? <NewReleases /> : <BestSellers />}
                </div>
            </div>
        </>
    );
}

export default OnTrend;
