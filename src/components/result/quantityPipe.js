export const quantityPipe = (lengthUser, widthUser, step, widthPipe) => {

    const quantityByLength = Math.round(lengthUser/step)+1    //колличество ячеек в длинну
    const quantityByWidth = Math.round(widthUser/step)+1      //колличество ячеек в ширину
    
    const emptySpaceLen = lengthUser - (quantityByLength*widthPipe/1000)
    const emptySpaceWid = widthUser - (quantityByWidth*widthPipe/1000)
    const squearePipe = (lengthUser*widthUser) - (emptySpaceLen * emptySpaceWid) 
    
    return squearePipe/0.02 
        
}