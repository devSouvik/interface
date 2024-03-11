"use client";

import { Form } from "@prisma/client";
import React from "react";
import PreviewDialogueButton from "../PreviewDialogueButton/PreviewDialogueButton";
import SaveFormButton from "../SaveFormButton/SaveFormButton";
import PublishFormButton from "../PublishFormButton/PublishFormButton";
import Designer from "../designer/Designer";
import { DndContext } from "@dnd-kit/core";
import DragOverlayWrapper from "../DragOverlayWrapper/DragOverlayWrapper";

const FormBuilder = ({ form }: { form: Form }) => {
    return (
        <DndContext>
            <main className="flex flex-col w-full">
                <nav className="flex justify-between items-center border-b-2 p-4 gap-3">
                    <h2 className="truncate font-medium">
                        <span className="text-muted-forground mr-2">
                            Form :
                        </span>
                        {form.name}
                    </h2>
                    <div className="flex items-center gap-2">
                        <PreviewDialogueButton />
                        {!form.published && (
                            <>
                                <SaveFormButton />
                                <PublishFormButton />
                            </>
                        )}
                    </div>
                </nav>
                <div className="flex flex-grow items-center justify-center w-full relative overflow-y-auto h-[200px] bg-accent">
                    <Designer />
                </div>
            </main>
            <DragOverlayWrapper />
        </DndContext>
    );
};

// dark:bg-[url(/paper-dark.svg)] bg-[url(/paper.svg)]

export default FormBuilder;
