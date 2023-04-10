import { useState, useEffect } from 'react'
import cn from 'classnames'
import conf from '../../test-calc-js/data/config.json'

import useDebounce from '../hooks/useDebounce'

const getValue = (type, name, min, max, step, file) => {
    let res = []
    file.forEach((element) => {
        if(element.type === type)
            Object.values(element).forEach((el) => {
                if(el === name){
                    res.push(element[`${min}`])
                    res.push(element[`${max}`])
                    res.push(element[`${step}`])     
                }
        }) 
    })
    return res
}

const rounded = (num, step) => {
    num *= 100
    if(step === 0.2){
        return Math.ceil(num)/100
    } else if(step === 0.3){
        return Math.floor(num)/100
    }
}

const Input = ({placeholder, setValue, confirm, setConfirm, error}) => {

    const [debounceValue, setDebounceValue] = useState('')
    const debounceItem = useDebounce(debounceValue, 600)

    useEffect(() => {
        const value = getValue("size", placeholder,  "min", "max", "step", conf)
        if(debounceItem >= value[0] && debounceItem <= value[1]){
            const roundedValue = rounded(debounceItem, value[2])
            setDebounceValue(roundedValue)
            setValue(roundedValue)
        } else
            setDebounceValue('')
    }, [debounceItem])

    useEffect(() => {
        setDebounceValue('')
        setConfirm(false)
    }, [confirm])

    const handlerValueInput = (e) => {
        const regexp = /\d+/g
        if(regexp.test(e.target.value))    
            setDebounceValue(e.target.value)
        else if(e.target.value === ''){
            setDebounceValue('')
        }

    }

    return(
        <div>
            <input 
                type="text"
                placeholder={placeholder} 
                value={debounceValue}
                onChange={handlerValueInput}
                required={true}
                className={cn(
                    "border-[1px] active:opacity-[0.8] active:border-[#000] rounded-[15px] p-[5px] text-[#5ea3a0] hover:placeholder-[#464444]",
                    error ? "border-[#f00] text-[#f00] placeholder-[#f00]" : "border-[#000]",
                )}
            />
        </div>
    )
}

export default Input