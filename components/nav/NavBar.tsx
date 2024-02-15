'use client'
import Logo from "./Logo";
import UserLink from "./UserLink";

export default function Navbar() {
    
    return(
        <div className="border-b border-b-white">
            <div className="container flex justify-between items-center h-[74px]">
                <Logo />
                <UserLink />
            </div>
        </div>
    )
}