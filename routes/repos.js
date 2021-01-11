const express = require('express');
const axios = require('axios');

const router = express.Router();

const GITHUB_URL = 'https://api.github.com/users/rubinj30/repos';

// There is a rate limit on the GitHub API, so I am grabbing when the server loads, and making additional calls for more data for each repo
router.get('/', async (_request, response) => {
  try {
    const { data } = await axios.get(GITHUB_URL, {
      headers: {
        Accept: 'application/vnd.github.inertia-preview+json',
      },
    });
    const reposWithLanguagesCalls = data.map((repo) => {
      const { html_url, description, clone_url, updated_at, created_at, topics, forks_count, visibility } = repo;
      return axios.get(repo.languages_url).then((resp) => ({
        languages: resp.data,
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
    const reposWithLanguages = await Promise.all(reposWithLanguagesCalls);
    response.json(reposWithLanguages);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
