import { useIsMobile } from "../../../hooks/useIsMobile";
import Text from "../../ui/Text";
import Button from "../../ui/Button";
import bgDesktop from "../../../public/bg-main-desktop.png";
import bgMobile from "../../../public/bg-main-mobile.png";
import pencilIcon from "../../../public/pencil.svg";

function Main() {
  const isMobile = useIsMobile();

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`relative w-full flex flex-col justify-center overflow-hidden ${isMobile ? "pt-28 pb-12" : "min-h-screen"}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})`,
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className={`relative z-10 mx-auto px-6 flex flex-col justify-center ${isMobile ? '' : 'pt-50'}`}>
        <div
          className={`max-w-2xl ${isMobile ? "text-center mx-auto" : "text-center"}`}
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white text-sm text-white">
              <img src={pencilIcon} alt="ícone magia" className="w-4 h-4" />

              <Text
                variant="small"
                tag="span"
                text="a magia da criação começa aqui"
              />
            </div>
          </div>
          <Text
            variant={isMobile ? "heading-sm-highlight" : "heading-xl-highlight"}
            tag="h1"
            className={`${isMobile ? "mb-4" : "mb-6"} leading-tight`}
            text={
              <>
                Design que pensa é design vivo,{" "}
                <Text
                  variant={
                    isMobile ? "heading-sm-highlight" : "heading-xl-highlight"
                  }
                  tag="span"
                  className="text-white"
                  text="com criatividade e magia."
                />
              </>
            }
          />
          <Text
            variant={isMobile ? "small" : "medium"}
            tag="p"
            className={`${isMobile ? "mb-6" : "mb-10"}`}
            text="Conecto design e desenvolvimento para transformar ideias em produtos digitais, com código limpo, responsivo e centrado na experiência do usuário."
          />
          <div className="flex flex-row justify-center gap-[18px] flex-wrap">
            <Button variant="outline" onClick={handleContact}>
              Fale Comigo
            </Button>
            <Button variant="primary" onClick={handleProjects}>
              Ver meus projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
