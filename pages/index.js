import Head from 'next/head';
import Image from "next/legacy/image";
import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import userImage from '../public/files/user.png';
import design from '../public/files/design.png';
import code from '../public/files/code.png';
import consulting from '../public/files/consulting.png';
import web1 from '../public/files/web1.png';
import web2 from '../public/files/web2.png';
import web3 from '../public/files/web3.png';
import web4 from '../public/files/web4.png';
import web5 from '../public/files/web5.png';
import web6 from '../public/files/web6.png';

export default function Home ()
{
  const [ darkMode, setDarkMode ] = useState( false ); 
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>portfolio with nextjs and tailwindcss</title>
        <meta name='description' content='portfolio with nextjs and tailwindcss' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-white dark:bg-gray-800 dark:text-gray-200 text-gray-800 px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons'>Yaroofie</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer' onClick={()=> {setDarkMode(!darkMode)}} /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Alireza Mahmoudi</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer.</h3>
            <p className='text-md md:text-xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto'>Freelancer providing services for programming needs,Join me down below and let's get cracking!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto overflow-hidden bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:w-96 md:h-96">
            <Image src={userImage} layout="fill" objectFit='cover' />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>Since the beginning of my journey as a freelance developer, I've done remove work for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talented people to create digital products for both business and consumer use.</p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>I offer from a wide range of services, including brand desing, programming and teaching</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-lg my-10'>
              <Image src={design} width={100} height={100} alt='design icon' className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs folowing core design theory.</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <ul>
                <li className='text-gray-800 dark:text-gray-200 py-1'>Photoshop</li>
                <li className='text-gray-800 dark:text-gray-200 py-1'>Illustrator</li>
                <li className='text-gray-800 dark:text-gray-200 py-1'>Figma</li>
              </ul>
            </div>
            <div className='text-center shadow-lg p-10 rounded-lg my-10'>
              <Image src={code} width={100} height={100} alt='code icon' className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs folowing core design theory.</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <ul>
                <li className='text-gray-800 dark:text-gray-200 py-1'>Photoshop</li>
                <li className='text-gray-800 dark:text-gray-200 py-1'>Illustrator</li>
                <li className='text-gray-800 dark:text-gray-200 py-1'>Figma</li>
              </ul>
            </div>
            <div className='text-center shadow-lg p-10 rounded-lg my-10'>
              <Image src={consulting} width={100} height={100} alt='consulting icon' className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs folowing core design theory.</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <ul>
                <li className='text-gray-800 dark:text-gray-200 py-1'>Photoshop</li>
                <li className='text-gray-800 dark:text-gray-200 py-1'>Illustrator</li>
                <li className='text-gray-800 dark:text-gray-200 py-1'>Figma</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>Since the beginning of my journey as a freelance developer, I've done remove work for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talented people to create digital products for both business and consumer use.</p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>I offer from a wide range of services, including brand desing, programming and teaching</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web1} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"}
                layout="responsive" 
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web2} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"}
                layout="responsive" 
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web3} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"}
                layout="responsive" 
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web4} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"}
                layout="responsive" 
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web5} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"}
                layout="responsive" 
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web6} 
                className="rounded-lg object-cover" 
                width={"100%"} 
                height={"100%"}
                layout="responsive" 
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
