import data from '../../test-calc-js/data/data.json'
import conf from '../../test-calc-js/data/config.json'

import { quantityList } from './quantityList'
import { quantityPipe } from './quantityPipe'
import { quantityFix } from './quantityFix'

const getObj = (find, file, obj) => {
    file.forEach((element) => {
        Object.values(element).forEach((el) => {
            if(el === find)
                return obj.push(element)
        })        
    })
}

const getValue = (type, name, value, file) => {
    let res = 0
    file.forEach((element) => {
        if(element.type === type)
            Object.values(element).forEach((el) => {
                if(el === name)
                    res = element[`${value}`]     
        }) 
    })
    return res
}


export const calc = ({res}) => {
    
    const sheet = res[0].sheet
    const strengthUser = res[0].strength
    const pipeUser = res[0].pipe
    const widthList = res[0].widthList
    const lengthUser = res[0].length
    const widthUser = res[0].width

    const list = []
    getObj(widthList, data, list)
    const pipe = [] 
    getObj(pipeUser, data, pipe)  
    const steps = getValue("frame", strengthUser, "step", conf)
    const widthPipe = getValue("pipe", pipeUser,  "width", data)
    const fixValue = getValue("fix", sheet, "value", conf)


    //колличество листов на площадь
    let qList = Math.ceil(quantityList(lengthUser, widthUser, 1, list[0].width, 1))

    //колличество метров прогонных трубы
    let qPipe = Math.ceil(quantityPipe(lengthUser, widthUser, steps, widthPipe))

    //колличество саморезов
    let qFix = Math.ceil(quantityFix(qList, fixValue))

    return {
        0: {
            name: widthList,
            unit: getValue("list", widthList, "unit", data),
            value: qList,
            price: Math.ceil(getValue("list", widthList, "price", data)*qList),
        },
        1: {
            name: pipeUser,
            unit: getValue("pipe", widthPipe, "unit", data),
            value: qPipe,
            price: Math.ceil(getValue("pipe", widthPipe, "price", data)*qPipe),
        },
        2: {
            name: getValue("fix", "fix", "name", data),
            unit: getValue("fix", "fix", "unit", data),
            value: qFix,
            price: Math.ceil(getValue("fix", "fix", "price", data)*qFix),
        },
        length: 3 
    }
}