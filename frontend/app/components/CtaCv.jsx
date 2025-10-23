export default function CtaCv() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Mon CV</h2>
      <p className="mb-4">
        Téléchargez mon CV pour en savoir plus sur mon parcours professionnel.
      </p>
      <a
        href="/cv.pdf"
        download
        className="btn btn-primary px-6 py-3 rounded-md"
      >
        Télécharger le CV
      </a>
    </section>
  );
}
