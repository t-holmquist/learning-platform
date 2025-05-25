
export const ShowcaseVideo = () => {


    const handlePlay = async () => {
       try {
        const video = document.getElementById('video') as HTMLVideoElement | null;
        if (video) {
            video.play();
        } 

       } catch (error) {
        console.log(error)
       } 
    }

  return (
    <div 
    // Using css group class to make hover-effects apply to children based on parent hover state. Removes the need for js.
    className='group col-span-4 row-span-6 border space-y-4 rounded-large p-6 bg-bg-green hover:border-primary transition-all'>
        <h2 className='text-2xl font-bold'>Videos packed with expert knowledge</h2>
        <video id="video" onMouseEnter={() => {handlePlay()}} className="border bg-bg-green w-full group-hover:-translate-y-1 group-hover:shadow-primary transition-all rounded-large aspect-video" playsInline muted width="400" disablePictureInPicture poster="/thumbnail-Introduction.jpg" height="200" preload="auto">
            <source src="/introductionLesson-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    
  );
}