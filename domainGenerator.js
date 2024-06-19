let pronoun = ["the", "our", "my", "their"];
  let adj = ["great", "big", "anonymous", "crazy"];
  let noun = ["racoon", "hamster", "groundhog", "platypus"];
  let extensions = [".com", ".es", ".net", ".org"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + extensions[l]);
        }
      }
    }
  }