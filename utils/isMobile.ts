'use client'

import { useEffect, useState } from "react";


export const isMobileByWidth = ( maxWidth = 768 ) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        const handleResize = () => {
        setIsMobile(window.innerWidth <= maxWidth);
        };

        // Runs the initial check for a mobile device
        handleResize();
        
        // Listen for changes after the initial check with the maxwidth in the depency array
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [maxWidth])
    
    return isMobile;

}