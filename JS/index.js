"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Content Loaded");
  const userSearch = document.getElementById("userSearch");
  const UsernameInput = document.getElementById("username");
  const username = UsernameInput.value;
  UsernameInput.textContent = username.value;
  console.log(userSearch);
  console.log(UsernameInput);

  function GetUserInfo(username) {
    const url = `https://api.github.com/users/${username}`;
    console.log(username);
    console.log(url);
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
  userSearch.addEventListener("click", function () {
    GetUserInfo(UsernameInput.value);
  });
});
