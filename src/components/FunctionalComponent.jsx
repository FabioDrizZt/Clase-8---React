import axios from "axios";
import { useEffect, useState } from "react";
const API_PREFIX = "https://rickandmortyapi.com/api/character/";

export default function FunctionalComponent() {
  const [index, setIndex] = useState(1);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(API_PREFIX + index)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.error(err));
  }, [index]);

  return (
    <>
      <h1>Componente Funcional</h1>
      <p>{index}</p>
      <h2>El nombre del personaje es: {character?.name}</h2>
      <img src={character?.image} alt={character?.name} />
      <br />
      <button onClick={() => setIndex(index % 826 + 1)}>
        Cambiar al siguiente personaje
      </button>
      <hr />
    </>
  );
}
