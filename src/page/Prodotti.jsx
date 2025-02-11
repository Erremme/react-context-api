import MainNav from "../component/MainNav"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { useAlertContext } from "../context/AlertContext"



export default function Prodotti(){

    const {setAlertData} = useAlertContext();
    
    useEffect(()=> {
        setAlertData({
            type : "info",
            message:"Iscriviti alla nostra NewsLetter per restare aggiornato sulle ricette"
        })
    }, [])

// stato del blog list che mi arriva dal BE
   const [blogList , setBlogList ] = useState([])
   

//funzione che fa la richiesta get al BE
    const fetchProducts = () =>{
        axios.get("http://localhost:3000/prodotti").then(function (res){
        setBlogList(res.data)
      
        })
   }

 
// mi constente di fare una sola richiesta al BE appena si carica la pagina
    useEffect( fetchProducts , []);

    
    return (
        <main className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-8">Food Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogList.map((item) => {
            return (
                <div className="card bg-white shadow-md rounded-lg overflow-hidden"
                    key={item.id}
                     >
                   
                    <img src={item.immagine} alt={item.titolo} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                          <Link to={`/Prodotti/${item.id}`} >
                        <div className="card-title text-2xl font-semibold mb-2">{item.titolo}</div>
                        </Link>
                        <div className="card-text text-gray-700">{item.descrizione}.</div>
                    </div>
                </div>
            );
        })}
    </div>
    
</main>

    )
}