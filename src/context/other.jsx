import { useState , createContext } from "react";

export let otherContext = createContext({

    other:0,
    setOther:()=>{

    }

})

export let OtherProvider =({children})=>{
    let [ other , setOther] = useState(0);
    let value = { other , setOther};

    return <otherContext.Provider value={value}>{children}</otherContext.Provider>
}