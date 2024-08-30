import { cn } from "@/utils/misc";

type TOptionButton = {
    className?: string;
    value: string;
    isSelected?: boolean;
    onClick?: (() => void);
}

export const OptionButton:React.FC<TOptionButton> = ({
    className,
    value,
    isSelected = false,
    ...props
}) => {

    function onClick() {
        if(props.onClick instanceof Function) {
            props.onClick();
        }
    }
    return (
        <button 
            className={cn("flex items-center justify-between hover:bg-charcoal-grey rounded-md p-3",className)} 
            onClick={onClick}
        >
            <div>{value}</div>
            {isSelected && <div></div>}
        </button>
    )
}