import React from "react";
import MessengerApp from "./MessangerApp.js";
import QuizApp from "./QuizApp.js";
import ParentState from "./ParentState.js";
import PersonTaskReducer from "./reducer/PersonTaskReducer.js";
import ContextApp from "./context/ContextApp.js";
import ContextReducerApp from "./contextreducer/ContextReducerApp.js";

export default function App() {
  return (
    <>
      {/* <MessengerApp />
      <QuizApp />
      <ParentState /> */}
      {/* <PersonTaskReducer /> */}
      {/* <ContextApp /> */}
      <ContextReducerApp />
    </>
  );
}
