import "./plan.css"
import arcade from "../../../public/img/arcade.svg"
import advanced from "../../../public/img/advenced.svg"
import pro from "../../../public/img/pro.svg"

export default function Plan({yearly, setYearly}){



    return(
        <div className="plan">
            <div className="divTitre">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing</p>
            </div>
            <div className="divPlans">
                <div className="cardPlan">
                    <img className="cardImg" src={arcade} alt="" />
                    <span>Arcade</span>
                    <span>{yearly === false ? "$9/mo" : "$90/yr"}</span>
                </div>

            </div>
            <div className="divSwitchPlan">
                <span>Monthly</span>
                <div className="switch"><div className="ball"></div></div>
                <span>Yearly</span>
            </div>
            <button onClick={()=> setStep("plan")} className="btnNext">Next Step</button>
            <span className="btnGoBack">Go Back</span>
        </div>
    )
}