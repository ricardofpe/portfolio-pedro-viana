import { useState } from 'react'
import { useIsMobile } from '../../../hooks/useIsMobile'
import Text from '../../ui/Text'
import FaqCard, { type FaqItem } from './components/FaqCard'
import questionsIcon from '../../../public/questions-icon.svg'

const faqs: FaqItem[] = [
  { question: 'Além de sites, você também desenvolve aplicações mobile?', answer: 'Sim, tenho experiência com desenvolvimento mobile utilizando React Native, criando aplicações para iOS e Android.' },
  { question: 'Preciso chegar com todas as ideias prontas?', answer: 'Não. Podemos construir juntos desde o início. Basta ter uma ideia ou problema para resolver.' },
  { question: 'Qual é o tempo médio de entrega?', answer: 'Depende da complexidade do projeto. Projetos simples levam de 1 a 2 semanas, projetos maiores podem levar mais tempo.' },
  { question: 'Você consegue lidar com projetos de grande porte?', answer: 'Sim, tenho experiência em projetos de diferentes escalas, sempre adaptando o processo às necessidades do cliente.' },
  { question: 'Como você define o valor de um projeto?', answer: 'O valor é definido com base no escopo, complexidade e prazo. Após entender o projeto, envio uma proposta personalizada.' },
  { question: 'Você hospeda os sites que desenvolve?', answer: 'Sim, posso auxiliar na hospedagem e configuração do domínio, além de oferecer suporte após o lançamento.' },
]

function Questions() {
  const isMobile = useIsMobile()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section id="faq" className="w-full py-16 px-6 bg-black">
      <div className={`max-w-6xl mx-auto flex gap-10 ${isMobile ? 'flex-col' : 'flex-row'}`}>
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