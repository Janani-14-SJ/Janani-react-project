import React from "react";
function Compare()
{
    const name1="Janani";
    const name2="Janani";
    const object1={name:"Janani"};
   const object2={name:"Janani"};
   alert(object1===object2);
   alert(name1===name2);
   alert(object1===name1);
}
const Sha = ()=>{
    return (
        <div>
            <h1>Let we see the output of javascript</h1>
            <button onClick={Compare}>CY1</button>
        </div>
    );
};
export default Sha;
