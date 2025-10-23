export default function Footer() {
  return (
    <footer className="w-full flex px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 gap-6 bg-black text-[#ffffff] text-sm text-left">
      <div className="flex flex-col items-center justify-center max-w-6xl sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
        <div className=" flex flex-row gap-2">
          <p className="font-afacad">
            Design conçu : 
            <a
              href="https://www.linkedin.com/in/samanthaselva/"
              className="font-afacad text-[#ffffff] no-underline hover:text-opacity-70 transition"
            >
              Samantha Selva
            </a>
          </p>
          <p className="font-afacad">
            Intégration conçu : 
            <a
              href="https://www.github.com/Kalutos"
              className="font-afacad text-[#ffffff] no-underline hover:text-opacity-70 transition"
            >
              Arthur Selva
            </a>
          </p>
        </div>
        <p className="font-afacad "> © 2025&nbsp;Tous droits réservés.</p>
      </div>
      {/* <div className="flex flex-col items-center justify-center sm:flex-row max-w-6xl sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[60%] gap-6 mx-auto">
        <div className="flex-1 text-left">
          <p>Ce site internet est un site éco-responsable.</p>
          <div className="flex gap-10">
            <p>This website emits 0.49g of CO2</p>
            <p>Web Carbon Calculator</p>
          </div>
          <p>Index Ecograder (temps de chargement + émissions de CO2)</p>
        </div>

        <div className="flex-1 text-right">
          <p>
            Design éco-conçu : 
            <a href="https://www.linkedin.com/in/samanthaselva/">
              Samantha Selva
            </a>
          </p>
          <p>
            Intégration éco-conçu : 
            <a href="https://www.github.com/Kalutos">Arthur Selva</a>
          </p>
          <p>Hébergement responsable : Infomaniak</p>
          <p> © 2025&nbsp;Tous droits réservés.</p>
        </div>
      </div> */}
    </footer>
  );
}
