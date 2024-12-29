import React from 'react'
import Badge from './Badge'
import Images from './Images'
import { FaHeart } from "react-icons/fa";
import Flex from './Flex';
import Heading from './Heading';
import { IoGitCompareSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";


const Product = ({ imgSrc, badgeName ,basic , price,color}) => {
  return (
    <>
    <div className="group">
      <div className=" relative  mx-2">
        <Images imgSrc={imgSrc} className={"w-full"} />
        <Badge badgeName={badgeName} className={"absolute top-5 left-4"} />
        <div className="bg-white py-7 invisible  group-hover:visible absolute bottom-[78px] left-0 w-full">
          <Flex className={"justify-end items-center gap-x-4"}>
            <Heading as={"p"} text={"Add to Wish List"} className={"text-[16px] font-sans text-menuColor"} />
            <FaHeart />
          </Flex>
          <Flex className={"justify-end items-center gap-x-4"}>
            <Heading as={"p"} text={"Compare"} className={"text-[16px] font-sans text-menuColor"} />
            <IoGitCompareSharp />
          </Flex>
          <Flex className={"justify-end items-center gap-x-4"}>
            <Heading as={"p"} text={"Add to Cart"} className={"text-[16px] font-sans text-menuHover"} />
            <IoCart />
          </Flex>
        </div>
        <Flex className={"justify-between py-3"}>
          <Heading as={"h3"} text={basic} className={"text-[20px] font-sans text-menuHover font-bold"} />
          <Heading as={"p"} text={price} className={"text-[16px] font-sans text-menuColor"} />
        </Flex>
        <Heading as={"p"} text={color} className={"text-[16px] font-sans text-menuColor capitalize"} />
      </div>
      </div>
    </>
  )
}

export default Product

