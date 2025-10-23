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
        <div className="w-full max-w-6xl flex flex-col gap-6 mx-auto px-2 py-5 ">
          <div
            className="w-full h-auto relative rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/images/bbd_b.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#F5F1E9/40]"></div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-6 relative z-10">
              {/* Bloc texte + bouton */}
              <div className="flex flex-col items-start gap-4 md:w-1/2 text-white">
                <span className="font-rubik text-[#000000] text-lg">
                  Product Design
                </span>
                <h3 className="font-rubik text-[#093B46] text-2xl font-bold">
                  Bluebuddy App
                </h3>
                <p className="font-rubik text-[#000000] text-base md:text-lg">
                  L’application de suivi contre les TCA. Refonte UX/UI plus
                  humaine, ludique et engageante.
                </p>
                <Link
                  href="/bluebuddy"
                  className="font-rubik bg-[#093B46] border-2 border-gray-300 text-white font-medium no-underline py-2 px-4 rounded-xl transition-colors"
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
            className="w-full h-auto relative rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/images/bbt_b.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#F5F1E9/40]"></div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-6 relative z-10">
              {/* Bloc texte + bouton */}
              <div className="flex flex-col items-start gap-4 md:w-1/2 text-white">
                <span className="font-rubik text-[#000000] text-lg">
                  UX Design
                </span>
                <h3 className="font-rubik text-[#A38748] text-2xl font-bold">
                  Bibliotheca
                </h3>
                <p className="font-rubik text-[#000000] text-base md:text-lg">
                  Solutions d’optimisation et de gestion des bibliothèques du
                  futur Analyse et refonte UX de la homepage.
                </p>
                <Link
                  href="/bibliotheca"
                  className="font-rubik bg-[#A38748] border-2 border-gray-300 text-white font-medium no-underline py-2 px-4 rounded-xl transition-colors"
                >
                  CASE STUDY
                </Link>
              </div>

              {/* Bloc image secondaire */}
              <div className="md:w-1/2">
                <img
                  src="/images/bbt_r.png"
                  alt="Bluebuddy App"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          <div
            className="w-full h-auto relative rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/images/nmt_b.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#F5F1E9/40]"></div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 gap-6 relative z-10">
              {/* Bloc texte + bouton */}
              <div className="flex flex-col items-start gap-4 md:w-1/2 text-white">
                <span className="font-rubik text-[#000000] text-lg">
                  UX / UI Design
                </span>
                <h3 className="font-rubik text-[#024A79] text-2xl font-bold">
                  Namastha
                </h3>
                <p className="font-rubik text-[#000000] text-base md:text-lg">
                  Ateliers d’initiation à la création et à la méditation à
                  travers l’art du batik indonésien.
                </p>
                <Link
                  href="/namastha"
                  className="font-rubik bg-[#024A79] border-2 border-gray-300 text-white font-medium no-underline py-2 px-4 rounded-xl transition-colors"
                >
                  CASE STUDY
                </Link>
              </div>

              {/* Bloc img resume  */}
              <div className="md:w-1/2">
                <img
                  src="/images/nmt_r.png"
                  alt="Bluebuddy App"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
