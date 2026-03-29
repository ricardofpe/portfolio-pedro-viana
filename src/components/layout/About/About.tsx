import { useIsMobile } from '../../../hooks/useIsMobile'
import Text from '../../ui/Text'
import ProcessCard, { type ProcessStep } from './components/ProcessCard'
import aboutIcon from '../../../public/about-icon.svg'
import linkedinIcon from '../../../public/linkedin.svg'
import behanceIcon from '../../../public/behance.svg'
import searchPurple from '../../../public/search-purple.svg'
import pencilPurple from '../../../public/pencil-purple.svg'
import codePurple from '../../../public/code-purple.svg'
import sendPurple from '../../../public/send-purple.svg'

const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: searchPurple,
    title: 'Pesquisa',
    description: 'Entendo o contexto, objetivos e público para guiar decisões com clareza e propósito.',
  },
  {
    number: '02',
    icon: pencilPurple,
    title: 'Design',
    description: 'Estruturo a experiência e crio interfaces intuitivas, alinhando usabilidade com estética.',
  },
  {
    number: '03',
    icon: codePurple,
    title: 'Desenvolvimento',
    description: 'Transformo o design em um produto real, com código limpo, responsivo e focado em performance.',
  },
  {
    number: '04',
    icon: sendPurple,
    title: 'Entrega',
    description: 'Entrego um projeto completo, pronto para uso, com consistência visual e funcional em cada detalhe.',
  },
]

function About() {
  const isMobile = useIsMobile()

  return (
    <>
      <section id="about" className="w-full py-16 px-6 bg-white">
        <div className={`md:max-w-[80%] mx-auto flex gap-10 ${isMobile ? 'flex-col items-center' : 'flex-row items-start'}`}>
          {!isMobile && (
            <div className="flex-shrink-0 flex justify-center">
              <img src={aboutIcon} alt="Sobre mim" className="w-80" />
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div>
              <Text variant={isMobile ? 'heading-sm-highlight' : 'heading-md-highlight'} tag="h2" className="mb-1 text-black" text="Sobre mim" />
              <Text variant="xsmall" tag="p" className="text-black" text="UX/UI Designer | Product Designer | Graphic Designer" />
            </div>

            <Text
              variant="small"
              tag="p"
              className="text-black"
              text={
                <>
                  <Text variant="small-highlight" tag="span" className="text-black" text="Designer com foco em UX/UI e atuação em desenvolvimento," /> em constante evolução e aprimoramento técnico.
                </>
              }
            />

            <Text variant="small" tag="p" className="text-black"
              text="Busco sempre explorar novas ferramentas e acompanhar tendências para criar experiências modernas, intuitivas e funcionais."
            />

            <Text
              variant="small"
              tag="p"
              className="text-black"
              text={
                <>
                  Sou apaixonado por transformar ideias em produtos digitais que realmente fazem sentido para as pessoas, <Text variant="small-highlight" tag="span" className="text-black" text="unindo estética e lógica desde o início do processo." />
                </>
              }
            />

            <Text variant="small" tag="p" className="text-black"
              text="Além disso, tenho grande interesse em aprender novos idiomas e expandir minha visão de mundo."
            />

            <div className={`flex gap-6 mt-2 ${isMobile ? 'justify-between w-full' : ''}`}>
              <a href="https://www.linkedin.com/in/pedrovianas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                <Text variant="small" tag="span" className="text-black" text="Linkedin" />
              </a>
              <a href="https://www.behance.net/PedroLucasVianna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <img src={behanceIcon} alt="Behance" className="w-5 h-5" />
                <Text variant="small" tag="span" className="text-black" text="Behance" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`w-full px-6 bg-white ${isMobile ? 'pt-6 pb-16' : 'py-16'}`}>
        <div className="md:max-w-[80%] mx-auto">
          <div className="mb-8">
            <Text variant={isMobile ? 'heading-sm-highlight' : 'heading-md-highlight'} tag="h2" className="mb-2 text-black" text="Como transformo ideias em soluções" />
            <Text variant="small" tag="p" className="text-black" text="Transformo ideias em produtos digitais estratégicos, pensados com clareza e propósito." />
          </div>

          <div className={`${isMobile ? 'flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2' : 'grid grid-cols-4 gap-4'}`}>
            {processSteps.map((step, index) => (
              <ProcessCard key={index} step={step} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About