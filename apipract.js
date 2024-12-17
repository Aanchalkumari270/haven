function getData() {
  fetch("https://api.github.com/users/abinash687553")
    .then((response) => response.json())
    .then((user) => {
      document.getElementById("username").innerHTML = `Username: ${user.login}`;
      document.getElementById("bio").innerHTML = `Bio: ${user.bio}`;
      document.getElementById(
        "publicRepo"
      ).innerHTML = `Public Repos: ${user.public_repos}`;
      document.getElementById(
        "numRepo"
      ).innerHTML = `No. of Repos: ${user.public_repos}`;
    });
}
