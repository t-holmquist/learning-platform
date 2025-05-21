import Image from "next/image";
import Button from "./button";


const RecommendedLessons = () => {
  return (
    <div className="space-y-6">
        <section className="flex gap-6">
            {/* Cards */}
            <div className="w-full sm:w-fit flex flex-col gap-4 p-6 justify-center border shadow-primaryRed rounded-small">
                <p>Module: Rule Design</p>
                <h3 className='text-xl font-bold'>Difficult rules simplified</h3>
                <Button title="Learn now"/>
            </div>
            <div className="hidden sm:flex flex-col gap-4 p-6 justify-center border shadow-primaryRed rounded-small">
                <p>Module: Rule Design</p>
                <h3 className='text-xl font-bold'>Difficult rules simplified</h3>
                <Button title="Learn now"/>
            </div>
            <div className="hidden sm:flex flex-col gap-4 p-6 justify-center border shadow-primaryRed rounded-small">
                <p>Module: Rule Design</p>
                <h3 className='text-xl font-bold'>Difficult rules simplified</h3>
                <Button title="Learn now"/>
            </div>
        </section>
        {/* Shuffle */}
        <button className="flex gap-2 cursor-pointer border hover:bg-bg-sandHover p-2 rounded-small w-fit bg-bg-sand">
            <p className="text-sm">Shuffle lessons</p>
            <Image src={"/icons/shuffle.svg"} alt="shuffle lessons" width={15} height={15}/>
        </button>
    </div>
  )
}

export default RecommendedLessons;