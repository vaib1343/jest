import React from "react";

interface CounterTwoProps {
  increment?: () => void;
  decrement?: () => void;
  count: number;
}

const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <h5>{props.count}</h5>
      {props.increment && <button onClick={props.increment}>Increment</button>}
      {props.decrement && <button onClick={props.decrement}>Decrement</button>}
    </div>
  );
};

export default CounterTwo;
