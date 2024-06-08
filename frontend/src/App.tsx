
import './App.css'
import { Header } from './component/Header'
import PlanSwitcher from './component/Plan/_partials/PlanSwitcher'
import useFetch from './hook/useFetch'
import CompletePlan from './component/Plan/CompletePlan'
import { useState } from 'react'

function App() {
  const [currentPlan, setCurrentPlan] = useState('completePlan');
  const api_base_url = import.meta.env.VITE_API_BASE_URL;
  const accounts = useFetch(api_base_url+'/api/account').data;
  

  return (
    <>
      <Header></Header>
      <div className="content">
        <div className="container mx-auto mt-10 px-10 lg:px-32 xl:px-64">
            <div className="block p-6 bg-white border border-slate-200 rounded-lg shadow space-y-5">
                <PlanSwitcher currentPlan={currentPlan} changeHandler={setCurrentPlan}/>
                {currentPlan}
                  {/* { true && <Alert type='warning'>Aucune donnée à afficher</Alert>} */}
                  <CompletePlan accounts={accounts? accounts : []}/>   
            </div>
        </div>
      </div>
      
    </>
  )
}

export default App
