import { memo, useMemo, useState } from "react";

function ShowValue({ params }) {
  console.log(`ShowValue render, ${params.value}`);
  return <div className="value">{params.value}</div>;
}
const MemoShowValue = memo(ShowValue);

export default function UseMemo() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("ON");
  const params = useMemo(() => ({ value }), [value]);

  console.log(`App re-render, ${counter}`);
  const changeCounter = () => {
    setCounter(counter + 1);
  };

  const changeValue = () => {
    setValue(value === "ON" ? "OFF" : "ON");
  };

  return (
    <div className="container">
      <h2>Ejemplo de useMemo</h2>
      <div className="items">
        <MemoShowValue params={params} />
      </div>
      <div className="actions">
        <button onClick={changeCounter} className="btn btn-teal">
          Re-render
        </button>
        <button onClick={changeValue} className="btn btn-sky">
          Change Value
        </button>
      </div>
    </div>
  );
}
