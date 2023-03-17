const network = {};

const MAX_DEPTH = 5;
const MAX_CLIENTS = 10;

function populate(node = {}, parent = null, depth = 1) {
  node.id = parent ? `${parent.id}.${depth}` : `${depth}`;
  const clientCount = depth === MAX_DEPTH ? 0 : Math.trunc(Math.random() * MAX_CLIENTS) + 1;
  if(clientCount) {
    node.clients = [];
    for(let i = 0; i < clientCount; i++) {
      node.clients.push(populate({}, node, depth+1));
    }
  }
  return node;
}

const net = populate({});
// console.log(JSON.stringify(net, null, 2));
console.log(JSON.stringify(net));