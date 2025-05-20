import { useState } from "react"
import "./infos.css"

export default function Infos({dark, step, setStep, valueNom, setValueNom, valueMail, setValueMail, valueTel, setValueTel}){
    const next = ()=>{
        if (valueNom && valueMail && valueTel) {
            setStep("plan")
        }
        else {
            return
        }
    }
    
    return(
        <div className="infos">
            <div className={`divTitre ${dark ? "dark": ""}`}>
                <h1>Personnal infos</h1>
                <p>Please provide your name, email adress and phone number.</p>
            </div>
            <label className={`labelInfos ${dark ? "dark": ""}`} htmlFor="">Your name is : {valueNom}</label>
            <input onChange={(e)=> setValueNom(e.target.value)} value={valueNom} className={`inputInfos ${dark ? "dark": ""}`} type="text" placeholder="Vingt-Six" />
            <label className={`labelInfos ${dark ? "dark": ""}`} htmlFor="">Your email is : {valueMail}</label>
            <input onChange={(e)=> setValueMail(e.target.value)} value={valueMail} className={`inputInfos ${dark ? "dark": ""}`} type="text" placeholder="vingt_six@email.com" />
            <label className={`labelInfos ${dark ? "dark": ""}`} htmlFor="">Your phone number is : {valueTel}</label>
            <input onChange={(e)=> setValueTel(e.target.value)} value={valueTel} className={`inputInfos ${dark ? "dark": ""}`} type="text" placeholder="e.g.+1 234 567 890" />
            <button onClick={()=> next()} className={`btnNext ${!valueNom || !valueMail || !valueTel ? "disabled" : ""} ${dark ? "dark" : ""}`}>Next Step</button>
        </div>
    )
}