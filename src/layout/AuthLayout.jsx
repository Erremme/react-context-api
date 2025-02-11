import { Outlet } from "react-router-dom";

export default function AuthLayout(){
    return(
        <div className=" bg-neutral-800 h-screen flex justify-center items-center">
          <div className=" bg-white w-full max-w-xl p-4 rounded-2xl shadow-lg">  
        <Outlet />
        </div>
        </div>
    )
}