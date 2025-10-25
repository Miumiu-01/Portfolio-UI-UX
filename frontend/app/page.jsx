import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero
        title="UX / UI / Product Designer"
        subtitle="Actuellement disponible"
      />

      <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 ">
        <div className="w-full max-w-6xl flex flex-col gap-10 mx-auto px-2 py-5 ">
          <div
            className="w-full h-auto relative"
            style={{
              backgroundImage: "url('/images/bbd_b.png')",
              backgroundColor: "rgba(245, 241, 233, 0.4)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-6 relative z-10">
              {/* Bloc texte + bouton */}
              <div className="flex flex-col items-start gap-4 md:w-1/2">
                <span className="font-afacad font-normal text-[#000000] text-lg">
                  Product Design
                </span>
                <h3 className="font-afacad font-bold text-[#093B46] text-2xl">
                  Bluebuddy App
                </h3>
                <p className="font-afacad font-normal text-[#000000] text-base md:text-lg">
                  L’application de suivi contre les TCA. Refonte UX/UI plus
                  humaine, ludique et engageante.
                </p>
                <Link
                  href="/bibliotheca"
                  className="bg-[#093B46] font-afacad font-bold text-[#ffffff] no-underline py-2 px-4 rounded-full hover:bg-[#FBF9F6] hover:text-[#093B46] hover:border-2 hover:border-[#093B46] transition-all duration-300 hover:scale-105"
                >
                  CASE STUDY
                </Link>
              </div>

              {/* Bloc image secondaire */}
              <div className="md:w-1/2">
                <img
                  src="/images/bbd_r.png"
                  alt="Bluebuddy App"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div
            className="w-full h-auto relative"
            style={{
              backgroundImage: "url('/images/bbt_b.png')",
              backgroundColor: "rgba(245, 241, 233, 0.4)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-6 relative z-10">
              {/* Bloc texte + bouton */}
              <div className="flex flex-col items-start gap-4 md:w-1/2">
                <span className="font-afacad font-normal text-[#000000] text-lg">
                  UX Design
                </span>
                <h3 className="font-afacad font-bold text-[#A38748] text-2xl">
                  Bibliotheca
                </h3>
                <p className="font-afacad font-normal text-[#000000] text-base md:text-lg">
                  Solutions d’optimisation et de gestion des bibliothèques du
                  futur Analyse et refonte UX de la homepage.
                </p>
                <Link
                  href="/bibliotheca"
                  className="bg-[#A38748] font-afacad font-bold text-[#ffffff] no-underline py-2 px-4 rounded-full hover:bg-[#FBF9F6] hover:text-[#A38748] hover:border-2 hover:border-[#A38748] transition-all duration-300 hover:scale-105"
                >
                  CASE STUDY
                </Link>
              </div>

              {/* Bloc image secondaire */}
              <div className="md:w-1/2">
                <img
                  src="/images/bbt_r.png"
                  alt="Bibliotheca WebSite"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div
            className="w-full h-auto relative"
            style={{
              backgroundImage: "url('/images/lfu_b.png')",
              backgroundColor: "rgba(245, 241, 233, 0.4)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-6 relative z-10">
              {/* Bloc texte + bouton */}
              <div className="flex flex-col items-start gap-4 md:w-1/2">
                <span className="font-afacad font-normal text-[#000000] text-lg">
                  UI/UX Design
                </span>
                <h3 className="font-afacad font-bold text-[#5553AD] text-2xl">
                  Lift Up
                </h3>
                <p className="font-afacad font-normal text-[#000000] text-base md:text-lg">
                  Redonner une voix aux adolescents grâce à un réseau scolaire
                  d’écoute bienveillante.
                </p>
                <Link
                  href="/liftup"
                  className="bg-[#5553AD] font-afacad font-bold text-[#ffffff] no-underline py-2 px-4 rounded-full hover:bg-[#FBF9F6] hover:text-[#5553AD] hover:border-2 hover:border-[#5553AD] transition-all duration-300 hover:scale-105"
                >
                  CASE STUDY
                </Link>
              </div>

              {/* Bloc image secondaire */}
              <div className="md:w-1/2">
                <img
                  src="/images/lfu_bi.png"
                  alt="Lift Up App"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div
            className="w-full h-auto relative"
            style={{
              backgroundImage: "url('/images/nmt_b.png')",
              backgroundColor: "rgba(245, 241, 233, 0.4)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-6 relative z-10">
              {/* Bloc texte + bouton */}
              <div className="flex flex-col items-start gap-4 md:w-1/2">
                <span className="font-afacad font-normal text-[#000000] text-lg">
                  UX / UI Design
                </span>
                <h3 className="font-afacad font-bold text-[#024A79] text-2xl">
                  Namastha
                </h3>
                <p className="font-afacad font-normal text-[#000000] text-base md:text-lg">
                  Ateliers d’initiation à la création et à la méditation à
                  travers l’art du batik indonésien.
                </p>
                <Link
                  href="/namastha"
                  className="bg-[#024A79] font-afacad font-bold text-[#ffffff] no-underline py-2 px-4 rounded-full hover:bg-[#FBF9F6] hover:text-[#024A79] hover:border-2 hover:border-[#024A79] transition-all duration-300 hover:scale-105"
                >
                  CASE STUDY
                </Link>
              </div>

              {/* Bloc image secondaire */}
              <div className="md:w-1/2">
                <img
                  src="/images/nmt_r.png"
                  alt="Bibliotheca WebSite"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
