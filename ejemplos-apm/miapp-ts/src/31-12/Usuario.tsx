import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Usuario = () => {
  const { usuarioId } = useParams();
  const [infoUsuario, setInfoUsuario] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`)
      .then((resp) => resp.json())
      .then((datos) => setInfoUsuario(JSON.stringify(datos, null, 2)));
  }, [usuarioId]);

  return (
    <div>
      <h3>Usuario {usuarioId}</h3>
      <pre>{infoUsuario}</pre>
    </div>
  );
};

export default Usuario;
