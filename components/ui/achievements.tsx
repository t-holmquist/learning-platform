import Image from "next/image"


const Achievements = () => {
  return (
    <section className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Latest Achievements</h2>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-secondary border rounded-small"> 
              <Image src={"/icons/medal.svg"} width={25} height={25} alt="achievement"/>
            </div>
            <p className="text-xs sm:text-sm">1 lesson completed</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-secondary border rounded-small"> 
              <Image src={"/icons/timeglass.svg"} width={25} height={25} alt="achievement"/>
            </div>
            <p className="text-xs sm:text-sm">3-day streak</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-secondary border rounded-small"> 
              <Image src={"/icons/sparkle.svg"} width={25} height={25} alt="achievement"/>
            </div>
            <p className="text-xs sm:text-sm">Generated 1 idea</p>
          </div>
        </div>
         <button className="flex gap-2 cursor-pointer hover:text-slate-700">
            <p className="text-sm">See all achievements</p>
        </button>
        
    </section>
  )
}

export default Achievements