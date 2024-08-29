"use client"
import { AIChat } from "@/_components/Chat/AIChat/AIChat";
import { UserChat } from "@/_components/Chat/UserChat/UserChat";
import { PrimaryTextInput } from "@/_components/PrimaryTextInput/PrimaryTextInput";
import { useThemeContext } from "@/state/theme";
import { IJokeResponse } from "@/types/data-types";
import { cn } from "@/utils/misc";
import { useEffect, useState } from "react";

interface IChat {
  id: string;
  senderType: TSender;
  message: string;
  createdAt: string;
}

type TSender = "ai" | "user"

export default function Home() {
  const {
    isDark,
  } = useThemeContext();
  const [messages, setMessages] = useState<IChat[]>([]);

  useEffect(() => {

  }, []);

  async function onSubmitText(text: string) {
    try {
      const res = await fetch(`${process.env.BASE_URL}/Any`);
      const data = await res.json() as IJokeResponse;
      console.log("Joke data", data);
      setMessages(prev => {
        const newState = [...prev];  
        newState.push({
          id: `${data.id}`,
          senderType: "ai",
          message: data.joke ? data.joke : data.setup && data.delivery ? `${data.setup}\n${data.delivery}` : "",
          createdAt: (new Date()).toString(),
        });
        return newState;
      })
    } catch (error) {
      console.error("Error in joke api call");
      console.error(error);
    }
    
    
    /* setMessages(prev => {
      const newState = [...prev];
      newState.push({
        senderType: "user",
        message: text,
        createdAt: (new Date()).toString(),
      });

      newState.push({
        senderType: "ai",
        message: "I would be flattered to assist you sir",
        createdAt: (new Date()).toString(),
      });
      return newState;
    }) */
  }
  return (
    <main className={cn(isDark ? "bg-mine-shaft" : "bg-white" , "w-full h-screen")} >
      <div className="w-full h-full flex flex-col items-center justify-end" >
        <div className="flex flex-col items-center overflow-y-scroll flex-1 w-full" >
          <div className="flex flex-col w-11/12 md:w-[768px] items-stretch" >
            {
              messages.map(item => {
                if(item.senderType === "user") {
                  return (
                    <UserChat
                      key={item.id}
                      className="self-end"
                      text={item.message}
                    />
                  )
                }

                return (
                  <AIChat
                    key={item.id}
                    text={item.message}
                  />
                )
              })
            }
           {/*  <UserChat
              className=" self-end" 
              text={"there is a .env file we use in node js projects\ninside this .env file we often store api keys , tokens, \nserver urls Is there a similar feature in unity ?"}
            />
            <AIChat 
              className="" 
              text="Yes, Unity has a similar conces, tokecific variables in Unity:" 
            /> */}
          </div>
        </div>
        <PrimaryTextInput 
          className="w-11/12 md:w-[768px]"
          onSubmitText={onSubmitText}
        />
      </div>
    </main>
  );
}
