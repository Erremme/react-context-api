import { NavLink } from "react-router-dom"
export default function HeaderAdmin(){
    return(
        <header className="col-span-4 lg:col-span-2  bg-neutral-500 shadow-2xl p-4 space-y-4">
            <h1 className="text-white text-xl font-bold text-center">Dashboard</h1>
           <nav className="bg-neutral-700 h-64 p-2 shadow-2xl">
              <ul>
                <li >
                    <NavLink >
                        <div className="font-bold text-white">Ricette</div>
                    </NavLink>

                </li>

              </ul>
           </nav>
        </header>
    )
}