import FooterProject from "../components/FooterProject";
import ProjectHero from "../components/ProjectHero";

export default function Bluebuddy() {
  return (
    <>
      <div className="pt-32 ">
        <ProjectHero
          title="Bluebuddy App"
          subtitle="L’application de suivi contre les Troubles du Comportement Alimentaire"
          role="UX/UI Design"
          type="Mobile App"
          date="2024"
          tools="Figma / Figjam / Illustrator"
          livrables="Landing page / app mobile / Branding"
          bgImage="/images/bbd_h.png"
          stats={[
            { label: "Écrans", value: "+74" },
            { label: "Réponses en ligne", value: "+50" },
            { label: "Entretiens", value: "+10" },
            { label: "Plateformes", value: "3" },
          ]}
          appImage="/images/bbd_r.png"
          appResume="Bluebuddy est né lors d’un hackathon santé, avec l’ambition d’offrir un soutien bienveillant aux jeunes atteints de troubles du comportement alimentaire. Récompensé en 2016 par le prix du meilleur projet “Éducation thérapeutique” lors de l’événement Innovation Santé NewHealth x La Cité des Sciences et de l’Industrie à La Villette, le concept a montré tout son potentiel. Cependant, conçu dans l’urgence, il nécessitait une refonte complète fondée sur une véritable recherche utilisateur et une approche centrée sur l’expérience patient."
          teams={[
            {
              name: "Contenu médical",
              members: [
                { name: "Sophie Criquillon", role: "Psychiatre" },
                { name: "Alexandra Laszcz", role: "Psychologue" },
              ],
            },
            {
              name: "Développement mobile",
              members: [
                { name: "Peter Schaeffer", role: "Développeur iOS" },
                { name: "Dorothée Doublet", role: "Développeuse iOS" },
              ],
            },
            {
              name: "Design produit",
              members: [
                { name: "Samantha Selva", role: "UI/UX Designer" },
                { name: "Patients" },
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
        beforeproject="Bibliotheca"
        beforeLink="/bibliotheca"
        afterproject="Namastha"
        afterLink="/namastha"
      />
      ;
    </>
  );
}
