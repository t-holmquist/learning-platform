'use client'

import { lessonData } from '@/data/data';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

const Sidebar = ( {activeLesson, setActiveLesson} : {
  activeLesson: number;
  setActiveLesson: Dispatch<SetStateAction<number>>
} ) => {


  return (
    <div className="hidden lg:block sticky top-0 w-[250px] border h-[100vh]">
      <div className='border-b flex items-center justify-center h-[50px]'>
        <Link href='/' className='font-extrabold text-xl'>BoardCraft Studio</Link>
      </div>
        <div className='bg-accent p-2 text-center font-medium border-b border-black'>Module: User Testing</div>
        <div className="flex flex-col">
          {lessonData.map(({id, title}, idx) => (
            <button 
            key={idx}
            onClick={() => {setActiveLesson(id)}}
            className={id == activeLesson ? `cursor-pointer text-white bg-bg-green` : `cursor-pointer hover:bg-slate-100 text-white`}
            >
              <div className='flex items-center p-2 gap-4'>
                  <div className='p-0.5 border border-black bg-accent rounded-full'>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </div>
                  <p className='text-black text-sm max-w-[150px] text-start'>{title}</p>
              </div>
            </button>
          ))}
          <p className='py-20 font-extrabold'>Current Lesson: {activeLesson}</p>
        </div>
    </div>
  )
}

export default Sidebar;