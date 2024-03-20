'use client'

import { useEffect, useState } from 'react'
import Typewriter, { Options } from 'typewriter-effect'

interface TypewriterTextProps {
  sentences: string[];
  className?: string;
  options?: Partial<Options>;
}

function TypewriterText({ sentences, className, options }: TypewriterTextProps): React.JSX.Element {
  return (
     <div className='font-extrabold'>
          <Typewriter
            options={{
              strings: sentences,
              autoStart: true,
              loop: true,
              ...options
            }}
          />
        </div>
  )
}

export default TypewriterText
