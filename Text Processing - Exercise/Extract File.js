function ExtractFile(filePath){
    let fileFullName = filePath.split('\\').pop();
    let lastDotIndex = fileFullName.lastIndexOf('.');

    let f = fileFullName.slice(0, lastDotIndex);
    let ex = fileFullName.slice(lastDotIndex + 1);

    console.log(`File name: ${f}`);
    console.log(`File extension: ${ex}`);
}
ExtractFile('C:\\Internal\\training-internal\\Template.pptx')