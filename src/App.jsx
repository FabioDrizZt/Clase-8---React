import "./App.css";
import ClassComponent from "./components/ClassComponent";
import Counter from "./components/Counter";
import EffectExample from "./components/EffectExample";
import FunctionalComponent from "./components/FunctionalComponent";
import UseMemo from "./components/useMemo";

function App() {
  return (
    <>
      <FunctionalComponent />
      <ClassComponent />
      <UseMemo />
      <h2>Ejemplo con Counter</h2>
      <Counter />
      <h2>Correos de usuarios: </h2>
      <EffectExample />
    </>
  );
}

export default App;
