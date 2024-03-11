import React from "react";

const DesignerSection = ({ components }: { components: any[] }) => {
    return (
        <>
            <div className="h-[39rem] w-2/3 border-black border flex justify-top items-center flex-col overflow-auto">
                This is the properties drawer
                {components.map((comp) => {
                    return (
                        <div
                            className="w-[52rem] flex flex-col items-center justify-center border border-black m-2 rounded-lg p-3"
                            key={comp.id}
                        >
                            <p>{comp.type}</p>
                            <p>{comp.buttonName}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default DesignerSection;
