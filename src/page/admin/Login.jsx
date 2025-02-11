import { useAlertContext } from "../../context/AlertContext";
import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";


const initialFormdata ={
    email:"",
    password: ""
}

export default function Login(){
    const [formData , setFormData] = useState(initialFormdata);
    const {setAlertData} = useAlertContext();
    const navigate = useNavigate()
    

 const handleFormField = ( fieldName, value) =>{
    setFormData((currentFormData) => ({
        ...currentFormData,
        [fieldName] : value
 }))
 }

     const handleSubmit = (e)=>{
        e.preventDefault();

        if(formData.email === "raffaele.0@gmail.com" && formData.password === "password"){
            navigate("/admin")
            setFormData(initialFormdata)

        }else{
            
            setAlertData({
                type : "danger",
                message:"Email o Password non corrette, riprova!"
                })
                setFormData(initialFormdata)
            
        }
     }


    return (
        <div className="py-6">
            <h1 className="text-center text-lg font-bold">Effettua l'accesso</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label  className ="text-sm font-medium" htmlFor="email">Email*</label>
                    <input className=" shadow appearance-none border-neutral-200 rouded w-full py-2 px-3 leading-tight focus:shadow-none  focus:shadow-outline" 
                    id="email" 
                    type="email" 
                    placeholder="Inserisci l'email"
                    required
                    value={formData.email}
                    onChange={(e) =>handleFormField("email" , e.target.value)}
                     />
                </div>
                <div>
                    <label className ="text-sm font-medium" htmlFor="password">Password*</label>
                    <input  className=" shadow appearance-none border-neutral-300 rouded w-full py-2 px-3 leading-tight focus:shadow-none  focus:shadow-outline"
                     id="password"
                      type="password" 
                      placeholder="imnserici la password"
                      required
                    value={formData.password}
                    onChange={(e) =>handleFormField("password" , e.target.value)}

                       />
                </div>
                <div className="text-center">
                    <button className="font-bold rounded-md py-2 px-6 bg-amber-400 text-neutral-800 cursor-pointer" type="submit">Accedi</button>
                </div>
                
            </form>
        </div>
    )
}
