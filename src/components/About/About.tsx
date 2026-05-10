import { Container } from "./styles";
import profil from "../../assets/profil.webp";
import python from "../../assets/python.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Nailul Ghufron, an Informatics student with a strong passion for building web applications and integrating intelligent systems.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I combine structured computational thinking with a curiosity for AI-augmented development. My goal is to create software that is not only functional but also smarter and more efficient.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Currently, I am deep-diving into React, TypeScript, and AI-assisted workflows to build the next generation of digital tools.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Academic Background:</h3>
            <h4>Bachelor of Informatics</h4>
            <p>UIN Maulana Malik Ibrahim Malang | 2024 - Present</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Philosophy:</h3>
            <h4>Code is Craft</h4>
            <p>Structured, Logical, and AI-Augmented.</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills & tools:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={reactIcon} alt="React" />
              <p>React</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
              <p>Typescript</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
              <p>JavaScript</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={htmlIcon} alt="Html" />
              <p>HTML</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={cssIcon} alt="Css" />
              <p>CSS</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={githubIcon} alt="GitHub" />
              <p>Git/GitHub</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={python} alt="Python" />
              <p>Python (AI/ML)</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.22 * 1000}>
          <div className="image-container">
            <div className="cyber-ring"></div>
            <img src={profil} alt="Muhammad Nailul Ghufron Majid" className="profile-img" />
            <img src={reactIcon} alt="React" className="floating-icon icon-1" />
            <img src={typescriptIcon} alt="TypeScript" className="floating-icon icon-2" />
            <img src={python} alt="Python" className="floating-icon icon-3" />
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
