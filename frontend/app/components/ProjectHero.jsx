export default function ProjectHero({
  title,
  subtitle,
  role,
  type,
  date,
  tools,
  livrables,
  stats,
  bgImage,
  appImage,
  appResume,
  teams,
}) {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12">
      {/* === HERO PRINCIPAL === */}
      <div className="relative max-w-6xl sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[60%] rounded-3xl overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-top brightness-75"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Bandeau infos en haut */}
        <div className="absolute top-12 left-0 right-0 flex justify-around text-white text-sm px-8 z-20">
          <div className="flex flex-col text-left">
            <span className="font-rubik text-md">Rôle</span>
            <span className="font-rubik text-xl">{role}</span>
          </div>

          <div className="flex flex-col text-center">
            <span className="font-rubik text-md">Type</span>
            <span className="font-rubik text-xl">{type}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="font-rubik text-md">Date</span>
            <span className="font-rubik text-xl">{date}</span>
          </div>
        </div>

        {/* Contenu centré verticalement */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="font-afacad text-3xl sm:text-5xl font-bold mb-2">
            {title}
          </h1>
          <p className="font-afacad text-base sm:text-lg">{subtitle}</p>
        </div>

        {/* Bandeau infos en bas */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-around text-white text-sm z-20">
          <div className="flex flex-col text-left">
            <span className="font-rubik text-md">Outils</span>
            <span className="font-rubik text-md">{tools}</span>
          </div>

          <div className="flex flex-col text-right">
            <span className="font-rubik text-md">Livrables</span>
            <span className="font-rubik text-md">{livrables}</span>
          </div>
        </div>
      </div>

      {/* === STATS EN BAS === */}
      {stats && stats.length > 0 && (
        <div className="max-w-6xl w-full flex justify-between mt-4 py-4">
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col items-center px-4">
              <span className="font-rubik text-[#252525] font-medium text-4xl">
                {item.value}
              </span>
              <span className="font-rubik text-xl">{item.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* === RESUME === */}
      <div className="max-w-6xl sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[60%] flex sm:flex-grow justify-between gap-12 my-4">
        <img
          src={appImage}
          alt={`aperçu de ${title}`}
          className="w-full max-w-[500px] h-auto rounded-tr-lg rounded-br-lg object-cover"
        />
        <div className="flex flex-col bg-[#F5F1E9] bg-opacity-90 rounded-3xl gap-2 px-5 py-5">
          <h3 className="font-medium text-4xl font-afacad text-[#252525]">
            Aperçu du projet
          </h3>
          {/* <span className="w-full max-w-[500px] h-auto rounded-lg text-xl font-afacad">
            {appResume}
          </span> */}
          <p className="text-xl font-afacad text-[#252525]">{appResume}</p>
        </div>
      </div>

      {/* === STAFF === */}
      {teams && teams.length > 0 && (
        <div className="max-w-6xl w-full flex flex-col gap-12 mt-4 py-4">
          <div className="flex flex-col my-2">
            <p className="font-afacad text-2xl text-[#808080]">
              Avant de découvrir le projet
            </p>
            <h2 className="font-afacad font-medium text-4xl text-[#252525]">
              Rencontrez l’équipe
            </h2>
          </div>

          <div className="flex flex-wrap justify-around gap-8">
            {teams.map((team, i) => (
              <div key={i} className="flex flex-col gap-2 items-center">
                <h3 className="font-afacad font-medium text-[#252525] text-center py-4">
                  {team.name}
                </h3>
                <div className="flex flex-row gap-4 flex-wrap justify-center">
                  {team.members.map((member, j) => (
                    <div key={j} className="flex flex-col items-center gap-2">
                      <img
                        src={member.image || ""}
                        alt={member.name}
                        className="bg-pink-600 w-32 h-32 rounded-full"
                      />
                      <div>
                        <p className="font-light text-md text-[#252525] mb-0">
                          {member.name}
                        </p>
                        {member.role && (
                          <p className="font-light text-sm text-[#252525] mb-0">
                            {member.role}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
