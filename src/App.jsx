import './App.css'
import Navbar from './components/NavBar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default App
