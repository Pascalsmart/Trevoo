import { createContext, useState } from "react";

export let RidenBusi = createContext({
    rider:0,
    setRide:()=>{

    }
})

export let RidenbusiProvider= ({children})=>{

    let[rider ,setRide]= useState(0);
    let value = {rider, setRide};

    return <RidenBusi.Provider value={value}>{children}</RidenBusi.Provider>
}
