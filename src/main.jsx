import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Home from './pages/Home'
import Dashboards from './pages/Dashboards'
import Workflows from './pages/Workflows'
import Who from './pages/Who'
import Why from './pages/Why'
import Impact from './pages/Impact'
import Training from './pages/Training'
import Knowledge from './pages/Knowledge'
import Chatbot from './pages/Chatbot'
import Quotes from './pages/Quotes'
import Contact from './pages/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="dashboards" element={<Dashboards />} />
          <Route path="workflows" element={<Workflows />} />
          <Route path="who" element={<Who />} />
          <Route path="why" element={<Why />} />
          <Route path="impact" element={<Impact />} />
          <Route path="training" element={<Training />} />
          <Route path="knowledge" element={<Knowledge />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
