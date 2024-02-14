import { Button } from "../ui/button";
import Logo from "./Logo";
import UserLink from "./UserLink";

export default function Navbar() {
    let session = { user: false};
    return(
        <div className="border-b border-b-white">
            <div className="container flex justify-between items-center h-[74px]">
                <Logo />
                {
                    session.user ? <UserLink />: <Button variant={'default'}>Sign In</Button>

                }
                
            </div>
        </div>
    )
}