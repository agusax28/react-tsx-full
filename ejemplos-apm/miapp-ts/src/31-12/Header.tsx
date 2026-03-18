import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Inicio</Link> |<Link to="/nuevo-usuario">Nuevo usuario</Link>
    </div>
  );
};

export default Header;
