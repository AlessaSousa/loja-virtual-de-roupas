import React, { createContext, useState, useContext } from "react";

// Cria o contexto
const FavoritesContext = createContext();

// Provedor do contexto
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Função para adicionar ou remover itens dos favoritos
  const toggleFavorite = (item) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.find((fav) => fav.id === item.id);
      if (isFavorited) {
        return prevFavorites.filter((fav) => fav.id !== item.id);
      } else {
        return [...prevFavorites, item];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook para usar o contexto
export const useFavorites = () => useContext(FavoritesContext);
