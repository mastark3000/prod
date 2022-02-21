import React, {useState, useEffect} from 'react'
import { AiOutlineMenu,AiOutlineShoppingCart } from "react-icons/ai";
import './Navbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 992) && (
    <>  <ul className="list">
        <li className="items">Menu</li>
        <li className="items">SignUp</li>
        <li className="items">Login</li>
        </ul>
      </>
      )}

      <button onClick={toggleNav} className="btn"><AiOutlineMenu className="btn"/></button>
    </nav>
  )
}