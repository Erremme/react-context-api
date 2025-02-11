import { createContext , useState, useContext } from "react";
//Components
import Alert from "../component/Alert";

const AlertContext = createContext()

function AlertProvider({children}){
    const [alertData, setAlertData]= useState({
        type:"",
        message:""
    })
    return(
        <AlertContext.Provider value={{alertData , setAlertData}}>
            <Alert />
            {children}
        </AlertContext.Provider>
    )
}

function useAlertContext(){
    const context = useContext(AlertContext)
    return context
}

export {AlertProvider , useAlertContext}