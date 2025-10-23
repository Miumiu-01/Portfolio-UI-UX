import Link from "next/link";

export default function FooterProject({
  beforeproject,
  afterproject,
  beforeLink = "#",
  afterLink = "#",
}) {
  return (
    <footer className="w-full flex px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-[#F5F1E9] py-6 gap-6">
      <div className="flex flex-col items-center justify-between sm:flex-row max-w-6xl sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[60%] gap-6 mx-auto">
        <div className="flex-1 ">
          <h3 className="text-lg text-[#000000] text-opacity-40">
            Projet précédent
          </h3>
          <Link
            href={beforeLink}
            className="font-afacad text-black no-underline hover:text-opacity-70 transition"
          >
            <span className="text-md underline underline-offset-1 hover:text-opacity-70 transition">
              {beforeproject}
            </span>
          </Link>
        </div>

        <div className="flex-1 text-right">
          <h3 className="text-lg text-[#000000] text-opacity-40">
            Projet suivant
          </h3>
          <Link
            href={afterLink}
            className="font-afacad text-black no-underline hover:text-opacity-70 transition"
          >
            <span className="text-md underline underline-offset-1 hover:text-opacity-70 transition">
              {afterproject}
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
