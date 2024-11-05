
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Images from './components/Images'
import Logo from './assets/Logo.png'
import Menu from './components/Menu'
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from './components/Heading'
import { FaSearch,FaUser,FaSortDown,FaShoppingCart,FaTruck,FaUndo} from "react-icons/fa";
import { PiNumberTwoBold } from "react-icons/pi";
import adOne from './assets/adOne.jpg'
import adTwo from './assets/adTwo.png'
import adThree from './assets/adThree.jpg'

function App() {
 

  return (
    <>
    {/* Header Part Start */}
     <div className={'bg-white py-7 w-full'}>
      <Container className={'max-w-menuContainer'}>
        <Flex>
          <div className={'w-[30%]'}>
            <Images imgSrc={Logo}/>
          </div>
          <div className={'w-[70%]'}>
           <Flex>
           <Menu menuName={'Home'} className={'px-2'}/>
            <Menu menuName={'Shop'}/>
            <Menu menuName={'About'}/>
            <Menu menuName={'Contacts'}/>
            <Menu menuName={'Journal'}/>
           </Flex>
          </div>
        </Flex>
      </Container>
      </div>
      {/* Header Part End */} 

      {/* Category Part Start */}
      <div className="w-full bg-categoryBg py-[25px] border border-menuColor">
        <Container className={"max-w-menuContainer"}>
        <Flex className={"items-center"}>
          <div className={"w-1/5"}>
          <Flex className={"gap-x-2"}>
          <HiBars3BottomLeft />
          <Heading as={"h3"} text={"Shop by Category"} className={"font-sans text-sm text-menuHover"}/>
          </Flex>
          </div>
          <div className={"w-3/5 relative"}>
          <input type="text" className={"p-4 bg-white rounded-lg w-full"} placeholder={"Search Products"} />
          <FaSearch  className={"absolute top-1/2 right-5 -translate-y-1/2"}/>
          </div>
          <div className={"w-1/5"}>
          <Flex className={"justify-end"}>
          <FaUser className={"ml-2"}/>
          <FaSortDown className={"mr-4"}/>
          <FaShoppingCart />
          </Flex>
          </div>
        </Flex>
        </Container>
      </div>
      {/* Category Part End */}

      {/* Banner Part Start */}
      <div className={"bg-bannerImg bg-no-repeat bg-cover bg-center py-[300px]"}></div>
      {/* Banner Part End */}
      {/* Information Part Start */}
      <div className={"w-full py-[30px]"}>
        <Container className={"max-w-menuContainer"}>
          <Flex  className={"justify-between"}>
            <div className={'w-[30%]'}>
              <Flex className={"gap-x-3"}>
              <PiNumberTwoBold className={"font-extrabold text-menuHover mt-1"}/>
              <Heading as={"h3"} text={"Two years warranty"} className={"font-sans text-[16px] text-informationText"}/>
              </Flex>
            </div>
            <div className={'w-[40%]'}>
            <Flex className={"gap-x-3"}>
              <FaTruck  className={"font-extrabold text-menuHover mt-1"}/>
              <Heading as={"h3"} text={"Free shipping"} className={"font-sans text-[16px] text-informationText"}/>
              </Flex>
            </div>
            <div className={'w-[30%]'}>
            <Flex className={"gap-x-3"}>
              <FaUndo  className={"font-extrabold text-menuHover mt-1"}/>
              <Heading as={"h3"} text={"Return policy in 30 days"} className={"font-sans text-[16px] text-informationText"}/>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Information Part End */}

      {/* Ads Part Start */}
      <div className={"w-full pt-[150px] pb-[70px]"}>
        <Container className={"max-w-menuContainer"}>
          <Flex className={"justify-between"}>
            <div className={"w-[49%]"}>
              <Images imgSrc={adOne}/>
            </div>
            <div className={"w-[49%]"}>
            <Images imgSrc={adTwo}/>
            <Images imgSrc={adThree} className={"mt-8"}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Ads Part End */}

    {/* New Arrivals Start */}
    <div className={"py-[60px]"}>
      <Container className={"max-w-menuContainer"}>
        
      </Container>
    </div>
    {/* New Arrivals End */}


    </>
  )
}

export default App
