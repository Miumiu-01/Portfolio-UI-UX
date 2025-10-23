export default function Timeline() {
  const events = [
    { year: "2024", desc: "Ironhack, UX design bootcamp" },
    { year: "2021", desc: "Freelance, UX : UI designer" },
    { year: "2019", desc: "Namastha, Fondatrice" },
    { year: "2016", desc: "Bluebuddy App, UX : UI designer" },
    {
      year: "2014",
      desc: "L'école Multimédia, License Communication Visuelle Option Graphisme Édition Publicité (alternance)",
    },
    { year: "2013", desc: "ESN Wassa, UI designer" },
    { year: "2012", desc: "Wecut, Graphiste multimédia (stagiaire)" },
    {
      year: "2012",
      desc: "Sorbonne Paris Nord, License professionnelle Infographiste & Webdesign",
    },
    {
      year: "2011",
      desc: "Campus Fonderie de l'Image, BTS Communication Visuelle Option Graphisme Édition Publicité (alternance)",
    },
    {
      year: "2009",
      desc: "Action Logement, Graphiste multimédia (alternance 2 ans)",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12">
      <div className="flex flex-col max-w-6xl sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[60%] gap-2 mx-auto">
        <h2 className="font-rubik text-4xl font-bold mb-12">Chronologie</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((e, i) => (
            <div key={i} className="">
              <h3 className="font-rubik sm:text-1lg md:text-2xl lg:text-3xl xl:text-4xl font-medium">
                {e.year}
              </h3>
              <p className="font-rubik text-gray-600">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
