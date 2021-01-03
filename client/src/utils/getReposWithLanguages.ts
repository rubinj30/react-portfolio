import { getLanguages, getRepos } from '../services/repos/repos';

export const getReposWithLanguages = async () => {
  const repos = await getRepos();
  const reposWithLanguageCalls = repos.slice(1, 5).map((repo) => {
    const { html_url, description, clone_url, updated_at, created_at, topics, forks_count, visibility } = repo;
    return getLanguages(repo).then((resp) => ({
      // adding language data from endpoint returned from initial getRepos response
      languages: resp.data,
      // the rest are selected items that I might implement in repo search results
      clone_url,
      html_url,
      description,
      updated_at,
      created_at,
      topics,
      forks_count,
      visibility,
    }));
  });
  const reposWithLanguages = await Promise.all(reposWithLanguageCalls);
  return reposWithLanguages;
};
