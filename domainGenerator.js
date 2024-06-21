
const pronoun = ["the", "our", "my", "their"];
const adj = ["great", "big", "anonymous", "crazy"];
const noun = ["racoon", "hamster", "groundhog", "platypus"];
const extensions = [".com", ".es", ".net", ".org"];


for (const i of pronoun) {
  for (const j of adj) {
    for (const k of noun) {
      for (const l of extensions) {
        console.log(i + j + k + l);
      }
    }
  }
}
