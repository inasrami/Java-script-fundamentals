function bossRush(input) {
  let count = Number(input.shift());

  for (let i = 0; i < count; i++) {
    let line = input[i];
    let pattern = /^\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#$/;
    let match = line.match(pattern);

    if (match) {
      let bossName = match[1];
      let title = match[2];
      let strength = bossName.length;
      let armor = title.length;
    
      console.log(`${bossName}, The ${title}`);
      console.log(`>> Strength: ${strength}`);
      console.log(`>> Armor: ${armor}`);
    } else {
      console.log("Access denied!");
    }
  }
}

bossRush([
  '3',
  '|PETER|:#Lead architect#',
  '|GEORGE|:#High Overseer#',
  '|ALEX|:#Assistant Game Developer#'
]);
