import React from "react";
import { FormElements } from "../FormElements/FormElements";
import SideBarButtonElement from "../sideBarButtonElement/SideBarButtonElement";

function DesignerSideBar() {
    return (
        <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y overflow-y-auto h-full">
            Elements
            <SideBarButtonElement formElement={FormElements.TextField} />
        </aside>
    );
}

export default DesignerSideBar;
