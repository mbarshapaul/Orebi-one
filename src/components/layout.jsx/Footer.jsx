import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Menu from '../Menu'
import Images from '../Images'
import Logo from '../../assets/Logo.png'
import { TiSocialFacebook,TiSocialLinkedin  } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
const Footer = () => {
  return (
    <>
    <div className={"bg-categoryBg py-10"}>
       <Container className={"max-w-menuContainer"}>
        <Flex>
            <div className={"w-[15%]"}>
                <Heading as={"h3"} text={"MENU"} className={"font-sans text-[16px] font-bold capitalize text-menuHover py-3"}/>
                <Menu>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Home</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Shop</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>About</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Contact</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Journal</li>
                </Menu>
            </div>
            <div className={"w-[20%]"}>
            <Heading as={"h3"} text={"SHOP"} className={"font-sans text-[16px] font-bold capitalize text-menuHover py-3"}/>
                <Menu>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Category 1</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Category 2</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Category 3</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Category 4</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Category 5</li>
                </Menu>
            </div>
            <div className={"w-[20%]"}>
            <Heading as={"h3"} text={"HELP"} className={"font-sans text-[16px] font-bold capitalize text-menuHover py-3"}/>
                <Menu>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Privacy Policy</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Terms & Conditions</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Special E-shop</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Shipping</li>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>Secure Payments</li>
                </Menu>
            </div>
            <div className={"w-[15%]"}>
            <Heading as={"h3"} text={"(052) 611-5711 company@domain.com"} className={"font-sans text-[16px] font-bold capitalize text-menuHover py-3"}/>
                <Menu>
                    <li className={"font-sans text-[14px] capitalize text-informationText py-2"}>575 Crescent Ave. Quakertown, PA 18951</li>
                    </Menu>
            </div>
            <div className={"w-[30%]"}>
                <Images imgSrc={Logo} className={"pl-12 pt-8 "}/>
            </div>
        </Flex>
        <Flex>
            <div className={"w-2/3 pt-14"}>
            <Flex className={"gap-x-4"}>
            <TiSocialFacebook/>
            <TiSocialLinkedin />
            <SlSocialInstagram />
            </Flex>
            </div>
            <div className={"w-1/3 pt-14"}>
            <Heading as={"h3"} text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"} className={"font-sans text-[14px] capitalize text-menuColor"}/>
            </div>
        </Flex>
        </Container> 
    </div>
      
    </>
  )
}

export default Footer
