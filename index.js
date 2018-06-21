// Code your solution here

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list');
  for(let i=0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i]) + n;
  }
}

function deepestChild(){
  const ans = document.getElementById("grand-node").querySelectorAll("div")
  return ans[3]
}