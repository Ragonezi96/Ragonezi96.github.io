import LogoSlider from "./LogoSlider";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-black">
      {/* Introduction Text */}
      <div className="mb-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
            Bernardo Ragonezi
          </span>
        </h1>
        <p className="text-gray mt-6 text-xl md:text-2xl">
          Data Engineer | Building scalable data pipelines & insights
        </p>
        <a
          href="#main-sections"
          className="relative inline-flex items-center justify-center w-full sm:w-[200px] mt-10 p-[2px] font-semibold overflow-hidden text-md text-white rounded-md group border border-purple-600 bg-black shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-black hover:border-transparent transition-all duration-300 ease-in-out"
        >
          <span className="relative bg-black text-white rounded-md group-hover:bg-transparent">
            Learn More
          </span>
        </a>
      </div>

      {/* Infinite Logo Slider */}
      <LogoSlider />
    </section>
  );
}