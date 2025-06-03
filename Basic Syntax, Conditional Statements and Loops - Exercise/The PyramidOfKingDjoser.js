function createPyramid(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let height = 0;

  let layer = 0;

  while (base > 0) {
    layer++;
    let totalArea = base * base;

    if (base <= 2) {
      // Top layer is made entirely of gold
      gold += totalArea * increment;
      height += increment;
      break;
    }

    // Stone for inner part
    let innerBase = base - 2;
    let innerArea = innerBase * innerBase;
    stone += innerArea * increment;

    // Decorative outer layer
    let outerArea = totalArea - innerArea;
    if (layer % 5 === 0) {
      lapis += outerArea * increment;
    } else {
      marble += outerArea * increment;
    }

    base -= 2;
    height += increment;
  }

  // Output (rounded as per requirements)
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
createPyramid(11,

0.75)