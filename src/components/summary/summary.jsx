import "./summary.css"

export default function Summary({step, setStep, addons, plan, yearly, online, storage, custom}){

    let totalTout = 0
    

    return(
        <div className="summary">
            <div className="divTitre">
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
            </div>
            <div className="summaryBot">
                <div className="divSummaryTotal">
                    <span>{`Total (${yearly === true ? "per year" : "per month"})`}</span>
                    <span className="summaryTotalNombre">{`$${totalTout}/${yearly ? "yr":"mo"}`}</span>
                </div>
            </div>
            <button onClick={()=> setStep("thankyou")} className="btnNext">Confirm</button>
            <span onClick={()=> setStep("addons")} className="btnGoBack">Go Back</span>
        </div>
    )
}