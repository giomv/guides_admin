"use client"

import React from "react";
import BlockButton from "./BlockButton";

interface Props {
    onControlSelected: any;
}

const BlocksList: React.FC<Props> = ({onControlSelected}) => {
    return(
        <div className="bg-slate-300 px-3 py-4 gap-4 flex flex-col">
           <p className="text-lg">Add Content</p>
           <BlockButton 
            iconName={"text"} 
            buttonText={"Text"} 
            action={()=>{
                onControlSelected("text")
            }}
           />
           <BlockButton 
            iconName={"input"} 
            buttonText={"Text Answer"} 
            action={()=>{
                onControlSelected("input")
            }}
           />
           <BlockButton 
            iconName={"options"} 
            buttonText={"Multiple Choice"} 
            action={()=>{
                onControlSelected("multichoice")
            }}
           />
        </div>
    )
}

export default BlocksList;