'use strict'

let dashboard = document.getElementById('dash-board');
let addBtn = document.getElementById(

document.ondragover = function () {
  return false;
};

document.ondragleave = document.ondragend = function () {
  return false;
};

document.ondrop = function (e) {
  e.preventDefault();

  let file = e.dataTransfer.files[0];
  dashboard.innerHTML = `
    <a href="${file.path}">${file.name}</a>
  `;

  return false;
};
