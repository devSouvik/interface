"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

function ErrorPage({ error }: { error: Error }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            SOmething went wrong...
            <Button asChild>
                <Link href="/">Go back to home page</Link>
            </Button>
        </div>
    );
}

export default ErrorPage;
