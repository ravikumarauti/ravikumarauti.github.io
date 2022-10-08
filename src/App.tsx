import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Download from './icons/download'
import Github from './icons/github'
import LinkedIn from './icons/linkedin'
import Mail from './icons/mail'
import Phone from './icons/phone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-screen h-screen'>
      <section className="text-gray-400 bg-white body-font">
          <div className="px-20 container mx-auto flex py-24 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-slate-700">Ravikumar Auti
                <br className="hidden lg:inline-block" /><span className='block text-purple-600'>&lt;Software developer /&gt;</span>
              </h1>
              <p className="mb-8 leading-relaxed">
                A passionate software developer, tech enthusiast, ready to learn new tech and looking for opportunities to work with a great team of developers. Looking forward to hear from you.
              </p>
              <div className="flex pb-6 gap-2">
                <a
                  href="mailto:ravikumarauti1221@gmail.com"
                  target="_blank"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full fill-red-400 shadow-xl transition-all duration-300 hover:bg-red-400 text-red-400 hover:text-white hover:shadow-red-400/50"
                >
                  <Mail classnames="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ravikumarauti"
                  target="_blank"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full fill-blue-400 shadow-xl transition-all duration-300 hover:bg-blue-400 text-blue-400 hover:text-white hover:shadow-blue-400/50"
                >
                  <LinkedIn classnames="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/ravikumarauti"
                  target="_blank"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full fill-slate-700 shadow-xl transition-all duration-300 hover:bg-slate-700 text-slate-700 hover:text-white hover:shadow-slate-700/50"
                >
                  <Github classnames="w-5 h-5" />
                </a>
                <a
                  href="tel:+919922377882"
                  target="_blank"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full fill-blue-400 shadow-xl transition-all duration-300 hover:bg-blue-400 text-blue-400 hover:text-white hover:shadow-blue-400/50"
                >
                  <Phone classnames="w-5 h-5" />
                </a>
              </div>
              <div className="flex justify-center">
                <a
                  href='/RavikumarAuti_9922377882.pdf'
                  target='_blank'
                  className="inline-flex gap-2 items-center text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  <Download classnames="w-5 h-5 animate-bounce" />
                  Get CV!
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="/computer_wave.gif" />
            </div>
          </div>
        </section>
    </main>
  )
}

export default App
