function getFirstSelector(selector) {
  return document.querySelector(selector);
}

let options = []

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild () {
  let node = document.getElementById("grand-node")
  let nextNode = node.children[0]
  
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0];
  }
  return node;
}

let x = [];

function add (y,n) {
  return parseInt((parseInt(y) + parseInt(n)));
}

function increaseRankBy (n) {
  x = document.querySelectorAll(".ranked-list");
  for (let i=0; i < x.length; i++) {
    let children = x[i].children
    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
    
  }
  
}

// mocha.run()