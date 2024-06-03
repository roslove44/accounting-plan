
import './App.css'
import { Header } from './component/Header'
import Hero from './component/Hero'
import Plan from './component/Plan/Plan'

function App() {

  return (
    <>
      <Header></Header>
      <div className="content">
        <Hero></Hero>
        <Plan/>
      </div>
      
    </>
  )
}

export default App
