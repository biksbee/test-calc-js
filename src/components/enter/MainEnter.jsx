import { useState, useEffect } from 'react'

import Button from "../button/Button"
import Input from "../input/Input"
import DropDownMenu from '../dropDownMenu/DropDownMenu'
import useUniqValue from '../hooks/useUniqueValue' 

import trash from '../../assets/icon/trash.png'

import data from '../../test-calc-js/data/data.json'
import config from '../../test-calc-js/data/config.json'

const MainEnter = ({setRes, setShow}) => {

    const [userSheet, setUserSheet] = useState('')
    const [userPipe, setUserPipe] = useState('')
    const [userWidthList, setUserWidthList] = useState('')
    const [userStrength, setUserStrength] = useState('')
    const [userLength, setUserLength] = useState(0)
    const [userWidth, setUserWidth] = useState(0)
    const [confirm, setConfirm] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 500)
    }, [error])

    const check = () => {
        
        if(
            userSheet !== 'material' && userPipe !== 'pipe size' && userStrength !== 'strenght0' &&
            userLength !== '' && userLength !== 0 && 
            userWidth !== '' && userWidth !== 0
        )
            handler()
        else    
            setError(true)   
    }

    const handler = () => {
        setRes([{
            sheet: userSheet,
            widthList: userWidthList,
            pipe: userPipe,
            strength: userStrength,
            length: userLength,
            width: userWidth
        }])
        setShow(true)
    }

    return (
        <div className='flex flex-col gap-y-[10px] p-[20px]'>
            <DropDownMenu 
                data={data}
                text={'material'}
                value={userSheet}
                setValue={setUserSheet}
                type={"list"}
                criteria={"material"}
                confirm={confirm}
                setConfirm={setConfirm} 
                error={error}
            />
            {
                userSheet !== 'material' ?
                    <DropDownMenu 
                        data={data}
                        text={'wigth list'}
                        value={userWidthList}
                        setValue={setUserWidthList}
                        type={userSheet}
                        criteria={"name"}
                        confirm={confirm}
                        setConfirm={setConfirm} 
                        error={error}
                    />
                :
                    null 
            }
            <DropDownMenu 
                data={data}
                text={'pipe size'}
                value={userPipe}
                setValue={setUserPipe}
                type={"pipe"}
                criteria={"name"}
                confirm={confirm}
                setConfirm={setConfirm}
                error={error}
            />  
            <Input 
                placeholder={"length"}
                setValue={setUserLength}
                confirm={confirm}
                setConfirm={setConfirm}
                error={error}
            />
            <Input 
                placeholder={"width"}
                setValue={setUserWidth}
                confirm={confirm}
                setConfirm={setConfirm}
                error={error}
            />
            <DropDownMenu
                data={config} 
                text={'strength'}
                value={userStrength}
                setValue={setUserStrength}
                type={"frame"}
                criteria={"name"}
                confirm={confirm}
                setConfirm={setConfirm}
                error={error}
            />  
            <div className='flex justify-between gap-[20px]'>
                <Button 
                    text={"рассчитать"} 
                    handler={check}
                />
                <Button
                    handler={() => setConfirm(true)}
                    icon={trash}
                />
            </div>
        </div>
    )
}

export default MainEnter