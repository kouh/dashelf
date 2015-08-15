'use strict'

console.log('hello world');
let dashboard = document.getElementById('dash-board');

document.ondragover = function () {
  return false;
};

document.ondragleave = document.ondragend = function () {
  return false;
};

document.ondrop = function (e) {
  e.preventDefault();

  var file = e.dataTransfer.files[0];
  dashboard.innerHTML = `
    <a href="${file.path}">${file.name}</a>
  `;
  // console.log(file.path);

  return false;
};
