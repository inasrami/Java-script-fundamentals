function ReversedString(Information){
    let reversed = ''
    for (let i = Information.length - 1; i >=0; i--){
        reversed += Information[i];
    }
    console.log(reversed)
}
ReversedString('Information')