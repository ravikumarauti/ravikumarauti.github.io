import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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
          <div className="px-20 container mx-auto flex py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-slate-700">Ravikumar Auti
                <br className="hidden lg:inline-block" /><span className=' text-purple-600'>&lt;Software developer /&gt;</span>
              </h1>
              <p className="mb-8 leading-relaxed">
                A passionate software developer, tech enthusiast, ready to learn new tech and looking for opportunities to work with a great team of developers. Looking forward to hear from you.  
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
                <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
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
