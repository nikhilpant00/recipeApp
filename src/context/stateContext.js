import React, { createContext, useContext, useState, useEffect } from "react";

export const Context = createContext();

export function StateContext({ children }) {

  const [favItems, setFavItems] = useState([]);


  const onAdd = (recipe) => {
    
    console.log(favItems)
    const checkRecipeInFav = favItems.find(
      (item) => item.id === recipe.id
    );

    if (!checkRecipeInFav) {
      setFavItems([
        ...favItems,
        recipe
      ]);
    }else{
      setFavItems(favItems);
    }
  };

  

  return (
    <Context.Provider
      value={{
        favItems,
        onAdd
      }}
    >
      {children}
    </Context.Provider>
  );
}



