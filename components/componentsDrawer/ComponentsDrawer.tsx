"use client";

import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";

// interface componentType {
//     id: number | string;
//     type: "button";
//     buttonName: string;
// }

const ComponentsDrawer = ({
    components,
    setComponents,
}: {
    components: any[];
    setComponents: any;
}) => {
    let count = components.length;

    count = count + 1;

    function handleClick() {
        setComponents([
            ...components,
            {
                id: count,
                type: "button",
                buttonName: `component ${count}`,
            },
        ]);
    }

    return (
        <div className="h-[39rem] w-96 border-black border flex justify-top items-center flex-col overflow-auto">
            <span className="flex items-center justify-center m-4">
                Your components
            </span>
            <div className="flex flex-col">
                {components.map((comp: any) => (
                    <button
                        key={comp.id}
                        className="p-2 m-2 border border-black rounded-md w-72"
                    >
                        {comp.buttonName + "-" + comp.type}
                    </button>
                ))}
            </div>
            <button onClick={handleClick} className="m-4">
                <CgAdd className=" w-10 h-10" />
            </button>
        </div>
    );
};

export default ComponentsDrawer;
