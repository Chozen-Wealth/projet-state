import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import Infos from './components/infos/infos'
import Plan from './components/plan/plan'
import Addons from './components/addons/addons'
import Summary from './components/summary/summary'
import Thankyou from './components/thankyou/thankyou'

function App() {

  const [dark, setDark] = useState(false)

  const [step, setStep] = useState("infos")
  const [yearly, setYearly] = useState(false)
  const [plan, setPlan] = useState("")
  const [addons, setAddons] = useState([])

  const [valueNom, setValueNom] = useState("")
  const [valueMail, setValueMail] = useState("")
  const [valueTel, setValueTel] = useState("")
  const [online, setOnline] = useState(false)
  const [storage, setStorage] = useState(false)
  const [custom, setCustom] = useState(false)

  const [prixTotal, setPrixTotal] = useState(0)

  let body = document.querySelector("body")
  
  return (
    <div className={`App ${dark ? "dark": ""}`}>
      {dark ? body.classList.add("dark") : body.classList.remove("dark")}
      <Sidebar dark={dark} step={step} setStep={setStep} valueNom={valueNom} valueMail={valueMail} valueTel={valueTel} plan={plan} />
      <div className="AppDroite">
        {dark ? (<div className='btnDark'>
        <svg className='Light' onClick={()=> setDark(!dark)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0-200Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/></svg>
      </div>)
      : (<div className='btnDark'>
        <svg className='Dark' onClick={()=> setDark(!dark)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M600-640 480-760l120-120 120 120-120 120Zm200 120-80-80 80-80 80 80-80 80ZM483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-146 93-257.5T409-880q-18 99 11 193.5T520-521q71 71 165.5 100T879-410q-26 144-138 237T483-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T463-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T159-484q0 135 94.5 229.5T483-160Zm-20-305Z"/></svg>
      </div>)}
      {step === "infos" ? (<Infos dark={dark} step={step} setStep={setStep} valueNom={valueNom} setValueNom={setValueNom} valueMail={valueMail} setValueMail={setValueMail} valueTel={valueTel} setValueTel={setValueTel} />)
      : step === "plan" ? (<Plan dark={dark} prixTotal={prixTotal} setPrixTotal={setPrixTotal} yearly={yearly} setYearly={setYearly} step={step} setStep={setStep} plan={plan} setPlan={setPlan} />)
      : step === "addons" ? (<Addons dark={dark} prixTotal={prixTotal} setPrixTotal={setPrixTotal} yearly={yearly} step={step} setStep={setStep} addons={addons} setAddons={setAddons} online={online} setOnline={setOnline} storage={storage} setStorage={setStorage} custom={custom} setCustom={setCustom} />)
      : step === "summary" ? (<Summary dark={dark} prixTotal={prixTotal} setPrixTotal={setPrixTotal} step={step} setStep={setStep} plan={plan} yearly={yearly} online={online} storage={storage} custom={custom} />)
      : step === "thankyou" ? (<Thankyou dark={dark} />) : "" }
      </div>
    </div>
  )
}

export default App
