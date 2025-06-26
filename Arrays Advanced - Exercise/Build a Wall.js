function BuildAWall(sections) {
    let heights = sections.map(Number);
    const CONCRETE_PER_SECTION = 195;
    const CONCRETE_COST = 1900;
    let dailyConcrete = [];

    while (heights.some(h => h < 30)) {
        let todayConcrete = 0;
        for (let i = 0; i < heights.length; i++) {
            if (heights[i] < 30) {
                heights[i]++;
                todayConcrete += CONCRETE_PER_SECTION;
            }
        }
        if (todayConcrete > 0) {
            dailyConcrete.push(todayConcrete);
        }
    }
    let totalConcrete = dailyConcrete.reduce((a, b) => a + b, 0);
    let totalCost = totalConcrete * CONCRETE_COST;
    console.log(dailyConcrete.join(', '));
    console.log(`${totalCost} pesos`);
}

 BuildAWall([21, 25, 28]);