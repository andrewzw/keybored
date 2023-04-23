import React from 'react';
import Keybored from './../../img/Keybored.png'
console.log(Keybored); // /logo.84287d09.png
function Header() {
  return (
    <header>
      <h1>Keybored</h1>
      <img src={Keybored} alt="Logo" height={500}/>
      {}
    </header>
  );
}

export default Header;
