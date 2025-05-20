import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import Infos from './components/infos/infos'
import Plan from './components/plan/plan'
import Addons from './components/addons/addons'
import Summary from './components/summary/summary'
import Thankyou from './components/thankyou/thankyou'

function App() {

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

  return (
    <div className='App'>
      <Sidebar step={step} setStep={setStep} />
      <div className="AppDroite">
      {step === "infos" ? (<Infos step={step} setStep={setStep} valueNom={valueNom} setValueNom={setValueNom} valueMail={valueMail} setValueMail={setValueMail} valueTel={valueTel} setValueTel={setValueTel} />)
      : step === "plan" ? (<Plan prixTotal={prixTotal} setPrixTotal={setPrixTotal} yearly={yearly} setYearly={setYearly} step={step} setStep={setStep} plan={plan} setPlan={setPlan} />)
      : step === "addons" ? (<Addons prixTotal={prixTotal} setPrixTotal={setPrixTotal} yearly={yearly} step={step} setStep={setStep} addons={addons} setAddons={setAddons} online={online} setOnline={setOnline} storage={storage} setStorage={setStorage} custom={custom} setCustom={setCustom} />)
      : step === "summary" ? (<Summary prixTotal={prixTotal} setPrixTotal={setPrixTotal} step={step} setStep={setStep} plan={plan} yearly={yearly} online={online} storage={storage} custom={custom} />)
      : step === "thankyou" ? (<Thankyou />) : "" }
      </div>
    </div>
  )
}

export default App
