import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesShowcase = () => {
  const services = [
    { name: "Video Production", description: "From concept to screen, we create visually captivating videos that tell your brand’s story and captivate your audience across platforms." },
    { name: "UGC Videos", description: "Harness the power of real voices. Our UGC (User-Generated Content) videos are authentic, relatable, and proven to drive engagement and trust." },
    { name: "SMM", description: "We manage, optimize, and grow your social media presence with creative content, targeted strategies, and real-time performance tracking." },
    { name: "Design", description: "Creative visuals that speak your brand language. From branding kits to campaign designs, we craft identities that are bold and consistent." },
    { name: "Performance Marketing", description: "ROI-focused campaigns tailored to convert. Our performance marketing combines data and creativity to drive measurable business growth." },
    { name: "Web Development", description: "Sleek, responsive, and lightning-fast websites that not only look great but also deliver an exceptional user experience." },
    { name: "SEO", description: "Climb the ranks and stay there. We optimize your online presence to drive organic traffic and improve your visibility across search engines." },
    { name: "AR", description: "Augmented Reality solutions to elevate your marketing and product experience through immersive technology." },
  ];

  const mediaFiles = [
    "s1.jpg", "s2.jpg", "Video-6.mp4", "Video-18.mp4", "s3.jpg", "s4.jpg",
    "Video-50.mp4", "Video-66.mp4", "s5.jpg", "s6.jpg", "Video-79.mp4",
    "Video-147.mp4", "s7.jpg", "s8.jpg", "Video-212.mp4", "Video-215.mp4",
    "s9.jpg", "s10.jpg", "Video-221.mp4", "Video-304.mp4", "s11.jpg",
    "s12.jpg", "Video-312.mp4", "Video-316.mp4", "s13.jpg", "Video-348.mp4",
    "Video-411.mp4", "Video-504.mp4", "Video-525.mp4", "Video-701.mp4",
    "Video-723.mp4", "Video-778.mp4", "Video-805.mp4", "Video-812.mp4",
    "Video-836.mp4", "Video-912.mp4", "Video-937.mp4", "Video-941.mp4", "Video-989.mp4"
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  const sliderSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
  };

  return (
    <div className="py-12 px-4 sm:px-8 bg-white text-black">
      <h2 className="text-center text-6xl font-bold mb-10 poiret-one-regular">What We Offer</h2>

      {/* Service Name Marquee */}
      <div className="overflow-hidden border-y border-gray-200 py-5 mb-10 poppins-regular">
        <Marquee pauseOnHover speed={30} gradient={false} direction="right">
          <div className="flex gap-6 px-4">
            {services.map((service, index) => (
              <div key={index} className="px-5 py-2 rounded-full text-xl font-medium border border-gray-300 bg-gray-50 text-black whitespace-nowrap">
                {service.name}
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Media Section (Swipe for mobile, Marquee for desktop) */}
      <div className="border-t border-b border-gray-200 py-5 mb-10">
        {isMobile ? (
          <Slider {...sliderSettings}>
            {mediaFiles.map((file, index) => {
              const isVideo = file.endsWith(".mp4");
              return (
                <div key={index} className="px-2">
                  <div className="w-[180px] h-[260px] sm:w-[200px] sm:h-[300px] bg-white rounded-lg overflow-hidden shadow-md mx-auto">
                    {isVideo ? (
                      <video
                        src={`./Services/${file}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <img
                        src={`./Services/${file}`}
                        alt={`media-${index}`}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
        ) : (
          <Marquee pauseOnHover speed={40} gradient={false}>
            <div className="flex gap-6 px-2">
              {mediaFiles.map((file, index) => {
                const isVideo = file.endsWith(".mp4");
                return (
                  <div
                    key={index}
                    className="w-[180px] h-[260px] sm:w-[200px] sm:h-[300px] bg-white rounded-lg overflow-hidden shadow-md"
                  >
                    {isVideo ? (
                      <video
                        src={`./Services/${file}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <img
                        src={`./Services/${file}`}
                        alt={`media-${index}`}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </Marquee>
        )}
      </div>

      {/* Auto-Rotating Description */}
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-0 h-[100px] flex items-center justify-center poppins-regular">
        <p key={activeIndex} className="text-base sm:text-lg leading-relaxed text-gray-600 transition-opacity duration-700 ease-in-out animate-fade">
          {services[activeIndex].description}
        </p>
      </div>
    </div>
  );
};

export default ServicesShowcase;
