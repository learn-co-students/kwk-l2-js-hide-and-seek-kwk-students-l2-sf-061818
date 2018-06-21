//Code your solution here
function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}
function increaseRankBy(n){
  const rankedList = document.querySelectorAll('.ranked-list')
  for(let i = 0; i < rankedList.length; i++){
    rankedList[i].innerHTML = parseInt(rankedList[i]) + n;
  }
}
function deepestChild(){
  const a = document.getElementById("grand-node").querySelectorAll("div")
  return a[3]
}