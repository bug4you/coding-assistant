const {getRepoWithName} = require("./Constants");
const axios = require("axios");

async function getRepo(repo, name = "") {
    try {
        const response = await axios.get(getRepoWithName(repo, name));
        return await response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = getRepo;