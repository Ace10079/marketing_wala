function Hero() {
  return (
    <div className="bg-[url('/bg.JPG')] bg-cover bg-center min-h-screen relative">
      <img
        src="./camera.PNG"
        alt="camera"
        className="w-[150px] h-[150px] absolute left-1/2 top-[16.66%] transform -translate-x-1/2 animate-float"
      />
      <img
        src="./mic.PNG"
        alt="mic"
        className="w-44 h-82 absolute left-0 bottom-0 animate-tilt"
      />


      <img
        src="./girl.PNG"
        alt="girl"
        className="absolute right-5 bottom-0 w-[250px] h-[230px] animate-sway"
      />
    </div>
  );
}

export default Hero;
