import { useState , createContext } from "react";

export let companyContext = createContext({

    comp:0,
    setComp:()=>{

    }

})

export let CompanyProvider =({children})=>{
    let [ comp , setComp] = useState(0);
    let value = { comp , setComp};

    return <companyContext.Provider value={value}>{children}</companyContext.Provider>
}