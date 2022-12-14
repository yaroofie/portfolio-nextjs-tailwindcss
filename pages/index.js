import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>portfolio with nextjs and tailwindcss</title>
        <meta name='description' content='portfolio with nextjs and tailwindcss' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-white text-gray-600 px-10 '>
        <section className='min-h-screen'>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons'>Yaroofie</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer' /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
