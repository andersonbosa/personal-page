'use client'
import { useTheme } from '@/contexts/ThemeContext'
import {
  type Container,
  type ISourceOptions,
} from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useMemo, useState } from 'react'
import { loadFull } from 'tsparticles'

interface BackgroundProps { }

function ParticlesBackground(props: BackgroundProps): JSX.Element {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(function initializeParticlesEngine() {
    /**
     * @see {docs} https://particles.js.org/docs/#md:reactjs
     * @see {docs} https://github.com/tsparticles/react/#readme
     * @see {example} https://github.com/tsparticles/presets/blob/main/presets/links/README.md
     */
    initParticlesEngine(async function initializeEngine(engine) {
      await loadFull(engine, false)
    })
      .then(function onInit() { setInit(true) })
  }, [])

  // async function particlesLoaded(container?: Container): Promise<void> {
  //   console.log('components/atoms/ParticlesBackground.tsx#particlesLoaded', container)
  // }

  const themeCtx = useTheme()

  /**
   * @see {docs} https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html
   */
  const particlesOptions: ISourceOptions = useMemo(() => {
    // console.log(`components/atoms/ParticlesBackground.tsx#useMemo ${themeCtx.theme}/${themeCtx.isLightTheme}`)
    return {
      detectRetina: true,
      fpsLimit: 120,
      background: {
        color: themeCtx.isLightTheme ? '#ffffff' : '#000000',
        position: '50% 50%',
        repeat: 'no-repeat',
        size: 'cover',
      },
      // interactivity: {
      //   events: {
      //     // resize: true,
      //     onHover: {
      //       enable: false,
      //       mode: 'grab',
      //       parallax: {
      //         enable: true,
      //         smooth: 20,
      //         force: 10,
      //       },
      //     },
      //     onClick: {
      //       enable: true,
      //       mode: 'repulse',
      //     },
      //   },
      //   modes: {
      //     grab: {
      //       distance: 64,
      //       line_linked: {
      //         opacity: 0.075,
      //       },
      //     },
      //     repulse: {
      //       distance: 128,
      //       duration: 0.3,
      //     },
      //   },
      // },
      particles: {
        color: {
          value: themeCtx.isLightTheme ? '#000000' : '#ffffff',
        },
        links: {
          enable: true,
          color: themeCtx.isLightTheme ? '#000000' : '#ffffff',
          distance: 100,
          opacity: 0.4,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          enable: true,
          direction: 'none',
          outModes: {
            default: 'bounce',
          },
          random: false,
          straight: false,
          speed: 1,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    }
  }, [themeCtx.isLightTheme])

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particlesOptions}
      // particlesLoaded={particlesLoaded}
      />
    )
  }

  return <></>

}

export default ParticlesBackground
