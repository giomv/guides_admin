import React from "react";
import Image from "next/image";

interface Props {
    iconName: String,
    buttonText: String,
    action: any
}
const BlockButton: React.FC<Props> = ({
    iconName,
    buttonText,
    action
}) => {
    return(
        <div 
            className="shadow-xl bg-slate-200 flex p-2 items-center cursor-pointer" 
            onClick={action}
        >
          <Image
            className="relative mr-2"
            src={`/${iconName}.svg`}
            alt={`${iconName}`}
            width={40}
            height={40}
            priority
            />
            <p>{buttonText}</p>
        </div>
    )
}

export default BlockButton;