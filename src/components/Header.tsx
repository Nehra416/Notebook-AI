"use client"

import { CloudUpload, Info, LockKeyhole, MessageSquareText, MonitorCog, MoonStar, Settings, Sun, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize"
import { Checkbox } from "./ui/checkbox";

export default function Header() {
    const { setTheme } = useTheme();
    const [openSheet, setOpenSheet] = useState(false);
    const [input, setInput] = useState('');

    return (
        <div>
            <div className="fixed left-0 right-0 top-0 flex justify-between h-14 items-center px-5 py-2 z-10">
                {/* username */}
                <div className="text-xl font-medium">
                    Deepak Nehra
                </div>
                <div className="flex gap-3 items-center">
                    {/* Setting btn */}
                    <Button variant="outline" className="text-xs bg-transparent hover:bg-[#DBE1F3] hover:dark:bg-[#44464A] ">
                        <LockKeyhole className="w-4 h-4 mr-1" /> Share
                    </Button>

                    {/* Dropdown menu for setting btn */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="text-xs bg-transparent hover:bg-[#DBE1F3] hover:dark:bg-[#44464A] ">
                                <Settings className="w-4 h-4 mr-1" /> Settings
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={() => setOpenSheet(true)}>
                                    <MessageSquareText />
                                    Send Feedback
                                </DropdownMenuItem>

                                <DropdownMenuItem onClick={() => window.open('https://twitter.com/nehra416', '_blank')}>
                                    <Twitter />
                                    Contact US
                                </DropdownMenuItem>

                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Select Theme</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem onClick={() => setTheme('dark')}>
                                                <MoonStar />
                                                Dark mode
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setTheme('light')}>
                                                <Sun />
                                                Light mode
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => setTheme('system')}>
                                                <MonitorCog />
                                                Device
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>

                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    Upgrade to Pro
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* User avatar */}
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    {/* Sheet for feedback */}
                    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="text-lg font-semibold">Send Feedback</SheetTitle>
                                <SheetDescription className="text-sm">
                                    Help us to improve by sharing your thoughts.
                                </SheetDescription>
                            </SheetHeader>


                            <div className="p-4 flex flex-col gap-5 overflow-y-auto mb-[60px] h-full]">
                                {/* Feedback textarea */}
                                <div>
                                    <p className="font-medium text-sm">Describe your feedback <span className="text-red-500">*</span></p>
                                    <TextareaAutosize
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        minRows={6}
                                        maxRows={8}
                                        placeholder="Start typing..."
                                        className="resize-none w-full mt-3 p-2 bg-transparent rounded-md text-sm border-2 font-[500]"
                                    />
                                    <p className="text-xs text-muted-foreground ml-1 flex items-center gap-1.5 mt-1">
                                        Please don’t include any sensitive information
                                        <Info className="w-3 h-3" />
                                    </p>
                                </div>

                                {/* Upload Scrennshot*/}
                                <div>
                                    <p className="text-sm font-medium">Attach a screenshot (optional)</p>
                                    <Button variant="outline" className="w-full mt-2 flex items-center gap-2 border-dashed hover:border-primary">
                                        <CloudUpload className="w-4 h-4" />
                                        Upload Screenshot
                                    </Button>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-start gap-2 text-sm">
                                    <Checkbox id="email-updates" />
                                    <label htmlFor="email-updates" className="text-muted-foreground">
                                        We may email you for more info or updates
                                    </label>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                                <div className="flex justify-end">
                                    <Button
                                        onClick={() => setOpenSheet(false)}
                                        disabled={input.trim() === ""}
                                        className="px-6"
                                    >
                                        Send Feedback
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </div >
    )
}
