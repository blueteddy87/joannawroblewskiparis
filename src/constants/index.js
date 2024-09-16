import express from "../assets/projects/express.png";
import elegant from "../assets/projects/elegant.png";
import wyspy from "../assets/projects/wyspy.png";
import review1 from "../assets/review/review1.png";

export const HERO_CONTENT = `Jestem wykwalifikowanym, licencjonowanym przewodnikiem z ponad 30-letnim doświadczeniem, mieszkającym i pracującym w Paryżu. Oferuję szeroką gamę wycieczek po Paryżu i jego okolicach, dostosowanych do zainteresowań i potrzeb turystów.
Dlaczego warto wybrać mnie jako przewodnika po Paryżu?

Paryż to moje miasto, które znam jak własną kieszeń. Dzięki wieloletniemu doświadczeniu pomogę Ci odkryć zarówno popularne atrakcje turystyczne, jak i ukryte zakątki Paryża, które rzadko są odwiedzane przez turystów. Organizuję wycieczki, które dostosowuję indywidualnie do Twoich oczekiwań – od klasycznych tras po tematyczne zwiedzanie Paryża.
Wycieczki tematyczne po Paryżu

`;

export const ABOUT_TEXT = `Cześć! Jestem Joanna a Paryż to mój dom od lat 90. Od zawsze fascynuje mnie sztuka i architektura – to nie tylko moja praca, ale prawdziwa miłość, którą żyję każdego dnia. Mój dom, moje życie i każda moja opowieść są przesiąknięte tą pasją.

Paryż to miasto, które wciąż odkrywa się na nowo. Znam jego tajemnice, sekrety i ukryte skarby, których nie znajdziesz w typowych przewodnikach. W moich wycieczkach nie chodzi tylko o odwiedzenie zabytków – chcę, byś poczuł ducha miasta, które inspirowało największych artystów i architektów.

Każdy dzień spędzam na zgłębianiu historii Paryża, by dzielić się z Tobą nie tylko faktami, ale emocjami, które towarzyszą temu miastu. Jeśli chcesz odkryć Paryż pełen pasji, tajemnic i piękna, zapraszam Cię do wspólnej podróży.`;

export const ABOUT_TEEXT = `Proponuję tematyczne wycieczki po Paryżu, które odkrywają tajemnice tego magicznego miasta. Zwiedzisz miejsca, w których bywali francuscy królowie, Maria Skłodowska-Curie, Fryderyk Chopin czy Maria Walewska. Oprowadzę Cię po historycznych bulwarach i galeriach, a także pokażę najpiękniejsze widoki Paryża, takie jak panorama na wzgórzu Montmartre.
W pełni zorganizowane wycieczki po Paryżu

Pozwól mi zdjąć z Ciebie ciężar organizacji – zadbam o wszystkie szczegóły, w tym rezerwacje obiadów, rejsów po Sekwanie czy noclegów. Dzięki mojej wiedzy i doświadczeniu maksymalnie wykorzystasz swój czas w Paryżu.
Odkryj tajemnice Paryża z lokalnym przewodnikiem

Paryż jest miejscem narodzin can canu, inspiracją dla artystów takich jak Mickiewicz, a także miastem, które przyciąga największych malarzy, muzyków i pisarzy. Czy słyszałeś o bulwarach i galeriach Paryża? Czy chciałbyś zobaczyć miejsca, gdzie Mickiewicz wydał „Pana Tadeusza”?

Zapraszam do wspólnego zwiedzania najbardziej romantycznego miasta na świecie – Paryża! Niezależnie od tego, czy to Twoja pierwsza wizyta, czy chcesz odkryć nowe, mniej znane miejsca, gwarantuję niezapomniane wrażenia i pełne zanurzenie w kulturę i historię Paryża.`;

