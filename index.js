//Code your solution here
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  const a = document.getElementById("grand-node").querySelectorAll("div")
  return a[3]
}
