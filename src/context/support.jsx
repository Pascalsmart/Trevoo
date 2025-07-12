import { useState , createContext } from "react";

export let supportContext = createContext({

    support:0,
    setSupport:()=>{

    }

})

export let SupportProvider =({children})=>{
    let [ support , setSupport] = useState(0);
    let value = { support , setSupport};

    return <supportContext.Provider value={value}>{children}</supportContext.Provider>
}