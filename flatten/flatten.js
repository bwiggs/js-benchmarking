
// iteration
export function flatten_iteration(node) {
  const q = [node];
  const results = [];
  for (const e of q) {
    results.push(e.ip);
    if (e.clients?.length) {
      for (const c of e.clients) {
        q.push(c)
      }
    }
  }
  return results;
}

// recursion
export function flatten_recursion(node, results = []) {
  results.push(node.ip);
  if(node.clients?.length) {
    for(const c of node.clients) {
      flatten_recursion(c, results);
    }
  }
  return results;
}

export function flatten_recursion_push(G) {
  const result = [G.ip];
  if(G.clients?.length) {
    for(const c of G.clients) {
      result.push(...flatten_recursion_push(c))
    }
  }
  return result;
}

// recursion
export function flatten_recursion_foreach(G) {
  const result = [G.ip];
  if(G.clients?.length) {
    G.clients.forEach(c => result.push(...flatten_recursion_push(c)));
  }
  return result;
}

export function flatten_recursion_concat(G) {
  let result = [G.ip];
  if(G.clients?.length) {
    for(const c of G.clients) {
      result = result.concat(flatten_recursion_concat(c));
    }
  }
  return result;
}
