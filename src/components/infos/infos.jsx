import "./infos.css"

export default function Infos({step, setStep}){



    return(
        <div className="infos">
            <div className="divTitre">
                <h1>Personnal infos</h1>
                <p>Please provide your name, email adress and phone number.</p>
            </div>
            <label className="labelInfos" htmlFor="">Your name is :</label>
            <input className="inputInfos" type="text" placeholder="Vingt-Six" />
            <label className="labelInfos" htmlFor="">Your email is :</label>
            <input className="inputInfos" type="text" placeholder="vingt_six@email.com" />
            <label className="labelInfos" htmlFor="">Your phone number is :</label>
            <input className="inputInfos" type="text" placeholder="e.g.+1 234 567 890" />
            <button onClick={()=> setStep("plan")} className="btnNext">Next Step</button>
        </div>
    )
}