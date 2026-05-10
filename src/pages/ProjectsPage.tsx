import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { ProjectFilter, useProjectFilter } from '../components/Project/ProjectFilter';
import { ProjectCard, ProjectCardSkeleton, ProjectCardError } from '../components/Project/ProjectCard';

const PageContainer = styled.main`
  min-height: 100vh;
  padding: 120px 24px 60px;
  max-width: 1400px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  text-decoration: none;
  margin-bottom: 3rem;
  transition: all 0.2s ease;
  letter-spacing: 0.05em;

  &:hover {
    color: ${({ theme }) => theme.colors.accentCyan};
    text-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
  }
`;

const HeaderSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 4.5rem;
    color: ${({ theme }) => theme.colors.accentCyan};
    margin-bottom: 1.5rem;
    text-shadow: ${({ theme }) => theme.shadows.glowCyanMedium};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }

  .count {
    color: ${({ theme }) => theme.colors.accentMagenta};
    font-size: 1.1rem;
  }
`;

const FilterSection = styled.section`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .results-count {
    margin-top: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyStateContainer = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px dashed ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.radius.md};

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.fonts.mono};
    margin-bottom: 1.5rem;
  }

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.accentCyan};
    border: 1px solid ${({ theme }) => theme.colors.accentCyan};
    padding: 0.5rem 1rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.radius.sm};
    transition: all 0.2s;

    &:hover {
      background: rgba(0, 245, 255, 0.1);
      box-shadow: ${({ theme }) => theme.shadows.glowCyanSubtle};
    }
  }
`;

export function ProjectsPage() {
  const { repos, loading, error } = useGitHubRepos();
  const filter = useProjectFilter(repos);

  return (
    <PageContainer>
      <BackButton to="/">[ ← BACK TO MAIN ]</BackButton>

      <HeaderSection>
        <h1>MY PROJECTS</h1>
        <p>All repositories — non-fork, owned by @nailulgh</p>
        {!loading && <p className="count">[{repos.length} REPOSITORIES FOUND]</p>}
      </HeaderSection>

      {!loading && !error && repos.length > 0 && (
        <FilterSection>
          <ProjectFilter 
            languages={filter.languages}
            topics={filter.topics}
            activeLanguage={filter.activeLanguage}
            activeTopic={filter.activeTopic}
            onSelectLanguage={filter.setActiveLanguage}
            onSelectTopic={filter.setActiveTopic}
          />
          <div className="results-count">[{filter.filteredRepos.length} RESULTS]</div>
        </FilterSection>
      )}

      <Grid>
        {loading && (
          <>
            {Array.from({ length: 6 }).map((_, i) => (
              <ScrollAnimation animateIn="fadeInUp" delay={i * 100} key={i} style={{ height: '100%' }}>
                <ProjectCardSkeleton />
              </ScrollAnimation>
            ))}
          </>
        )}

        {error && (
          <div style={{ gridColumn: '1 / -1' }}>
            <ProjectCardError message={error} />
          </div>
        )}

        {!loading && !error && filter.filteredRepos.length === 0 && (
          <EmptyStateContainer>
            <p>{"// "}NO_REPOS_FOUND — reset filter</p>
            <button onClick={() => { filter.setActiveLanguage(null); filter.setActiveTopic(null); }}>
              [ RESET FILTER ]
            </button>
          </EmptyStateContainer>
        )}

        {!loading && !error && filter.filteredRepos.map((repo, index) => (
          <ScrollAnimation animateIn="fadeInUp" delay={(index % 6) * 100} key={repo.id} style={{ height: '100%' }}>
            <ProjectCard repo={repo} />
          </ScrollAnimation>
        ))}
      </Grid>
    </PageContainer>
  );
}
