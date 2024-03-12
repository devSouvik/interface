import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const NewComp = ({
    id,
    type,
    buttonName,
}: {
    id: number | string;
    type: string;
    buttonName: string;
}) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = { transform: CSS.Transform.toString(transform), transition };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="w-[52rem] flex flex-col items-center justify-center border border-black m-2 rounded-lg p-3"
            key={id}
        >
            <p>{type}</p>
            <p>{buttonName}</p>
        </div>
    );
};

export default NewComp;
