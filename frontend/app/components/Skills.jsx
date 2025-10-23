import {
  Search,
  Brain,
  Map,
  BrickWall,
  TestTubeDiagonal,
  Lightbulb,
  Palette,
  Code,
} from "lucide-react";

export default function Skills() {
  const categories = [
    {
      name: "User Experience (UX)",
      color: "from-blue-500 to-cyan-500",
      skills: [
        {
          title: "Recherche utilisateur",
          info1: "(entretiens, sondages, tri de cartes)",
          icon: <Search size={18} className="text-blue-400" />,
        },
        {
          title: "Analyse des besoins & formulation de problèmes",
          icon: <Brain size={18} className="text-blue-400" />,
        },
        {
          title: "Parcours utilisateurs",
          info1: "(user flows, customer journey)",
          icon: <Map size={18} className="text-blue-400" />,
        },
        {
          title: "Architecture de l'information & navigation",
          icon: <BrickWall size={18} className="text-blue-400" />,
        },
        {
          title: "Tests utilisateurs & itérations",
          icon: <TestTubeDiagonal size={18} className="text-blue-400" />,
        },
        {
          title: "Accessibilité & UX writing",
          icon: <Lightbulb size={18} className="text-blue-400" />,
        },
      ],
    },
    {
      name: "User Interface (UI)",
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          title: "Maquettes haute fidélité",
          info1: "(Figma, design system)",
          icon: <Palette size={18} className="text-pink-400" />,
        },
        {
          title: "Responsive design",
          info1: "(mobile, tablette, desktop)",
          icon: <Palette size={18} className="text-pink-400" />,
        },
        {
          title: "Hiérarchie visuelle, typographie, iconographie",
          icon: <Lightbulb size={18} className="text-pink-400" />,
        },
        {
          title: "Création & gestion de composants Figma",
          icon: <Lightbulb size={18} className="text-pink-400" />,
        },
        {
          title: "Prototypage interactif",
          info1: "(atomic design, micro-intéraction)",
          icon: <Lightbulb size={18} className="text-pink-400" />,
        },
        {
          title: "Accessibilité visuelle",
          info1: "(contraste, lisibilité)",
          icon: <Lightbulb size={18} className="text-pink-400" />,
        },
        {
          title: "Collaboration design-dev",
          info1: "(handoff, specs UI)",
          icon: <Lightbulb size={18} className="text-pink-400" />,
        },
      ],
    },
    {
      name: "Autres",
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          title: "Anglais courant",
          info1: "(TOEIC 2024 : 880 / 990-B2)",
          icon: <Code size={18} className="text-green-400" />,
        },
        {
          title: "Ateliers de co-conception",
          info1: "(ideation, priorisation, tri de cartes)",
          icon: <Code size={18} className="text-green-400" />,
        },
        {
          title: "Design thinking, Agile & Scrum",
          icon: <Code size={18} className="text-green-400" />,
        },
        {
          title: "Collaboration design-dev",
          info1: "(handoff, specs UI, suivi)",
          icon: <Code size={18} className="text-green-400" />,
        },
      ],
    },
  ];

  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12">
      <div className="flex flex-col max-w-6xl sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[60%] gap-2 mx-auto">
        <h2 className="text-4xl font-bold mb-12">Compétences</h2>

        <div className="flex flex-col gap-10">
          {categories.map((category, i) => (
            <div key={i} className="">
              <h3
                className={`font-rubik text-2xl font-bold mb-6 ${category.color}`}
              >
                {category.name}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-rubik text-indigo-500">
                        {skill.icon}
                      </span>
                      <h4 className="font-rubik text-lg font-semibold mb-0">
                        {skill.title}
                      </h4>
                    </div>

                    <p className="font-rubik text-gray-600 text-lg mb-0">
                      {skill.info1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
