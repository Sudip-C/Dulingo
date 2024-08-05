import { MobileHeader } from "@/components/Mobile-header";
import { Sidebar } from "@/components/Sidebar";

type Props ={
    children:React.ReactNode
};

const MainLayout=({children}:Props)=>{
    return(
        <>
        <MobileHeader/>
        <Sidebar className="hidden lg:flex"/>
        <main className="lg:pl-[256px] h-full">
        <div className="max-w-[1056px] mx-auto pt-6 h-full">
            {children}
        </div>
        </main>
        </>
    )
}

 export default MainLayout
