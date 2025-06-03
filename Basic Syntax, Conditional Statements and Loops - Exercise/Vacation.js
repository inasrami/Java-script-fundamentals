function Vacation(group, type, day){
    let total = 0;
    switch(type){
        case 'Students':
            switch(day){
                case 'Friday':
                    total = group * 8.45;
                    break;
                case 'Saturday':
                    total = group * 9.80;
                    break;
                case 'Sunday':
                    total = group * 10.46;
                    break;    
            }
            if(group >= 30){total *= 0.85;}
        break;
        case 'Business':
            if (group >= 100){group -= 10;}
            switch(day){
            case 'Friday':
                    total = group * 10.90;
                    break;
                case 'Saturday':
                    total = group * 15.60;
                    break;
                case 'Sunday':
                    total = group * 16;
                    break;
            }
        break;
        case 'Regular':
            switch(day){
                case 'Friday':
                    total = group * 15;
                    break;
                case 'Saturday':
                    total = group * 20;
                    break;
                case 'Sunday':
                    total = group * 22.50;
                    break;
            }
            if(group >= 10 && group <= 20){total *= 0.95}
            break;            
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}
Vacation(40,

"Regular",

"Saturday")