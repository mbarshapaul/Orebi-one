import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Logo from '../../assets/Logo.png'
import Menu from '../Menu'
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from '../Heading'
import { FaSearch, FaUser, FaSortDown, FaShoppingCart, FaTruck, FaUndo } from "react-icons/fa";
import { Link } from 'react-router-dom'




const Header = () => {
  return (
    <>
      {/* Header Part Start */}
      <div className={'bg-white py-7 w-full'}>
        <Container className={'max-w-menuContainer'}>
          <Flex>
            <div className={'w-[30%]'}>
              <Images imgSrc={Logo} />
            </div>
            <div className={'w-[70%]'}>
              <Flex>
                <Menu className={'flex'}>
                <Link to="/">
                  <li className={'text-sm font-sans text-menuColor hover:text-menuHover hover:font-bold px-4'}>Home</li>
                  </Link>
                  <Link to="/shop">
                    <li className={'text-sm font-sans text-menuColor hover:text-menuHover hover:font-bold px-4'}>Shop</li>
                  </Link>
                  <Link to="/about">
                  <li className={'text-sm font-sans text-menuColor hover:text-menuHover hover:font-bold px-4'}>About</li>
                  </Link>
                  <Link to="/contacts">
                  <li className={'text-sm font-sans text-menuColor hover:text-menuHover hover:font-bold px-4'}>Contacts</li>
                  </Link>
                  <Link to="/myaccount">
                  <li className={'text-sm font-sans text-menuColor hover:text-menuHover hover:font-bold px-4'}>Journal</li>
                  </Link>
                </Menu>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Part End */}

      {/* Category Part Start */}
      <div className="w-full bg-categoryBg py-[25px] border border-menuColor">
        <Container className={"max-w-menuContainer"}>
          <Flex className={"items-center"}>
            <div className={"w-1/5"}>
              <Flex className={"gap-x-2"}>
                <HiBars3BottomLeft />
                <Heading as={"h3"} text={"Shop by Category"} className={"font-sans text-sm text-menuHover"} />
              </Flex>
            </div>
            <div className={"w-3/5 relative"}>
              <input type="text" className={"p-4 bg-white rounded-lg w-full"} placeholder={"Search Products"} />
              <FaSearch className={"absolute top-1/2 right-5 -translate-y-1/2"} />
            </div>
            <div className={"w-1/5"}>
              <Flex className={"justify-end"}>
                <FaUser className={"ml-2"} />
                <FaSortDown className={"mr-4"} />
                <FaShoppingCart />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Category Part End */}
    </>
  )
}

export default Header
