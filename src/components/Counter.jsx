import React, { useCallback, useState } from "react";

const Button = React.memo(function Button({ handleClick, name }) {
  console.log(`${name} rendered`);
  return <button onClick={handleClick}>{name}</button>;
});

export default function Counter() {
  console.log("counter rendered");
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const handIncrementOne = useCallback(() => {
    setCountOne(countOne + 1);
  }, [countOne]);

  const handIncrementTwo = useCallback(() => {
    setCountTwo(countTwo + 1);
  }, [countTwo]);

  return (
    <>
      {countOne} {countTwo}
      <Button handleClick={handIncrementOne} name="button1" />
      <Button handleClick={handIncrementTwo} name="button2" />
    </>
  );
}
