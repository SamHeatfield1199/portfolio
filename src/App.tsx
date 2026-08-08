import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './App.scss'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <>
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
