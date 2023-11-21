import Add from "./Add";

function FunctionsAsParameters() {
    const add2 = (a, b) => {
        return parseInt(a) + parseInt(b);
    };
    return (
        <div>
            <h2>Functions As Parameters</h2>
            <Add a={1} b={2} add2={add2}/>
        </div>
    );
}

export default FunctionsAsParameters;