
import { Outlet } from "react-router-dom"
import HeaderAdmin from "../component/HeaderAdmin"
export default function Dashboard(){
    return (
        <div className="h-screen grid grid-cols-12 gap-3 bg-neutral-100 ">
         <HeaderAdmin />
         <main className ="col-span-8 lg:col-span-10 bg-white shadow-2xl p-4">
        <Outlet />
        </main>
        </div>
        
    )
}