export const IconText = ({icon: Icon, text}) => {


    return (
        <div className="flex items-center gap-1">
            <Icon />
            <div className="text-xxs text-custom-gray">{text}</div>
        </div>
    )
}