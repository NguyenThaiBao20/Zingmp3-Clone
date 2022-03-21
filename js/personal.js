const personalList = document.getElementById('personal-list');

const person = {
    personalSongs: [
        {
            image: './image/bcheard0.png',
            name: 'Hết Thật Rồi',
            singer: 'Khánh Vũ',
            time: '5:31',
        },
        {
            image: './image/bctake0.png',
            name: 'Hết Thật Rồi',
            singer: 'Khánh Vũ',
            time: '5:31',
        },
        {
            image: './image/bcheard1.png',
            name: 'Hết Thật Rồi',
            singer: 'Khánh Vũ',
            time: '5:31',
        },
        {
            image: './image/bcheard2.png',
            name: 'Hết Thật Rồi',
            singer: 'Khánh Vũ',
            time: '5:31',
        },
        {
            image: './image/bcheard3.png',
            name: 'Hết Thật Rồi',
            singer: 'Khánh Vũ',
            time: '5:31',
        },
        {
            image: './image/bctake1.png',
            name: 'Hết Thật Rồi',
            singer: 'Khánh Vũ',
            time: '5:31',
        },
        {
            image: './image/bctake2.png',
            name: 'Hết Thật Rồi',
            singer: 'Khánh Vũ',
            time: '5:31',
        },
    ],

    renderPersonal: function() {
        const htmlsPersonal = this.personalSongs.map((songPersonal, index) => {
            return `
            <div class="personal-main_songs-item">
              <div class="personal-main_songs-info-img">
                <img src="${songPersonal.image}" alt="">
                <div class="personal-main_songs-info-name">
                    <h2>${songPersonal.name}</h2>
                    <span>${songPersonal.singer}</span>
                </div>
              </div>
              <div class="personal-main_songs-info-time">
                <span>${songPersonal.time}</span>
              </div>
              <div class="personal-main_songs-info-option">
                <div class="personal-main_songs-info-option--lyrics">
                    <button>
                        <i class="fas fa-microphone"></i>
                    </button>
                </div>
                <div class="personal-main_songs-info-option--delete">
                    <button>
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="personal-main_songs-info-option--delete">
                    <button>
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
              </div>
            </div>
            `
        })
        personalList.innerHTML = htmlsPersonal.join('');
    },
    
    start: function() {
        this.renderPersonal();
    }
}

person.start();