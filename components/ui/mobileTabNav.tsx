'use client'

import Image from "next/image"
import Link from "next/link";
import { usePathname } from 'next/navigation'

const MobileTabNav = () => {

  const pathName = usePathname();


  
  
  return (
    // Mobile nav test
    <div className={`flex justify-center ${pathName == "/sign-in" && "hidden"} ${pathName == "/" && "hidden"} `}>
        <div className="sm:hidden w-11/12 flex justify-between items-center fixed bottom-4 px-6 py-3  rounded-full bg-bg-red border">
          <Link href={"/dashboard"}>
            <svg className={`${pathName == '/dashboard' && 'fill-primary'}`} width="35" height="35" viewBox="0 0 34 36" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.875 34C33.875 34.4973 33.6775 34.9742 33.3258 35.3258C32.9742 35.6775 32.4973 35.875 32 35.875H2C1.50272 35.875 1.02581 35.6775 0.674175 35.3258C0.322544 34.9742 0.125 34.4973 0.125 34V14.2938C0.124802 14.008 0.189907 13.726 0.315343 13.4693C0.440778 13.2126 0.623225 12.9879 0.84875 12.8125L15.8487 1.14438C16.1779 0.88834 16.583 0.749329 17 0.749329C17.417 0.749329 17.8221 0.88834 18.1513 1.14438L33.1512 12.8125C33.3768 12.9879 33.5592 13.2126 33.6847 13.4693C33.8101 13.726 33.8752 14.008 33.875 14.2938V34ZM30.125 32.125V15.2088L17 5.00125L3.875 15.2088V32.125H30.125Z"/>
            </svg>
          </Link>
          <Link href={"/learn"}>
            <svg className={`${pathName == '/learn' ? 'stroke-primary' : 'stroke-black'}`} fill="none" width="40" height="40" viewBox="0 0 38 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5601 6.03123C18.5601 6.03123 10.0288 -1.28127 1.49756 4.81248V31.625C10.0288 25.5312 18.5601 31.625 18.5601 31.625M18.5601 6.03123C18.5601 6.03123 27.0913 -1.28127 35.6226 4.81248V31.625C27.0913 25.5312 18.5601 31.625 18.5601 31.625M18.5601 6.03123V31.625" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <svg className={`${pathName == '/design-assets' ? 'stroke-primary' : 'stroke-black'}`} width="36" height="36" viewBox="0 0 133 133" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M124.25 1H88C83.9959 1 80.75 4.24594 80.75 8.25V44.5C80.75 48.5041 83.9959 51.75 88 51.75H124.25C128.254 51.75 131.5 48.5041 131.5 44.5V8.25C131.5 4.24594 128.254 1 124.25 1Z" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M51.75 131.5V37.25C51.75 35.3272 50.9862 33.4831 49.6265 32.1235C48.2669 30.7638 46.4228 30 44.5 30H8.25C6.32718 30 4.48311 30.7638 3.12348 32.1235C1.76384 33.4831 1 35.3272 1 37.25V124.25C1 126.173 1.76384 128.017 3.12348 129.377C4.48311 130.736 6.32718 131.5 8.25 131.5H95.25C97.1728 131.5 99.0169 130.736 100.377 129.377C101.736 128.017 102.5 126.173 102.5 124.25V88C102.5 86.0772 101.736 84.2331 100.377 82.8735C99.0169 81.5138 97.1728 80.75 95.25 80.75H1" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className={`${pathName == '/account' ? 'border-primary border rounded-full' : 'border rounded-full'}`}>
            <Image src={"/mathias.webp"} width={40} height={40} alt="account"/>
          </div>
        </div>
    </div>
  )
}

export default MobileTabNav