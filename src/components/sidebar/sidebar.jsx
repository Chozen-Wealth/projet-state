import "./sidebar.css"

export default function Sidebar({dark, step, setStep, valueNom, valueMail, valueTel, plan}){

    const StepToPlan = () => {
        !valueNom || !valueMail || !valueTel ? "" : setStep("plan")
    }
    const StepToAddons = () => {
        !plan || !valueNom || !valueMail || !valueTel ? "" : setStep("addons")
    }
    const StepToSummary = () => {
        !plan || !valueNom || !valueMail || !valueTel ? "" : setStep("summary")
    }

    return(
        <div className={`sidebar ${dark ? "dark" : ""}`}>
            <div onClick={()=> setStep("infos")} className={`opt ${!valueNom || !valueMail || !valueTel ? "" : "valide"}`}>
                <div className={`optBubble ${step === "infos" ? "active" : ""}`}>1</div>
                <div className="optText">
                    <span className="optSteps">STEP 1</span>
                    <span className="optTitle">YOUR INFOS</span>
                </div>
            </div>
            <div onClick={StepToPlan} className={`opt ${!valueNom || !valueMail || !valueTel ? "" : "valide"}`}>
                <div className={`optBubble ${step === "plan" ? "active" : ""}`}>2</div>
                <div className="optText">
                    <span className="optSteps">STEP 2</span>
                    <span className="optTitle">SELECT PLAN</span>
                </div>
            </div>
            <div onClick={StepToAddons} className={`opt ${!valueNom || !valueMail || !valueTel ? "" : "valide"}`}>
                <div className={`optBubble ${step === "addons" ? "active" : ""}`}>3</div>
                <div className="optText">
                    <span className="optSteps">STEP 3</span>
                    <span className="optTitle">ADD-ONS</span>
                </div>
            </div>
            <div onClick={StepToSummary} className={`opt ${!valueNom || !valueMail || !valueTel ? "" : "valide"}`}>
                <div className={`optBubble ${step === "summary" ? "active" : ""}`}>4</div>
                <div className="optText">
                    <span className="optSteps">STEP 4</span>
                    <span className="optTitle">SUMMARY</span>
                </div>
            </div>
        </div>
    )
}