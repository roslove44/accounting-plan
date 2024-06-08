
import './App.css'
import AccountingPlan from './component/AccountingPlan'
import { Header } from './component/Header'
import { CurrentPageContextProvider } from './hook/useCurrentPage'

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
