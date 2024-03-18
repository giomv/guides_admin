"use client"

import React, { useState } from "react";
import Image from "next/image";
import { v4 as uuid } from 'uuid'

interface Props {
    id: string, 
    onRemoveBlock: any
}

const MultipleChoiceControl:React.FC<Props> = ({id, onRemoveBlock}) => {
    const [choices, setChoices] = useState<Array<any>>([{
        id: uuid(),
        text:"", 
        selected: false
    }])

    const addNewChoice = () => {
        const new_choices = [...choices,{ 
            id: uuid(),
            text: "", 
            selected: false
        }]
        setChoices(new_choices)
    }

    const removeChoice = (id: string) => {
        setChoices((_choices) => _choices.filter((choice) => choice.id !== id));
    }

    return(
        <div className="rounded-sm border border-slate-200">
            <div className="border-b flex p-2 items-center cursor-pointer justify-between">
                <div className="flex items-center">
                    <Image
                        className="relative mr-2"
                        src={"/options.svg"}
                        alt={"options"}
                        width={40}
                        height={40}
                        priority
                    />
                    <p>MULTIPLE CHOICE</p>
                </div>
                <div>
                <button 
                    onClick={()=>{
                    onRemoveBlock(id)
                }}>X</button>
                </div>
            </div>
            <div className="p-2">
                <input className="mb-3" placeholder="Add question..."></input>
                {choices.map((choice)=>(
                    <div key={choice.id} className="flex gap-2 mb-3">
                        <button onClick={()=>{removeChoice(choice.id)}}>X</button>
                        <input type="checkbox" />
                        <input type="text" />
                    </div>
                ))}
                <button onClick={addNewChoice} className="blue-200">+ Add new choice</button>
            </div>
        </div>
    )
}

export default MultipleChoiceControl;