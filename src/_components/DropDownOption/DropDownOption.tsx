import { cn } from "@/utils/misc";
import { OptionButton } from "./OptionButton/OptionButton";

type TDropDownOption = {
    className?: string;
    options: string[];
    value: string;
    onSelect?: ((value: string) => void);
}

export const DropDownOption:React.FC<TDropDownOption> = ({
    className,
    options,
    value,
    ...props
}) => {

    function onSelect(value: string) {
        if(props.onSelect instanceof Function && props.onSelect.length === 1) {
            props.onSelect(value);
        }
    }
    return (
        <div className={cn("flex flex-col w-[200px] bg-thunder rounded-xl border-dark-grey border-2 p-2",className)} >
            {
                options.map(item => {
                    return (
                        <OptionButton 
                            value={item}
                            className="w-full"
                            onClick={() => {onSelect(item)}}
                        />
                    )
                })
            }
        </div>
    )
}