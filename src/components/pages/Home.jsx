import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaTruck, FaUndo } from "react-icons/fa";
import { PiNumberTwoBold } from "react-icons/pi";
import Heading from '../Heading';
import Images from '../Images';
import adOne from '../../assets/adOne.jpg'
import adTwo from '../../assets/adTwo.png'
import adThree from '../../assets/adThree.jpg'
import MainProduct from '../layout.jsx/MainProduct';
import Bestseller from '../layout.jsx/Bestseller';
import Special from '../layout.jsx/Special';
import Phone from '../../assets/Phone.png'

const Home = () => {
    return (
        <>
            {/* Banner Part Start */}
            <div className={"bg-bannerImg bg-no-repeat bg-cover bg-center py-[300px]"}></div>
            {/* Banner Part End */}
            {/* Information Part Start */}
            <div className={"w-full py-[30px]"}>
                <Container className={"max-w-menuContainer"}>
                    <Flex className={"justify-between"}>
                        <div className={'w-[30%]'}>
                            <Flex className={"gap-x-3"}>
                                <PiNumberTwoBold className={"font-extrabold text-menuHover mt-1"} />
                                <Heading as={"h3"} text={"Two years warranty"} className={"font-sans text-[16px] text-informationText"} />
                            </Flex>
                        </div>
                        <div className={'w-[40%]'}>
                            <Flex className={"gap-x-3"}>
                                <FaTruck className={"font-extrabold text-menuHover mt-1"} />
                                <Heading as={"h3"} text={"Free shipping"} className={"font-sans text-[16px] text-informationText"} />
                            </Flex>
                        </div>
                        <div className={'w-[30%]'}>
                            <Flex className={"gap-x-3"}>
                                <FaUndo className={"font-extrabold text-menuHover mt-1"} />
                                <Heading as={"h3"} text={"Return policy in 30 days"} className={"font-sans text-[16px] text-informationText"} />
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* Information Part End */}

            {/* Ads Part Start */}
            <div className={"w-full pt-[150px] pb-[70px]"}>
                <Container className={"max-w-menuContainer"}>
                    <Flex className={"justify-between"}>
                        <div className={"w-[49%]"}>
                            <Images imgSrc={adOne} />
                        </div>
                        <div className={"w-[49%]"}>
                            <Images imgSrc={adTwo} />
                            <Images imgSrc={adThree} className={"mt-8"} />
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* Ads Part End */}

            {/* New Arrivals Start */}
            <MainProduct />
            {/* New Arrivals End */}

            {/* Bestseller Start */}
            <Bestseller />
            {/*  Bestseller End */}

            {/* Ads Two Start */}
            <div className={"py-[65px]"}>
                <Container className={"max-w-menuContainer"}>
                    <Images imgSrc={Phone} />
                </Container>
            </div>
            {/* Ads Two End */}

            {/* Special Offers Start */}
            <Special />
            {/* Special Offers End */}
        </>
    )
}

export default Home
