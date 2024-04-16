const API_KEY = "6a2ec13a468d8eebb86015a59a366400";
const GET_ALL_LANG_REPOS = `https://libraries.io/api/NPM/react?api_key=${API_KEY}`;
const getRepoWithName = (repo, name) => `https://libraries.io/api/${repo}/${name}?api_key=${API_KEY}`;
module.exports = {GET_ALL_LANG_REPOS, getRepoWithName};