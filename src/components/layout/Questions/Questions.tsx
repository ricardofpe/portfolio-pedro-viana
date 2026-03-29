import { useState } from 'react'
import { useIsMobile } from '../../../hooks/useIsMobile'
import Text from '../../ui/Text'
import FaqCard, { type FaqItem } from './components/FaqCard'
import questionsIcon from '../../../public/questions-icon.svg'

const faqs: FaqItem[] = [
  { question: 'Preciso chegar com todas as ideias prontas?', answer: 'Posso te ajudar desde o início, desenvolvendo ideias, estruturando funcionalidades e pensando junto em cada etapa do projeto. O mais importante é ter uma noção dos seus objetivos e de quem você quer alcançar — o resto a gente constrói juntos, com estratégia e clareza ao longo do processo.' },
  { question: 'Qual é o tempo médio de entrega?', answer: 'Cada projeto é único, por isso o tempo é definido de forma personalizada antes do início. Assim, você tem total clareza sobre prazos e etapas, garantindo um processo organizado e sem surpresas.' },
  { question: 'Você consegue lidar com projetos de grande porte?', answer: 'Quando necessário, conto com uma equipe de profissionais à disposição para atender demandas maiores com qualidade e eficiência. Isso garante que o projeto avance com consistência em todas as etapas — e que você nunca fique na mão. Tudo é alinhado com transparência desde o início.' },
  { question: 'Como você define o valor de um projeto?', answer: 'Levo em consideração fatores como complexidade, funcionalidades, escopo e prazo. Após entender melhor o que você precisa, apresento um orçamento claro e transparente, alinhado com o que será entregue em cada etapa do projeto.' },
  { question: 'Você hospeda os sites que desenvolve?', answer: 'Não realizo a hospedagem diretamente. Mas conto com parceiros que podem cuidar dessa etapa com segurança e confiabilidade. Além disso, posso te auxiliar em toda a configuração inicial para garantir que o site esteja no ar, rápido e funcionando perfeitamente desde o início.' },
]

function Questions() {
  const isMobile = useIsMobile()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section id="faq" className="w-full py-16 px-6 bg-black">
      <div className={`md:max-w-[80%] mx-auto flex gap-10 ${isMobile ? 'flex-col' : 'flex-row'}`}>
        <div className={`flex flex-col gap-4 ${isMobile ? 'text-center items-center' : 'w-72 flex-shrink-0'}`}>
          <Text variant={isMobile ? 'heading-sm-highlight' : 'heading-md-highlight'} tag="h2" text="Perguntas Frequentes" />
          <div className="bg-[#1a1a1a] rounded-2xl p-4">
            <Text
              variant="small"
              tag="p"
              text="Ao longo dos projetos, percebi que muitos clientes que já atendi tinham dúvidas semelhantes sobre meu trabalho, prazos e forma de atuação. Por isso, reuni aqui as principais para que você entenda como tudo funciona antes mesmo de entrarmos em contato."
            />
          </div>
          {!isMobile && <img src={questionsIcon} alt="Perguntas frequentes" className="w-40 mt-2" />}
        </div>

        <div className="flex flex-col gap-3 flex-1">
          {faqs.map((faq, index) => (
            <FaqCard
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Questions