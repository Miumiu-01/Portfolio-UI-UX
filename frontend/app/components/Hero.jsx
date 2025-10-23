export default function Hero({ title, subtitle }) {
  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 mt-32">
      <div className="w-full max-w-6xl flex flex-col text-left md:text-left gap-6">
        <h1 className="font-rubik font-medium text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl  ">
          {title}
        </h1>
        <p className="font-rubik text-base sm:text-lg md:text-xl md:mx-0 lg:text-2xl  text-gray-700 ">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
