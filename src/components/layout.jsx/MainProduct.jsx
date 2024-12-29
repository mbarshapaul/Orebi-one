import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import productOne from '../../assets/productOne.png'
import productTwo from '../../assets/productTwo.png'
import productThree from '../../assets/productThree.png'
import productFour from '../../assets/productFour.png'
import Heading from '../Heading'

const MainProduct = () => {
  return (
    <>
      <div className={"py-[60px]"}>
        <Container className={"max-w-menuContainer"}>
        <Heading as={"h3"} text={"New Arrivals"} className={"font-sans text-[39px] font-bold capitalize pb-4"}/>
<Flex>
    <Product 
    imgSrc={productOne}
    badgeName={"New"}
    basic={"Basic Crew Neck Tee"}
    price={"$44.00"}
    color={"Black"}
    /> 
    <Product 
    imgSrc={productTwo}
    badgeName={"New"}
    basic={"Basic Crew Neck Tee"}
    price={"$44.00"}
    color={"Black"}
    /> 
    <Product 
    imgSrc={productThree}
    badgeName={"New"}
    basic={"Basic Crew Neck Tee"}
    price={"$44.00"}
    color={"Black"}
    /> 
    <Product 
    imgSrc={productFour}
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

export default MainProduct
