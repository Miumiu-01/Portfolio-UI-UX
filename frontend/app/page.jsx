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
          <div className="w-full h-auto flex items-center bg-[#C1E3F6] rounded-lg p-6">
            <div className="flex flex-col items-start gap-2 p-6">
              <span className="font-rubik">Product Design</span>
              <h3 className="font-rubik text-xl font-bold mb-2">
                Bluebuddy App
              </h3>
              <p className="font-rubik text-black sm:w-full md:w-80">
                L’application de suivi contre les Troubles du Comportement
                Alimentaire Refonte UX/UI plus humaine, ludique et engageante.
              </p>
              <Link
                href="/bluebuddy"
                className="font-rubik bg-[#072435] border-2 border-gray-300 text-white font-medium no-underline py-2 px-4 rounded-xl transition-colors"
              >
                VOIR LE PROJET
              </Link>
            </div>

            <div
              className="w-full h-64 hidden md:block bg-cover bg-center"
              style={{ backgroundImage: "url('/images/banner_bbd.png')" }}
            ></div>
          </div>

          <div className="w-full h-auto flex items-center bg-[#988C7C] rounded-lg p-6">
            <div className="flex flex-col items-start gap-2 p-6">
              <span className="font-rubik">UX Design</span>
              <h3 className="font-rubik text-xl font-bold mb-2">Bibliotheca</h3>
              <p className="font-rubik text-black sm:w-full md:w-80">
                Solutions d’optimisation et de gestion des bibliothèques du
                futur Analyse et refonte UX de la homepage.
              </p>

              <Link
                href="/bibliotheca"
                className="font-rubik bg-[#072435] border-2 border-gray-300 text-white font-medium no-underline py-2 px-4 rounded-xl transition-colors"
              >
                VOIR LE PROJET
              </Link>
            </div>
            <div
              className="w-full h-64 hidden md:block bg-cover bg-center"
              style={{ backgroundImage: "url('/images/bbth.png')" }}
            ></div>
          </div>

          <div className="w-full h-auto flex items-center bg-[#DBD2FF] rounded-lg p-6">
            <div className="flex flex-col items-start gap-2 p-6">
              <span className="font-rubik">UX / UI Design</span>
              <h3 className="font-rubik text-xl font-bold mb-2">Namastha</h3>
              <p className="font-rubik text-black sm:w-full md:w-80">
                Lorem ipsum dolor sit amet consectetur. Convallis at diam
                tincidunt sed nulla malesuada venenatis cum. Amet quis fermentum
                tristique nibh est consequat.
              </p>
              <Link
                href="/namastha"
                className="font-rubik bg-[#072435] border-2 border-gray-300 text-white font-medium no-underline py-2 px-4 rounded-xl transition-colors"
              >
                VOIR LE PROJET
              </Link>
            </div>
            <div
              className="w-full h-64 hidden md:block bg-cover bg-center "
              style={{ backgroundImage: "url('/images/banner_bbd.png')" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
