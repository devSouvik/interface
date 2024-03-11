import Logo from "@/components/Logos/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
            <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
                <Logo />
                <div className="flex items-center gap-3">
                    <ThemeSwitcher />
                    <UserButton />
                </div>
            </nav>
            <main className="flex w-full flex-grow">{children}</main>
        </div>
    );
}

export default Layout;
