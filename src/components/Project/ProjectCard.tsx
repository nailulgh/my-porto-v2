import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GitHubRepo } from '../../@types/github';
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 32px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    background: #E22470;
    border-color: #E22470;
    box-shadow: 0 0 15px rgba(226, 36, 112, 0.6);
    transform: translateY(-8px);

    svg.folder {
      color: #ffffff;
    }

    .project-links a img {
      filter: brightness(0) invert(1);
      opacity: 1;
    }

    .repo-name {
      color: #ffffff;
    }

    .description {
      color: #ffffff;
      opacity: 0.95;
    }

    footer {
      border-top-color: rgba(255, 255, 255, 0.3);
    }

    .topic-badge {
      background: ${({ theme }) => theme.mode === 'dark' ? '#0a0014' : '#ffffff'};
      color: ${({ theme }) => theme.mode === 'dark' ? '#ffffff' : '#E22470'};
    }

    .footer-stats {
      color: #ffffff;
      svg {
        color: #ffffff;
      }
    }
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  svg.folder {
    width: 45px;
    height: 45px;
    color: ${({ theme }) => theme.colors.accentCyan};
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
      img {
        filter: ${({ theme }) => theme.mode === 'dark' ? 'brightness(0) invert(1) drop-shadow(0 0 5px ' + theme.colors.accentCyan + ')' : 'drop-shadow(0 0 5px ' + theme.colors.accentCyan + ')'};
      }
    }

    img {
      width: 32px;
      height: 32px;
      filter: ${({ theme }) => theme.mode === 'dark' ? 'brightness(0) invert(1)' : 'none'};
      transition: all 0.3s ease;
      opacity: 0.8;
    }
  }
`;

const RepoName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.accentCyan};
  font-size: 2.0rem;
  margin: 16px 0 12px;
  word-break: break-word;
  line-height: 1.3;
`;

const Body = styled.div`
  flex-grow: 1;
  margin-bottom: 24px;
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.4rem;
    line-height: 1.6;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
  }
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

const TopicBadge = styled.span`
  background: ${({ theme }) => theme.colors.bgElevated};
  color: ${({ theme }) => theme.colors.accentMagenta};
  font-size: 1.2rem;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  border: 1px solid transparent;
  opacity: 0.9;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding-top: 20px;
`;

const FooterStats = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 12px;
`;

const LanguageDot = styled.span<{ $color: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  margin-right: 8px;
`;

const SkeletonBox = styled.div<{ $width?: string, $height?: string, $mb?: string }>`
  background: ${({ theme }) => theme.colors.bgElevated};
  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.bgElevated} 0px,
    ${({ theme }) => theme.colors.borderDefault} 40px,
    ${({ theme }) => theme.colors.bgElevated} 80px
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2.5s infinite linear forwards;
  
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '20px'};
  margin-bottom: ${({ $mb }) => $mb || '0'};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const ErrorContainer = styled(CardContainer)`
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.accentMagenta};
  box-shadow: ${({ theme }) => theme.shadows.glowMagenta};
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.accentMagenta};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1.4rem;
  }
`;

