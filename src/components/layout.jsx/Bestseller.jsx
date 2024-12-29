import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import BestOne from '../../assets/BestOne.png'
import BestTwo from '../../assets/BestTwo.png'
import BestThree from '../../assets/BestThree.png'
import BestFour from '../../assets/BestFour.png'
import Heading from '../Heading'

const Bestseller = () => {
  return (
    <>
          <div className={"py-[60px]"}>
        <Container className={"max-w-menuContainer"}>
        <Heading as={"h3"} text={"Our Bestseller"} className={"font-sans text-[39px] font-bold capitalize pb-4"}/>
<Flex>
    <Product 
    imgSrc={BestOne}
    badgeName={"New"}
    basic={"Basic Crew Neck Tee"}
    price={"$44.00"}
    color={"Black"}
    /> 
    <Product 
    imgSrc={BestTwo}
    badgeName={"New"}
    basic={"Basic Crew Neck Tee"}
    price={"$44.00"}
    color={"Black"}
    /> 
    <Product 
    imgSrc={BestThree}
    badgeName={"New"}
    basic={"Basic Crew Neck Tee"}
    price={"$44.00"}
    color={"Black"}
    /> 
    <Product 
    imgSrc={BestFour}
    badgeName={"New"}
    basic={"Basic Crew Neck Tee"}
    price={"$44.00"}
    color={"Black"}
    /> 
</Flex>
        </Container>
      </div>
    </>
  )
}

export default Bestseller
