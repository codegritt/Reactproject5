import React from "react";


function ModeToggler(){

    const darkModeOn=true;
    const darkMode =<h1>Dark mode is on</h1>
    const lightMode =<h1>Light mode is on</h1>

    function handleClick(){
        darkModeOn=!darkModeOn;
        
        if(darkModeOn===true){
            console.log('the dark mode is on')
        }else{
            console.log('the light mode is on')
        }

    }
  

return(
<div>
        {darkModeOn ? darkMode: lightMode}

        <button onClick={handleClick}>Click Me</button>
    </div>


  
    )

   
   
}


export default ModeToggler;