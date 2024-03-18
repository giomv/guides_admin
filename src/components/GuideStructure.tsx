import React from "react";

type Props = {
    taskSelected: number,
    sectionSelected: number,
    guideTitle: String,
    sections:{
        id: String,
        title: String,
        tasks:{
            id: String,
            title: String,
        }[]
    }[]
}

const GuideStructure: React.FC <Props> = ({
    taskSelected,
    sectionSelected,
    guideTitle,
    sections
}) => {
    return(
        <div className="bg-slate-300 pt-3">
           <div className="px-3 py-4 text-xlg">
                {guideTitle}
           </div>
           {sections.map((section, index)=>(
                <div key={`section-${section.id}`} className="px-4 py-2">
                    <h2 className={`${sectionSelected==index ? 'underline' : ''}`}>{section.title}</h2>
                    <ul>
                        {section.tasks.map((task, tIndex)=>(
                            <li className={`${taskSelected==index &&tIndex==index ?'bg-sky-600' : ''}`} key={`task-${task.id}`}>{task.title}</li>
                        ))}
                    </ul>
                </div>
           ))}
           <button>Add</button>
        </div>
    )
}

export default GuideStructure;