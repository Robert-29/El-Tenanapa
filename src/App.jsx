import './App.css'
import Info from './components/Info';
import Landing from './components/Landing'
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='contenedorPadre' >
      <NavBar />
      <Landing />
      <Info />
    </div>
  )
}

export default App
