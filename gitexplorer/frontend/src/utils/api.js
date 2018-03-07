var axios = require('axios');

function getProfile (username) {
  return axios.get('http://localhost:8000/fetchuserprofile?username=' + username)
    .then(function (user) {
      return user.data;
    });
}

function getRepos (username) {
  return axios.get('http://localhost:8000/fetchrepos?username=' + username);
}

function handleError (error) {
  console.warn(error);
  return null;
}

function getUserData (username) {
  return axios.all([
    getProfile(username),
    getRepos(username)
  ]).then(function (data) {
    var profile = data[0];
    var repos = data[1];

    return {
      profile: profile,
      repos: repos
    }
  });
}

module.exports = {
  fetchUserRepos: function (username) {
    return getUserData(username)
      .then(function(response){
        return response;
      })
      .catch(handleError);
  },
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
};