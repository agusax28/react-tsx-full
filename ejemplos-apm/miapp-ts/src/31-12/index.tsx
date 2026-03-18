import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Inicio from "./Inicio";
import NuevoUsuario from "./NuevoUsuario";
import Usuario from "./Usuario";
import Error from "./Error";

const Lab3112 = () => {
  return (
    <div>
      <h1>React Router v6</h1>
      <Header />

      <Routes>
        <Route path="/usuarios" element={<Inicio />}>
          <Route path=":usuarioId" element={<Usuario />} />
        </Route>
        <Route path="/nuevo-usuario" element={<NuevoUsuario />} />
        <Route path="/" element={<Navigate to="/usuarios" replace={true} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Lab3112;
