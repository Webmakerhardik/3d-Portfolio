import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Hirrd",
    role: "Full Stack Development",
    tools: "HTML, CSS, JavaScript, Tailwind, React, Supabase, Clerk, Shadcn UI",
    image: "/images/Hirred.png",
    link: "https://hirrd-eta-eight.vercel.app/",
  },
  {
    title: "Vechiql-AI",
    role: "Full Stack Development",
    tools: "HTML, CSS, JavaScript, React, Supabase, Clerk, Google API",
    image: "/images/Vechiql.png",
    link: "https://github.com/Webmakerhardik/Vechiql-Ai",
  },
  {
    title: "Weather-App",
    role: "Full Stack App",
    tools: "JavaScript, React, HTML, CSS",
    image: "/images/Weather.png",
    link: "https://weather-app-seven-eta-26.vercel.app/",
  },
  // Remaining projects will be ignored due to slice(0, 3)
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding || "0") / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.slice(0, 3).map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.role}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WorkImage image={project.image} alt={project.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
