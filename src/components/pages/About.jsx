import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Images from '../Images'
import productOne from '../../assets/productOne.png'
import New from '../../assets/New.png'
import Button from '../Button'

const About = () => {
    return (
        <>
            <div className={"py-16"}>
                <Container className={"max-w-menuContainer"}>
                    <div className={"pb-[95px]"}>
                        <Heading as={"h1"} text={"About"} className={"text-[49px] font-sans font-bold capitalize"} />
                        <Heading as={"p"} text={"Home > About"} className={"text-[14px] font-sans capitalize text-menuColor"} />
                    </div>
                    <Flex className={"justify-between"}>
                        <div className="w-[48%] relative">
                            <Images imgSrc={productOne} className={"w-full"} />
                            <Button btnName={"Our Brands"} className={"text-[14px] font-sans font-bold text-white bg-black px-[45px] py-[12px] border-menuHover border absolute bottom-8 left-56"} />
                        </div>
                        <div className="w-[48%] relative">
                            <Images imgSrc={New} className={"w-full"} />
                            <Button btnName={"Our Stores"} className={"text-[14px] font-sans font-bold text-white bg-black px-[45px] py-[12px] border-menuHover border absolute bottom-8 left-56"} />
                        </div>
                    </Flex>
                    <Heading as={"p"} text={"Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."} className={"text-[30px] font-sans normal-case text-menuHover py-16 leading-[52px]"} />
                    <Flex className={"justify-between"}>
                        <div className={"w-1/3"}>
                        <Heading as={"h4"} text={"Our Vision"} className={"text-[25px] font-sans font-bold capitalize"} />
                        <Heading as={"p"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."} className={"text-[16px] font-sans normal-case text-menuColor leading-[30px] mr-2"} />
                        </div>
                        <div className={"w-1/3"}>
                        <Heading as={"h4"} text={"Our Story"} className={"text-[25px] font-sans font-bold capitalize"} />
                        <Heading as={"p"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."} className={"text-[16px] font-sans normal-case text-menuColor leading-[30px] mr-2"} />
                        </div>
                        <div className={"w-1/3"}>
                        <Heading as={"h4"} text={"Our Brands"} className={"text-[25px] font-sans font-bold capitalize"} />
                        <Heading as={"p"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."} className={"text-[16px] font-sans normal-case text-menuColor leading-[30px] mr-2"} />
                        </div>
                    </Flex>
                </Container>
            </div>


        </>
    )
}

export default About
