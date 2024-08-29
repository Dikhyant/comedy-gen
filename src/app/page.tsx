"use client"
import { PrimaryTextInput } from "@/_components/PrimaryTextInput/PrimaryTextInput";
import { openai } from "@/openai";
import { useThemeContext } from "@/state/theme";
import { cn } from "@/utils/misc";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const {
    isDark,
  } = useThemeContext();
  return (
    <main className={cn(isDark ? "bg-mine-shaft" : "bg-white" , "w-full h-screen")} >
      <div className="w-full h-full flex flex-col items-center" >
        <PrimaryTextInput className="w-11/12 md:w-[768px]" />
      </div>
    </main>
  );
}
