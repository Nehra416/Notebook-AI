import { LockKeyhole, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
    return (
        <div>
            <div className="fixed left-0 right-0 top-0 flex justify-between h-14 items-center px-5 py-2 z-10">
                <div className="text-xl font-medium">
                    Deepak Nehra
                </div>
                <div className="flex gap-3 items-center">
                    <Button variant="outline" className="text-xs bg-transparent hover:bg-[#DBE1F3] hover:dark:bg-[#44464A] ">
                        <LockKeyhole className="w-4 h-4 mr-1" /> Share
                    </Button>
                    <Button variant="outline" className="text-xs bg-transparent hover:bg-[#DBE1F3] hover:dark:bg-[#44464A] ">
                        <Settings className="w-4 h-4 mr-1" /> Settings
                    </Button>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div >
    )
}
