'use client'

import Image from 'next/image'

interface AboutMeProps { }

const AboutMe: React.FC<AboutMeProps> = ({ }) => {
  return (
    <div
      id="afterTheHeroHeader"
      className="min-h-screen w-full -- flex items-center justify-center content-start -- flex-wrap lg:flex-nowrap -- p-8"
    >
      <div className="w-full lg:w-[40%] -- flex justify-center items-center shrink-1 ">
        <Image
          className="mask mask-squircle object-cover"
          src={'https://github.com/andersonbosa.png'}
          height={321}
          width={321}
          style={{ color: 'transparent' }}
          alt="Perfil image"
        />
      </div>

      <div className="w-full lg:w-1/2 lg:max-w-[600px] -- basis-9/12 grow -- text-center  ">
        <h1 className="text-4xl font-bold -- text-primary">Olá! Eu sou o Anderson</h1>
        <br />
        <section className="text-justify">
          <p >
            Em minha função mais recente na Conviso como Engenheiro de Software Backend, onde passei um ano e meio, aprimorei minhas habilidades de resolução de problemas, otimização de serviços, desenvolvimento de APIs e liderança na manutenção de sistemas críticos.
          </p>
          <br />
          <p>
            Anteriormente, ainda na Conviso como Analista de Segurança, eu adquiri experiência em auditorias automatizadas e manuais de sistemas web, móveis e redes. Também conduzi de forma solo como Penetration Tester projetos para amadurecer a maturidade da segurança das aplicações de nossos usuários, realizando avaliação das vulnerabilidades encontradas e auxiliando na correção ou mitigação dessas.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AboutMe
