import React from "react";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <TodoList />
    </div>
  );
};

export default ReduxExamples;