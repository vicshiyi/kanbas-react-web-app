import React, { useState } from "react";
function EventObject() {
  const [event, setEvent] = useState(null);
  const handleClick = (e) => {
    console.log(e);
    e.target = e.target.outerHTML;
    delete e.view;
    setEvent(e);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button id="event-button"
        onClick={(e) => handleClick(e)}
        className="btn btn-primary">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </div>
  );
}
export default EventObject;

// function EventObject() {
//     const handleEvent = (event, w,) => {
//         console.log(event.target);
//         console.log(event.type);
//         console.log(event.clientX);
//         console.log(event.clientY);
//         console.log(event.altKey);
//         console.log(event.ctrlKey);
//         console.log(event.shiftKey);
//         console.log(event.metaKey);
//     };
//     return(
//         <div>
//             <h2>Event Object</h2>
//             <button onClick={handleEvent}>Click Me</button>
//         </div>
//     )
// }

// export default EventObject;