import { 
  Dancing_Script, 
  Anton, 
  Bebas_Neue, 
  Charm, 
  Cinzel, 
  Comfortaa, 
  Courgette, 
  Crimson_Text, 
  Dosis, 
  Great_Vibes, 
  Indie_Flower,
  Josefin_Sans,
  Kalam,
  Lato,
  Libre_Baskerville,
  Lobster,
  Montserrat,
  Open_Sans,
  Oswald,
  Pacifico,
  Playfair_Display,
  Poppins,
  Quicksand,
  Raleway,
  Roboto,
  Roboto_Condensed,
  Roboto_Mono,
  Roboto_Slab,
  Rubik,
  Source_Sans_3,
  Source_Serif_4,
  Space_Grotesk,
  Space_Mono,
  Ubuntu,
  Work_Sans
} from 'next/font/google';


const dancingScript = Dancing_Script({
  subsets: ['latin'],
});

const anton = Anton({
  subsets: ['latin'],
  weight: "400"
});

const bebasNeu = Bebas_Neue({
  subsets: ['latin'],
  weight: "400",
});

const charm = Charm({
  weight: ["400", "700"],
  subsets: ['latin'],
});

const cinzel = Cinzel({
  subsets: ['latin'],
});

const comfortaa = Comfortaa({
  subsets: ['latin'],
});

const courgette = Courgette({
  subsets: ['latin'],
  weight: "400",
});

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: "400",
});

const dosis = Dosis({
  subsets: ['latin'],
  weight: "400",
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: "400",
});

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: "400",
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: "400",
});

const kalam = Kalam({
  subsets: ['latin'],
  weight: "400",
});

const lato = Lato({
  subsets: ['latin'],
  weight: "400",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: "400",
});

const lobster = Lobster({
  subsets: ['latin'],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "400",
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: "400",
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: "400",
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: "400",
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: "400",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400",
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: "400",
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: "400",
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: "400",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: "400",
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: "400",
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: "400",
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: "400",
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: "400",
});

const sourceSerifPro = Source_Serif_4({
  subsets: ['latin'],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: "400",
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: "400",
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: "400",
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: "400",
});



const fonts = [
  {
    name: "Dancing Script",
    text: "AI Art Generator",
    // className: "font-['Dancing_Script']",
    className: dancingScript.className,
  },
  { 
    name: "Anton", text: "AI Art Generator", 
    // className: "font-['Anton']",
    className: anton.className
  },
  {
    name: "Bebas Neue",
    text: "AI Art Generator",
    className: bebasNeu.className,
  },
  { name: "Charm", text: "AI Art Generator", 
    className: charm.className, 
  },
  { name: "Cinzel", text: "AI Art Generator", 
    className: cinzel.className,
  },
  {
    name: "Comfortaa",
    text: "AI Art Generator",
    className: comfortaa.className,
  },
  {
    name: "Courgette",
    text: "AI Art Generator",
    className: courgette.className,
  },
  {
    name: "Crimson Text",
    text: "AI Art Generator",
    className: crimsonText.className,
  },
  { name: "Dosis", text: "AI Art Generator", 
    className: dosis.className,
  },
  {
    name: "Great Vibes",
    text: "AI Art Generator",
    className: greatVibes.className,
  },
  {
    name: "Indie Flower",
    text: "AI Art Generator",
    className: indieFlower.className,
  },
  {
    name: "Josefin Sans",
    text: "AI Art Generator",
    className: josefinSans.className,
  },
  { name: "Kalam", text: "AI Art Generator", 
    className: kalam.className
  },
  { name: "Lato", text: "AI Art Generator", 
    className: lato.className,
  },
  {
    name: "Libre Baskerville",
    text: "AI Art Generator",
    className: libreBaskerville.className,
  },
  { name: "Lobster", text: "AI Art Generator", 
    className: lobster.className,
  },
  {
    name: "Montserrat",
    text: "AI Art Generator",
    className: montserrat.className,
  },
  {
    name: "Open Sans",
    text: "AI Art Generator",
    className: openSans.className,
  },
  { name: "Oswald", text: "AI Art Generator", 
    className: oswald.className, 
  },
  {
    name: "Pacifico",
    text: "AI Art Generator",
    className: pacifico.className,
  },
  {
    name: "Playfair Display",
    text: "AI Art Generator",
    className: playfairDisplay.className,
  },
  { name: "Poppins", text: "AI Art Generator", 
    className: poppins.className
  },
  {
    name: "Quicksand",
    text: "AI Art Generator",
    className: quicksand.className
  },
  { name: "Raleway", text: "AI Art Generator", 
    className: raleway.className 
  },
  { name: "Roboto", text: "AI Art Generator", 
    className: roboto.className 
  },
  {
    name: "Roboto Condensed",
    text: "AI Art Generator",
    className: robotoCondensed.className,
  },
  {
    name: "Roboto Mono",
    text: "AI Art Generator",
    className: robotoMono.className
  },
  {
    name: "Roboto Slab",
    text: "AI Art Generator",
    className: robotoSlab.className
  },
  { name: "Rubik", text: "AI Art Generator", 
    className: rubik.className
  },
  {
    name: "Source Sans Pro",
    text: "AI Art Generator",
    className: sourceSans3.className
  },
  {
    name: "Source Serif Pro",
    text: "AI Art Generator",
    className: sourceSerifPro.className
  },
  {
    name: "Space Grotesk",
    text: "AI Art Generator",
    className: spaceGrotesk.className
  },
  {
    name: "Space Mono",
    text: "AI Art Generator",
    className: spaceMono.className
  },
  { name: "Ubuntu", text: "AI Art Generator", 
    className: ubuntu.className },
  {
    name: "Work Sans",
    text: "AI Art Generator",
    className: workSans.className
  },
];

export default function FontShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our AI Models Can Generate Text in These Fonts
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Experience the power of AI with our extensive font collection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fonts.map((font) => (
            <div
              key={font.name}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`text-2xl mb-4 ${font.className}`}>
                {font.text}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {font.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
