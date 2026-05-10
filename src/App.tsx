import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Loader } from './components/Loader/Loader'
import { Cursor } from './components/Cursor/Cursor'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { AppThemeProvider } from './context/ThemeContext'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Main = lazy(() => import('./components/Main/Main').then(module => ({ default: module.Main })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(module => ({ default: module.ProjectsPage })));

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
        <Cursor />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header></Header>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/projects" element={<ProjectsPage />} />
              </Routes>
            </Suspense>
            <Analytics />
            <Footer></Footer>
          </>
        )}
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export default App
