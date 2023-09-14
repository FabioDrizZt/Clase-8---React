import { useState, useEffect } from "react";

export default function EffectExample() {
  const [vetor, setVetor] = useState([]);

  //Función para llamar los datos de la API
  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments");
    const convert = await data.json();
    setVetor(convert);
  };

  //useEffect

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul>
        {vetor.map((object) => (
          <li key={object.id}>{object.email}</li>
        ))}
      </ul>
    </div>
  );
}
