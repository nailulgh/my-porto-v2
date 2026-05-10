import { useState, useEffect } from 'react';
import { GitHubRepo } from '../@types/github';
import { fetchMyRepos } from '../data/github';

export const useGitHubRepos = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check cache first
        const cachedRepos = sessionStorage.getItem('github_repos');
        if (cachedRepos) {
          setRepos(JSON.parse(cachedRepos));
          setLoading(false);
          return;
        }

        const data = await fetchMyRepos();
        setRepos(data);
        sessionStorage.setItem('github_repos', JSON.stringify(data));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred while fetching GitHub repos.');
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  return { repos, loading, error };
};
