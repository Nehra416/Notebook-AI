"use client"

import TextareaAutosize from "react-textarea-autosize"
import { Button } from "@/components/ui/button"
import { SendHorizontal } from "lucide-react"

export default function InputBox() {
    return (
        <div className="flex items-end gap-2 rounded-xl border-dashed border-2 bg-background w-full px-3 py-2 shadow-sm">
            {/* Textarea */}
            <TextareaAutosize
                minRows={2}
                maxRows={10}
                placeholder="Start typing..."
                className="flex-1 resize-none bg-transparent px-2 text-sm outline-none"
            />

            {/* Right Side */}
            <div className="flex items-center gap-4">
                <span className="text-xs">2 sources</span>
                <Button size="icon" className="rounded-full bg-indigo-600 hover:bg-indigo-700">
                    <SendHorizontal className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
