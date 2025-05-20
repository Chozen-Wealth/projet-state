import "./sidebar.css"

export default function Sidebar({dark, step, setStep}){

    return(
        <div className={`sidebar ${dark ? "dark" : ""}`}>
            <div className="opt">
                <div className={`optBubble ${step === "infos" ? "active" : ""}`}>1</div>
                <div className="optText">
                    <span className="optSteps">STEP 1</span>
                    <span className="optTitle">YOUR INFOS</span>
                </div>
            </div>
            <div className="opt">
                <div className={`optBubble ${step === "plan" ? "active" : ""}`}>2</div>
                <div className="optText">
                    <span className="optSteps">STEP 2</span>
                    <span className="optTitle">SELECT PLAN</span>
                </div>
            </div>
            <div className="opt">
                <div className={`optBubble ${step === "addons" ? "active" : ""}`}>3</div>
                <div className="optText">
                    <span className="optSteps">STEP 3</span>
                    <span className="optTitle">ADD-ONS</span>
                </div>
            </div>
            <div className="opt">
                <div className={`optBubble ${step === "summary" ? "active" : ""}`}>4</div>
                <div className="optText">
                    <span className="optSteps">STEP 4</span>
                    <span className="optTitle">SUMMARY</span>
                </div>
            </div>
        </div>
    )
}