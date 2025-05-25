'use client'

import Button from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/ui/footer';
import { ShowcaseProgressBar } from '@/components/ui/showcaseProgressBar';
import { ShowcaseSidebar } from '@/components/ui/showcaseSidebar';
import { ShowcaseXP } from '@/components/ui/showcaseXP';


const Home = () => {
  return (
    // Dot background overflows on mobile -> overflow-x-hidden. No scroll on tablet and desktop -> h-100vh
    <div className='font-satoshi sm:min-h-screen flex flex-col gap-6 md:gap-20 justify-between overflow-x-hidden'>
        <nav className='flex justify-between items-center px-5 py-5 sm:px-10'>
            <Link href={"/"}>
                <Image src={"/icons/Logo.svg"} width={200} height={30} alt='BoardCraft Studio Logo' /> 
            </Link>
            <div className='flex gap-2 sm:gap-6 items-center'>
                <button className='font-bold cursor-pointer hover:bg-bg-sandHover p-2 border rounded-small'>Sign up</button>
                <button className='font-medium cursor-pointer hover:text-slate-700'>Log in</button>
            </div>
        </nav>
        <div className='w-full flex flex-col items-center'>
          <section className='space-y-6 w-11/12 lg:w-8/12 flex flex-col items-center'>
            <h1 className='font-black text-center text-3xl sm:text-6xl'>Design, Build & Market Your Dream Board Game</h1>
            <p className='text-center'>Master the art of board game creation with interactive courses, expert guidance, and a community of passionate designers. From concept to published game.</p>
            <Link href={"/sign-in"}>
              <Button className='w-fit' title='Get started'/>
            </Link>
          </section>
        </div>
        <section className='grid grid-cols-1 lg:grid-cols-12 gap-10 grid-rows-12 px-5 py-5 sm:px-10'>
              {/* Progress */}
              <ShowcaseProgressBar />
              {/* Sidebar */}
              <ShowcaseSidebar />
              {/* XP and rank */}
              <ShowcaseXP />
              {/* Interactive quiz */}
              <div className='col-span-4 row-span-9 border rounded-large'></div>
              {/* Video learning */}
              <div className='col-span-4 row-span-7 border rounded-large'></div>
        </section>
        <Footer/>
    </div>
  )
}

export default Home;