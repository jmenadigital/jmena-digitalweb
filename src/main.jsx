import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import DemoDentista from './DemoDentista.jsx'
import DemoPlantilla from './DemoPlantilla.jsx'
import DemoBarberia from './DemoBarberia.jsx'
import DemoMartinAndrada from './DemoMartinAndrada.jsx'
import Maestro from './Maestro.jsx'
import ScrollToTop from './ScrollToTop.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo-dentista" element={<DemoDentista />} />
        <Route path="/demo-plantilla" element={<DemoPlantilla />} />
        <Route path="/demo-martin-andrada" element={<DemoMartinAndrada />} />
        <Route path="/demo-barberia" element={<DemoBarberia />} />
        <Route path="/maestro" element={<Maestro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)