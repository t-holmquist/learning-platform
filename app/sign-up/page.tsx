'use client'

import Button from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react';


const SignUp = () => {
  return (
    <div className='h-[100vh] sm:overflow-hidden overflow-x-hidden'>
        <nav className='flex justify-between items-center py-2 px-6'>
            {/* absolutely posioned to avoid layout shift when logo is loaded that disturbs motion animation */}
            <Link href={"/"}>
                <Image className='absolute top-2' src={"/icons/Logo.svg"} width={200} height={30} alt='BoardCraft Studio Logo' /> 
            </Link>
            <div className='hidden sm:flex gap-2 items-center'>
                <p className='text-sm'>Don&apos;t have an account?</p>
                <button className='font-medium cursor-pointer hover:text-slate-700'>Sign up here</button>
            </div>
        </nav>
        <section className='flex items-center justify-center h-full'>
            <motion.div 
            initial={{y:20}}
            animate={{y: 0}}
            className='flex relative shadow-primary flex-col w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 gap-10 p-6 border rounded-large bg-accent'>
                {/* Background Dots */}
                <motion.div 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={
                    { y: {duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: "reverse"}, opacity: {delay: 0.3}}
                }
                className='absolute -z-10 opacity-70 top-10 -left-12 w-[500px] h-[550px] rounded-large bgDots'/>
                <h1 className='font-extrabold text-5xl'>Sign in</h1>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="email">Email:*</label>
                    <input name="email" placeholder="Enter your email"
                    className="p-2 bg-bg-sand rounded-small border focus:outline outline-primary"
                    maxLength={15}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="password">Password:*</label>
                    <input name="password" placeholder="Enter your password"
                    className="p-2 bg-bg-sand rounded-small border focus:outline outline-primary"
                    maxLength={15}/>
                </div>
                <Link href={"/dashboard"}>
                    <Button title='Log in'/> 
                </Link>
                <div className='flex flex-col justify-between lg:flex-row gap-2'>
                    <button className='flex cursor-pointer hover:bg-bg-sandHover gap-2 bg-bg-sand rounded-small py-2 px-6 border'>
                        <Image src={"/icons/google.svg"} width={25} height={25} alt='google sign in' />
                        <p>Sign in with Google</p>
                    </button>
                    <button className='flex cursor-pointer hover:bg-bg-sandHover gap-2 bg-bg-sand rounded-small py-2 px-6 border'>
                        <Image src={"/icons/apple.svg"} width={25} height={25} alt='google sign in' />
                        <p>Sign in with Apple</p>
                    </button>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-sm'>Don&apos;t have an account?</p>
                    <button className='font-medium cursor-pointer hover:text-slate-700'>Sign up here</button>
                </div>
            </motion.div>
        </section>
    </div>
  )
}

export default SignUp