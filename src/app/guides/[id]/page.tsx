"use client"

import BlocksList from "@/components/BlocksList";
import EditionForm from "@/components/EditionForm";
import GuideStructure from "@/components/GuideStructure";
import InputControl from "@/components/InputControl";
import MultipleChoiceControl from "@/components/MultipleChoiceControl";
import TextControl from "@/components/TextControl";
import React, { ReactElement, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid'
import { useParams, redirect } from 'next/navigation'
import { FAKE_DATA } from "@/constants";

const Page = () => {

    const params = useParams<{ id: string }>()

    useEffect(() => {
        if (params.id) {
            const guideToSelect = FAKE_DATA.guides.find((guide) => guide.id == params.id)
            if (guideToSelect) {
                setGuideSelected(guideToSelect)
                setGuideBlocks(guideToSelect.sections[0].tasks[0].blocks)
            }else{
                redirect('/guides/1')
            }
        }else{
            redirect('/guides/1')
        }
    }, [params])


    const [guideSelected, setGuideSelected] = useState<any>(null)
    const [guideBlocks, setGuideBlocks] = useState<Array<{ id: string, element: ReactElement }>>([])

    const onControlSelected = (control: string) => {
        let selectedControl = null
        const newId = uuid()

        switch (control) {
            case "text":
                selectedControl = {
                    id: newId,
                    element: <TextControl key={newId} id={newId} onRemoveBlock={onRemoveBlock} />
                }
                break;
            case "input":
                selectedControl = {
                    id: newId,
                    element: <InputControl key={newId} id={newId} onRemoveBlock={onRemoveBlock} />
                }
                break;
            case "multichoice":
                selectedControl = {
                    id: newId,
                    element: <MultipleChoiceControl key={newId} id={newId} onRemoveBlock={onRemoveBlock} />
                }
                break;
        }

        if (selectedControl) {
            setGuideBlocks([...guideBlocks, selectedControl])
        }
    }

    const onRemoveBlock = (deletedId: string) => {
        setGuideBlocks(prevGuideBlocks => prevGuideBlocks.filter((block) => block.id !== deletedId))
    }

    if (guideSelected) {
        return (<div className="bg-white grid grid-cols-4 w-full h-full">
            <GuideStructure
                guideTitle={guideSelected.title}
                sectionSelected={0}
                taskSelected={0}
                sections={
                    guideSelected.sections.map((section: any)=> {
                        return {
                            id: section.id, 
                            title: section.title,
                            tasks: section.tasks.map((task: any)=>{
                                return {
                                    id: task.id,
                                    title: task.title,
                                }
                            })
                        }
                    })
                }
            ></GuideStructure>
            <div className="col-span-2 h-full overflow-auto">
                <EditionForm
                    taskTitle={guideSelected.sections[0].tasks[0].title}
                    blocksList={guideBlocks}
                ></EditionForm>
            </div>
            <BlocksList onControlSelected={onControlSelected}></BlocksList>
        </div>)
    } else {
        return <div className="m-4">Loading...</div>
    }
}

export default Page;