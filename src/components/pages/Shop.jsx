import React from 'react'
import { Select, Option } from "@material-tailwind/react";
import Container from '../Container';
import Heading from '../Heading';
import Flex from '../Flex';
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";
import { TfiLayoutGrid2Alt, TfiMenuAlt } from "react-icons/tfi";
import { FaCaretDown } from "react-icons/fa";
import Product from '../Product';
import BestThree from '../../assets/BestThree.png'
import specialThree from '../../assets/specialThree.png'
import specialTwo from '../../assets/specialTwo.png'
import specialOne from '../../assets/specialOne.png'
import New from '../../assets/New.png'
import BestFour from '../../assets/BestFour.png'
import specialFour from '../../assets/specialFour.png'
import productinside from '../../assets/productinside.png'
import productOne from '../../assets/productOne.png'

const Shop = () => {
  return (
    <>
      <div className={"py-[110px] overflow-hidden"}>
        <Container className={"max-w-menuContainer"}>
          <div className={"pb-[95px]"}>
            <Heading as={"h1"} text={"Products"} className={"text-[49px] font-sans font-bold capitalize"} />
            <Heading as={"p"} text={"Home > Shop"} className={"text-[14px] font-sans capitalize text-menuColor"} />
          </div>
          <Flex className={"justify-between"}>
            <div className={"w-3/12"}>
              <div className="">
                <Heading as={"h3"} text={"Shop by Category"} className={"text-[20px] font-sans capitalize font-bold pb-2"} />
              </div>
              <div className={"py-8 relative"}>
                <Heading as={"p"} text={"Category 1"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 border-b-2 border-1px-solid border-borderBg"} /> <AiOutlinePlus className={"absolute right-0 top-9 text-menuColor"} />
                <Heading as={"p"} text={"Category 2"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"Category 3"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} /> <AiOutlinePlus className={"absolute right-0 bottom-[149px] text-menuColor"} />
                <Heading as={"p"} text={"Category 4"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"Category 5"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />

              </div>
              <div className={"relative"}>
                <Heading as={"h3"} text={"Shop by Color"} className={"text-[20px] font-sans capitalize font-bold pb-2"} />
                <IoMdArrowDropup className={"absolute right-0 top-2"} />
              </div>
              <div className={"py-8"}>
                <Heading as={"p"} text={"Color 1"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"Color 2"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"Color 3"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"Color 4"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"Color 5"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
              </div>
              <div className={"relative"}>
                <Heading as={"h3"} text={"Shop by Brand"} className={"text-[20px] font-sans capitalize font-bold pb-2"} />
                <IoMdArrowDropup className={"absolute right-0 top-2"} />
              </div>
              <div className={"py-8"}>
                <Heading as={"p"} text={"Brand 1"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"Brand 2"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"Brand 3"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"Brand 4"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"Brand 5"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
              </div>
              <div className="">
                <Heading as={"h3"} text={"Shop by Price"} className={"text-[20px] font-sans capitalize font-bold pb-2"} />
              </div>
              <div className={"py-8"}>
                <Heading as={"p"} text={"$0.00 - $9.99"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"$10.00 - $19.99"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"$20.00 - $29.99"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"$30.00 - $39.99"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
                <Heading as={"p"} text={"$40.00 - $69.99"} className={"text-[16px] font-sans capitalize text-menuColor pb-4 pt-2 border-b-2 border-1px-solid border-borderBg"} />
              </div>
            </div>
            <div className={"w-9/12"}>
              <Flex className={"justify-between"}>
                <div className={"w-4/12 pb-4 ml-3"}>
                  <Flex className={"justify-start gap-x-3 items-center"}>
                    <div className={"p-3 bg-black"}>
                      < TfiLayoutGrid2Alt className={" text-lg bg-black text-white"} />
                    </div>
                    <div className={"border border-8px solid categoryBg p-2"}>
                      <TfiMenuAlt className={"text-2xl text-menuColor"} />
                    </div>
                  </Flex>
                </div>
                <div className={"w-8/12"}>
                  <Flex className={"justify-end"}>
                    <Heading as={"h3"} text={"Sort by :"} className={"text-[16px] font-sans text-menuColor capitalize mr-4"} />
                    <div className="mr-8 relative">
                      <Select label="Featured">
                        <Option>Featured</Option>
                        <Option>Featured</Option>
                        <Option>Featured</Option>
                        <Option>Featured</Option>
                        <Option>Featured</Option>
                      </Select>
                      <FaCaretDown className={"absolute text-menuColor right-3 top-[6px]"} />
                    </div>
                    <Heading as={"h3"} text={"Show :"} className={"text-[16px] font-sans text-menuColor capitalize mr-4"} />
                    <div className="mr-6 relative">
                      <Select label="36">
                        <Option>10</Option>
                        <Option>20</Option>
                        <Option>25</Option>
                        <Option>34</Option>
                        <Option>32</Option>
                      </Select>
                      <FaCaretDown className={"absolute text-menuColor right-3 top-[6px]"} />
                    </div>
                  </Flex>
                </div>
              </Flex>
              <div className="">
                <Flex className={"flex-wrap gap-x-4"}>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={BestThree}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={specialThree}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={specialTwo}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={specialOne}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={New}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={BestFour}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={specialFour}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={specialTwo}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={specialOne}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={productinside}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={productOne}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                  <div className={"w-[31%]"}>
                    <Product
                      imgSrc={specialFour}
                      badgeName={"10%"}
                      basic={"Basic Crew Neck Tee"}
                      price={"$44.00"}
                      color={"Black"}
                    />
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>

    </>
  )
}

export default Shop

