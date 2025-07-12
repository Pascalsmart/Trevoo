import { createContext,useState } from "react";

export let productContext = createContext({
    prod :0,
    setPro:()=>{

    }

})

export let ProductProvider=({children})=>{
let [prod, setPro]= useState(0);
let value = {prod, setPro};

return <productContext.Provider value={value}>{children}</productContext.Provider>
}

