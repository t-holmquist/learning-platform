import { lessonData } from '@/data/data';

export const ShowcaseSidebar = () => {

  return (

    <div 
    className='col-span-4 row-span-12 border space-y-4 rounded-large p-6 bg-bg-red hover:border-primary transition-all'>
        <h2 className='text-2xl font-bold'>Simple and approachable cource layout</h2>
        <div className='border rounded-large bg-bg-sand'>
            <div className='bg-secondary p-2 text-center rounded-t-large font-medium border-b border-black'>Module: The basics</div>
            <section className="flex flex-col">
              {lessonData.slice(0, 3).map(({id, title}, idx) => (
                <button 
                key={idx}
                className={`hover:bg-slate-200 text-white`}
                >
                  {/* Lesson */}
                  <div className='flex items-center p-2 gap-4'>
                      {lessonData[id].completed ? (
                        <div className='p-0.5 border border-green-700 bg-bg-sand rounded-full'>
                          <svg className='fill-green-700' width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </div>  
                      ) : (
                        <div className='p-1.5 border border-black bg-accent rounded-full'>
                          <svg width="12" height="12" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.5601 6.03123C18.5601 6.03123 10.0288 -1.28127 1.49756 4.81248V31.625C10.0288 25.5312 18.5601 31.625 18.5601 31.625M18.5601 6.03123C18.5601 6.03123 27.0913 -1.28127 35.6226 4.81248V31.625C27.0913 25.5312 18.5601 31.625 18.5601 31.625M18.5601 6.03123V31.625" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                      
                      <p className='text-black text-sm text-start'>{title}</p>
                  </div>
                </button>
              ))}
            </section>
            <div className='bg-secondary p-2 text-center font-medium border-b border-t border-black'>Module: User Testing</div>
            <section className="flex flex-col">
              {lessonData.slice(3, 8).map(({id, title}, idx) => (
                <button 
                key={idx}
                
                className={`hover:bg-slate-200 text-white`}
                >
                  {/* Lesson */}
                  <div className='flex items-center p-2 gap-4'>
                      {lessonData[id].completed ? (
                        <div className='p-0.5 border border-green-700 bg-bg-sand rounded-full'>
                          <svg className='fill-green-700' width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </div>  
                      ) : (
                        <div className='p-1.5 border border-black bg-accent rounded-full'>
                          <svg width="12" height="12" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.5601 6.03123C18.5601 6.03123 10.0288 -1.28127 1.49756 4.81248V31.625C10.0288 25.5312 18.5601 31.625 18.5601 31.625M18.5601 6.03123C18.5601 6.03123 27.0913 -1.28127 35.6226 4.81248V31.625C27.0913 25.5312 18.5601 31.625 18.5601 31.625M18.5601 6.03123V31.625" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                      
                      <p className='text-black text-sm text-start'>{title}</p>
                  </div>
                </button>
              ))}
            </section>
            <div className='bg-secondary p-2 text-center font-medium border-b border-t border-black'>Module: Publishing</div>
            <section className="flex flex-col">
              {lessonData.slice(8, 12).map(({id, title}, idx) => (
                <button 
                key={idx}
                
                className={` hover:bg-slate-200 text-white rounded-b-large`}
                >
                  <div className='flex items-center p-2 gap-4'>
                      {lessonData[id].completed ? (
                        <div className='p-0.5 border border-green-700 bg-bg-sand rounded-full'>
                          <svg className='fill-green-700' width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </div>  
                      ) : (
                        <div className='p-1.5 border border-black bg-accent rounded-full'>
                          <svg width="12" height="12" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.5601 6.03123C18.5601 6.03123 10.0288 -1.28127 1.49756 4.81248V31.625C10.0288 25.5312 18.5601 31.625 18.5601 31.625M18.5601 6.03123C18.5601 6.03123 27.0913 -1.28127 35.6226 4.81248V31.625C27.0913 25.5312 18.5601 31.625 18.5601 31.625M18.5601 6.03123V31.625" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                      
                      <p className='text-black text-sm text-start'>{title}</p>
                  </div>
                </button>
              ))}
            </section>
        </div>
    </div>
    
  );
}