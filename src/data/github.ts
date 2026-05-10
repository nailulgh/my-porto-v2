import { GitHubRepo } from '../@types/github';

const GITHUB_API_URL = 'https://api.github.com/users/nailulgh/repos?per_page=100&sort=updated&type=owner';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchMyRepos = async (): Promise<GitHubRepo[]> => {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };

  if (GITHUB_TOKEN) {
    headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  }

  const response = await fetch(GITHUB_API_URL, { headers });

  if (!response.ok) {
    if (response.status === 403 || response.status === 429) {
      throw new Error("RATE_LIMIT_EXCEEDED — try again in 60 minutes");
    }
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  const data: GitHubRepo[] = await response.json();

  // Filter out forks and sort: stargazers_count desc, then updated_at desc
  const filteredAndSortedRepos = data
    .filter(repo => repo.fork === false)
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });

  return filteredAndSortedRepos;
};
