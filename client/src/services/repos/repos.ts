import axios from 'axios';
import { Repo } from '../../interfaces/repos';

const GITHUB_URL = 'https://api.github.com/users/rubinj30/repos';

export const getRepos = async () => {
  try {
    const { data } = await axios.get<Repo[]>(GITHUB_URL, {
      headers: {
        Accept: 'application/vnd.github.inertia-preview+json',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getLanguages = async (repo: Repo) => {
  return await axios.get(repo.languages_url);
};

// const reposWithLanguagesCalls = data.slice(1, 5).map((repo) => {
//     const { html_url, description, clone_url, updated_at, created_at, topics, forks_count, visibility } = repo;
//     return axios.get(repo.languages_url).then((resp) => ({
//       languages: resp.data,
//       clone_url,
//       html_url,
//       description,
//       updated_at,
//       created_at,
//       topics,
//       forks_count,
//       visibility,
//     }));
//   });
//   const reposWithLanguages = await Promise.all(reposWithLanguagesCalls);
//   return reposWithLanguages;
// } catch (err) {
//   console.log(err);
// }
