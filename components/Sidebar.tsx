'use client'

import { lessonData } from '@/data/data';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

const Sidebar = ( {activeLesson, setActiveLesson} : {
  activeLesson: number;
  setActiveLesson: Dispatch<SetStateAction<number>>
} ) => {


  return (
    <div className="hidden lg:block sticky top-0 w-[300px] border h-[100vh]">
      <Link className='flex items-center justify-center h-[70px]' href={"/"}>
            <Image src={"/icons/Logo.svg"} width={200} height={30} alt='BoardCraft Studio Logo' />
      </Link>
      <div className='bg-secondary p-2 text-center font-medium border border-black'>Module: Introduction</div>
      <section className="flex flex-col">
        {lessonData.slice(0, 3).map(({id, title}, idx) => (
          <button 
          key={idx}
          onClick={() => {setActiveLesson(id)}}
          className={id == activeLesson ? `cursor-pointer text-white bg-bg-green` : `cursor-pointer hover:bg-slate-100 text-white`}
          >
            {/* Lesson */}
            <div className='flex items-center p-2 gap-4'>
                {lessonData[id].completed ? (
                  <div className='p-0.5 border border-green-700 bg-bg-sand rounded-full'>
                    <svg className='fill-green-700' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>  
                ) : (
                  <div className='p-0.5 border border-black bg-accent rounded-full'>
                  <svg  width="15" height="15" viewBox="0 0 15 15" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                )}
                
                <p className='text-black text-sm max-w-[150px] text-start'>{title}</p>
            </div>
          </button>
        ))}
      </section>
      <div className='bg-secondary p-2 text-center font-medium border border-black'>Module: User Testing</div>
      <section className="flex flex-col">
        {lessonData.slice(3, 8).map(({id, title}, idx) => (
          <button 
          key={idx}
          onClick={() => {setActiveLesson(id)}}
          className={id == activeLesson ? `cursor-pointer text-white bg-bg-green` : `cursor-pointer hover:bg-slate-100 text-white`}
          >
            {/* Lesson */}
            <div className='flex items-center p-2 gap-4'>
                {lessonData[id].completed ? (
                  <div className='p-0.5 border border-green-700 bg-bg-sand rounded-full'>
                    <svg className='fill-green-700' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>  
                ) : (
                  <div className='p-0.5 border border-black bg-accent rounded-full'>
                  <svg  width="15" height="15" viewBox="0 0 15 15" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                )}
                
                <p className='text-black text-sm max-w-[150px] text-start'>{title}</p>
            </div>
          </button>
        ))}
      </section>
      <div className='bg-secondary p-2 text-center font-medium border border-black'>Module: Publishing</div>
      <section className="flex flex-col">
        {lessonData.slice(8, 12).map(({id, title}, idx) => (
          <button 
          key={idx}
          onClick={() => {setActiveLesson(id)}}
          className={id == activeLesson ? `cursor-pointer text-white bg-bg-green` : `cursor-pointer hover:bg-slate-100 text-white`}
          >
            <div className='flex items-center p-2 gap-4'>
                {lessonData[id].completed ? (
                  <div className='p-0.5 border border-green-700 bg-bg-sand rounded-full'>
                    <svg className='fill-green-700' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>  
                ) : (
                  <div className='p-0.5 border border-black bg-accent rounded-full'>
                  <svg  width="15" height="15" viewBox="0 0 15 15" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </div>
                )}
                
                <p className='text-black text-sm max-w-[150px] text-start'>{title}</p>
            </div>
          </button>
        ))}
      </section>

    </div>
  )
}

export default Sidebar;