"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Content Loaded");
  const userSearch = document.getElementById("userSearch");
  const UsernameInput = document.getElementById("username");
  const username = UsernameInput.textContent;
  console.log(userSearch);
  console.log(UsernameInput);
  console.log(username);
  function GetUserInfo({ userName }) {
    const url = `https://api.github.com/users/macgyversean`;
    fetch(url, {
      method: "get",
      headers: {
        "User-Agent": "SeanCarroll/3.0",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  }

  function updateValue(e) {
    UsernameInput.textContent = e.target.value;
  }
  UsernameInput.addEventListener("input", updateValue);
  userSearch.addEventListener("click", () => GetUserInfo({ username }));
});
