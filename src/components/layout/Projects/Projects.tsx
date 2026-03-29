import { useState } from 'react'
import { useIsMobile } from '../../../hooks/useIsMobile'
import Text from '../../ui/Text'
import Button from '../../ui/Button'
import ProjectCard, { type ProjectData } from './components/ProjectCard'
import project1 from '../../../public/project-1.svg'
import project2 from '../../../public/project-2.svg'
import project3 from '../../../public/project-3.svg'
import arrowIcon from '../../../public/arrow.svg'

const projects: ProjectData[] = [
  {
    image: project1,
    title: 'Hopion - Web Site Design',
    description: (
      <>
        Hopion é um <Text variant="xsmall-highlight" tag="span" text="projeto de UX/UI e desenvolvimento," /> focado em criar uma experiência digital moderna, intuitiva e funcional, com usabilidade e clareza.
      </>
    ),
    links: [
      { label: 'Ver projeto', href: '#', variant: 'primary', isVerProjeto: true },
      { label: 'Behance', href: '#', variant: 'behance' },
      { label: 'Github', href: '#', variant: 'github' },
    ],
  },
  {
    image: project2,
    title: 'MDF| Ecommerce UI Redesign',
    description: (
      <>
        O desafio deste projeto <Text variant="xsmall-highlight" tag="span" text="foi transformar uma experiência mais intuitiva, moderna e visualmente estratégica," /> de UX Design com interações desenvolvidas.
      </>
    ),
    links: [
      { label: 'Ver projeto', href: '#', variant: 'primary', isVerProjeto: true },
      { label: 'Behance', href: '#', variant: 'behance' },
    ],
  },
  {
    image: project3,
    title: 'Last.FM Redesign|UX Case',
    description: (
      <>
        O Last.fm rastreia suas músicas para gerar estatísticas; neste projeto, redesenhei a interface para torná-la mais <Text variant="xsmall-highlight" tag="span" text="intuitiva, organizada, sem perder sua essência." />
      </>
    ),
    links: [
      { label: 'Behance', href: '#', variant: 'behance' },
    ],
  },
]

function MobileCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % projects.length)
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative">
          <img
            src={projects[current].image}
            alt={projects[current].title}
            className="w-full object-cover rounded-2xl"
          />
          {current < projects.length - 1 && (
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-lg"
              aria-label="Próximo projeto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          )}
          {current > 0 && (
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-lg"
              aria-label="Projeto anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 bg-bg-card rounded-2xl px-4 pb-5 pt-4">
        <Text variant="small-highlight" tag="h3" text={projects[current].title} />
        <Text variant="xsmall" tag="p" className="text-white" text={projects[current].description} />
        <div className="flex gap-10 flex-wrap">
          {projects[current].links.map((link, i) => (
            <Button key={i} variant={link.variant} keepSize onClick={() => window.open(link.href, '_blank')}>
              {link.isVerProjeto ? (
                <span className="flex items-center gap-[8.75px]">
                  Ver projeto
                  <img src={arrowIcon} alt="" style={{ width: '12.5px', height: '12.5px' }} />
                </span>
              ) : link.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${i === current ? 'bg-purple w-4' : 'bg-white/30 w-2'}`}
            aria-label={`Ir para projeto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const isMobile = useIsMobile()

  return (
    <section id="projects" className="w-full py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <Text
          variant={isMobile ? 'heading-sm-highlight' : 'heading-md-highlight'}
          tag="h2"
          className="mb-3"
          text="Projetos Transformados em Soluções"
        />
        <Text
          variant={isMobile ? 'small' : 'medium'}
          tag="p"
          className="text-white max-w-xl mx-auto"
          text="Cada projeto representa a aplicação de design e desenvolvimento, seja em desafios reais ou conceituais."
        />
      </div>

      {isMobile ? (
        <MobileCarousel />
      ) : (
        <div className="grid gap-6 grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}

    </section>
  )
}

export default Projects
