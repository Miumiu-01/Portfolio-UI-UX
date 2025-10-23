import Hero from "../components/Hero";

export default function Contact() {
  return (
    <>
      <Hero
        title="Et si on donnait vie à vos idées ?"
        subtitle="Je suis toujours ravie d’échanger autour de nouveaux projets, n’hésitez pas à me contacter !"
      />

      <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12">
        <div className="w-full max-w-6xl flex flex-col gap-6 mx-auto py-2">
          <p className="font-rubik text-xl">
            Racontez-moi ce que vous avez en tête. Une idée un peu floue, un
            produit à repenser, une interface à simplifier, peu importe le point
            de départ, tant qu’il y a du sens derrière. Je lis chaque message
            attentivement et je réponds personnellement sous 48h.
          </p>

          <form
            action="https://formspree.io/f/xyznvvdv"
            method="POST"
            className="flex flex-col gap-6 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1">
                <label className="block mb-1 font-medium">Nom</label>
                <input
                  type="text"
                  name="nom"
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>

              <div className="flex-1">
                <label className="block mb-1 font-medium">Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Objet</label>
              <input
                type="text"
                name="objet"
                className="w-full border rounded-lg p-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                className="w-full border rounded-lg p-2"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="border border-gray-300 bg-[#333333] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#444444] transition-colors"
              >
                Envoyer
              </button>
            </div>
          </form>

          <div className=" py-10">
            <a
              href="https://www.linkedin.com/in/samanthaselva/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#004182] font-rubik font-medium py-2 mx-4 group"
            >
              Profil LinkedIn
              <span className="relative w-6 h-6 inline-block">
                <img
                  src="/images/icon_linkedin.png"
                  alt="LinkedIn"
                  className="absolute inset-0 w-full h-full transition-opacity duration-200 group-hover:opacity-0"
                />
                <img
                  src="/images/pp12.png"
                  alt="LinkedIn hover"
                  className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 "
                />
              </span>
            </a>

            <p className="font-rubik text-xl text-gray-700 my-6">
              Retrouvez-moi également sur LinkedIn pour discuter ou suivre mes
              actualités design.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
