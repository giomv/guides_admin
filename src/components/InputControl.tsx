import React from "react";
import Image from "next/image";

interface Props {
    id: string,
    onRemoveBlock: any
}

const InputControl:React.FC<Props> = ({id, onRemoveBlock}) => {
    return (
        <div className="rounded-sm border border-slate-200">
            <div className="border-b flex p-2 items-center cursor-pointer justify-between">
                <div className="flex items-center">
                    <Image
                        className="relative mr-2"
                        src={"/input.svg"}
                        alt={"input"}
                        width={40}
                        height={40}
                        priority
                    />
                    <p>TEXT ANSWER</p>
                </div>
                <div>
                    <button 
                        onClick={()=>{
                        onRemoveBlock(id)
                    }}>X</button>
                </div>
            </div>
            <div className="p-2">
                <input placeholder="Add question..."></input>
            </div>
        </div>
    )
}

export default InputControl;