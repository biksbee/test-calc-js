import cn from 'classnames'

import down from '../../../assets/icon/vectorDown.svg'

const DropDownItem = ({item, open, setOpen, error, text}) => {

    return (
        <div 
            className={cn(
                'relative flex items-center cursor-pointer border-b-[1px] ',
                error ? 'border-b-[#f00] text-[#f00]' : 'border-b-[#000]',
                item === text ? 'text-[#a19d9d] hover:text-[#464444]' : 'text-[#5ea3a0]'
            )}
            onClick={() => setOpen(!open)}
        >
            {item}
            <div className={cn(
                !open ? '' : 'rotate-[180deg]',
                'w-[15px] h-[15px] absolute z-1 right-0 duration-300',
                'flex justify-center items-center'
            )}>
                <img 
                    src={down} 
                    alt="vector" 
                />
            </div>
        </div>
    )
}

export default DropDownItem