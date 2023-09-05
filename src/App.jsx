
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Rockets from './components/Rockets'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-black dark:text-white '>
      <Header />
      <main className='max-w-4xl mx-auto '>
       <Hero />
       <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
       <Rockets />
       <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
       <Testimonials />
       <hr className='mx-auto bg-black dark:bg-white w-1/2'/>
       <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
