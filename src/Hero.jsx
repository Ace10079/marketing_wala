function Hero() {
  return (
    <div className="bg-[url('/bg.JPG')] bg-cover bg-center min-h-screen relative flex items-center justify-center">
      {/* Mic Image */}
      <img
        src="./mic.PNG"
        alt="mic"
        className="w-44 h-82 absolute left-0 bottom-0 animate-tilt z-10"
      />

      {/* Girl Image */}
      <img
        src="./girl.PNG"
        alt="girl"
        className="absolute right-5 bottom-0 w-[250px] h-[230px] animate-sway z-10"
      />

      {/* Text Content */}
      <div className="absolute z-20 text-white text-center px-4 max-w-[90%]">
        {/* Line 1 - turning + camera */}
        <div className="flex justify-center items-center animate-fadeInUp">
          <p className="text-[2.5rem] md:text-5xl font-bold text-blue-500 tracking-wide  text-center mr-2">
            turning
          </p>
          <img
            src="./camera.PNG"
            alt="camera"
            className="w-[150px] h-[120px] animate-float z-10"
          />
        </div>

        {/* Line 2 - 'thoda sa idea' */}
        <p className="text-[4rem] md:text-[6rem] font-black text-black leading-none  animate-waveText">
          ‘thoda sa idea’
        </p>

        {/* Line 3 - into */}
        <div className="relative inline-block my-2 animate-waveText" >
          <span className="absolute -top-1 -left-2 rotate-[-5deg] bg-yellow-400 px-2 py-1 text-black text-sm font-bold z-0">
            into
          </span>
        </div>

        {/* Line 4 - BADA BRAND MAGIC */}
        <p className="text-[3rem] md:text-[5rem] font-extrabold text-blue-600 leading-none tracking-tight drop-shadow-xl animate-pulseText">
          BADA BRAND MAGIC
        </p>
      </div>
    </div>
  );
}

export default Hero;
