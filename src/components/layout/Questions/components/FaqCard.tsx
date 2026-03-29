import Text from '../../../ui/Text'

export interface FaqItem {
  question: string
  answer: string
}

interface FaqCardProps {
  faq: FaqItem
  isOpen: boolean
  onToggle: () => void
}

function FaqCard({ faq, isOpen, onToggle }: FaqCardProps) {
  return (
    <div className="rounded-2xl bg-[#F0F0F0] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
      >
        <Text variant="small" tag="span" className="text-black" text={faq.question} />
        <svg
          className={`ml-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-5 pb-4 animate-[slideDown_0.2s_ease-out]">
          <Text variant="small" tag="p" className="text-[#414141]" text={faq.answer} />
        </div>
      )}
    </div>
  )
}

export default FaqCard
