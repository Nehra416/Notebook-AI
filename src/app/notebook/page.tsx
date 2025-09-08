'use client'
import InputBox from "@/components/InputBox";

export default function page() {
    return (
        <div className="relative h-[calc(100vh-75px)] rounded-xl w-full ml-8 mr-3 py-2 px-3 bg-white dark:bg-[#22262B]">
            <div className="absolute top-0 p-3 left-0 right-0 border-b text-lg">
                Chat
            </div>
            {/* Content */}
            <div className="absolute bottom-2 left-2 right-2">
                <InputBox />
            </div>
        </div >
    )
}
