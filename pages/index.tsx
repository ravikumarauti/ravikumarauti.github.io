import type { NextPage } from 'next'
import Head from 'next/head'
import { HiOutlineDocumentDownload } from "react-icons/hi"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { ImGithub, ImLinkedin2, ImPhone } from "react-icons/im"
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ravikumar Auti</title>
        <meta name="description" content="Ravikumar Auti, A fresher software developer well versed in Java, SQL, HTML/CSS/JS, Looking for oppotunities where I can work with nurturing team of developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="text-gray-400 bg-white body-font">
          <div className="px-20 container mx-auto flex py-24 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-slate-700">Ravikumar Auti
                <br className="hidden lg:inline-block" /><span className=' text-purple-600'>&lt;Software developer /&gt;</span>
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
                  <MdOutlineAlternateEmail size={25} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ravikumarauti"
                  target="_blank"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full fill-blue-400 shadow-xl transition-all duration-300 hover:bg-blue-400 text-blue-400 hover:text-white hover:shadow-blue-400/50"
                >
                  <ImLinkedin2 size={25} />
                </a>
                <a
                  href="https://github.com/ravikumarauti"
                  target="_blank"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full fill-slate-700 shadow-xl transition-all duration-300 hover:bg-slate-700 text-slate-700 hover:text-white hover:shadow-slate-700/50"
                >
                  <ImGithub size={25} />
                </a>
                <a
                  href="tel:+919922377882"
                  target="_blank"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full fill-blue-400 shadow-xl transition-all duration-300 hover:bg-blue-400 text-blue-400 hover:text-white hover:shadow-blue-400/50"
                >
                  <ImPhone size={25} />
                </a>
              </div>
              <div className="flex justify-center">
                <a
                  href='/Ravikumar_Auti_resume.pdf'
                  target='_blank'
                  className="inline-flex items-center text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  <HiOutlineDocumentDownload size={25} className="mx-2 animate-bounce" />
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

    </div>
  )
}

export default Home
