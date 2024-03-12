"use client";

import ComponentsDrawer from "@/components/componentsDrawer/ComponentsDrawer";
import DesignerSection from "@/components/designerSection/DesignerSection";
import Navbar from "@/components/navbar/Navbar";
import PropertiesDrawer from "@/components/propertiesDrawer/PropertiesDrawer";
import { DndContext, closestCenter, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";

export default function Home() {
    const [components, setComponents] = useState([
        {
            id: "1",
            type: "button",
            buttonName: "component 1",
        },
        {
            id: 2,
            type: "button",
            buttonName: "component 2",
        },
        {
            id: 3,
            type: "button",
            buttonName: "component 3",
        },
    ]);

    function getComponentsPos(id: any) {
        return components.findIndex((component) => component.id === id);
    }

    function handleDragEnd(event: { active: any; over: any }) {
        const { active, over } = event;
        if (active.id === over.id) return; // checks if the original position is same as new position

        setComponents((compos): any => {
            const originalPos = getComponentsPos(active.id);
            const newPos = getComponentsPos(over.id);

            return arrayMove(compos, originalPos, newPos);
        });
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-row items-center justify-between m-5">
                <ComponentsDrawer
                    components={components}
                    setComponents={setComponents}
                />
                <DndContext
                    onDragEnd={handleDragEnd}
                    collisionDetection={closestCorners}
                >
                    <DesignerSection components={components} />
                </DndContext>
                <PropertiesDrawer />
            </div>
        </>
    );
}
