import Image from "next/image";

const LearningGoal = () => {
  return (
    <div className='flex flex-col px-4 p-8 gap-4 border rounded-large bg-bg-green shadow-primary'>
        <div className="flex gap-10">
            <h3 className='text-xl font-bold'>Your learning goal</h3>
            {/* Edit menu need to be created here */}
            <button className="flex gap-1 items-center cursor-pointer">
                <p className="text-primary">Edit</p>
                <Image src={"/icons/edit.svg"} width={15} height={15} alt="edit goal"/>
            </button>
        </div>
        <p>Publish a game</p>
    </div>
  )
}

export default LearningGoal;