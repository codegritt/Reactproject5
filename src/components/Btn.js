import React from "react";


// function Btn(){

//     const clickHandler=()=>console.log('clicked');
//     return(
//         <button onClick={clickHandler}>Click Me</button>
//     )
// }

function Btn(){

    const clickHandler=()=>console.log('clicked');
    return(
        <button onMouseOver={clickHandler}>Click Me</button>
    )
}

export default Btn;