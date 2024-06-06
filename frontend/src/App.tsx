
import './App.css'
import { Header } from './component/Header'
import Hero from './component/Hero'
import Plan from './component/Plan/Plan'
import { CurrentPageContextProvider } from './hook/useCurrentPage'

function App() {

  return (
    <>
      <Header></Header>
      <div className="content">
        <Hero></Hero>
        <CurrentPageContextProvider>
        <Plan/>
        </CurrentPageContextProvider>
      </div>
      
    </>
  )
}

export default App
