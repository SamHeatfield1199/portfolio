import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.scss'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import { useHeroReady } from './hooks/useHeroReady'

function App() {
  const { i18n }                          = useTranslation()
  const heroReady                         = useHeroReady()
  const [loaderVisible, setLoaderVisible] = useState(true)

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <>
      {loaderVisible && (
        <Loader ready={heroReady} onDone={() => setLoaderVisible(false)} />
      )}
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
