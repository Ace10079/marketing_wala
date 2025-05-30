function Hero() {
  return (
    <div className="bg-[url('/bg.JPG')] bg-cover bg-center min-h-screen relative flex items-center justify-center">
      {/* Camera Image */}
      <img
        src="./camera.PNG"
        alt="camera"
        className="w-[150px] h-[120px] absolute left-1/2 top-[16.66%] transform -translate-x-1/2 animate-float z-10"
      />

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

      {/* Stylized Centered Text */}
      <div className="absolute z-20 text-white text-center mt-30 px-4 max-w-[90%]">
        <p className="text-[2.5rem] md:text-5xl font-bold text-blue-500 tracking-wide uppercase">turning</p>
        
        <p className="text-[4rem] md:text-[6rem] font-black text-black leading-none">‘thoda sa idea’</p>

        <div className="relative inline-block my-2">
          <span className="absolute -top-1 -left-2 rotate-[-5deg] bg-yellow-400 px-2 py-1 text-black text-sm font-bold z-0">
            into
          </span>
        </div>

        <p className="text-[3rem] md:text-[5rem] font-extrabold text-blue-600 leading-none tracking-tight drop-shadow-xl">
          BADA BRAND MAGIC
        </p>
      </div>
    </div>
  );
}

export default Hero;
