//import { Eye } from "lucide-react"; // Icône "œil"
import FooterProject from "../components/FooterProject";
import ProjectHero from "../components/ProjectHero";

export default function Bibliotheca() {
  return (
    <>
      <div className="pt-32 ">
        <ProjectHero
          title="Bibliotheca"
          subtitle=""
          role="UX Design"
          type="B2B"
          date="2024"
          tools="Figma / Figjam"
          livrables="Étude et refonte UX"
          stats={[
            { label: "Écrans", value: "+74" },
            { label: "Réponses en ligne", value: "+50" },
            { label: "Entretiens", value: "+10" },
            { label: "Plateformes", value: "3" },
          ]}
          bgImage="/images/bbt_h.png"
          appImage="/images/bbt_r.png"
          appResume="Bibliotheca, entreprise spécialisée dans les solutions technologiques pour bibliothèques, souhaitait améliorer la clarté et l’impact de sa présence en ligne.

                  La page d’accueil de leur site ne reflétait pas suffisamment leur mission ni la valeur de leurs services, entraînant une faible conversion.
                  L’objectif du projet était donc de repenser cette page clé pour mieux communiquer leur proposition de valeur et faciliter la compréhension de leur offre dès le premier regard."
          teams={[
            {
              name: "Bibliotheca",
              members: [
                { name: "Rachel Laming", role: "Manager Web Digital" },
                { name: "Vinicius Flores", role: "Marketing Digital" },
              ],
            },
            {
              name: "Design Produit",
              members: [
                { name: "Alini Laube", role: "UI/UX Designer" },
                { name: "Samantha Selva", role: "UX Designer" },
              ],
            },
          ]}
        />
        <div className="flex justify-center my-10">
          <button className="group relative flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-[#111111] transition-all duration-300 overflow-hidden hover:scale-105">
            {/* Texte par défaut */}
            <span className="font-medium tracking-wide transition-opacity duration-300 group-hover:opacity-0">
              Voir le projet
            </span>
            {/* <Eye
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          /> */}

            {/* Texte au hover */}
            <span className="absolute font-medium text-[#ffffff] tracking-wide opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              En construction
            </span>
          </button>
        </div>
        <section className="hidden w-full bg-[#4A6FEF] flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12">
          <div className="flex flex-col max-w-6xl sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[60%] gap-2 mx-auto">
            <div className="">
              <div className="flex flex-row gap-2">
                <div className="flex flex-col bg-[#ffffff] rounded-lg gap-2 py-2 px-4">
                  <h3 className="font-semibold text-[#252525]">
                    Vous avez déjà essayé...
                  </h3>
                  <p className="font-light text-[#252525]">
                    De garder le contrôle en pleine pulsion alimentaire ?
                    Cherché du réconfort au milieu de la nuit, sans savoir à qui
                    parler ? Ou simplement réussi à manger quelque chose sans
                    culpabilité ? Ce n’est pas juste difficile, c’est un combat
                    quotidien et souvent solitaire.
                  </p>
                </div>

                <img
                  src=""
                  alt="BlueBuddy Cellphone"
                  className="w-full max-w-[400px] h-auto bg-black rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-row rounded-lg">
                <div className="flex flex-col bg-[#ffffff] rounded-tl-lg rounded-bl-lg gap-2 py-2 px-4">
                  <h3 className="font-semibold text-[#252525]">
                    Public cible{" "}
                  </h3>
                  <div className="flex flex-row gap-2">
                    <button className="rounded-lg bg-[#4A6FEF]">
                      Adolescents
                    </button>
                    <button className="rounded-lg bg-[#4A6FEF]">
                      Jeunes adultes
                    </button>
                    <button className="rounded-lg bg-[#4A6FEF]">
                      Soignants spécialisés TCA
                    </button>
                  </div>
                  <p className="font-light text-[#252525]">
                    Avec 900 000 personnes officiellement touchés par les TCA en
                    France, les défis quotidiens, comme suivre son alimentation,
                    exprimer ses émotions, ou accéder à un soutien fiable,
                    restent complexes et souvent solitaires. Bluebuddy a été
                    conçu pour alléger ce fardeau : une app pensée pour
                    accompagner les patient·es, qu’ils·elles soient en début de
                    parcours, en suivi ou en rechute, et pour renforcer le lien
                    thérapeutique grâce à des outils intelligents, accessibles,
                    et profondément humains.
                  </p>
                </div>

                <img
                  src="/images/bbdpaysage.jpg"
                  alt="paysage"
                  className="w-full max-w-[400px] h-auto rounded-tr-lg rounded-br-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterProject
        beforeproject="Bluebuddy"
        beforeLink="/bluebuddy"
        afterproject="Lift Up"
        afterLink="/liftup"
      />
    </>
  );
}
