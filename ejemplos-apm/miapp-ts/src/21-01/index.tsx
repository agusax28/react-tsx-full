import { useRef, useState, ChangeEvent } from "react";

const Lab2101 = () => {
  const [volumen, setVolumen] = useState(100);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  const handlePause = () => {
    audioRef.current?.pause();
  };

  const handleChangeVolume = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevoVolumen = Number(event.target.value);
    setVolumen(nuevoVolumen);

    if (audioRef.current) {
      audioRef.current.volume = nuevoVolumen / 100;
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
      />

      <button type="button" onClick={handlePlay}>
        Play
      </button>

      <button type="button" onClick={handlePause}>
        Pause
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={volumen}
        onChange={handleChangeVolume}
      />
    </div>
  );
};

export default Lab2101;
