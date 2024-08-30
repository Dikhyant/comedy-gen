"use client"
import { AIChat } from "@/_components/Chat/AIChat/AIChat";
import { UserChat } from "@/_components/Chat/UserChat/UserChat";
import { Header } from "@/_components/Header/Header";
import { PrimaryTextInput } from "@/_components/PrimaryTextInput/PrimaryTextInput";
import { useThemeContext } from "@/state/theme";
import { IJokeResponse } from "@/types/data-types";
import { capitalizeFirstLetter, cn } from "@/utils/misc";
import nlp from "compromise";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from "react";
import { v4 as uuid4 } from "uuid";

interface IChat {
  id: string;
  senderType: TSender;
  message: string;
  createdAt: string;
}

type TSender = "ai" | "user"
const ApiSearchQueryOptions = ["Programming" , "Miscellaneous" , "Dark" , "Pun" , "Spooky" , "Christmas" , "Any"];

export default function Home() {
  const {
    isDark,
  } = useThemeContext();
  const [messages, setMessages] = useState<IChat[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({top: chatContainerRef.current.scrollHeight, behavior: "smooth"});
  }, [messages]);

  async function onSubmitText(text: string) {
    /* setMessages(prev => {
      const newState = [...prev];  
      newState.push({
        id: uuid4(),
        senderType: "user",
        message: text,
        createdAt: (new Date()).toString(),
      })

      newState.push({
        id: uuid4(),
        senderType: "ai",
        message: text,
        createdAt: (new Date()).toString(),
      })
      return newState;
    })
    return; */
    let topic = text ? capitalizeFirstLetter(text) : "Any"
    if(ApiSearchQueryOptions.findIndex(item => item === topic) === -1) {
      topic = "Any"
    }
    try {
      // throw new Error("Sorry I am out");
      // https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas
      const res = await fetch(`${process.env.BASE_URL}/${topic}`);
      const data = await res.json() as IJokeResponse;
      console.log("Joke data", data);
      setMessages(prev => {
        const newState = [...prev];  
        if(text) {
          newState.push({
            id: uuid4(),
            senderType: "user",
            message: text,
            createdAt: (new Date()).toString(),
          })
        }
        newState.push({
          id: `${data.id}`,
          senderType: "ai",
          message: data.type === "single" ? data.joke ?? data.joke : data.type === "twopart" && data.setup && data.delivery ? `${data.setup}\n${data.delivery}` : "",
          createdAt: (new Date()).toString(),
        });
        return newState;
      })
    } catch (error) {
      console.error("Error in joke api call");
      console.error(error);
      alert("Oops Sorry something went wrong with our AI buddy.\nPlease try again after a few minutes")
    }
    
  }
  return (
    <main className={cn(isDark ? "bg-mine-shaft" : "bg-white" , "w-full h-screen")} >
      <div className="w-full h-full flex flex-col items-center justify-end pb-8" >
        <Header />
        <div 
          className="flex flex-col items-center overflow-y-scroll flex-1 w-full pb-[54px]" 
          ref={chatContainerRef}
        >
          <div className="flex flex-col gap-y-[18px] w-11/12 md:w-[768px] items-stretch" >
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
