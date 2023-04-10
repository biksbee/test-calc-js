import { useEffect, useState } from 'react'

import ItemList from './Item/ItemList'
import DropList from './DropList/DropList'

const DropDownMenu = ({text, value, setValue, type, criteria, confirm, setConfirm, error, data}) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setValue(text)
        setConfirm(false)
    }, [confirm])

    return(
        <div>
            <ItemList 
                item={value} 
                open={open} 
                setOpen={setOpen} 
                error={error} 
                text={text}
            />
            <DropList 
                data={data} 
                open={open} 
                setOpen={setOpen} 
                value={value} 
                setValue={setValue} 
                type={type} 
                criteria={criteria}
            /> 
        </div>
    )
}

export default DropDownMenu