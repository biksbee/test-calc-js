import cn from 'classnames'

const Button = ({text, handler, icon}) => {

    return(
        <div 
            className={cn(
                "flex cursor-pointer items-center hover:text-[#5ea3a0] text-[white] duration-500",
                text ? 
                    "w-full bg-[#423636] p-[5px] rounded-[15px] flex justify-center" 
                : 
                    "hover:opacity-70"
            )} 
            onClick={handler}
        >
            <div className="uppercase flex justify-between">
                {text
                ||
                <img src={icon} alt="icon" /> 
                }
            </div>
        </div>
    )
}

export default Button 