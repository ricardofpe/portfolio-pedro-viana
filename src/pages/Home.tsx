import Main from '../components/layout/Main/Main'
import Projects from '../components/layout/Projects/Projects'
import About from '../components/layout/About/About'
import Questions from '../components/layout/Questions/Questions'
import Footer from '../components/layout/Footer/Footer'
import Header from '../components/layout/Header/Header'

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <Main />
      <Projects />
      <About />
      <Questions />
      <Footer />
    </div>
  )
}

export default Home
