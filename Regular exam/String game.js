function stringGame(input) {
  let str = input.shift();

  for (let line of input) {
    if (line === "Done") break;

    let parts = line.split(" ");
    let command = parts[0];
    let args = parts.slice(1);

    switch (command) {
      case "Change":
        let char = args[0];
        let replacement = args[1];
        let regex = new RegExp(char, 'g');
        str = str.replace(regex, replacement);
        console.log(str);
        break;

      case "Includes":
        let substring = args[0];
        console.log(str.includes(substring) ? "True" : "False");
        break;

      case "End":
        let endSubstring = args[0];
        console.log(str.endsWith(endSubstring) ? "True" : "False");
        break;

      case "Uppercase":
        str = str.toUpperCase();
        console.log(str);
        break;

      case "FindIndex":
        let findChar = args[0];
        console.log(str.indexOf(findChar));
        break;

      case "Cut":
        let startIndex = Number(args[0]);
        let count = Number(args[1]);
        let cutPart = str.substring(startIndex, startIndex + count);
        console.log(cutPart);
        break;
    }
  }
}

stringGame([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done"
])