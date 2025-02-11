import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <footer className="bg-neutral-800 text-white px-8">
           <div className="bg-neutral-800 text-white py-8 flex justify-between items-end"> 
                <div>
                    <h2 className="text-xl font-bold mb-4">Contatti</h2>
                    <p>Email: info@blogdicucina.com</p>
                    <p>Telefono: +39 0123 456789</p>
                    <p>Indirizzo: Via delle Ricette 123, 00100 Roma, Italia</p>
                </div>
                <div>
                 <Link to="/Login">
                   <button className="font-bold rounded-md  px-6 bg-amber-400 text-neutral-800 cursor-pointer">Login</button>
                 </Link>
                </div>
           </div>
        </footer>
    )
}