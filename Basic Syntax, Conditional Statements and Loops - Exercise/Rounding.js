function Rounding(num, rnd){
    if(rnd > 15){
        rnd = 15
    }
    let result = parseFloat(num.toFixed(rnd));
    console.log(result)
}
Rounding(3.1415926535897932384626433832795,2)