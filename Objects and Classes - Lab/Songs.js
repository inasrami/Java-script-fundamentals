function Songs(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let n = Number(array[0]);
    let songs = [];
    for (let i = 1; i <= n; i++) {
        let [typeList, name, time] = array[i].split('_');
        songs.push(new Song(typeList, name, time));
    }
    let filterType = array[array.length - 1];
    if (filterType === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        songs.filter(song => song.typeList === filterType)
             .forEach(song => console.log(song.name));
    }
}

Songs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);