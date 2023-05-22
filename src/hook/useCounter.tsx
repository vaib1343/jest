import { useState } from "react";

export const useCounter = ({
  initialValue = 0,
}: { initialValue?: number } = {}) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((preState) => preState + 1);
  };

  const decrement = () => {
    setCounter((preState) => preState - 1);
  };

  return {
    increment,
    decrement,
    counter,
  };
};
