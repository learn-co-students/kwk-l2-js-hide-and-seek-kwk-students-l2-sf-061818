//Code your solution here
function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}
function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i]) + n;
  }
}
function deepestChild() {
  const a = document.getElementById('grand-node').querySelectorAll('div');
  return a[3]
  let element = a.children
}