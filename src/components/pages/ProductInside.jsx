import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import productinside from '../../assets/productinside.png'
import specialFour from '../../assets/specialFour.png'
import specialThree from '../../assets/specialThree.png'
import specialTwo from '../../assets/specialTwo.png'
import { IoIosStar } from "react-icons/io";
import { Select, Option } from "@material-tailwind/react";
import { FaCaretDown } from "react-icons/fa";
import Images from '../Images'
import Button from '../Button'
import { FiPlus } from "react-icons/fi";
const ProductInside = () => {
    return (
        <>
            <div className="w-full overflow-hidden">
                <Container className={"max-w-menuContainer"}>
                    <div className="py-8">
                        <Heading as={"p"} text={"Home > Products"} className={"text-[14px] font-sans capitalize text-menuColor"} />
                    </div>
                    <Flex className={"flex-wrap justify-between"}>
                        <div className={"w-[49%]"}>
                            <Images imgSrc={productinside} className={"w-full pb-6"} />
                        </div>
                        <div className={"w-[49%]"}>
                            <Images imgSrc={specialFour} className={"w-full pb-6"} />
                        </div>
                        <div className={"w-[49%]"}>
                            <Images imgSrc={specialThree} className={"w-full"} />
                        </div>
                        <div className={"w-[49%]"}>
                            <Images imgSrc={specialTwo} className={"w-full"} />
                        </div>

                    </Flex>
                    <div className="py-6">
                        <Heading as={"h3"} text={"Product"} className={"text-[39px] font-sans font-bold capitalize"} />
                        <div className="py-4">
                            <Flex>
                                <IoIosStar className={"text-yellow-300"} />
                                <IoIosStar className={"text-yellow-300"} />
                                <IoIosStar className={"text-yellow-300"} />
                                <IoIosStar className={"text-yellow-300"} />
                                <IoIosStar className={"text-yellow-300"} />
                                <Heading as={"h3"} text={"1 Review"} className={"text-[14px] font-sans ml-4 text-menuColor capitalize"} />
                            </Flex>
                            <Flex className={"py-4 w-[50%] border-b-2 border-2px solid"}>
                                <Heading as={"p"} text={"$88.00"} className={"text-[16px] font-sans text-menuColor capitalize"} />
                                <Heading as={"p"} text={"$44.00"} className={"text-[20px] font-sans ml-5 font-bold capitalize"} />
                            </Flex>
                            <Heading as={"h6"} text={"COLOR:"} className={"text-[16px] font-sans font-bold text-menuHover capitalize py-8"} />

                            <div className="">
                                <Flex>
                                    <Heading as={"h3"} text={"SIZE:"} className={"text-[16px] font-sans font-bold text-menuHover capitalize mr-8"} />
                                    <div className="mr-8 relative">
                                        <Select label="S">
                                            <Option>Featured</Option>
                                            <Option>Featured</Option>
                                            <Option>Featured</Option>
                                            <Option>Featured</Option>
                                            <Option>Featured</Option>
                                        </Select>
                                        <FaCaretDown className={"absolute text-menuColor right-3 top-[6px]"} />
                                    </div>
                                </Flex>
                            </div>
                            <Flex>
                                <Heading as={"h6"} text={"QUANTITY:"} className={"text-[16px] font-sans font-bold text-menuHover capitalize py-6"} />
                            </Flex>
                            <Flex className="w-[50%] border-y-2 border-2px solid">
                                <Heading as={"h6"} text={"STATUS:"} className={"text-[16px] font-sans font-bold text-menuHover capitalize py-6"} />
                                <Heading as={"p"} text={"In stock"} className={"text-[16px] font-sans  text-menuColor capitalize py-6 ml-6"} />
                            </Flex>
                            <Flex className={"py-6"}>
                                <Button btnName={"Add to Wish List"} className={"text-[14px] font-sans font-bold text-menuHover px-[25px] py-[15px] border-menuHover border hover:text-white hover:bg-black mr-4"} />
                                <Button btnName={"Add to Cart"} className={"text-[14px] font-sans font-bold text-menuHover px-[35px] py-[15px] border-menuHover border hover:text-white hover:bg-black"} />
                            </Flex>
                            <div className="w-[50%] py-6 border-y-2 border-2px solid">
                                <Flex className={"justify-between"}>
                                    <Heading as={"h6"} text={"FEATURES & DETAILS"} className={"text-[16px] font-sans  text-menuHover font-bold capitalize"} />
                                    <FiPlus />
                                </Flex>
                            </div>
                            <div className="w-[50%] py-6 border-b-2 border-2px solid">
                                <Flex className={"justify-between"}>
                                    <Heading as={"h6"} text={"SHIPPING & RETURNSS"} className={"text-[16px] font-sans  text-menuHover font-bold capitalize"} />
                                    <FiPlus />
                                </Flex>
                            </div>
                        </div>
                        <Heading as={"p"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} className={"text-[16px] font-sans  text-menuColor normal-case mr-[550px] pb-[50px]"} />
                        <Flex className={"py-14"}>
                            <Heading as={"p"} text={"Description"} className={"text-[20px] font-sans  text-menuColor capitalize"} />
                            <Heading as={"h6"} text={"Reviews (1)"} className={"text-[20px] font-sans  text-menuHover font-bold capitalize ml-12"} />
                        </Flex>
                        <Heading as={"p"} text={"1 review for Product"} className={"text-[20px] font-sans  text-menuColor normal-case border-b-2 border-1px solid pb-4"} />
                        <Flex className={"py-4 justify-between"}>
                            <Heading as={"p"} text={"John Ford"} className={"text-[16px] font-sans text-menuHover capitalize"} />
                            <div className="">
                                <Flex className={"mr-[900px]"}>
                                    <IoIosStar className={"text-yellow-300"} />
                                    <IoIosStar className={"text-yellow-300"} />
                                    <IoIosStar className={"text-yellow-300"} />
                                    <IoIosStar className={"text-yellow-300"} />
                                    <IoIosStar className={"text-yellow-300"} />
                                </Flex>
                            </div>
                            <Heading as={"p"} text={"6 months ago"} className={"text-[16px] font-sans text-menuColor capitalize"} />
                        </Flex>
                        <Heading as={"p"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} className={"text-[16px] font-sans text-menuColor normal-case pb-4"} />
                        <Heading as={"h5"} text={"Add a Review"} className={"text-[20px] font-sans text-menuHover font-bold capitalize"} />
                        <div className="pt-[30px]">
                            <label className={"text-[20px] font-sans text-menuHover font-bold capitalize"}> Name</label>
                            <br/>
                            <input type="text" class=" w-1/2 border-b-2 pt-2 pb-4" placeholder="Your name here" name="uname" required=""></input>
                        </div>
                        <div className="pt-[30px]">
                            <label className={"text-[20px] font-sans text-menuHover font-bold capitalize"}> Email</label>
                            <br/>
                            <input type="text" class=" w-1/2 border-b-2 pt-2 pb-4" placeholder="Your email here" name="uname" required=""></input>
                        </div>
                        <div className="pt-[30px]">
                            <label className={"text-[20px] font-sans text-menuHover font-bold capitalize"}> Review</label>
                            <br/>
                            <input type="text" class=" w-1/2 border-b-2 pt-2 pb-16 " placeholder="Your review here" name="uname" required=""></input>
                        </div>
  
                        <Button btnName={"post"} className={"text-[14px] font-sans font-bold text-white px-[75px] py-[12px] bg-black mt-8 mb-36"} />
                    </div>
                </Container>
            </div>

        </>
    )
}

export default ProductInside
