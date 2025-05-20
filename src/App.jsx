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

  return (
    <div className='App'>
      <Sidebar step={step} setStep={setStep} />
      <div className="AppDroite">
      {step === "infos" ? (<Infos step={step} setStep={setStep} />)
      : step === "plan" ? (<Plan yearly={yearly} setYearly={setYearly} step={step} setStep={setStep} />)
      : "" }
      <Addons/>
      <Summary/>
      <Thankyou/>
      </div>
    </div>
  )
}

export default App
