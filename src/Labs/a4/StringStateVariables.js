import React, { useState } from "react";
function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <input
        className="form-control"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
  );
}
export default StringStateVariables;

// import React, { useState } from "react";
// function StringStateVariables() {
//   const [name, setName] = useState("John");
//   const [age, setAge] = useState(21);
//   const [address, setAddress] = useState("123 Main St");
//   const [city, setCity] = useState("Anytown");
//   const [state, setState] = useState("CA");
//   const [zip, setZip] = useState("12345");
//   const [phone, setPhone] = useState("555-555-5555");

//   const handleNameChange = (event) => {
//     console.log(event.target.value);
//     setName(event.target.value);
//   };

//   return (
//     <div>
//       <h2>String State Variables</h2>
//       <h3>Name: {name}</h3>
//       <input value={name} onChange={handleNameChange} />

//       <h3>Address</h3>
//       <input value={address} onChange={(event) => event.target.value} />

//       <h3>City</h3>
//       <input value={city} onChange={(event) => {setCity(event.target.value);}} />
//     </div>
//   );
// }
// export default StringStateVariables;