'use client'
import InputBox from "@/components/InputBox";
import { useState } from "react";

interface ChatMessage {
    id: number;
    message: string;
    sender: "user" | "assistant";
}

export default function Page() {
    const [chat, setChat] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState<string>("");

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: ChatMessage = {
            id: Math.random(),
            message: input,
            sender: "user",
        };

        setInput("");
        setChat(prev => [...prev, userMessage]);

        try {
            const response = await fetch("/api/chat", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ userQuery: input }),
            });

            const data = await response.json();

            const assistantMessage: ChatMessage = {
                id: Math.random(),
                message: data.answer || "No response.",
                sender: "assistant",
            };

            setChat(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Chat error:", error);
        }
    };



    return (
        <div className="relative h-[calc(100vh-75px)] rounded-xl w-full ml-8 mr-3 py-2 px-3 bg-white dark:bg-[#22262B]">
            <div className="absolute top-0 p-3 left-0 right-0 border-b text-lg text-[#535353] dark:text-[#B9BABC] font-[500]">
                Chat
            </div>

            {/* Content */}
            <div className="mt-12 flex flex-col overflow-y-auto h-[calc(100vh-200px)] space-y-3 pb-8 pt-2">
                {
                    chat.map((item) => (
                        <div key={item.id} className={`${item.sender === "user" ? "justify-end" : "justify-start"} flex justify-end w-full`}>
                            <div className={`inline-block ${item.sender === "user" ? "max-w-3/5 mr-3" : "max-w-4/5"} px-4 py-2 rounded-lg font-[400] ${item.sender === "user" ? "bg-[#171717] dark:bg-[#E5E5E5] text-[#FAFAFA] dark:text-[#171717]" : " text-[#0A0A0A] dark:text-[#FAFAFA]"}`}>
                                {item.message}
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* Input Box */}
            <div className="absolute bottom-2 left-2 right-2">
                <InputBox input={input} setInput={setInput} handleSend={handleSend} />
            </div>
        </div >
    )
}
