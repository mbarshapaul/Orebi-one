import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Button from '../Button'

const SingUp = () => {
    return (
        <>
            <div className={"py-20"}>
                <Container className={"max-w-menuContainer"}>
                    <div className={"pb-14 border-b-2"}>
                        <Heading as={"h1"} text={"Sign up"} className={"text-[49px] font-sans font-bold capitalize text-menuHover"} />
                        <Heading as={"p"} text={"Home > Sign up"} className={"text-[12px] font-sans capitalize text-menuColor"} />
                        <Heading as={"p"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} className={"text-[16px] font-sans normal-case text-menuColor mr-[700px] pt-16 pb-8"} />
                    </div>
                    <div className="w-full border-b-2 py-4">
                        <Heading as={"h2"} text={"Your Personal Details"} className={"text-[39px] font-sans font-bold capitalize text-menuHover py-6"} />
                        <Flex>
                            <div className="w-1/3 mr-8">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> First Name*</label>
                                <br />
                                <input type="text" class="w-full border-b-2 pt-2 pb-4" placeholder="First Name" name="uname" required=""></input>
                            </div>
                            <div className="w-1/3">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> Last Name*</label>
                                <br />
                                <input type="text" class="w-full border-b-2 pt-2 pb-4" placeholder="Last Name" name="uname" required=""></input>
                            </div>
                        </Flex>
                        <Flex className={"pt-4 pb-14 "}>
                            <div className="w-1/3 mr-8">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> Email address</label>
                                <br />
                                <input type="text" class="w-full border-b-2 pt-2 pb-4" placeholder="company@domain.com" name="uname" required=""></input>
                            </div>
                            <div className="w-1/3">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> Telephone</label>
                                <br />
                                <input type="number" class="w-full border-b-2 pt-2 pb-4" placeholder="Your phone number" name="uname" required=""></input>
                            </div>
                        </Flex>
                    </div>
                    <div className="w-full border-b-2 py-4">
                        <Heading as={"h2"} text={"New Customer"} className={"text-[39px] font-sans font-bold capitalize text-menuHover py-6"} />
                        <Flex>
                            <div className="w-1/3 mr-8">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> Address 1</label>
                                <br />
                                <input type="text" class="w-full border-b-2 pt-2 pb-4" placeholder="4279 Zboncak Port Suite 6212" name="uname" required=""></input>
                            </div>
                            <div className="w-1/3">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> Address 2</label>
                                <br />
                                <input type="text" class="w-full border-b-2 pt-2 pb-4" placeholder="—" name="uname" required=""></input>
                            </div>
                        </Flex>
                        <Flex className={"py-4"}>
                            <div className="w-1/3 mr-8">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> City</label>
                                <br />
                                <input type="text" class="w-full border-b-2 pt-2 pb-4" placeholder="Your city" name="uname" required=""></input>
                            </div>
                            <div className="w-1/3">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> Post Code</label>
                                <br />
                                <input type="number" class="w-full border-b-2 pt-2 pb-4" placeholder="05228" name="uname" required=""></input>
                            </div>
                        </Flex>
                        <Flex className={"pt-4 pb-14 "}>
                            <div className="w-1/3 mr-8">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> Country</label>
                                <br />
                                <input type="text" class="w-full border-b-2 pt-2 pb-4" placeholder="Please select" name="uname" required=""></input>
                            </div>
                            <div className="w-1/3">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> Region/State</label>
                                <br />
                                <input type="text" class="w-full border-b-2 pt-2 pb-4" placeholder="Please select" name="uname" required=""></input>
                            </div>
                        </Flex>
                    </div>
                    <div className="w-full border-b-2 pt-6 pb-16">
                        <Heading as={"h2"} text={"Your Password"} className={"text-[39px] font-sans font-bold capitalize text-menuHover py-6"} />
                        <Flex>
                            <div className="w-1/3 mr-8">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}>Password</label>
                                <br />
                                <input type="number" class="w-full border-b-2 pt-2 pb-4" placeholder="Password" name="uname" required=""></input>
                            </div>
                            <div className="w-1/3">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}>Repeat Password</label>
                                <br />
                                <input type="number" class="w-full border-b-2 pt-2 pb-4" placeholder="Repeat Password" name="uname" required=""></input>
                            </div>
                        </Flex>
                    </div>
                    <div className="pt-12 pb-6">
                        <input type="checkbox" class="mr-2" placeholder="" name="uname" required=""></input>
                        <label className={"text-[14px] font-sans text-menuColor font-bold normal-case"}>I have read and agree to the Privacy Policy</label>
                    </div>
                    <div className="">
                        <Flex>
                            <label className={"text-[14px] font-sans text-menuColor font-bold normal-case"}>Subscribe Newsletter</label>
                            <input type="radio" class=" appearance-none w-4 h-4 border border-menuColor border-2px ml-4" placeholder="" name="uname" required=""></input>
                            <label className={"text-[14px] font-sans text-menuColor font-bold normal-case ml-4"}>Yes</label>
                            <input type="radio" class=" appearance-none w-4 h-4 border border-menuColor border-2px ml-4" placeholder="" name="uname" required=""></input>  
                            <label className={"text-[14px] font-sans text-menuColor font-bold normal-case ml-4"}>No</label>
                        </Flex>
                        <Button btnName={"Log in"} className={"text-[14px] font-sans font-bold text-white px-[75px] py-[12px] border border-1px solid bg-black mt-12 mb-8"} />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default SingUp