import FooterProject from "../components/FooterProject";
import ProjectHero from "../components/ProjectHero";

export default function Namastha() {
  return (
    <>
      <div className="pt-32">
        <ProjectHero
          title="Namastha"
          subtitle="Un site vitrine pour découvrir et réserver des ateliers de batik indonésien, entre tradition et création."
          role="UX/UI Design"
          type="Site vitrine"
          date="2020"
          tools="Figma"
          livrables="Site internet/ Éléments print"
          bgImage="/images/nmth.png"
          stats={[
            { label: "Site internet", value: "1" },
            { label: "Charte graphique", value: "1" },
            { label: "Supports papier", value: "2" },
          ]}
          appImage="/images/nmtr.png"
          appResume="Namastha invite à redécouvrir le temps long de la création à travers l’art du batik indonésien.

          J’ai conçu un site vitrine et des supports imprimés valorisant cette expérience où chaque geste compte, un espace dédié à la lenteur, à la concentration et au plaisir du faire. Le design met en avant le processus autant que le résultat, célébrant la beauté du geste artisanal et du moment présent."
          // teams={[
          //   {
          //     name: "Bibliotheca",
          //     members: [
          //       { name: "Rachel Laming", role: "Manager Web Digital" },
          //       { name: "Vinicius Flores", role: "Marketing Digital" },
          //     ],
          //   },
          //   {
          //     name: "Design Produit",
          //     members: [
          //       { name: "Alini Laube", role: "UI/UX Designer" },
          //       { name: "Samantha Selva", role: "UX Designer" },
          //     ],
          //   },
          // ]}
        />

        <button className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-[#111111] transition-all duration-300">
          <span className="font-medium tracking-wide group-hover:underline decoration-pink-500 underline-offset-4">
            Voir le projet
          </span>
          {/* <Eye
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          /> */}
        </button>
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
        beforeproject="Bibliotheca"
        beforeLink="/bibliotheca"
        afterproject="Bluebuddy"
        afterLink="/bluebuddy"
      />
    </>
  );
}
