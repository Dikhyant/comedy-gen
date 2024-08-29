"use client"
import { AIChat } from "@/_components/Chat/AIChat/AIChat";
import { UserChat } from "@/_components/Chat/UserChat/UserChat";
import { PrimaryTextInput } from "@/_components/PrimaryTextInput/PrimaryTextInput";
import { useThemeContext } from "@/state/theme";
import { cn } from "@/utils/misc";

export default function Home() {
  const {
    isDark,
  } = useThemeContext();
  return (
    <main className={cn(isDark ? "bg-mine-shaft" : "bg-white" , "w-full h-screen")} >
      <div className="w-full h-full flex flex-col items-center justify-end" >
        <div className="flex flex-col items-center overflow-y-scroll flex-1 w-full" >
          <div className="flex flex-col w-11/12 md:w-[768px] items-stretch" >
            <UserChat
              className=" self-end" 
              text={"there is a .env file we use in node js projects\ninside this .env file we often store api keys , tokens, \nserver urls Is there a similar feature in unity ?"}
            />
            <AIChat 
              className="" 
              text="Yes, Unity has a similar conces, tokecific variables in Unity:" 
            />
          </div>
        </div>
        <PrimaryTextInput className="w-11/12 md:w-[768px]" />
      </div>
    </main>
  );
}
