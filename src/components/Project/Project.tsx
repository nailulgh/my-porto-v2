import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { useGitHubRepos } from "../../hooks/useGitHubRepos";
import { ProjectCard, ProjectCardSkeleton, ProjectCardError } from "./ProjectCard";
import styled from "styled-components";

const ViewAllButton = styled(Link)`
  display: inline-block;
  margin-top: 3rem;
  padding: 1rem 2.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accentCyan};
  border: 1px solid ${({ theme }) => theme.colors.accentCyan};
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: rgba(0, 245, 255, 0.1);
    box-shadow: ${({ theme }) => theme.shadows.glowCyanMedium};
    transform: translateY(-2px);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export function Project() {
  const { repos, loading, error } = useGitHubRepos();

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {loading && (
          <>
            <ScrollAnimation animateIn="flipInX" style={{ height: '100%' }}>
              <ProjectCardSkeleton />
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX" style={{ height: '100%' }}>
              <ProjectCardSkeleton />
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX" style={{ height: '100%' }}>
              <ProjectCardSkeleton />
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX" style={{ height: '100%' }}>
              <ProjectCardSkeleton />
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX" style={{ height: '100%' }}>
              <ProjectCardSkeleton />
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX" style={{ height: '100%' }}>
              <ProjectCardSkeleton />
            </ScrollAnimation>
          </>
        )}
        
        {error && (
          <div style={{ gridColumn: '1 / -1' }}>
            <ProjectCardError message={error} />
          </div>
        )}

        {!loading && !error && repos.slice(0, 6).map((repo) => (
          <ScrollAnimation animateIn="flipInX" key={repo.id} style={{ height: '100%' }}>
            <ProjectCard repo={repo} />
          </ScrollAnimation>
        ))}
      </div>
      
      {!loading && !error && repos.length > 0 && (
        <ButtonWrapper>
          <ViewAllButton to="/projects">
            [ VIEW ALL PROJECTS → ]
          </ViewAllButton>
        </ButtonWrapper>
      )}
    </Container>
  );
}