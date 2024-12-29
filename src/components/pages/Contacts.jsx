import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Button from '../Button'

const Contacts = () => {
    return (
        <>
            <div className={"py-16"}>
                <Container className={"max-w-menuContainer"}>
                    <Heading as={"h1"} text={"Contacts"} className={"text-[49px] font-sans font-bold capitalize"} />
                    <Heading as={"p"} text={"Home > contacts"} className={"text-[14px] font-sans capitalize text-menuColor"} />
                    <Heading as={"p"} text={"Fill up a Form"} className={"text-[39px] font-sans capitalize text-menuHover font-bold pt-12 pb-8"} />
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
                            <label className={"text-[20px] font-sans text-menuHover font-bold capitalize"}>Message</label>
                            <br/>
                            <input type="text" class=" w-1/2 border-b-2 pt-2 pb-16 " placeholder="Your message here" name="uname" required=""></input>
                        </div>
                        <Button btnName={"post"} className={"text-[14px] font-sans font-bold text-white px-[75px] py-[12px] bg-black mt-8 mb-36"} />
                </Container>
            </div>
        </>
    )
}

export default Contacts
