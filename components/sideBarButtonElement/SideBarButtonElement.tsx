import React from "react";
import { FormElement } from "../FormElements/FormElements";
import { Button } from "../ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const SideBarButtonElement = ({
    formElement,
}: {
    formElement: FormElement;
}) => {
    const draggable = useDraggable({
        id: `designer-btn-${formElement.type}`,
        data: { type: formElement.type, isDesignerButtonElement: true },
    });
    const { label, icon: Icon } = formElement.designerButtonElement;

    return (
        <Button
            ref={draggable.setNodeRef}
            variant={"outline"}
            className={cn(
                "flex flex-col gap-2 h-[120px] w-[120px] cursor-grab",
                draggable.isDragging && "ring-2 ring-primary"
            )}
            {...draggable.listeners}
            {...draggable.attributes}
        >
            <Icon className="h-8 w-8 text-primary cursor-grab" />
            <p className="text-xs ">{label}</p>
        </Button>
    );
};

export const SideBarButtonElementDragOverlay = ({
    formElement,
}: {
    formElement: FormElement;
}) => {
    const draggable = useDraggable({
        id: `designer-btn-${formElement.type}`,
        data: { type: formElement.type, isDesignerButtonElement: true },
    });
    const { label, icon: Icon } = formElement.designerButtonElement;

    return (
        <Button
            variant={"outline"}
            className={"flex flex-col gap-2 h-[120px] w-[120px] cursor-grab"}
        >
            <Icon className="h-8 w-8 text-primary cursor-grab" />
            <p className="text-xs ">{label}</p>
        </Button>
    );
};
export default SideBarButtonElement;
