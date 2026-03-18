import React, { Component } from "react";
import { useInputForm } from "./hooks";

const Form = () => {
  const hexadecimal = useInputForm("#ffffff", [
    "^#.*$",
    "^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$",
  ]);

  return (
    <div>
      <input
        type="text"
        value={hexadecimal.value}
        onChange={hexadecimal.onChange}
      />
      <p>{hexadecimal.isValid ? "Válido" : "Inválido"}</p>
    </div>
  );
};

class Lab280801 extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default Lab280801;
