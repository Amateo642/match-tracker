import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import { ContextProvider } from './context/ContextProvider'
import './App.scss'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header/>
        <Cards/>
      </ContextProvider>
    </div>
  )
}

export default App
