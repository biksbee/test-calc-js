import { useState, useEffect } from 'react'
import cn from 'classnames'

import { calc } from './calc'

import VerticalMenu from '../verticalMenu/VerticalMenu'
import View from '../view/View'
import Basket from '../basket/Basket'
import Slider from '../slider/Slider'

const MainResult = ({res}) => {

    const [active, setActive] = useState('view')
    const [index, setIndex] = useState(0)
    const [quantityList, setQuantityList] = useState(calc({res}))

    useEffect(() => {
        setQuantityList(calc({res}))
        console.log(quantityList)
    }, [res])


    return (
        <div className={cn(
                "w-full relative",
                "xl:px-[100px] md:px-[48px] px-[32px]",
                "xl:mt-[125px] md:mt-[70px] mt-[50px]"
        )}>
            <div className='absolute z-[100] md:w-[90%] w-[85vw] top-0 flex items-center justify-center'>
                <VerticalMenu active={active} setActive={setActive} setIndex={setIndex}/>
            </div>
            <Slider index={index} >
                <View res={quantityList} />
                <Basket />
            </Slider>
        </div>
    )
}

export default MainResult