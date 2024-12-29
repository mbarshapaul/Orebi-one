import React from 'react'
import Container from '../Container'
import Heading from '../Heading'

const MyAccount = () => {
  return (
    <>
      <div className="py-16">
        <Container className={"max-w-menuContainer"}>
        <div className={"pb-14 border-b-2"}>
                        <Heading as={"h1"} text={"My Account"} className={"text-[49px] font-sans font-bold capitalize text-menuHover"} />
                        <Heading as={"p"} text={"Home > My Account"} className={"text-[14px] font-sans capitalize text-menuColor"} />
                    </div>
                    <div className={"w-1/3"}>
                    
                    </div>
                    <div className={"w-1/3"}></div>

                    add hello
        </Container>
      </div>
    </>
  )
}

export default MyAccount
