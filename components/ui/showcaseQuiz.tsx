
export const ShowcaseQuiz = () => {

  return (
    <div 
    className='relative group col-span-4 space-y-4 row-span-11 lg:row-span-6 border p-6 rounded-large bg-bg-red hover:border-primary transition-all'>
        <h2 className='text-2xl font-bold'>Interactive Quizzes</h2>
        {/* Positioned slightly off center with left, top and translate classes */}
        {/* Quiz card */}
        <div className='absolute group-hover:rotate-z-6 transition-all left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/5  flex flex-col gap-4 border bg-bg-green rounded-large p-3'>
          <p className='border shadow-primary rounded-small p-2 font-bold'>Test your knowledge</p>
          <p className='text-sm'>What is user testing?</p>
          <p className='text-xs border p-2 bg-bg-sand rounded-small'>Testing users by asking them directly</p>
          <p className='text-xs border p-2 bg-bg-sand rounded-small'>Testing the users patience</p>
        </div>
        {/* Quiz card */}
        <div className='absolute group-hover:rotate-z-5 transition-all left-1/2 top-1/2 -translate-x-1/3 rotate-z-10 -translate-y-2/5  flex flex-col gap-4 border bg-bg-green rounded-large p-3'>
          <p className='border shadow-primary rounded-small p-2 font-bold'>Test your knowledge</p>
          <p className='text-sm'>Define a strategy game</p>
          <p className='text-xs border p-2 bg-bg-sand rounded-small'>Gameplay based on decision making skills</p>
          <p className='text-xs border p-2 bg-bg-sand rounded-small'>Games based on skills or chance</p>
        </div>
    </div>
    
  );
}