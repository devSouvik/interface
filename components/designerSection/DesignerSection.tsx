import React from "react";
import {
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import NewComp from "../newComp/NewComp";
interface componentsInterface {
    id: string | number;
    type: string;
    buttonName: string;
}

const DesignerSection = ({
    components,
}: {
    components: componentsInterface[];
}) => {
    return (
        <>
            <div className="h-[39rem] w-2/3 border-black border flex justify-top items-center flex-col overflow-auto">
                This is the properties drawer
                <SortableContext
                    items={components}
                    strategy={verticalListSortingStrategy}
                >
                    {components.map((comp) => {
                        return (
                            <NewComp
                                id={comp.id}
                                type={comp.type}
                                buttonName={comp.buttonName}
                            />
                        );
                    })}
                </SortableContext>
            </div>
        </>
    );
};

export default DesignerSection;
