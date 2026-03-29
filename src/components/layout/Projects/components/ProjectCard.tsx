import React from 'react'
import Text from '../../../ui/Text'
import Button from '../../../ui/Button'
import arrowIcon from '../../../../public/arrow.svg'

export interface ProjectData {
  image: string
  title: string
  description: React.ReactNode
  links: { label: string; href: string; variant: 'primary' | 'outline' | 'behance' | 'github'; isVerProjeto?: boolean }[]
}

interface ProjectCardProps {
  project: ProjectData
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex justify-center align-middle flex-col gap-4 bg-bg-card rounded-2xl overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full object-cover" />
      <div className="px-4 pb-5 flex flex-col gap-3 flex-1">
        <Text variant="heading-sm-highlight" tag="h3" text={project.title} />
        <Text variant="small" tag="p" className="text-white flex-1" text={project.description} />
        <div className="flex gap-2 flex-wrap">
          {project.links.map((link, i) => (
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
    </div>
  )
}

export default ProjectCard
