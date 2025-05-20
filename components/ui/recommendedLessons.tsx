import Image from "next/image";
import Button from "./button";


const RecommendedLessons = () => {
  return (
    <div className="space-y-4">
        <section className="flex gap-6">
            {/* Cards */}
            <div className="flex flex-col gap-4 p-6 justify-center border shadow-primaryRed rounded-small">
                <p>Module: Rule Design</p>
                <h3 className='text-xl font-bold'>Difficult rules simplified</h3>
                <Button title="Learn now"/>
            </div>
            <div className="flex flex-col gap-4 p-6 justify-center border shadow-primaryRed rounded-small">
                <p>Module: Rule Design</p>
                <h3 className='text-xl font-bold'>Difficult rules simplified</h3>
                <Button title="Learn now"/>
            </div>
            <div className="flex flex-col gap-4 p-6 justify-center border shadow-primaryRed rounded-small">
                <p>Module: Rule Design</p>
                <h3 className='text-xl font-bold'>Difficult rules simplified</h3>
                <Button title="Learn now"/>
            </div>
        </section>
        {/* Shuffle */}
        <button className="flex gap-2 cursor-pointer hover:text-slate-700">
            <p className="text-sm">Shuffle lessons</p>
            <Image src={"/icons/shuffle.svg"} alt="shuffle lessons" width={15} height={15}/>
        </button>
    </div>
  )
}

export default RecommendedLessons;