import { useState , createContext } from "react";

export let cityContext = createContext({

    city:0,
    setCity:()=>{

    }

})

export let CityProvider =({children})=>{
    let [ city , setCity] = useState(0);
    let value = { city , setCity};

    return <cityContext.Provider value={value}>{children}</cityContext.Provider>
}