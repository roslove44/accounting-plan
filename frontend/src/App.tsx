
import './App.css'
import { Header } from './component/Header'
import Hero from './component/Hero'
import Plan from './component/Plan/Plan'
import PlanTypeBox from './component/Plan/PlanTypeBox'
import { CurrentPageContextProvider } from './hook/useCurrentPage'

function App() {

  return (
    <>
      <Header></Header>
      <div className="content">
        <Hero></Hero>
        <div className="container mx-auto mt-10 px-10 lg:px-32 xl:px-64">
            <div className="block p-6 bg-white border border-slate-200 rounded-lg shadow space-y-5">
                <PlanTypeBox/>
                <CurrentPageContextProvider>
                  <Plan/>
                </CurrentPageContextProvider>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default App
