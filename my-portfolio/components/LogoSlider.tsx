import { useEffect, useRef } from "react";

const icons = [
  { className: "devicon-apachekafka-original-wordmark" },
  { className: "devicon-nextjs-original-wordmark" },
  { className: "devicon-git-plain-wordmark colored" },
  { className: "devicon-terraform-plain-wordmark colored" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
];

export default function LogoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    // Duplicate the slider content for seamless looping
    const sliderContent = slider.innerHTML;
    slider.innerHTML += sliderContent;

    // Set the animation duration dynamically based on the content width
    const totalWidth = slider.scrollWidth / 2; // Original content width
    const duration = totalWidth / 100; // Adjust speed (higher = slower)

    slider.style.animation = `marquee ${duration}s linear infinite`;
  }, []);

  return (
    <div className="slider-container relative overflow-hidden">
      {/* Gradient fade effect */}
      <div className="slider-fade-left"></div>
      <div className="slider-fade-right"></div>

      <div className="slider-track flex" ref={sliderRef}>
        {icons.map((icon, index) => (
          <div key={index} className="content flex items-center justify-center">
            {icon.className ? (
              <i
                className={`${icon.className} text-6xl text-gray-400 hover:text-white transition-all`}
                aria-hidden="true"
              ></i>
            ) : (
              <img
                src={icon.src}
                alt=""
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-all"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}