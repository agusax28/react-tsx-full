import React, { Component, useState, useEffect } from "react";

const Autocomplete = () => {
  const [nombre, setNombre] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    if (nombre.length > 3) {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`,
      )
        .then((resp) => resp.json())
        .then(({ drinks }) => {
          setCocktails(() => drinks || []);
        });
    }
  }, [nombre]);

  const selectCocktail = (cocktailSeleccionado: any) => {
    setNombre(cocktailSeleccionado.strDrink);
  };

  const listaCocktails = cocktails.map((c: any) => (
    <li onClick={() => selectCocktail(c)} key={c.idDrink}>
      {c.strDrink}
    </li>
  ));

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <ul>{listaCocktails}</ul>
    </div>
  );
};

class Lab280301 extends Component {
  render() {
    return (
      <div>
        <Autocomplete />
      </div>
    );
  }
}

export default Lab280301;