export const TOURSS = [
  {
    nazwa: "Paryż Express",
    czas: "2 dni",
    company: "Google Inc.",
    opis: `Rozpoczniemy w Dzielnicy Łacińskiej, odwiedzając Sorbonę, najstarszy uniwersytet Francji, oraz Panteon, gdzie spoczywa Maria Skłodowska-Curie. Spacerując po Ogrodach Luksemburskich, poczujemy atmosferę paryskiego życia.

    Następnie udamy się na Wyspę Cité, gdzie zobaczymy gotycką Katedrę Notre-Dame, jej gargulce i średniowieczne rzeźby. Zatrzymamy się przy średniowiecznym zegarze ozdobionym orłem polskim i pogonią litewską. Obejrzymy Pałac Królewski (obecnie Pałac Sprawiedliwości), Świętą Kaplicę i Conciergerie, gdzie więziono Marię Antoninę.

    Przechodząc mostem Pont Neuf na prawą stronę Sekwany, dotrzemy do Luwru, największego muzeum świata.

    Na koniec odwiedzimy Montmartre, gdzie zobaczymy starą winnicę i muzeum Montmartre. W pobliskiej kawiarni skosztujemy francuskiego wina w towarzystwie artystów, ciesząc się panoramicznym widokiem z Bazyliki Sacré-Cœur. `,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    nazwa: "Paryż Elegancki",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const TOURS = [
  {
    title: "Paryż Express",
    image: express,
    description:
      "Rozpoczniemy w Dzielnicy Łacińskiej, odwiedzając Sorbonę, najstarszy uniwersytet Francji, oraz Panteon. Spacerując po Ogrodach Luksemburskich, poczujemy atmosferę paryskiego życia. Następnie udamy się na Wyspę Cité, gdzie zobaczymy gotycką Katedrę Notre-Dame. Zatrzymamy się przy średniowiecznym zegarze ozdobionym orłem polskim i pogonią litewską. Obejrzymy Pałac Królewski i Conciergerie, gdzie więziono Marię Antoninę. Przechodząc mostem Pont Neuf na prawą stronę Sekwany, dotrzemy do Luwru, największego muzeum świata. Na koniec odwiedzimy Montmartre, gdzie zobaczymy starą winnicę i muzeum Montmartre. W pobliskiej kawiarni skosztujemy francuskiego wina w towarzystwie artystów, ciesząc się panoramicznym widokiem z Bazyliki Sacré-Cœur.",
    atrakcje: ["Panteon", "Notre-Dame", "Ogrody Luksemburskie", "Luwre", "Montmarte"],
  },
  {
    title: "Paryż Elegancki",
    image: elegant,
    description:
      "Spacer rozpoczynamy od tętniących życiem Wielkich Bulwarów, pełnych modnych kawiarni i ekskluzywnych sklepów. Zatrzymamy się przy Teatrze i Operze Garniera, aby odkryć ich tajemnice. Następnie udamy się na słynny Plac Vendôme, gdzie zobaczymy hotel Ritz oraz dom, w którym mieszkał Fryderyk Chopin. Przed wizytą na Placu Zgody, rzucimy okiem na eleganckie diamenty i wyszukaną biżuterię na Rue de la Paix. Spacerując Polami Elizejskimi, najsłynniejszą aleją świata, podziwiać będziemy luksusowe sklepy, salony samochodowe oraz słynny kabaret Lido. Na koniec zatrzymamy się przy Pałacu Elizejskim, siedzibie prezydenta Francji, który dawniej był pałacem Markizy de Pompadour.",
    atrakcje: ["Wielkie Bulwary", "Opera Garniera", "Hotel Ritz", "Pola Elizejskie"],
  },
  {
    title: "Wyspy Paryża",
    image: wyspy,
    description:
      "Spacer zaczniemy od Île de la Cité, gdzie zobaczymy gotycką Katedrę Notre-Dame i odkryjemy jej tajemnice. Odwiedzimy również Świętą Kaplicę z XIII-wiecznymi witrażami, a także Pałac Sprawiedliwości i dawną więzienną Conciergerie. Zatrzymamy się przy najstarszym zegarze miejskim ozdobionym polskim orłem, a potem przejdziemy przez targ kwiatowy. Następnie udamy się na spokojną Île Saint-Louis, gdzie zjemy słynne lody Berthillon i zobaczymy dom Marii Skłodowskiej-Curie oraz Bibliotekę Polską. Spacer zakończymy przy Hotelu Lambert, dawnym pałacyku Czartoryskich, gdzie bywali m.in. Chopin, Mickiewicz i Słowacki.",
    atrakcje: ["Île de la Cité", "Conciergerie", "Notre-Dame", "Pałac Sprawiedliwości"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const review = [
  {
  name: 'Beata Czerwińska',
  source: 'facebook',
  review: 'Polecam serdecznie panią Joannę Wróblewską, dwukrotnie zwiedzałam z tą przewodnik Louvre, pasjonatka z ogromną wiedzą, niezwykle taktowna, ciepła i serdeczna osoba😊😊',
  link: "https://www.facebook.com/search/top/?q=zapraszam%20na%20spacery%20do%20Wersalu"
  },
  {
  name: 'jadwigasienkiewicz3643',
  source: 'youtube',
  review: 'Przepiękny głos. Opowieść snuje się jak tajemnicza baśń. Tempo pozwala na zadumę, refleksję i przemyślenie tego, co słyszę. Ciepło robi się na duszy. Dawno nie słyszałam aby ktoś tak pięknie opowiadał o zwiedzanych miejscach. Gratuluję, to dar!',
  link: "https://www.youtube.com/watch?v=Kuhw78J-Au0"
  },
  {
  name: 'Beata Wierus',
  source: 'facebook',
  review: 'Serdecznie pozdrawiam mam nadzieję że jeszcze się spotkamy ?..Paryż magiczny jeśli tylko jeszcze wrócę to chciałabym zobaczyć Pani śladami ❤️dziękujemy',
  link: "https://www.facebook.com/reel/1049436806528357"
  },
  {
  name: 'Irena Molenda',
  source: 'facebook',
  review: 'Przemiła i bardzo kompetentna osoba. Polecam każdemu, kto chce poznać miasto.❤️',
  link: "https://www.facebook.com/reel/1049436806528357"
  },
  {
  name: 'romanmadue1',
  source: 'youtube',
  review: 'Świetne! Joanno - gratulacje! Z przyjemnością wysłuchałem. A jak wiesz kolegów przewodników (także nielicencjonowanych nie łatwo uwieść! Raz jeszcze z całego serca gratuluję! Jerzy R. Kaczyński',
  link: "https://www.youtube.com/watch?v=Kuhw78J-Au0"
  },
  {
  name: 'Anna Habiera Licencjonowany przewodnik po Francji AkwitAnia',
  source: 'facebook',
  review: 'Luwr tylko z Asią 💖',
  link: "https://www.facebook.com/joannawroblewskiparyz/posts/pfbid0P8Y4N1MbuyzTFjVQFeXhfmKyPFFRxgHxCezyXrWDtXvdM3p4K1vhDcKvsi1fA27tl?rdid=O0guVVUpB9DqLsI2"
  },
  {
  name: 'Olga Moździerz',
  source: 'facebook',
  review: 'Serdecznie pozdrawiamy i jeszcze raz dziękujemy za wspólnie spędzony czas !!!',
  link: "https://www.facebook.com/joannawroblewskiparyz/posts/pfbid05gVBM7sEZBFxmoVA5ARqxSGGCo3GB6o3HoxHU998qtqnE6fWaNWaBkxB3dWD9Bbkl?rdid=LKbZ9TYQkdhVolup"
  },
  {
  name: 'Bogusław Rzeźnicki',
  source: 'facebook',
  review: 'Pani Joanno, z Panią każda ulica i zakątek Paryża jest dziełem sztuki! Dziękujemy za wszystko!!!',
  link: "https://www.facebook.com/joannawroblewskiparyz/posts/pfbid02FBn4qjEHh9VwDnZPWTf9L7uiCB9ceLbCLUBymeA6e52tsg1LR8XWqn1oSYBGfVwRl?rdid=xyR0W4fRgK9YPKuh"
  },
  {
  name: 'barbarahoussa7216',
  source: 'youtube',
  review: 'Każda wizyta w towarzystwie Joanny wnosi nowe spojrzenie na artystow na temat ktorych , jak nam  by sie wydawalo  , juz wszystko słyszeliśmy.  Na tym polega jej talent. Malowniczy kadr i ciekawe materialy . Czekamy na nastepne wizyty',
  link: "https://www.youtube.com/watch?v=B5I7GWEutxs"
  },
  {
  name: 'Anna Mrozińska',
  source: 'facebook',
  review: 'Było fantastycznie, dziękuję 👍☀️☀️☀️',
  link: "https://www.facebook.com/joannawroblewskiparyz/posts/pfbid0mum4y7n9AiB3HBigotRTJbup2Fqw8Q6PrhvksKshpHMNXefdeAa8cTNxmAEJEEjVl?rdid=32WAMaX7uV5GfCUI"
  },
  

];
