import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './components/Elementos.jsx'
import { PaginaPrincipal, Portafolio, Administracion, InformacionGeneral, Usuarios} from './components/Elementos.jsx'

function App() {

  return (
        <div>
    <nav>
      <div className='AppBar'>
      <a className='buttonLink' href='/pagina-principal'>pagina principal</a>
      <a className='buttonLink' href='/portafolio'>portafolio</a>
      <a className='buttonLink' href='/usuarios'>usuarios</a>
      <a className='buttonLink' href='/administracion'>administracion</a>
      <a className='buttonLink' href='/informacion-general'>informacion general</a>
      </div>

    </nav>
    <BrowserRouter>
    <Routes>
    <Route index element={<PaginaPrincipal/>}/>
    <Route path="/pagina-principal" element={<PaginaPrincipal/>} />
    <Route path="/portafolio" element={<Portafolio/>} />
    <Route path="/usuarios" element={<Usuarios/>} />
    <Route path="/administracion" element={<Administracion/>} />
    <Route path="/informacion-general" element={<InformacionGeneral/>} />
    </Routes>
    </BrowserRouter>        
    </div>
  )
}

export default App
