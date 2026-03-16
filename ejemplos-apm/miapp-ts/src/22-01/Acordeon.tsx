import type { ReactNode, FC, ReactElement } from "react";
import { useState, useEffect } from "react";
import "./style.css";

type AcordeonProps = {
  children: ReactNode;
  titulo: string;
  cerrado?: boolean;
};

const Acordeon: FC<AcordeonProps> = ({ children, titulo, cerrado = true }) => {
  const [estaCerrado, setEstaCerrado] = useState<boolean>(cerrado);

  useEffect(() => {
    setEstaCerrado(cerrado);
  }, [cerrado]);

  return (
    <div className="acordeon">
      <div
        className="acordeon-heading"
        onClick={() => setEstaCerrado(!estaCerrado)}
      >
        <h3>{titulo}</h3>
      </div>
      <div
        className={"acordeon-content " + (estaCerrado ? "cerrado" : "abierto")}
      >
        {children}
      </div>
    </div>
  );
};

type AcordeonListaProps = {
  titulo: string;
  cerrado?: boolean;
  children: ReactElement<"ul">;
};

export const AcordeonLista: FC<AcordeonListaProps> = ({
  children,
  titulo,
  cerrado = true,
}) => {
  const [estaCerrado, setEstaCerrado] = useState<boolean>(cerrado);

  useEffect(() => {
    setEstaCerrado(cerrado);
  }, [cerrado]);

  return (
    <div className="acordeon">
      <div
        className="acordeon-heading"
        onClick={() => setEstaCerrado(!estaCerrado)}
      >
        <h3>{titulo}</h3>
      </div>
      <div
        className={"acordeon-content " + (estaCerrado ? "cerrado" : "abierto")}
      >
        {children}
      </div>
    </div>
  );
};

const Lab2201: FC = () => {
  return (
    <div>
      <AcordeonLista titulo="Una lista de productos">
        <ul>
          <li>Albahaca</li>
          <li>Queso parmesano</li>
          <li>Pechuga de pollo</li>
          <li>Tomates</li>
        </ul>
      </AcordeonLista>

      <Acordeon titulo="Librería JS" cerrado={false}>
        <div>
          <h4>¿Qué es React?</h4>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/300px-React.svg.png"
            alt="Logo de React"
          />
          <p>
            React es una librería de JS que permite pintar interfaces de
            usuario...
          </p>
        </div>
      </Acordeon>
    </div>
  );
};

export default Lab2201;
