function CutAndReverse(str){
    let half = str.length / 2;
    let firstHalf = str.slice(0, half).split('').reverse().join('');
    let secondHalf = str.slice(half).split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);
}
CutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')