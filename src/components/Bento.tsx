import { Link } from "react-router-dom";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Button } from "./ui/button";

export function GridGames() {
  return (
    <>
      <BentoGrid className="pt-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={
              i === 3 || i === 6
                ? "md:col-span-2 bg-[#FFF6C5] relative overflow-hidden"
                : "bg-[#FFF6C5] relative"
            }
          />
        ))}
      </BentoGrid>
      <div className="underline flex justify-center py-4">
        <Link to="/games">Discover More Games</Link>
      </div>
    </>
  );
}

const items = [
  {
    title: "Ampe",
    description:
      "This energetic game, played mostly by young girls, involves clapping, jumping, and coordination. It is a test of agility and rhythm, bringing excitement to any gathering.",
    header: (
      <div className="relative flex items-center justify-center h-full bg-[#FFF6C5] rounded-xl overflow-hidden">
        <Button className="bg-white rounded-2xl">
          <Link to="">
            <span className="bg-gradient-to-r from-[#000000] to-[#FAC70A] bg-clip-text text-transparent">
              Learn More
            </span>
          </Link>
        </Button>
      </div>
    ),
  },
  {
    title: "Karikokoo",
    description:
      "A fitness game once used to test the strength of men loading cocoa beans, Karikokoo is now a fun competition for children and adults alike.",
    header: (
      <div className="flex items-center justify-center h-full bg-[#FFF6C5] rounded-xl">
        <Button className="bg-white rounded-2xl">
          <Link to="">
            <span className="bg-gradient-to-r from-[#000000] to-[#FAC70A] bg-clip-text text-transparent">
              Learn More
            </span>
          </Link>
        </Button>
      </div>
    ),
  },
  {
    title: "Anhwɛwoakyire",
    description:
      "Meaning 'don’t look back,' this game requires players to stay alert as they squat in a circle, accompanied by songs and clapping.",
    header: (
      <div className="flex items-center justify-center h-full bg-[#FFF6C5] rounded-xl">
        <Button className="bg-white rounded-2xl">
          <Link to="">
            <span className="bg-gradient-to-r from-[#000000] to-[#FAC70A] bg-clip-text text-transparent">
              Learn More
            </span>
          </Link>
        </Button>
      </div>
    ),
  },
  {
    title: "Mpeewa",
    description:
      "A traditional game mostly played by young girls, where precision and timing are key. Players toss pebbles or small objects in rhythm with a song.",
    header: (
      <div className=" flex items-center justify-center h-full bg-[#FFF6C5] rounded-xl overflow-hidden">
        <Button className="bg-white rounded-2xl">
          <Link to="">
            <span className="bg-gradient-to-r from-[#000000] to-[#FAC70A] bg-clip-text text-transparent">
              Learn More
            </span>
          </Link>
        </Button>
        <img
          src="/src/assets/mena.png"
          alt="Mpeewa"
          className="absolute right-0 -bottom-16 mix-blend-multiply h-full opacity-10 "
        />
      </div>
    ),
  },
  {
    title: "Ntiaa twɛn abɛrɛ so, wɔbɔ no afɔremuka so",
    description:
      "The tiny drum waits patiently; it is still beaten on the sacred day.",
    header: (
      <div className="flex items-center justify-center h-full bg-[#FFF6C5] rounded-xl">
        <Button className="bg-white rounded-2xl">
          <Link to="">
            <span className="bg-gradient-to-r from-[#000000] to-[#FAC70A] bg-clip-text text-transparent">
              Learn More
            </span>
          </Link>
        </Button>
      </div>
    ),
  },
];
