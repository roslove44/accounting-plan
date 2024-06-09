
import './App.css'
import AccountingPlan from './components/AccountingPlan'
import { Header } from './components/Header'
import { CurrentPageContextProvider } from './hooks/useCurrentPage'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className="content">
        <div className="container mx-auto mt-10 px-10 lg:px-32 xl:px-64">
          <CurrentPageContextProvider>
          <AccountingPlan/>
          </CurrentPageContextProvider>
        </div>
      </div>
      
    </>
  )
}

export default App
