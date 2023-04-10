const useUniqueValue = (data, type, criteria) => {

    const res = []
    const types = []


    data.forEach((element) => {
        Object.values(element).forEach((el) => {
            if(el === type)
                types.push(element[`${criteria}`])
        })
    })
    res.push(types[0])
    let i = 0, j =0
    types.forEach((element) => {
        if(res[i] !== element){
            if(res[j] !== element && j <= res.length){
                j++
                i++
                res.push(element)
            }    
        }
        j=0
    }) 
    

    return  res

}

export default useUniqueValue