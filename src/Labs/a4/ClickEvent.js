function ClickEvent() {
    const hello = () => {
      alert("Hello World!");
    };
    const good = () => {
      alert("Life is Good!");
    };
    return (
      <div>
        <h2>Click Event</h2>
        <button onClick={hello}>
          Click Hello 1 </button>
        <button onClick={() => hello()}>
          Click Hello 2 </button>
        <button
          onClick={() => {
            hello();
            good();
          }}
        >
          Click Hello 3
        </button>
      </div>
    );
}
export default ClickEvent;


// function ClickEvent() {
//     const handleClickNoArguments = () => {
//         alert("You clicked the button!");
//     };
//     const alertAdd = (a,b) => {
//         alert(a + b);
//     };
//     return (
//         <div>
//             <h2>Clieck Event</h2>
//             <button onClick={handleClickNoArguments}>Click Me</button>

//             <br/>
//             <button onClick={() => handleClickNoArguments()}>
//                 Click No Arguments, embedded and parentheses
//             </button>

//             <br/>
//             <button onClick={() => alertAdd(1, 2)}>
//                 Click Add, embedded and parentheses
//             </button>

//             <br/>
//             <button onClick={function(){alertAdd(1, 2);}}>
//                 Click Add, function
//             </button>
//         </div>
//     );
// }

// export default ClickEvent;