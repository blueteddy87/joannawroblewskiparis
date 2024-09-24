import aboutImg from "../assets/about.avif";
import { motion } from "framer-motion";

const About = () => {
  const ABOUT_TEXT = `Cześć! Jestem Joanna a Paryż to mój dom od lat 90. Od zawsze fascynuje mnie sztuka i architektura – to nie tylko moja praca, ale prawdziwa miłość, którą żyję każdego dnia. Mój dom, moje życie i każda moja opowieść są przesiąknięte tą pasją.
  Paryż to miasto, które wciąż odkrywa się na nowo. Znam jego tajemnice, sekrety i ukryte skarby, których nie znajdziesz w typowych przewodnikach. W moich wycieczkach nie chodzi tylko o odwiedzenie zabytków – chcę, byś poczuł ducha miasta, które inspirowało największych artystów i architektów.

  Każdy dzień spędzam na zgłębianiu historii Paryża, by dzielić się z Tobą nie tylko faktami, ale emocjami, które towarzyszą temu miastu. Jeśli chcesz odkryć Paryż pełen pasji, tajemnic i piękna, zapraszam Cię do wspólnej podróży.`;
  return (
    <div id="about" className="pt-8 pb-4">
      <h1 className="my-20 text-center text-4xl">
        O&nbsp;
        <span className="text-white">mnie</span>
      </h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-4/6 max-w-lg"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2  py-6 px-9 font-light tracking-wider text-neutral-200 text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
