'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Button } from "../ui/button"
import useUser from "@/hooks/useUser"
import { Skeleton } from "../ui/skeleton"
import { createBClient } from "@/utils/supabase/client"
import { useQueryClient } from "@tanstack/react-query"
import { usePathname, useRouter } from "next/navigation"
import { protectedRoutes } from "@/utils/constants"

export default function UserLink() {

    const qClient = useQueryClient();
    const router = useRouter()
    const pathname = usePathname();

    const links = [
        { name: "Profile", path: "/profile"},
        { name: "Billing", path: "/billing"},
    ]

    const logout = async () => {
        const supabase = createBClient();
        await supabase.auth.signOut()
        qClient.clear();
        router.refresh();

        if(protectedRoutes.includes(pathname)) {
            router.replace("/auth?next=" + pathname);
        }

    }

    const { data, isFetching  } = useUser();

    if (isFetching) {
        return  <Skeleton className="h-12 w-12 rounded-full" />
    }
    
    if (!data?.user) {
        return  <Button asChild variant={'default'}><Link href={'/auth'}>Sign In</Link></Button>
    }
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src={data.user.user_metadata?.avatar_url} />
                    <AvatarFallback>SN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="font-medium leading-none">{data.user.user_metadata?.full_name}</p>
                        <p className="text-xs leading-none text-gray-500">{data.user.user_metadata?.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {
                        links.map((menuItem) => (
                            <DropdownMenuItem key={menuItem.name}>
                                <Link href={menuItem.path}>{menuItem.name}</Link>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button onClick={() => logout()} className="p-0" variant="ghost">Log out</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}