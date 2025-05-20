import "./plan.css"
import arcade from "../../../public/img/arcade.svg"
import advanced from "../../../public/img/advenced.svg"
import pro from "../../../public/img/pro.svg"
import { useState } from "react"

export default function Plan({yearly, setYearly, step, setStep}){

    const [change, setChange] = useState(false)

    return(
        <div className="plan">
            <div className="divTitre">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing</p>
            </div>
            <div className="divPlans">

                <div className="cardPlan">
                    <img className="cardImg" src={arcade} alt="" />

                    <div className="cardPricing">
                        <span>Arcade</span>
                        <span>{yearly === false ? "$9/mo" : "$90/yr"}</span>
                    </div>
                </div>
                <div className="cardPlan">
                    <img className="cardImg" src={advanced} alt="" />
                    <div className="cardPricing">
                        <span>Arcade</span>
                        <span>{yearly === false ? "$12/mo" : "$120/yr"}</span>
                    </div>
                </div>
                <div className="cardPlan">
                    <img className="cardImg" src={pro} alt="" />
                    <div className="cardPricing">
                        <span>Arcade</span>
                        <span>{yearly === false ? "$15/mo" : "$150/yr"}</span>
                    </div>
                </div>

            </div>
            <div className="divSwitchPlan">
                <span className={`${change === true ? "" : "planChosen"}`}>Monthly</span>
                <div onClick={()=> {setChange(!change)}} className="switch"><div className={`ball ${change === true ? "on" : ""}`}></div></div>
                <span className={`${change === true ? "planChosen" : ""}`}>Yearly</span>
            </div>
            <button onClick={()=> setStep("plan")} className="btnNext">Next Step</button>
            <span onClick={()=> setStep("infos")} className="btnGoBack">Go Back</span>
        </div>
    )
}