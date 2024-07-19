"use client";
import React from "react";

type ButtonProps = {
    content: string;
    icon?: React.ReactNode;
    position?: "left" | "right";
    handleClick?: () => string;
    otherClasses?: string;
};


const MagicButton = ({
    content, icon, position, handleClick, otherClasses
}: ButtonProps) => {
    return (
        <button 
            onClick={handleClick}
            className="relative inline-flex h-12 overflow-hidden rounded-lg p-[2px]  transform duration-200 ease-in">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#01629c_0%,#00a2c5_50%,#00fff9_100%)]" />
            <span className={`inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl hover:text-clr_1 transform duration-200 ease-in ${otherClasses}`}>
                {position === "left" && icon}
                {content}
                {position === "right" && icon}
            </span>
        </button>
    )
}

export default MagicButton