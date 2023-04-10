import cn from 'classnames'

const ItemMenu = ({text, icon, active, handler}) => {

    return(
        <div 
            onClick={handler}
            className={cn(
                "cursor-pointer relative flex items-center w-[126px] p-[5px] border-[2px] duration-500",
                "rounded-t-[15px] border-[#000]",
                active === text ? "border-b-[#fff] text-[#5ea3a0] justify-center" : "justify-start border-b-[2px] border-[#000]"
            )}
        >
            <div className="">
                {text}
            </div>
            <div className={cn(
                "absolute z-1 flex right-[10px] w-[32px] h-[32px]",
                active === text ? 'hidden' : ''
            )}>
                <img 
                    src={icon} 
                    alt="icon" 
                />
            </div>
        </div>
    )
}

export default ItemMenu