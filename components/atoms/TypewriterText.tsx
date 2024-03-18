'use client'

import Typewriter, { Options } from 'typewriter-effect'

interface TypewriterTextProps {
  sentences: string[];
  className?: string;
  options?: Partial<Options>;
}

function TypewriterText({ sentences, className, options }: TypewriterTextProps): React.JSX.Element {
  return (
    <span className={`flex ${className}`}>
      <div className='inline-flex gap-1'>
        <p>I am a experienced</p>
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
      </div>
    </span>
  )
}

export default TypewriterText
