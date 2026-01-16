import Image from "next/image";
import Link from "next/link";
import Bubble from "@/components/bubble";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { Badge } from "@/components/bagde";

export default function Home() {
  return (
    <section className="flex justify-center mt-15 sm:mt-28 md:mt-35 h-auto px-4">
      <div className="max-w-4xl w-full">
        {/* Bulle center */}
        <Bubble className="aligns px-4 sm:px-6 py-4" glowColor="#71DDAE">
          <div className="flex items-center gap-3 flex-nowrap max-w-full overflow-hidden">
            <Image
              src="/img/logo_bulle.png"
              alt="Logo Bulle"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
            />
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#000000] uppercase truncate max-w-full">
              Créer un site web <span className="underline">vraiment</span> unique
            </p>
          </div>
        </Bubble>


        {/* Paragraphe principal */}
        <p className="mt-6 sm:mt-10 mx-auto text-3xl sm:text-4xl md:text-6xl text-center max-w-full sm:max-w-3xl">
          Votre <span className="text-[#71DDAE]">site</span> doit <span className="text-[#71DDAE]">donner envie</span> de <span className="text-[#71DDAE]">rester</span>, pas de&nbsp;
          <span className="custom-line">
            <span className="text-[#71DDAE]">revenir</span> en <span className="text-[#71DDAE]">arrière</span>
          </span>.
        </p>

        {/* Paragraphe secondaire */}
        <p className="text-[#D2D2D2] mt-6 sm:mt-10 mx-auto font-semibold text-lg sm:text-xl text-center max-w-full sm:max-w-3xl leading-relaxed">
          Design moderne, SEO solide, Suivi complet : <br /> on construit un site qui retient vos visiteurs et vous apporte des résultats.
        </p>

        {/* Section boutons */}
        <section className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 sm:mt-10 h-auto max-w-full">
          {/* Bouton principal avec Badge */}
          <Link href="#" className="relative w-full sm:w-auto">
            <button className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 cursor-pointer rounded-[15px] bg-gradient-to-r from-[#71DDAE] to-[#2B9E7A] text-black transition-transform duration-300 hover:scale-105 flex justify-center items-center">
              <span className="text-lg sm:text-xl font-extrabold flex items-center justify-center gap-2">
                <FaCalendarAlt /> Prendre RDV
              </span>
            </button>
            <Badge position="bottom-left" className="z-10 -translate-x-9 translate-y-7">
              <Image src="/img/cta.png" alt="CTA Image" width={500} height={300} className="w-10 sm:w-12 md:w-21 h-auto" />
            </Badge>
          </Link>

          {/* Bouton secondaire */}
          <button className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 cursor-pointer rounded-[15px] transition-transform duration-300 bg-transparent border-2 border-[#71DDAE] text-[#71DDAE] hover:bg-[#71DDAE]/10 hover:scale-105 flex justify-center items-center">
            <span className="text-lg sm:text-xl font-extrabold flex items-center justify-center gap-2">
              Découvrir nos projets <FaArrowDown />
            </span>
          </button>
        </section>
      </div>
    </section>
  );
}
