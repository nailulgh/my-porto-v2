import { useState, useEffect } from "react";
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
}

export function Project() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/nailulgh/repos?sort=updated&per_page=6')
      .then(response => response.json())
      .then(data => {
        // Limit to 6 latest repos
        if(Array.isArray(data)) {
          setRepositories(data.slice(0, 6));
        }
      })
      .catch(error => console.error("Error fetching repos:", error));
  }, []);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {repositories.map((repo, index) => (
          <ScrollAnimation animateIn="flipInX" key={repo.id}>
            <div className="project" data-id={String(index + 1).padStart(2, '0')}>
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{repo.name.replace(/-/g, ' ')}</h3>
                <p>{repo.description || "Intelligent systems and structured codebase development."}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {repo.topics && repo.topics.length > 0 ? (
                     repo.topics.slice(0, 4).map(topic => <li key={topic}>{topic}</li>)
                  ) : repo.language ? (
                     <li>{repo.language}</li>
                  ) : (
                     <li>Code is Craft</li>
                  )}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}