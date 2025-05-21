import Image from "next/image";
import Link from "next/link";


const Footer = () => {

    const footerItems = ['Privacy Policy', 'Terms of service', 'Cookie policy'];


  return (
   <footer className="mt-8 mb-20 sm:mb-0 rounded-t-large flex flex-col bg-bg-red sm:flex-row gap-8 sm:gap-0 w-full p-8 justify-between items-center border-t ">
    <Link href={"/"}>
        <Image src={"/icons/Logo.svg"} width={130} height={100} alt="Logo"/>
    </Link>
    <div className="flex gap-8">
        {footerItems.map((item, idx) => (
            <button key={idx} className="hover:text-slate-700 cursor-pointer text-xs">{item}</button>
        ))}
    </div>
        <p className="text-xs">Copyright © BoardCraft Studio</p>
   </footer>
  )
}

export default Footer