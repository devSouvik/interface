// this file contains list of all the dragabble elements

import { TextFieldFormElement } from "../fields/TextField";

export type ElementsType = "TextField";
// | "CheckBox"
// | "RadioButton"
// | "NumberField";

export type FormElement = {
    type: ElementsType;

    construct: (id: string) => FormElementInstance;

    designerButtonElement: {
        icon: React.ElementType;
        label: string;
    };

    designerComponent: React.FC<{
        elementInstance: FormElementInstance;
    }>;
    formComponent: React.FC;
    propertiesComponent: React.FC;
};

export type FormElementInstance = {
    id: string;
    type: ElementsType;
    extraAttributes?: Record<string, any>;
};

type FormElementsType = {
    [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
    TextField: TextFieldFormElement,
};
