import React from "react";
import { Button } from "../ui/button";
import { MdOutlinePublish } from "react-icons/md";

function PublishFormButton() {
    return (
        <Button className="gap-2 ">
            <MdOutlinePublish className="h-4 w-4" />
            PublishFormButton
        </Button>
    );
}

export default PublishFormButton;
