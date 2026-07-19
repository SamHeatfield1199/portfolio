import './App.scss'
import About from './components/About/About'
import Greeting from './components/Greeting/Greeting'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
      <Header />
      <Greeting />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App
