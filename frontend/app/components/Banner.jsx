export default function Banner({ img, text }) {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center rounded-xl shadow-lg"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-semibold">
        {text}
      </div>
    </div>
  );
}
