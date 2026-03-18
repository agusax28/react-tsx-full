import { useNavigate } from "react-router-dom";

const NuevoUsuario = () => {
  const navigate = useNavigate();

  const guardar = (e: any) => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div>
      <h2>Nuevo usuario</h2>
      <button onClick={guardar}>Crear usuario</button>
    </div>
  );
};

export default NuevoUsuario;
