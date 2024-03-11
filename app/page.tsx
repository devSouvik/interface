"use client";

import ComponentsDrawer from "@/components/componentsDrawer/ComponentsDrawer";
import DesignerSection from "@/components/designerSection/DesignerSection";
import Navbar from "@/components/navbar/Navbar";
import PropertiesDrawer from "@/components/propertiesDrawer/PropertiesDrawer";
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

    return (
        <>
            <Navbar />
            <div className="flex flex-row items-center justify-between m-5">
                <ComponentsDrawer
                    components={components}
                    setComponents={setComponents}
                />
                <DesignerSection components={components} />
                <PropertiesDrawer />
            </div>
        </>
    );
}
