import { useEffect } from 'react'
import ItemMenu from "./menuItems/ItemMenu"

import basket from '../../assets/icon/basket.svg'
import result from '../../assets/icon/result.svg'



const VerticalMenu = ({active, setActive, setIndex}) => {

    const menu = ["view", "basket"]

    useEffect(() => {
        let i = menu.findIndex(i => i === active)
        setIndex(i)
    }, [active])

    return(
            <div className="w-max flex justify-center gap-x-[10px]">
                <ItemMenu 
                    text={"view"}
                    icon={result}
                    handler={() => setActive("view")}
                    active={active}
                />
                <ItemMenu 
                    text={"basket"}
                    icon={basket}
                    handler={() => setActive("basket")}
                    active={active}
                />
            </div>
    )
}

export default VerticalMenu