
// import React, { useState } from "react";
// function Header () {
//  const [isDarkMode, onDarkModeClick] = useState(false)

 
// //  function onDarkModeClick() {
// //     setIsDarkMode((isDarkMode) => !isDarkMode);
// //   }
// return (

//     <header  className={isDarkMode ? 'dark' : 'light'}>
//     <h2>Shopster</h2>
//     <button onClick={onDarkModeClick}>
//     Toggle Dark Mode
//     </button>
//   </header>
// )


// }

// export default Header


import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;