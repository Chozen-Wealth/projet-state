import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import Infos from './components/infos/infos'
import Plan from './components/plan/plan'
import Addons from './components/addons/addons'
import Summary from './components/summary/summary'
import Thankyou from './components/thankyou/thankyou'

function App() {
  return (
    <div className='App'>
      <Sidebar/>
      <div className="AppDroite">
      <Infos/>
      <Plan/>
      <Addons/>
      <Summary/>
      <Thankyou/>
      </div>
    </div>
  )
}

export default App
