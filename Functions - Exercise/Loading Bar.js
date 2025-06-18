function LoadingBar(n) {
    let percentCount = n / 10;
    let bar = '%'.repeat(percentCount) + '.'.repeat(10 - percentCount);

    if (n < 100) {
        console.log(`${n}% [${bar}]`);
        console.log('Still loading...');
    } else if (n === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
}