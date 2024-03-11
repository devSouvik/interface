"use client";

import { MdTextFields } from "react-icons/md";
import {
    ElementsType,
    FormElement,
    FormElementInstance,
} from "../FormElements/FormElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElementsType = "TextField";

const extraAttributes = {
    label: "text field",
    helperText: "helper text",
    required: false,
    placeholder: "value here",
};

export const TextFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
        extraAttributes,
    }),
    designerComponent: DesignerComponent,
    formComponent: () => <>Form component</>,
    propertiesComponent: () => <>properties component</>,

    designerButtonElement: {
        icon: MdTextFields,
        label: "text field",
    },
};

type customInstance = FormElementInstance & {
    extraAttributes: typeof extraAttributes;
};

function DesignerComponent({
    elementInstance,
}: {
    elementInstance: FormElementInstance;
}) {
    const element = elementInstance as customInstance;

    const { label, helperText, required, placeholder } =
        element.extraAttributes;

    return (
        <div className="flex flex-col w-full gap-2">
            <Label>
                {label}
                {required && "*"}
            </Label>
            <Input readOnly disabled placeholder={placeholder} />
            {helperText && (
                <p className="text-muted-foreground text-[0.8rem]">
                    {helperText}
                </p>
            )}
        </div>
    );
}
