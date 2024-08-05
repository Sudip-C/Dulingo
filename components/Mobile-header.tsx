import { Mobilesidebar } from "./Mobile-sidebar"

export const MobileHeader =()=>{
    return(
        <nav className="lg:hidden px-6 h-[50px] flex item-center bg-green-500 border-b fixed z-50 top-0 w-full">
           <Mobilesidebar/>
        </nav>
    )
}