
const musicMenu = document.querySelector('#style')
    musicPlayer = document.querySelector('.music-display')

// music data
const musicData = [
    {
        id: 1,
        musicAuthor: 'Munisa Rizayeva',
        image: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/1f9c979c56c80d7a3ace707e349fc773',
        musicName: 'Hayolingman',
        url: './music-data/munisa-rizayeva-hayolingdaman_(uzhits.net).mp3'
    },
    {
        id: 2,
        musicAuthor: 'Ziyoda',
        image: 'https://i.ytimg.com/vi/E-t-RSo7T-0/maxresdefault.jpg',
        musicName: 'Meni deb',
        url: './music-data/ziyoda-meni-deb_(uzhits.net).mp3'
    },
    {
        id: 3,
        musicAuthor: 'Jaloliddin Ahmadaliyev',
        image: 'https://avatars.mds.yandex.net/i?id=b537182d4281a9eba698b398d0e3313e4a379b07-8498042-images-thumbs&n=13',
        musicName: 'Nigoro',
        url: './music-data/jaloliddin-ahmadaliyev-nigoro_(uzhits.net).mp3'
    },
    {
        id: 4,
        musicAuthor: 'Shahzoda',
        image: 'https://megahit.org/uploads/posts/2022-11/637e08eabdea2.jpg',
        musicName: 'Xasta',
        url: './music-data/shahzoda-xasta-khani-remix_(uzhits.net).mp3'
    },
    {
        id: 5,
        musicAuthor: 'Shoxruhxon',
        image: 'https://muzfm.tv/uploads/posts/2021-01/1611230619_shohruhxon.jpg',
        musicName: 'Devona',
        url: './music-data/shohruhxon-devona_(uzhits.net).mp3'
    },
    {
        id: 6,
        musicAuthor: 'Jaymes Young',
        image: 'https://www.lesonparisien.com/images/lsp/artists/4b7cd5d10c354be7cb3ca1374f043881.jpg',
        musicName: 'Infinity',
        url: './music-data/Jaymes_Young_Infinity_(thinkNews.com.ng).mp3'
    },
    {
        id: 7,
        musicAuthor: 'Rema & Selena Gomez',
        image: 'https://pics.filmaffinity.com/rema_selena_gomez_calm_down_remix-388753088-mmed.jpg',
        musicName: 'Calm down',
        url: './music-data/Rema & Selena Gomez - Calm Down.mp3'
    },
    {
        id: 7,
        musicAuthor: 'Alan Walker',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCIQXjioAfTM-7oYVmJadLlP_634Qz364eluzEAKIPaSZ_07sViICgqYIUYFL8Q6Sr5M&usqp=CAU',
        musicName: 'Faded',
        url: './music-data/1554376336_alan-walker-faded-instrumental.mp3'
    },
    {
        id: 8,
        musicAuthor: 'Surayyo Qosimova',
        image: 'data:image/jpeg;base64,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',
        musicName: 'Arzanda Jonim',
        url: './music-data/surayyo-qosimova-arzanda-jonim_(muzzonas.ru).mp3'
    },
    {
        id: 9,
        musicAuthor: 'Mirjalol Nematov',
        image: 'https://images.muzfm.pro/uploads/singers/thumbs/mirjalol-nematov---endi-manga-gitara.jpg',
        musicName: 'Gitara',
        url: './music-data/mirjalol-nematov-endi-manga-gitara.mp3'
    }
]

musicData.forEach(item => {
    musicMenu.innerHTML += `
        <li>${item.musicName}</li>
    `
})

const lists = document.querySelectorAll('li')
for( let i = 0; i <= lists.length; i++){
    lists[i].addEventListener('click', () => {
        musicPlayer.innerHTML = `
        <div class="img">
            <h3 class="author">${musicData[i].musicAuthor}</h3>
            <img src="${musicData[i].image}" alt="error music">
        </div>
        <audio controls autoplay>
            <source src="${musicData[i].url}" type="audio/mpeg">
        </audio>
        `
    })
}







