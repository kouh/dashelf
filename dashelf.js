'use strict'

const shell = require('shell');
let dashboard = document.getElementById('dash-board');
let addBtn = document.getElementById('add-btn');


dashboard.addEventListener('click', function(e){
  if(e.target.href.match(/^http:\/\//)) {
    shell.openExternal(e.target.getAttribute('href'));
    e.preventDefault();
    return false;
  }
});

addBtn.addEventListener('click', function(){
  let text = document.getElementById('text-input').value;
  dashboard.innerHTML += `
    <a href="${text}" class="item">${text}</a>
  `;
});

document.ondragover = function () {
  return false;
};

document.ondragleave = document.ondragend = function () {
  return false;
};

document.ondrop = function (e) {
  e.preventDefault();

  let file = e.dataTransfer.files[0];
  dashboard.innerHTML += `
    <a href="${file.path}" class="item">${file.name}</a>
  `;

  return false;
};