interface ProjectCardProps {
  repo: GitHubRepo;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
  const getLanguageColor = (lang: string) => {
    const map: Record<string, string> = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Python': '#3572A5',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C#': '#178600',
      'PHP': '#4F5D95',
    };
    return map[lang] || '#8888aa';
  };

  const [description, setDescription] = React.useState<string>(repo.description || "— no description —");
  const [loadingReadme, setLoadingReadme] = React.useState(false);

  React.useEffect(() => {
    const fetchReadme = async () => {
      // If there's already a good description, we can skip or use it as fallback
      // But user specifically asked for README
      try {
        setLoadingReadme(true);
        const cacheKey = `readme_v3_${repo.id}`;
        const cached = sessionStorage.getItem(cacheKey);

        if (cached) {
          setDescription(cached);
          setLoadingReadme(false);
          return;
        }

        const res = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            // Using same token as the hook if available
            ...(process.env.REACT_APP_GITHUB_TOKEN ? { 'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}` } : {})
          }
        });

        if (res.ok) {
          const data = await res.json();
          let decoded = "";
          try {
            // Modern and safe way to decode Base64 with Unicode support
            const binaryString = atob(data.content.replace(/\s/g, ''));
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
              bytes[i] = binaryString.charCodeAt(i);
            }
            decoded = new TextDecoder('utf-8').decode(bytes);
          } catch (e) {
            // Fallback for older environments
            decoded = decodeURIComponent(escape(atob(data.content.replace(/\s/g, ''))));
          }

          // Split by lines and filter out empty ones
          const lines = decoded.split('\n').map(l => l.trim()).filter(l => l.length > 0);

          let foundContent = "";
          for (let line of lines) {
            // Skip lines that are purely headers or too short
            if (line.startsWith('#') && line.split(' ').length < 3) continue;

            // Skip ASCII Art (Box Drawing \u2500-\u257F and Block Elements \u2580-\u259F)
            const asciiArtChars = /[\u2500-\u259F]/;
            if (asciiArtChars.test(line)) continue;

            // Clean the line first to see if it has actual text content
            const cleanCandidate = line
              .replace(/!\[.*?\]\(.*?\)/g, '') // Remove markdown images/badges
              .replace(/<img[^>]*>/g, '')      // Remove HTML images
              .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Keep link text
              .replace(/<[^>]*>?/gm, '')      // Remove other HTML tags
              .replace(/[*_~`#]/g, '')        // Remove formatting characters
              .trim();

            // If we have a meaningful paragraph (at least 30 chars), take it
            // Also check that it's not just a line of symbols (at least 50% alphanumeric/common punctuation)
            const textOnly = cleanCandidate.replace(/[^a-zA-Z0-9\s.,!?]/g, '');
            if (cleanCandidate.length > 30 && textOnly.length / cleanCandidate.length > 0.5) {
              foundContent = cleanCandidate;
              break;
            }
          }

          if (foundContent) {
            const truncated = foundContent.length > 180 ? foundContent.substring(0, 180) + '...' : foundContent;
            setDescription(truncated);
            sessionStorage.setItem(cacheKey, truncated);
          }
        }
      } catch (err) {
        console.error("Failed to fetch readme for", repo.name, err);
      } finally {
        setLoadingReadme(false);
      }
    };

    fetchReadme();
  }, [repo.full_name, repo.id, repo.name, repo.description]);


  return (
    <CardContainer>
      <Header>
        <svg className="folder" width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <title>Folder</title>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        <ProjectLinks className="project-links">
          <a href={repo.html_url} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
            <img src={githubIcon} alt="GitHub" />
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noreferrer" aria-label="Live Demo">
              <img src={externalLink} alt="Visit site" />
            </a>
          )}
        </ProjectLinks>
      </Header>

      <Body>
        <RepoName className="repo-name">{repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</RepoName>
        {loadingReadme && description === "— no description —" ? (
          <div style={{ marginTop: '12px' }}>
            <SkeletonBox $mb="8px" />
            <SkeletonBox $width="80%" />
          </div>
        ) : (
          <p className="description">{description}</p>
        )}
      </Body>

      <Footer>
        {repo.topics && repo.topics.length > 0 && (
          <TopicsContainer>
            {repo.topics.slice(0, 4).map(topic => (
              <TopicBadge className="topic-badge" key={topic}>#{topic}</TopicBadge>
            ))}
            {repo.topics.length > 4 && (
              <TopicBadge className="topic-badge">+{repo.topics.length - 4}</TopicBadge>
            )}
          </TopicsContainer>
        )}
        <FooterStats className="footer-stats">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <LanguageDot $color={getLanguageColor(repo.language || 'Other')} />
            {repo.language || 'OTHER'}
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <svg style={{ marginRight: 8 }} width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
            </svg>
            {repo.stargazers_count}
          </span>
        </FooterStats>
      </Footer>
    </CardContainer>
  );
};

export const ProjectCardSkeleton: React.FC = () => (
  <CardContainer>
    <Header>
      <SkeletonBox $width="45px" $height="45px" />
      <div style={{ display: 'flex', gap: '16px' }}>
        <SkeletonBox $width="32px" $height="32px" />
        <SkeletonBox $width="32px" $height="32px" />
      </div>
    </Header>
    <Body>
      <SkeletonBox $width="70%" $height="28px" $mb="16px" />
      <SkeletonBox $mb="10px" />
      <SkeletonBox $width="80%" $mb="10px" />
    </Body>
    <Footer>
      <TopicsContainer>
        <SkeletonBox $width="60px" $height="28px" />
        <SkeletonBox $width="50px" $height="28px" />
      </TopicsContainer>
      <FooterStats>
        <SkeletonBox $width="120px" $height="20px" />
      </FooterStats>
    </Footer>
  </CardContainer>
);

export const ProjectCardError: React.FC<{ message?: string }> = ({ message }) => (
  <ErrorContainer>
    <p>{"// "}ERROR: {message || "Failed to fetch project"}</p>
  </ErrorContainer>
);
