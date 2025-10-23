import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function About() {
  return (
    <>
      <Hero
        title="Je suis Samantha,"
        subtitle="et mon but est de concevoir des produits numériques qui améliorent véritablement la vie des utilisateurs, avec sensibilité et simplicité."
      />
      <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12">
        <div className="w-full max-w-6xl flex flex-col gap-6 mx-auto py-2">
          <div className="flex flex-col gap-2 py-2">
            <p className="font-rubik">
              Designer de formation et passionnée par les usages, j’ai construit
              mon parcours au croisement de l’UX, de l’interface et des besoins
              du quotidien. Mon goût pour les produits utiles, accessibles et
              sensibles m’a naturellement menée à travailler dans des secteurs
              qui ont du sens, comme la santé ou le bien-être.
            </p>
            <p className="font-rubik">
              Après plusieurs années en agence (ESN), en start-up, puis en
              freelance, j’ai accompagné des équipes produit dans la création et
              l’amélioration de leurs services numériques. J’interviens sur
              l’ensemble du cycle de conception - de la recherche utilisateur à
              la mise en place de design systems, en passant par les tests, les
              ateliers collaboratifs et le soin apporté à l’interface.
            </p>

            <h3 className="font-rubik font-medium ">
              Ce qui m’anime au quotidien
            </h3>
            <p className="font-rubik">
              Construire des expériences fluides, engageantes, mais surtout
              utiles, en m’appuyant sur une vraie collaboration avec les équipes
              tech, produit ou métier. Toujours curieuse, j’aime apprendre des
              autres expertises, confronter les idées, et faire évoluer mes
              pratiques pour concevoir des produits à la fois cohérents,
              inclusifs et durables.
            </p>
          </div>

          <div className="flex flex-col gap-2 py-2">
            <h3 className="font-rubik font-medium">
              Aujourd’hui, je cherche à rejoindre
            </h3>
            <p className="font-rubik">
              - Une équipe produit dans les domaines de la santé, du bien-être
              ou des services pratiques du quotidien, pour contribuer à des
              projets à fort impact social et personnel.
            </p>
            <p className="font-rubik">
              - Ou une équipe design structurée, avec laquelle je pourrai
              confronter mes idées, partager ma méthodologie et continuer à
              progresser dans un environnement stimulant et bienveillant.
            </p>
          </div>

          <button className="flex py-6">
            <a
              href="/CV_Selva_Samantha_Product_UI_UX_Designer.pdf"
              download
              className="bg-[#333333] font-rubik no-underline text-white px-6 py-3 rounded-lg transition"
            >
              Télécharger mon CV
            </a>
          </button>
        </div>
      </section>

      <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12">
        <div className="w-full max-w-6xl flex flex-col gap-6 mx-auto py-2">
          <h2 className="font-rubik text-2xl font-bold mb-4">Depuis 2013</h2>
          <span className="font-rubik ">UX / UI Designer</span>
          <p className="font-rubik text-gray-600 w-90">
            Clients : Bibliotheca, Médecins Sans Frontières, Prêt à Plonger,
            Galeries Lafayette, Orange, Allianz, Une Dose de Vert, Sharon
            Sautarel, Renault, TF1, Chapoutier...
          </p>
        </div>
      </section>

      <Skills />

      <Timeline />
    </>
  );
}
