import React from "react";

interface GreetProps {
  name?: string;
}

const Greeting = (props: GreetProps) => {
  const { name } = props;
  return (
    <React.Fragment>
      <div>Hello {name}</div>
    </React.Fragment>
  );
};

export default Greeting;
