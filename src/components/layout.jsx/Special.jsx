import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import specialOne from '../../assets/specialOne.png'
import specialTwo from '../../assets/specialTwo.png'
import specialThree from '../../assets/specialThree.png'
import specialFour from '../../assets/specialFour.png'
import Heading from '../Heading'

const Special = () => {
  return (
    <>
        <div className={"py-[60px]"}>
        <Container className={"max-w-menuContainer"}>
        <Heading as={"h3"} text={"Special Offers"} className={"font-sans text-[39px] font-bold capitalize pb-4"}/>
<Flex>
    <Product 
    imgSrc={specialOne}
    badgeName={"New"}
    basic={"Basic Crew Neck Tee"}
    price={"$44.00"}
    color={"Black"}
    /> 
    <Product 
    imgSrc={specialTwo}
    badgeName={"New"}
    basic={"Basic Crew Neck Tee"}
    price={"$44.00"}
    color={"Black"}
    /> 
    <Product 
    imgSrc={specialThree}
    badgeName={"New"}
    basic={"Basic Crew Neck Tee"}
    price={"$44.00"}
    color={"Black"}
    /> 
    <Product 
    imgSrc={specialFour}
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

export default Special
