'use client'

import Button from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/ui/footer';
import { ShowcaseProgressBar } from '@/components/ui/showcaseProgressBar';
import { ShowcaseSidebar } from '@/components/ui/showcaseSidebar';
import { ShowcaseXP } from '@/components/ui/showcaseXP';
import { ShowcaseQuiz } from '@/components/ui/showcaseQuiz';
import { ShowcaseVideo } from '@/components/ui/showcaseVideo';


const Home = () => {
  return (
    // Dot background overflows on mobile -> overflow-x-hidden. No scroll on tablet and desktop -> h-100vh
    <div className='font-satoshi sm:min-h-screen flex flex-col gap-8 md:gap-10 justify-between overflow-x-hidden'>

        <nav className='flex justify-between items-center px-5 py-5 sm:px-10'>
            <Link href={"/"}>
                <Image src={"/icons/Logo.svg"} width={200} height={30} alt='BoardCraft Studio Logo' /> 
            </Link>
            <div className='flex gap-2 sm:gap-6 items-center'>
              <Link href={"/sign-in"}>
                <button className='font-bold text-sm sm:text-base cursor-pointer bg-primary hover:bg-primaryHover text-white py-2 px-2 border rounded-small'>Get started</button>
              </Link>
              <Link href={"/sign-in"}>
                <button className='font-medium text-sm sm:text-base cursor-pointer hover:text-slate-700'>Log in</button>
              </Link>
            </div>
        </nav>
        <div className='w-full flex flex-col items-center'>
          <section className='space-y-10 w-11/12 lg:w-7/12 flex flex-col items-center'>
            <h1 className='font-black sm:leading-20 text-center text-5xl sm:text-6xl'>Design, Build & Market Your Dream Board Game</h1>
            <p className='sm:text-center sm:text-lg'>Master the art of board game creation with interactive courses, expert guidance, and a community of passionate designers. From concept to published game.</p>
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
              <ShowcaseQuiz />
              {/* Video learning */}
              <ShowcaseVideo />
        </section>
        <div className='w-full flex flex-col items-center'>
          <section className='space-y-12 mb-20 w-11/12 lg:w-7/12 flex flex-col items-center'>
            <h2 className='font-black text-center text-2xl sm:text-4xl'>Ready to see your game idea become a reality?</h2>
            <Link href={"/sign-in"}>
              <Button className='w-fit' title='Try our platform now'/>
            </Link>
          </section>
        </div>
        <Footer />
    </div>
  )
}

export default Home;