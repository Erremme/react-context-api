import { useAlertContext } from "../context/AlertContext";

export default function Alert(){
     const {alertData} = useAlertContext();
     const {setAlertData} = useAlertContext();
     const {type, message} = alertData

    const classes ={
        info :"bg-amber-300 py-4  font-semibold",
        success: "bg-green",
        danger : "bg-red-300 text-red-800  py-4  font-semibold"
    }
    
    const handleRemoveAlert = () =>{
            setAlertData({
                type: "",
                message: ""
            })
    }


    if(!message) return null;
    return(
        <div className= {` flex justify-between px-4 ${classes[type]}`} >
            <span>{message}</span> 
            <span className="cursor-pointer hover:text-xl " onClick={handleRemoveAlert}>X</span>
         </div>
    )
}