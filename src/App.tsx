import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='overflow-x-hidden '>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
