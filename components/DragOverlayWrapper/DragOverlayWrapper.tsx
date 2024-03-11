"use client";

import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { SideBarButtonElementDragOverlay } from "../sideBarButtonElement/SideBarButtonElement";
import { ElementsType, FormElements } from "../FormElements/FormElements";

const DragOverlayWrapper = () => {
    const [draggedItem, setDraggedItem] = useState<Active | null>(null);

    useDndMonitor({
        onDragStart(event) {
            // console.log("DRAG ITEM", event);
            setDraggedItem(event.active);
        },
        onDragCancel(event) {
            setDraggedItem(null);
        },
        onDragEnd(event) {
            setDraggedItem(null);
        },
    });

    if (!draggedItem) return null;

    let node = <div>No Drag overlay</div>;

    const isSideBarButtonElement =
        draggedItem?.data?.current?.isDesignerButtonElement;

    const type = draggedItem.data?.current?.type as ElementsType;

    if (isSideBarButtonElement) {
        node = (
            <SideBarButtonElementDragOverlay formElement={FormElements[type]} />
        );
    }

    return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
