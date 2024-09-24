import { motion } from "framer-motion";
import express from "../assets/projects/express.avif";
import elegant from "../assets/projects/elegant.avif";
import wyspy from "../assets/projects/wyspy.avif";

const Tours = () => {
  const TOURS = [
    {
      title: "Paryż Express",
      image: express,
      description:
        "Rozpoczniemy w Dzielnicy Łacińskiej, odwiedzając Sorbonę, najstarszy uniwersytet Francji, oraz Panteon. Spacerując po Ogrodach Luksemburskich, poczujemy atmosferę paryskiego życia. Następnie udamy się na Wyspę Cité, gdzie zobaczymy gotycką Katedrę Notre-Dame. Zatrzymamy się przy średniowiecznym zegarze ozdobionym orłem polskim i pogonią litewską. Obejrzymy Pałac Królewski i Conciergerie, gdzie więziono Marię Antoninę. Przechodząc mostem Pont Neuf na prawą stronę Sekwany, dotrzemy do Luwru, największego muzeum świata. Na koniec odwiedzimy Montmartre, gdzie zobaczymy starą winnicę i muzeum Montmartre. W pobliskiej kawiarni skosztujemy francuskiego wina w towarzystwie artystów, ciesząc się panoramicznym widokiem z Bazyliki Sacré-Cœur.",
      atrakcje: [
        "Panteon",
        "Notre-Dame",
        "Ogrody Luksemburskie",
        "Luwre",
        "Montmarte",
      ],
    },
    {
      title: "Paryż Elegancki",
      image: elegant,
      description:
        "Spacer rozpoczynamy od tętniących życiem Wielkich Bulwarów, pełnych modnych kawiarni i ekskluzywnych sklepów. Zatrzymamy się przy Teatrze i Operze Garniera, aby odkryć ich tajemnice. Następnie udamy się na słynny Plac Vendôme, gdzie zobaczymy hotel Ritz oraz dom, w którym mieszkał Fryderyk Chopin. Przed wizytą na Placu Zgody, rzucimy okiem na eleganckie diamenty i wyszukaną biżuterię na Rue de la Paix. Spacerując Polami Elizejskimi, najsłynniejszą aleją świata, podziwiać będziemy luksusowe sklepy, salony samochodowe oraz słynny kabaret Lido. Na koniec zatrzymamy się przy Pałacu Elizejskim, siedzibie prezydenta Francji, który dawniej był pałacem Markizy de Pompadour.",
      atrakcje: [
        "Wielkie Bulwary",
        "Opera Garniera",
        "Hotel Ritz",
        "Pola Elizejskie",
      ],
    },
    {
      title: "Wyspy Paryża",
      image: wyspy,
      description:
        "Spacer zaczniemy od Île de la Cité, gdzie zobaczymy gotycką Katedrę Notre-Dame i odkryjemy jej tajemnice. Odwiedzimy również Świętą Kaplicę z XIII-wiecznymi witrażami, a także Pałac Sprawiedliwości i dawną więzienną Conciergerie. Zatrzymamy się przy najstarszym zegarze miejskim ozdobionym polskim orłem, a potem przejdziemy przez targ kwiatowy. Następnie udamy się na spokojną Île Saint-Louis, gdzie zjemy słynne lody Berthillon i zobaczymy dom Marii Skłodowskiej-Curie oraz Bibliotekę Polską. Spacer zakończymy przy Hotelu Lambert, dawnym pałacyku Czartoryskich, gdzie bywali m.in. Chopin, Mickiewicz i Słowacki.",
      atrakcje: [
        "Île de la Cité",
        "Conciergerie",
        "Notre-Dame",
        "Pałac Sprawiedliwości",
      ],
    },
  ];
  return (
    <>
      <div id="tours" className="pt-8 pb-4 max-w-[1800px] mx-auto">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Propozycje zwiedzania
        </motion.h1>
        <div>
          {TOURS.map((tours, index) => (
            <div
              key={index}
              className="mb-8 flex flex-wrap px-6 mx-auto lg:justify-center w-full"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full flex justify-center lg:w-1/4 mb-6" // Flexbox i centrowanie obrazu na mniejszych ekranach
              >
                <img
                  src={tours.image}
                  width={300}
                  height={300}
                  alt={tours.title}
                  className="rounded md:mr-6"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full  lg:w-3/4" // Na mniejszych ekranach zajmie 50%, a na dużych 75%
              >
                <h2 className="mb-2 font-semibold">{tours.title}</h2>
                <p className="mb-4 text-neutral-300 font-light tracking-tight text-justify">
                  {tours.description}
                </p>
                {tours.atrakcje.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div id="review"></div>
    </>
  );
};

export default Tours;
