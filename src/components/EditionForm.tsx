import React, { ReactElement } from "react";

interface Props {
    taskTitle: string,
    blocksList: {id:string, element: ReactElement}[],
}

const EditionForm:React.FC<Props> = ({taskTitle, blocksList}) => {
    return(
        <div className="bg-white px-3 py-2">
           <div>{taskTitle}</div>
           <div className="mx-5 flex flex-col gap-4">
                {blocksList.map((block)=>(
                    block.element
                ))}
           </div>
        </div>
    )
}

export default EditionForm;