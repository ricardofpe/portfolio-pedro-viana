import Text from '../../../ui/Text'

export interface ProcessStep {
  number: string
  icon: string
  title: string
  description: string
}

interface ProcessCardProps {
  step: ProcessStep
  isMobile?: boolean
}

function ProcessCard({ step, isMobile = false }: ProcessCardProps) {
  return (
    <div className={`bg-[#0d0d0d] rounded-2xl p-5 flex flex-col gap-4 ${isMobile ? 'w-64 flex-shrink-0 snap-start' : ''}`}>
      <Text variant="xxsmall" tag="span" className="text-white" text={step.number} />
      <div className="flex items-center gap-2">
        <img src={step.icon} alt={step.title} className="w-5 h-5" />
        <Text variant="small-highlight" tag="h3" text={step.title} />
      </div>
      <Text variant="xsmall" tag="p" className="text-white" text={step.description} />
    </div>
  )
}

export default ProcessCard
