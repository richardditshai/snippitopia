import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
   
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Button } from "../ui/button"

export default function UserLink() {

    const links = [
        { name: "Profile", path: "/profile", shortcut: "⇧⌘P"},
        { name: "Billing", path: "/billing", shortcut: "⌘B"},
    ]
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="font-medium leading-none">facade.bw</p>
                        <p className="text-xs leading-none text-gray-500">facadebw@gmail.com</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {
                        links.map((menuItem) => (
                            <DropdownMenuItem>
                                <Link href={menuItem.path}>{menuItem.name}</Link>
                                <DropdownMenuShortcut>{menuItem.shortcut}</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button className="p-0" variant="ghost">Log out</Button>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}