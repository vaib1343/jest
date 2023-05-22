import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Application from "./components/application/application";
import { Skills } from "./components/skills/skills";
import Counter from "./components/counter/counter";
import AppProviders from "./providers/themeProvider";
import MuiMode from "./components/mui/mui.mode";
import CounterTwo from "./components/counter-two/counter-two";
import { useCounter } from "./hook/useCounter";
import Users from "./components/users/users";

function App() {
  const { increment, decrement, counter } = useCounter();
  return (
    <AppProviders>
      <div className="App">
        <Users />
        {/* <CounterTwo increment={increment} decrement={decrement} count={counter} /> */}
        {/* <MuiMode /> */}
        {/* <Application /> */}
        {/* <Skills /> */}
        {/* <Counter /> */}
      </div>
    </AppProviders>
  );
}

export default App;
