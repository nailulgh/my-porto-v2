import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { GitHubRepo } from '../../@types/github';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const FilterBtn = styled.button<{ $active: boolean }>`
  background: transparent;
  border: 1px solid ${({ theme, $active }) =>
    $active ? theme.colors.accentCyan : theme.colors.borderDefault};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accentCyan : theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.4rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.05em;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: ${({ theme }) => theme.shadows.glowCyanMedium};
    color: ${({ theme }) => theme.colors.accentCyan};
  }

  ${({ $active, theme }) => $active && `
    box-shadow: ${theme.shadows.glowCyanMedium};
  `}
`;

interface ProjectFilterProps {
  languages: string[];
  topics: string[];
  activeLanguage: string | null;
  activeTopic: string | null;
  onSelectLanguage: (lang: string | null) => void;
  onSelectTopic: (topic: string | null) => void;
}

const getLanguagePrefix = (lang: string) => {
  const map: Record<string, string> = {
    'JavaScript': 'JS',
    'TypeScript': 'TS',
    'Python': 'PY',
    'HTML': 'HTML',
    'CSS': 'CSS',
  };
  return map[lang] || lang.toUpperCase().substring(0, 4);
};

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  languages,
  topics,
  activeLanguage,
  activeTopic,
  onSelectLanguage,
  onSelectTopic
}) => {
  return (
    <FilterContainer>
      <FilterBtn
        $active={activeLanguage === null && activeTopic === null}
        onClick={() => {
          onSelectLanguage(null);
          onSelectTopic(null);
        }}
      >
        ALL
      </FilterBtn>

      {languages.map(lang => (
        <FilterBtn
          key={`lang-${lang}`}
          $active={activeLanguage === lang}
          onClick={() => {
            onSelectLanguage(lang);
            onSelectTopic(null);
          }}
          aria-label={`Filter by ${lang}`}
        >
          {getLanguagePrefix(lang)}
        </FilterBtn>
      ))}

      {topics.map(topic => (
        <FilterBtn
          key={`topic-${topic}`}
          $active={activeTopic === topic}
          onClick={() => {
            onSelectTopic(topic);
            onSelectLanguage(null);
          }}
          aria-label={`Filter by ${topic}`}
        >
          #{topic}
        </FilterBtn>
      ))}
    </FilterContainer>
  );
};

// Hook that encapsulates the filter logic for the parent component
export const useProjectFilter = (repos: GitHubRepo[]) => {
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const filteredRepos = useMemo(() => {
    return repos.filter(repo => {
      if (activeLanguage && repo.language !== activeLanguage) return false;
      if (activeTopic && (!repo.topics || !repo.topics.includes(activeTopic))) return false;
      return true;
    });
  }, [repos, activeLanguage, activeTopic]);

  const languages = useMemo(() => {
    const langs = new Set<string>();
    repos.forEach(r => r.language && langs.add(r.language));
    return Array.from(langs).sort();
  }, [repos]);

  const topics = useMemo(() => {
    const tps = new Set<string>();
    repos.forEach(r => r.topics && r.topics.forEach((t: string) => tps.add(t)));
    return Array.from(tps).sort();
  }, [repos]);

  return {
    activeLanguage,
    setActiveLanguage,
    activeTopic,
    setActiveTopic,
    filteredRepos,
    languages,
    topics
  };
};
