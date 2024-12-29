import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Button from '../Button'

const Login = () => {
    return (
        <>
            <div className={"py-20"}>
                <Container className={"max-w-menuContainer"}>
                    <div className={"pb-14 border-b-2"}>
                        <Heading as={"h1"} text={"Login"} className={"text-[49px] font-sans font-bold capitalize text-menuHover"} />
                        <Heading as={"p"} text={"Home > Login"} className={"text-[14px] font-sans capitalize text-menuColor"} />
                        <Heading as={"p"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} className={"text-[16px] font-sans normal-case text-menuColor mr-[700px] pt-16 pb-8"} />
                    </div>
                    <div className="py-8 border-b-2">
                        <Heading as={"h2"} text={"Returning Customer"} className={"text-[39px] font-sans font-bold capitalize text-menuHover pb-8"} />
                        <Flex>
                            <div className="w-1/3 mr-8">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> Email address</label>
                                <br />
                                <input type="text" class="w-full border-b-2 pt-2 pb-4" placeholder="company@domain.com" name="uname" required=""></input>
                            </div>
                            <div className="w-1/3">
                                <label className={"text-[16px] font-sans text-menuHover font-bold capitalize"}> Password</label>
                                <br />
                                <input type="number" class="w-full border-b-2 pt-2 pb-4" placeholder="your password here" name="uname" required=""></input>
                            </div>
                        </Flex>
                        <Button btnName={"Log in"} className={"text-[14px] font-sans font-bold text-black px-[75px] py-[12px] border border-1px solid hover:bg-black hover:text-white mt-10 mb-8"} />
                    </div>
                    <Heading as={"h1"} text={"New Customer"} className={"text-[49px] font-sans font-bold capitalize text-menuHover py-8"} />
                    <Heading as={"p"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} className={"text-[16px] font-sans normal-case text-menuColor mr-[700px]"} />
                    <Button btnName={"Continue"} className={"text-[14px] font-sans font-bold text-white px-[75px] py-[12px] border border-1px solid bg-black mt-12 mb-8"} />
                </Container>
            </div>
        </>
    )
}

export default Login
