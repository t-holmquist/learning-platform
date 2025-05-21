import Image from "next/image"


const Achievements = () => {
  return (
    <section className="flex flex-col gap-6">
        <h2 className="font-bold text-2xl">Latest Achievements</h2>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center h-15 w-15 p-4 bg-secondary border rounded-small"> 
              <Image src={"/icons/medal.svg"} width={35} height={35} alt="achievement"/>
            </div>
            <p className="text-xs sm:text-sm">1 lesson completed</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center h-15 w-15 p-4 bg-secondary border rounded-small"> 
              <Image src={"/icons/hourglass.svg"} width={20} height={20} alt="achievement"/>
            </div>
            <p className="text-xs sm:text-sm">3-day streak</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center h-15 w-15 p-4 bg-secondary border rounded-small"> 
              <Image src={"/icons/wand.svg"} width={35} height={35} alt="achievement"/>
            </div>
            <p className="text-xs sm:text-sm">Generated 1 idea</p>
          </div>
        </div>
         <button className="flex gap-2 border cursor-pointer hover:bg-bg-sandHover p-2 rounded-small w-fit bg-bg-sand">
            <p className="text-sm">See all achievements</p>
        </button>
        
    </section>
  )
}

export default Achievements