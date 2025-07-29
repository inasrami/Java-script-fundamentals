function AdAstra(input) {
    let text = input[0];

    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let totalCalories = 0;
    let foods = [];

    let match;
    while ((match = pattern.exec(text)) !== null) {
        let { item, date, calories } = match.groups;
        totalCalories += Number(calories);
        foods.push({
            item,
            date,
            calories: Number(calories)
        });
    }

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    for (let food of foods) {
        console.log(`Item: ${food.item}, Best before: ${food.date}, Nutrition: ${food.calories}`);
    }
}
AdAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
