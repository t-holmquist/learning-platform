'use client'

import { useState } from 'react';
import { motion } from 'motion/react';


export const Toggle = () => {
  
  const [isDark, setIsDark] = useState(false);

  return (
      <div className="flex items-center gap-3">
        <div onClick={() => setIsDark(!isDark)} className={`flex cursor-pointer ${isDark ? 'bg-accent' : 'bg-slate-600'} items-center px-1 w-10 h-5 rounded-full`}
        style={{
          justifyContent: isDark ? "flex-end" : "flex-start"
        }}
        >
          <motion.div layout className="bg-slate-300 h-3 w-3 rounded-full"/>
        </div>
      </div>
  );
}