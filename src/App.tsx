import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Loader } from './components/Loader/Loader'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { AppThemeProvider } from './context/ThemeContext'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProjectsPage } from './pages/ProjectsPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulasi loading screen selama 1.5 detik
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AppThemeProvider>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
            <Analytics />
            <Footer></Footer>
          </>
        )}
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
