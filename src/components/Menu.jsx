import React from 'react'

const Menu = ({className,menuName}) => {
  return (
    <ul>
    <li className={` text-sm font-sans text-menuColor hover:text-menuHover hover:font-bold px-4 ${className}`}>{menuName}</li>
 </ul>
  )
}

export default Menu
