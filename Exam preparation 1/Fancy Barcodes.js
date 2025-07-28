function FancyBarcodes(data){
    let totalBarcodes = Number(data[0]);
    let barcodeRegex = /@#+[A-Z][a-zA-Z0-9]{4,}[A-Z]@#+/;
    let difitsRegex = /\d/g;

    for(let i = 1; i <= totalBarcodes; i++){
        let barcode = data[i];

        if(barcodeRegex.test(barcode)){
            
            let allDigitMatches = barcode.match(difitsRegex);
            let result = 'Product group: '
            if(allDigitMatches !== null){
                result += allDigitMatches.join('');
            }else {
                result += '00';
            }
            console.log(result);
        } else{
            console.log('Invalid barcode');
        }
    }
}   
// FancyBarcodes(["3",

// "@#FreshFisH@#",

// "@###Brea0D@###",

// "@##Che4s6E@##"])


FancyBarcodes(["6",

"@###Val1d1teM@###",

"@#ValidIteM@#",

"##InvaliDiteM##",

"@InvalidIteM@",

"@#Invalid_IteM@#",

"@#ValiditeM@#"])

