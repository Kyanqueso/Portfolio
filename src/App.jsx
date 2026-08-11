import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import { LightboxProvider } from './context/LightboxContext.jsx'

function App() {
  return (
    <LightboxProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/:slug" element={<CaseStudy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LightboxProvider>
  )
}

export default App
