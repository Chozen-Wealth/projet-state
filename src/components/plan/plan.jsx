import "./plan.css"
import arcade from "../../../public/img/arcade.svg"
import advanced from "../../../public/img/advenced.svg"
import pro from "../../../public/img/pro.svg"
import { useState } from "react"

export default function Plan({yearly, setYearly, step, setStep, plan, setPlan}){

    const next = ()=>{
        if (plan) {
            setStep("addons")
        }
        else {
            return
        }
    }

    return(
        <div className="plan">
            <div className="divTitre">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="divPlans">

                <div onClick={()=> setPlan("arcade")} className={`cardPlan ${plan === "arcade" ? "active" : ""}`}>
                    <img className="cardImg" src={arcade} alt="" />

                    <div className="cardPricing">
                        <span>Arcade</span>
                        <span>{yearly === false ? "$9/mo" : "$90/yr"}</span>
                    </div>
                </div>
                <div onClick={()=> setPlan("advanced")} className={`cardPlan ${plan === "advanced" ? "active" : ""}`}>
                    <img className="cardImg" src={advanced} alt="" />
                    <div className="cardPricing">
                        <span>Advanced</span>
                        <span>{yearly === false ? "$12/mo" : "$120/yr"}</span>
                    </div>
                </div>
                <div onClick={()=> setPlan("pro")} className={`cardPlan ${plan === "pro" ? "active" : ""}`}>
                    <img className="cardImg" src={pro} alt="" />
                    <div className="cardPricing">
                        <span>Pro</span>
                        <span>{yearly === false ? "$15/mo" : "$150/yr"}</span>
                    </div>
                </div>

            </div>
            <div className="divSwitchPlan">
                <span className={`${yearly === true ? "" : "planChosen"}`}>Monthly</span>
                <div onClick={()=> {setYearly(!yearly)}} className="switch"><div className={`ball ${yearly === true ? "on" : ""}`}></div></div>
                <span className={`${yearly === true ? "planChosen" : ""}`}>Yearly</span>
            </div>
            <button onClick={()=> next()} className={`btnNext ${!plan ? "disabled" : ""}`}>Next Step</button>
            <span onClick={()=> setStep("infos")} className="btnGoBack">Go Back</span>
        </div>
    )
}