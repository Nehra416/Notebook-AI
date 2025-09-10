"use client"

import TextareaAutosize from "react-textarea-autosize"
import { Button } from "@/components/ui/button"
import { SendHorizontal } from "lucide-react"

export default function InputBox({ input, setInput, handleSend }: { input: string, setInput: (input: string) => void, handleSend: () => void }) {

    const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && input.trim() !== "") {
            e.preventDefault();
            handleSend();
        }
    }
    
    return (
        <div className="flex items-end gap-2 rounded-xl border-dashed border-2 w-full px-3 py-2 shadow-sm bg-white dark:bg-[#22262B] ">
            {/* Textarea */}
            <TextareaAutosize
                value={input}
                onChange={(e) => setInput(e.target.value)}
                minRows={1}
                maxRows={10}
                placeholder="Start typing..."
                className="flex-1 resize-none px-2 bg-transparent outline-none font-[500] mb-1.5"
                onKeyDown={handleEnter}
            />

            {/* Right Side */}
            <div className="flex items-center gap-4">
                <span className="text-xs font-[500]">2 sources</span>
                <Button onClick={handleSend} disabled={input.trim() === ""} size="icon" className="rounded-full bg-[#171717] hover:bg-[#2f2f2f] dark:bg-[#E5E5E5] dark:hover:bg-[#cfcfcf] text-[#FAFAFA] dark:text-[#171717] cursor-pointer">
                    <SendHorizontal className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
