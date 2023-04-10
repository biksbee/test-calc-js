import { useEffect } from "react"

import useUniqueValue from "../../hooks/useUniqueValue"

const DropList = ({open, setOpen, setValue, value, type, criteria, data}) => {

    useEffect(() => {
        setOpen(false)
    }, [value])

    return(
        <div>
            {useUniqueValue(data, type, criteria).map((item, index) => (
                <div 
                    key={index}
                    className={`transition-all h-auto overflow-hidden duration-500 cursor-pointer 
                        ${!open ? 'max-h-0' : 'max-h-[100px]'}    
                        hover:opacity-[0.7] hover:border-[1px] hover:border-[#000] rounded-[20px] hover:text-center 
                    `}
                    onClick={() => setValue(item)}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default DropList