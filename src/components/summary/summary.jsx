import "./summary.css"

export default function Summary({dark, step, setStep, addons, plan, yearly, online, storage, custom}){

    let totalTout = 0
    
    if (plan === "arcade") {
        totalTout += yearly ? 90 : 9
    } 
    if (plan === "advanced") {
        totalTout += yearly ? 120 : 12
    }
    if (plan === "pro") {
        totalTout += yearly ? 150 : 15
    }

    if (online) {
        totalTout += yearly ? 10 : 1
    }
    if (storage) {
        totalTout += yearly ? 20 : 2
    }
    if (custom) {
        totalTout += yearly ? 20 : 2
    }

    return(
        <div className="summary">
            <div className={`divTitre ${dark ? "dark" : ""}`}>
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className="summaryTop">
                <div className="summaryTopPlan">
                    <div className="divSummaryPlan">
                        <span className="planTextSummary">{plan.charAt(0).toUpperCase() + plan.slice(1)}</span>
                        <span onClick={()=> setStep("plan")} className="btnChangePlan">Change</span>
                    </div>
                    {yearly === true ? (<span className="summaryPrixPlan">{plan === "arcade" ? "$90/yr" : plan === "advanced" ? "$120/yr" : plan === "pro" ? "$150/yr" : ""}</span>)
                    : (<span className="summaryPrixPlan">{plan === "arcade" ? "$9/mo" : plan === "advanced" ? "$12/mo" : plan === "pro" ? "$15/mo" : ""}</span>)}
                    </div>
                {online || storage || custom ? (
                <div className="divSummaryAddons">
                    {online ? (<div className="addon">
                        <span>Larger Storage</span>
                        <span className="summaryPrixPlan">{`${yearly ? "+$10/yr" : "+$1/mo"}`}</span>
                    </div>)
                    : ""}

                    {storage ? (<div className="addon">
                        <span>Online service</span>
                        <span className="summaryPrixPlan">{`${yearly ? "+$20/yr" : "+$2/mo"}`}</span>
                    </div>)
                    : ""}

                    {custom ? (<div className="addon">
                        <span>Customizable profile</span>
                        <span className="summaryPrixPlan">{`${yearly ? "+$20/yr" : "+$2/mo"}`}</span>
                    </div>)
                    : ""}
                </div>
                ): "" }
            </div>
            <div className="summaryBot">
                <div className="divSummaryTotal">
                    <span>{`Total (${yearly === true ? "per year" : "per month"})`}</span>
                    <span className="summaryTotalNombre">{`$${totalTout}/${yearly ? "yr":"mo"}`}</span>
                </div>
            </div>
            <button onClick={()=> setStep("thankyou")} className={`btnNext ${dark ? "dark" : ""}`}>Confirm</button>
            <span onClick={()=> setStep("addons")} className={`btnGoBack ${dark ? "dark": ""}`}>Go Back</span>
        </div>
    )
}