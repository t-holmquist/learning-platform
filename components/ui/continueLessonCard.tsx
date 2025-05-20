import React from 'react'
import Button from './button';

const ContinueLessonCard = () => {
  return (
    <div className='flex flex-col px-4 p-8 gap-4 border rounded-large bg-secondary shadow-primary'>
        <p className='text-sm'>Module: User Testing</p>
        <h3 className='text-xl font-bold'>How to approach testing real users</h3>
        <Button title='Continue' className='w-fit'/>
    </div>
  )
}

export default ContinueLessonCard;