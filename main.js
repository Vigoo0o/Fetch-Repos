let input, getButton, reposDiv;

input = document.querySelector(".get-repos input");
getButton = document.querySelector(".get-button");
reposDiv = document.querySelector(".show-data");

getButton.onclick = () => {
  getRepos();
};

function getRepos() {
  if (input.value == "") {
    reposDiv.innerHTML = "<span>Please Enter A Github Username.</span>";
  } else {
    // Get List Of Repos
    // const reposList = fetchRepos(
    //   `https://api.github.com/users/${input.value}/repos`
    // );
    // console.log(reposList);
    // Add Repos Name And Links To The Fucking Page
    // addReposToThePage(reposList);
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        reposDiv.innerHTML = "";

        repos.forEach((repo) => {
          // Create Main Div
          let mainDiv = document.createElement("div");
          let repoName = document.createTextNode(repo.name);
          mainDiv.appendChild(repoName);

          // Create Repo URL
          let theURL = document.createElement("a");
          let URLText = document.createTextNode("Visit");
          theURL.appendChild(URLText);
          theURL.href = `https://github.com/${input.value}/${repo.name}`;
          theURL.setAttribute("target", "_blank");

          mainDiv.appendChild(theURL);
          mainDiv.className = "repo-box";

          reposDiv.appendChild(mainDiv);
        });
      });
  }
}

// function fetchRepos(api) {
//   let result = fetch(api)
//     .then((response) => response.json())
//     .then((repos) => {
//       return repos;
//     });
//   return result;
// }

// function addReposToThePage(reposList) {
//   // reposList.forEach((repo) => {
//   //   console.log(repo);
//   // });
//   console.log(reposList);
// }
