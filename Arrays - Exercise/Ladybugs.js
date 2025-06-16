function ladybug(input) {
  let fieldSize = Number(input[0]);
  let initialPositions = input[1].split(' ').map(Number);
  let commands = input.slice(2);


  let field = Array(fieldSize).fill(0);


  for (let index of initialPositions) {
    if (index >= 0 && index < fieldSize) {
      field[index] = 1;
    }
  }

  for (let command of commands) {
    let [startIndexStr, direction, flyLengthStr] = command.split(' ');
    let startIndex = Number(startIndexStr);
    let flyLength = Number(flyLengthStr);

    if (startIndex < 0 || startIndex >= fieldSize || field[startIndex] !== 1) {
      continue; 
    }

    field[startIndex] = 0; 

    
    if (flyLength < 0) {
      flyLength = Math.abs(flyLength);
      direction = direction === 'right' ? 'left' : 'right';
    }

    let position = startIndex;
    while (true) {
      position += direction === 'right' ? flyLength : -flyLength;

      if (position < 0 || position >= fieldSize) {
        break; 
      }

      if (field[position] === 0) {
        field[position] = 1; 
        break;
      }
    }
  }

  console.log(field.join(' '));
}