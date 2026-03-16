import React, { useState } from "react";

type Props = {
  onClickCountChange: (totalClicks: number) => void;
};

const ClickCounterButton: React.FC<Props> = ({ onClickCountChange }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    const nuevoTotal = clicks + 1;
    setClicks(nuevoTotal);
    onClickCountChange(nuevoTotal);
  };

  return (
    <button type="button" onClick={handleClick}>
      He sido pulsado {clicks} veces (hijo)
    </button>
  );
};

const Lab1901 = () => {
  const [totalClicks, setTotalClicks] = useState(0);

  const handleChildClickCountChange = (totalClicksFromChild: number) => {
    setTotalClicks(totalClicksFromChild);
  };

  return (
    <div>
      <h1>Flujo de datos</h1>
      <p>Total de clicks (padre): {totalClicks}</p>
      <ClickCounterButton onClickCountChange={handleChildClickCountChange} />
    </div>
  );
};

export default Lab1901;
