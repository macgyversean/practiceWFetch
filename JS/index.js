"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Content Loaded");

  function updateValue() {
    UsernameInput.textContent = e.target.value;
  }
  const UsernameInput = document.getElementById("username");
  UsernameInput.addEventListener("input", updateValue);
  function GetUserInfo() {
    const username = UsernameInput.textContent;
    url = `https://api.github.com/users/${username}`;
  }
  const userSearch = document.getElementById("userSearch");
  userSearch.addEventListener("submit", GetUserInfo);
  function get(url) {
    return fetch(`url`, {
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
    console.log(data);
  }
});
