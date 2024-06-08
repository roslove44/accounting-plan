
import './App.css'
import Alert from './component/Alerts/Alerts'
import { Header } from './component/Header'
import Hero from './component/Hero'
import PlanTypeBox from './component/Plan/PlanTypeBox'
import { CurrentPageContextProvider } from './hook/useCurrentPage'
import useFetch from './hook/useFetch'
import { ErrorBoundary } from 'react-error-boundary'
import Plan from './component/Plan/Plan'

function App() {
  const getOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };
  const api_base_url = import.meta.env.VITE_API_BASE_URL;
  
  const accounts = useFetch(api_base_url+'/api/account', getOptions).data;
  

  return (
    <>
      <Header></Header>
      <div className="content">
        <Hero></Hero>
        <div className="container mx-auto mt-10 px-10 lg:px-32 xl:px-64">
            <div className="block p-6 bg-white border border-slate-200 rounded-lg shadow space-y-5">
                <PlanTypeBox/>
                <CurrentPageContextProvider>
                  <ErrorBoundary fallback={<Alert type='warning'>Aucune donnée à afficher</Alert>}>
                      <Plan accounts={accounts}/>
                  </ErrorBoundary>
                </CurrentPageContextProvider>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default App
