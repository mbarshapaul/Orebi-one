import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'

const MyAccount = () => {
  return (
    <>
      <div className="py-20">
        <Container className={"max-w-menuContainer"}>
        <div className={"pb-28"}>
                        <Heading as={"h1"} text={"My Account"} className={"text-[49px] font-sans font-bold capitalize text-menuHover"} />
                        <Heading as={"p"} text={"Home > My Account"} className={"text-[14px] font-sans capitalize text-menuColor"} />
                    </div>
                   <Flex>
                   <div className={"w-1/3 mr-8"}>
                    <Heading as={"p"} text={"Dashboard"} className={"text-[16px] font-sans font-bold capitalize text-menuColor border-b-2 py-6 hover:text-menuHover"} />
                    <Heading as={"p"} text={"Others"} className={"text-[16px] font-sans font-bold capitalize text-menuColor border-b-2 py-6 hover:text-menuHover"} />
                    <Heading as={"p"} text={"Donwloads"} className={"text-[16px] font-sans font-bold capitalize text-menuColor border-b-2 py-6 hover:text-menuHover"} />
                    <Heading as={"p"} text={"Addresses"} className={"text-[16px] font-sans font-bold capitalize text-menuColor border-b-2 py-6 hover:text-menuHover"} />
                    <Heading as={"p"} text={"Account details"} className={"text-[16px] font-sans font-bold capitalize text-menuColor border-b-2 py-6 hover:text-menuHover"} />
                    <Heading as={"p"} text={"Logout"} className={"text-[16px] font-sans font-bold capitalize text-menuColor border-b-2 py-6 hover:text-menuHover"} />
                    </div>
                    <div className={"w-2/3"}>
                    <Heading as={"p"} text={"Hello admin (not admin? Log out)"} className={"text-[16px] font-sans  text-menuColor py-8"} />
                        <Heading as={"p"} text={"From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."} className={"text-[16px] font-sans normal-case text-menuColor "} />
                    </div>
                   </Flex>
        </Container>
      </div>
    </>
  )
}

export default MyAccount
