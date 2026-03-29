import { useIsMobile } from '../../../hooks/useIsMobile'
import Text from '../../ui/Text'
import Button from '../../ui/Button'
import footerIcon from '../../../public/footer-icon.svg'
import linkedinIcon from '../../../public/linkedin.svg'
import behanceIcon from '../../../public/behance.svg'

function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer id="contact" className="w-full py-16 px-6 bg-[#EBEBEB]">
      <div className={`md:max-w-[80%] mx-auto flex gap-10 ${isMobile ? 'flex-col' : 'flex-row items-center justify-between'}`}>

        <div className={`flex flex-col gap-4 ${isMobile ? 'items-center text-center' : 'max-w-lg'}`}>
          <div className="flex items-center gap-2 self-start">
            <span className="w-2.5 h-2.5 rounded-full bg-green inline-block" />
            <Text variant="xxsmall-highlight" tag="span" className="text-black tracking-widest uppercase" text="Disponível para novos projetos" />
          </div>

          <div>
            <Text
              variant={isMobile ? 'heading-sm-highlight' : 'heading-lg-highlight'}
              tag="h2"
              className="text-black"
              text="Hora de transformar"
            />
            <Text
              variant={isMobile ? 'heading-sm-highlight' : 'heading-lg-highlight'}
              tag="h2"
              className="text-purple"
              text="sua ideia em realidade"
            />
          </div>

          <Text
            variant="small"
            tag="p"
            className="text-black"
            text="Se você já tem algo em mente ou quer evoluir, vamos tirar isso do papel. vamos conversar e construir isso da melhor forma possível."
          />

          <div>
            <Button variant="primary" onClick={() => window.open('mailto:pdrlucas2003@gmail.com')}>
              Entre em contato comigo
            </Button>
          </div>
        </div>

        <div className={`flex flex-col items-center gap-4 ${isMobile ? '' : 'min-w-[200px]'}`}>
          <img src={footerIcon} alt="Footer illustration" className="w-24" />
          <Text variant="small" tag="p" className="text-black text-center" text="Você pode me encontrar nas redes sociais" />

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/pedrovianas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              <Text variant="small" tag="span" className="text-black" text="Linkedin" />
            </a>
            <a href="https://www.behance.net/PedroLucasVianna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <img src={behanceIcon} alt="Behance" className="w-5 h-5" />
              <Text variant="small" tag="span" className="text-black" text="Behance" />
            </a>
          </div>

          <Text variant="xsmall" tag="p" className="text-black/40" text="pdrlucas2003@gmail.com" />
        </div>
      </div>
    </footer>
  )
}

export default Footer