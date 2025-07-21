function OddOccurrences(input) {
    if (Array.isArray(input)) {
        input = input.join(' ');
    }
    let words = input.split(' ');
    let counts = new Map();
    let order = [];
    for (let word of words) {
        let lower = word.toLowerCase();
        if (!counts.has(lower)) {
            order.push(lower);
            counts.set(lower, 0);
        }
        counts.set(lower, counts.get(lower) + 1);
    }
    let result = order.filter(w => counts.get(w) % 2 === 1);
    console.log(result.join(' '));
}

OddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
