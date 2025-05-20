import "./addons.css"

export default function Addons({dark, yearly, step, setStep, addons, setAddons, online,setOnline,storage,setStorage,custom,setCustom}){


    // const HandleClickOnline = ()=>{
    //     const addonsFilter = addons.filter(element => element === "online")
        
    //     setAddons(prev => [...prev, "online"])
    //     console.log(addons)
    //     console.log(addonsFilter)
    // }
    // const HandleClickStorage = ()=>{
    //     setAddons(prev => [...prev, "storage"])
    //     console.log(addons)
    // }
    // const HandleClickCustom = ()=>{
    //     setAddons(prev => [...prev, "custom"])
    //     console.log(addons)
    // }

    return(
        <div className="addons">
            <div className={`divTitre ${dark ? "dark" : ""}`}>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="divAddons">
                <div onClick={()=> setOnline(!online)} className={`cardAddons ${online === true ? "active":""} ${dark ? "dark" : ""}`}>
                    <div className={`CheckAddons ${online === true ? "active":""} ${dark ? "dark" : ""}`}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></div>
                    <div className={`divTextAddons ${dark ? "dark" : ""}`}>
                        <span>Online service</span>
                        <span>Access to multiplayer games</span>
                    </div>
                    <span className={`addonsPricing ${dark ? "dark" : ""}`}>{`${yearly === true ? "+$10/yr":"+$1/mo"}`}</span>
                </div>
                <div onClick={()=> setStorage(!storage)} className={`cardAddons ${storage === true ? "active":""} ${dark ? "dark" : ""}`}>
                    <div className={`CheckAddons ${storage === true ? "active":""} ${dark ? "dark" : ""}`}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></div>
                    <div className={`divTextAddons ${dark ? "dark" : ""}`}>
                        <span>Larger storage</span>
                        <span>Extra 1TB of cloud save</span>
                    </div>
                    <span className={`addonsPricing ${dark ? "dark" : ""}`}>{`${yearly === true ? "+$20/yr":"+$2/mo"}`}</span>
                </div>
                <div onClick={()=> setCustom(!custom)} className={`cardAddons ${custom === true ? "active":""} ${dark ? "dark" : ""}`}>
                    <div className={`CheckAddons ${custom === true ? "active":""} ${dark ? "dark" : ""}`}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></div>
                    <div className={`divTextAddons ${dark ? "dark" : ""}`}>
                        <span>Customizable profile</span>
                        <span>Custom theme on your profile</span>
                    </div>
                    <span className={`addonsPricing ${dark ? "dark" : ""}`}>{`${yearly === true ? "+$20/yr":"+$2/mo"}`}</span>
                </div>
            </div>
            <button onClick={()=> setStep("summary")} className={`btnNext ${dark ? "dark" : ""}`}>Next Step</button>
            <span onClick={()=> setStep("plan")} className={`btnGoBack ${dark ? "dark" : ""}`}>Go Back</span>
        </div>
    )
}