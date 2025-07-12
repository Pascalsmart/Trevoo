import {createContext, useState} from "react";

export let safetyContext = createContext({

    safety:0,
    setSafety:()=>{

        

    }
})


export let SafetyProvider = ({children})=>{

    let [safety, setSafety]= useState(0);
    let value= {safety, setSafety};

    return <safetyContext.Provider value={value}>{children}</safetyContext.Provider>
}
