import React from 'react'
import Logo from '../img/logo.jpg';

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>Made with ❤️ and <b>React.js</b></span>
    </footer>
  )
}
