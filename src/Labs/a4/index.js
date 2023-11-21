import Add from "./Add";
import React from "react";
import ArrayState from "./ArrayState";
import BooleanState from "./BooleanState";
import ClickEvent from "./ClickEvent"
import Counter from "./Counter";
import EventObject from "./EventObject";
import FunctionsAsParameters from "./FunctionsAsParameters";
import ObjectState from "./ObjectState";
import StringStateVariables from "./StringStateVariables";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import BooleanStateVariables from "./BooleanStateVariables";
import DateStateVariable from "./DateStateVariable"
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples/index";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return(
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples/>

      <Add a={1} b={2} />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <hr/><hr/>

      <h1>Previous</h1>
      <ArrayState />
      <ObjectState />
      <StringStateVariables />
      <BooleanState />
      <Counter />
      <EventObject />
      <ClickEvent />
      <FunctionsAsParameters />
    </>
  );
 };
 export default Assignment4;

// function Assignment4() {
//     return (
//       <div>
//         <h1>Assignment 4</h1>
//         <ArrayState />
//         <ObjectState />
//         <StringStateVariables />
//         <BooleanState />
//         <Counter />
//         <EventObject />
//         <ClickEvent />
//         <FunctionsAsParameters />
//       </div>
//     );
//   }
//   export default Assignment4;
