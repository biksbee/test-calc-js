import useSimbolIterator from '../hooks/useSimbolIterator'

const View = ({res}) => {

    return(
        <div className='flex flex-col items-center'>
            <div className='flex text-center border-b-black '>
                <div className='md:w-[200px] w-[170px]'>Наименование</div>
                <div className='md:w-[40px] w-[20px] text-center'>ед.</div>
                <div className='md:w-[100px] w-[70px] text-center    '>кол-во</div>
                <div className='md:w-[100px] w-[70px] text-center'>сумма</div>
            </div>
            <div className='flex flex-col items-start'>
                {
                    useSimbolIterator(res.length).map((item, index) => (
                        <div 
                            key={index}
                            className={'flex md:text-[14px] text-[12px]'}
                        >
                            <div className='md:w-[200px] w-[170px]'>
                                {res[item].name}
                            </div>
                            <div className='md:w-[40px] w-[20px] text-center    '>
                                {res[item].unit}
                            </div>
                            <div className='md:w-[100px] w-[70px] text-center    '>
                                {res[item].value}
                            </div>
                            <div className='md:w-[100px] w-[70px] text-center'>
                                {res[item].price}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mt-[30px] flex gap-[30px]'>
                <div>
                    Итог
                </div>
                {res[0].price + res[1].price + res[2].price}
            </div>
        </div>
    )
}

export default View