import cuidadoscompele from "../../assets/png/cuidadoscompele.png";
import cuidadospessoais from "../../assets/png/cuidadospessoais.png";
import sabaoembarra from "../../assets/png/sabaoembarra.png";
import nossocatalogo from "../../assets/png/nossocatalogo.png";  // Banner
import "./Catalog.css";  // Importação do CSS
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ItensCatalago from "../itensCatalago/ItensCatalago";

const Catalog = () => {
  return (
    <div className="catalog-container">
      <Header />

      {/* Banner logo abaixo do cabeçalho */}
      <div className="banner-container">
        <img src={nossocatalogo} alt="Nosso Catálogo" className="banner" />
      </div>

      <ItensCatalago />
      <ItensCatalago />
      <ItensCatalago />
      <ItensCatalago />

      {/* Texto entre os produtos e outras categorias */}
      <div className="categories-text">
        <p>Explore mais opções nas nossas categorias abaixo</p>
      </div>

      {/* Outras Categorias */}
      <div className="other-categories">
        <h2>OUTRAS CATEGORIAS</h2>
        <div className="category-images">
          <div className="category-item">
            <img src={cuidadoscompele} alt="Cuidados com a pele" className="category-image" />
            <button className="category-button">Cuidados com a pele</button>
          </div>
          <div className="category-item">
            <img src={cuidadospessoais} alt="Cuidados pessoais" className="category-image" />
            <button className="category-button">Cuidados pessoais</button>
          </div>
          <div className="category-item">
            <img src={sabaoembarra} alt="Sabão em barra" className="category-image" />
            <button className="category-button">Sabão em barra</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
