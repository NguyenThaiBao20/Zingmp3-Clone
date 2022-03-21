
const mainSlideItem = document.querySelectorAll('.main-slider-img-item');
const modelSlideItem = document.querySelector('.main-slider_list');
const mdodelCloseList = document.querySelector('.model-slider_list-btn-close');
const modelList = document.getElementById('model-slider_list');


// current

const currentList = document.getElementById('list-current');
const canList = document.getElementById('list-can');
const colorList = document.getElementById('list-color');
const cornerList = document.getElementById('list-corner');
const radioList = document.getElementById('list-radio');
const mixList = document.getElementById('list-mix');
const heardList = document.getElementById('list-heard');
const newsdList = document.getElementById('list-newsd');
const singerList = document.getElementById('list-singer');
const topList = document.getElementById('list-top100');

const current = {

    songsCurrent: [
        {
            name: '',
            singer: 'Phương Ly',
            path: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui965/HenYeu-DuyZuno-5494152.mp3?st=AVhL',
            image: './image/current/cr0.png',
        },
        {
            name: 'Những Bài Hát Hay Nhất Của Bằng Cường',
            singer: 'Bằng Cường',
            path: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui965/HenYeu-DuyZuno-5494152.mp3?st=AVhL',
            image: './image/current/cr1.jpg',
        },
        {
            name: 'Những Bài Hát Hay Nhất Của Nguyễn Thạc Bảo Ngọc',
            singer: 'Nguyễn Thạc Bảo Ngọc',
            path: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui965/HenYeu-DuyZuno-5494152.mp3?st=AVhL',
            image: './image/current/cr2.png',
        },
        {
            name: 'Những Bài Hát Hay Nhất Của Hoài Lâm',
            singer: 'Hoài Lâm',
            path: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui965/HenYeu-DuyZuno-5494152.mp3?st=AVhL',
            image: './image/current/cr3.jpg',
        },
        {
            name: 'Những câu nói hay nhất của PewPew',
            singer: 'PewPew',
            path: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui965/HenYeu-DuyZuno-5494152.mp3?st=AVhL',
            image: './image/current/cr4.jpg',
        },
        {
            name: 'Hẹn Yêu',
            singer: 'Duy Zuno',
            path: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui965/HenYeu-DuyZuno-5494152.mp3?st=AVhL',
            image: './image/current/cr5.png',
        },
    ],

    songsCan: [
        {
            name: 'Guitar V-POP',
            singer: 'Hoàng Yến Chibi, Thái Trinh, Tiên Tiên',
            image: './image/can/can0.png'
        },
        {
            name: 'V-POP Một Thời Đã Xa',
            singer: 'Phương Thanh, Đan Trường, Lam Trường',
            image: './image/can/can1.png'
        },
        {
            name: 'Nhạc Thần Thoại Hoa Ngữ',
            singer: 'Tiết Chi Khiêm, Trường Bích Thần, Na Anh',
            image: './image/can/can3.png'
        },
        {
            name: 'Acoustic Ký Ức',
            singer: 'Dương Edward, Tăng Phúc, Hà Nhi',
            image: './image/can/can4.png'
        },
        {
            name: 'Ký Ức V-POP',
            singer: 'Ưng Hoàng Phúc, Phạm Quỳnh Anh, Duy Mạnh',
            image: './image/can/can5.png'
        },
        
    ],

    songsColor: [
        {
            name: 'V-POP Đầy Hứa Hẹn',
            singer: 'Những ca khúc V-POP hứa hẹn sẽ thành Hit trong nay mai',
            path: '',
            image: './image/colormusic/cl0.png'
        },
        {
            name: 'R&B Chill',
            singer: 'Chill cả ngày cùng những giai điệu R&B rót mật vào tai',
            path: '',
            image: './image/colormusic/cl1.png'
        },
        {
            name: 'Tâm Trạng Tan Chậm',
            singer: 'Đóng băng thời gian, trôi chầm chậm theo cảm xúc',
            path: '',
            image: './image/colormusic/cl2.png'
        },
        {
            name: 'K-POP',
            singer: 'K-POP luôn tồn tại những ca sĩ Solo đầy tài năng',
            path: '',
            image: './image/colormusic/cl3.png'
        },
        {
            name: 'Indie Pop',
            singer: 'Nơi Indie cũng dễ nghe như POP những vẫn thật độc đáo',
            path: '',
            image: './image/colormusic/cl4.png'
        },
    ],

    songsCorner: [
        {
            name: 'New Releases',
            singer: 'Bạn đã bắt trend từ những ca khúc mới nhất chưa?',
            path: '',
            image: './image/corner/cn0.png'
        },
        {
            name: 'Khalid Flavour',
            singer: 'Thưởng thức âm nhạc từ những cái tên triệu view',
            path: '',
            image: './image/corner/cn1.png'
        },
        {
            name: 'XONEs Picks',
            singer: 'Tuyển chọn đặc biệt mỗi ngày bởi XONE Radio',
            path: '',
            image: './image/corner/cn2.png'
        },
        {
            name: 'Todays Pop',
            singer: 'Tuyển tập nhạc Pop nghe là ghiền',
            path: '',
            image: './image/corner/cn3.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/corner/cn4.png'
        },
    ],

    songsRadio: [
        {
            name: 'New Releases',
            singer: 'Bạn đã bắt trend từ những ca khúc mới nhất chưa?',
            path: '',
            image: './image/radio/radio0.png'
        },
        {
            name: 'Khalid Flavour',
            singer: 'Thưởng thức âm nhạc từ những cái tên triệu view',
            path: '',
            image: './image/radio/radio1.png'
        },
        {
            name: 'XONEs Picks',
            singer: 'Tuyển chọn đặc biệt mỗi ngày bởi XONE Radio',
            path: '',
            image: './image/radio/radio2.png'
        },
        {
            name: 'Todays Pop',
            singer: 'Tuyển tập nhạc Pop nghe là ghiền',
            path: '',
            image: './image/radio/radio3.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/radio/radio4.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/radio/radio5.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/radio/radio6.png'
        },
    ],

    songsMix: [
        {
            name: 'New Releases',
            singer: 'Bạn đã bắt trend từ những ca khúc mới nhất chưa?',
            path: '',
            image: './image/mix/mix0.png'
        },
        {
            name: 'Khalid Flavour',
            singer: 'Thưởng thức âm nhạc từ những cái tên triệu view',
            path: '',
            image: './image/mix/mix1.png'
        },
        {
            name: 'XONEs Picks',
            singer: 'Tuyển chọn đặc biệt mỗi ngày bởi XONE Radio',
            path: '',
            image: './image/mix/mix2.png'
        },
        {
            name: 'Todays Pop',
            singer: 'Tuyển tập nhạc Pop nghe là ghiền',
            path: '',
            image: './image/mix/mix3.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/mix/mix4.png'
        },
    ],

    songsHeard: [
        {
            name: 'New Releases',
            singer: 'Bạn đã bắt trend từ những ca khúc mới nhất chưa?',
            path: '',
            image: './image/heared/heared0.png'
        },
        {
            name: 'Khalid Flavour',
            singer: 'Thưởng thức âm nhạc từ những cái tên triệu view',
            path: '',
            image: './image/heared/heared1.png'
        },
        {
            name: 'XONEs Picks',
            singer: 'Tuyển chọn đặc biệt mỗi ngày bởi XONE Radio',
            path: '',
            image: './image/heared/heared2.png'
        },
        {
            name: 'Todays Pop',
            singer: 'Tuyển tập nhạc Pop nghe là ghiền',
            path: '',
            image: './image/heared/heared3.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/heared/heared4.png'
        },
    ],

    songsNewsd: [
        {
            name: 'New Releases',
            singer: 'Bạn đã bắt trend từ những ca khúc mới nhất chưa?',
            path: '',
            image: './image/newsongday/newsd0.png'
        },
        {
            name: 'Khalid Flavour',
            singer: 'Thưởng thức âm nhạc từ những cái tên triệu view',
            path: '',
            image: './image/newsongday/newsd1.png'
        },
        {
            name: 'XONEs Picks',
            singer: 'Tuyển chọn đặc biệt mỗi ngày bởi XONE Radio',
            path: '',
            image: './image/newsongday/newsd2.png'
        },
        {
            name: 'Todays Pop',
            singer: 'Tuyển tập nhạc Pop nghe là ghiền',
            path: '',
            image: './image/newsongday/newsd3.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/newsongday/newsd4.png'
        },
    ],

    songsSinger: [
        {
            name: 'New Releases',
            singer: 'Bạn đã bắt trend từ những ca khúc mới nhất chưa?',
            path: '',
            image: './image/singer/singer0.png'
        },
        {
            name: 'Khalid Flavour',
            singer: 'Thưởng thức âm nhạc từ những cái tên triệu view',
            path: '',
            image: './image/singer/singer1.png'
        },
        {
            name: 'XONEs Picks',
            singer: 'Tuyển chọn đặc biệt mỗi ngày bởi XONE Radio',
            path: '',
            image: './image/singer/singer2.png'
        },
        {
            name: 'Todays Pop',
            singer: 'Tuyển tập nhạc Pop nghe là ghiền',
            path: '',
            image: './image/singer/singer3.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/singer/singer4.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/singer/singer5.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/singer/singer6.png'
        },
    ],

    songsTop100: [
        {
            name: 'New Releases',
            singer: 'Bạn đã bắt trend từ những ca khúc mới nhất chưa?',
            path: '',
            image: './image/top100/top0.png'
        },
        {
            name: 'Khalid Flavour',
            singer: 'Thưởng thức âm nhạc từ những cái tên triệu view',
            path: '',
            image: './image/top100/top1.png'
        },
        {
            name: 'XONEs Picks',
            singer: 'Tuyển chọn đặc biệt mỗi ngày bởi XONE Radio',
            path: '',
            image: './image/top100/top2.png'
        },
        {
            name: 'Todays Pop',
            singer: 'Tuyển tập nhạc Pop nghe là ghiền',
            path: '',
            image: './image/top100/top3.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/top100/top4.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/top100/top5.png'
        },
        {
            name: 'Asia Tune',
            singer: 'Đu đưa giai điệu châu Á bắt tai',
            path: '',
            image: './image/top100/top6.png'
        },
    ],

    

    renderCurrent: function () {
        const htmlsCurrent = this.songsCurrent.map((songCurrent, index) => {
            return `
            <div class="main-music_item}" data-index = ${index}>
              <div class="main-music_item-img">
                <img src="${songCurrent.image}" alt="">
                <div class="main-music_item-img-choose">
                    <button class="main-music_item-img-choose-add">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="main-music_item-img-choose-play">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <button class="main-music_item-img-choose-more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
              </div>
              <div class="main-music_item-title">
                <h3>${songCurrent.name}</h3>
                <span>${songCurrent.singer}</span>
              </div>
            </div>
            `
        })
        currentList.innerHTML = htmlsCurrent.join('');
    },

    renderCan: function() {
        const htmlsCan = this.songsCan.map((songcan, index) => {
            return `
            <div class="main-music_item">
              <div class="main-music_item-img">
                <img src="${songcan.image}" alt="">
                <div class="main-music_item-img-choose">
                    <button class="main-music_item-img-choose-add">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="main-music_item-img-choose-play">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <button class="main-music_item-img-choose-more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
              </div>
              <div class="main-music_item-title">
                <h3>${songcan.name}</h3>
                <span>${songcan.singer}</span>
              </div>
            </div>
            `
        })
        canList.innerHTML = htmlsCan.join('');
    },

    renderColorSong: function() {
        const htmlsColor = this.songsColor.map((songColor, index) => {
            return `
            <div class="main-music_item">
              <div class="main-music_item-img">
                <img src="${songColor.image}" alt="">
                <div class="main-music_item-img-choose">
                    <button class="main-music_item-img-choose-add">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="main-music_item-img-choose-play">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <button class="main-music_item-img-choose-more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
              </div>
              <div class="main-music_item-title">
                <h3>${songColor.name}</h3>
                <span>${songColor.singer}</span>
              </div>
            </div>
            `
        })
        colorList.innerHTML = htmlsColor.join('');
    },

    renderCorner: function() {
        const htmlsCorner = this.songsCorner.map((songCorner, index) => {
            return `
            <div class="main-music_item">
              <div class="main-music_item-img">
                <img src="${songCorner.image}" alt="">
                <div class="main-music_item-img-choose">
                    <button class="main-music_item-img-choose-add">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="main-music_item-img-choose-play">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <button class="main-music_item-img-choose-more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
              </div>
              <div class="main-music_item-title">
                <h3>${songCorner.name}</h3>
                <span>${songCorner.singer}</span>
              </div>
            </div>
            `
        })
        cornerList.innerHTML = htmlsCorner.join('');
    },

    renderRadio: function() {
        const htmlsRadio = this.songsRadio.map((songRadio, index) => {
            return `
            <div class="main-music_item">
              <div class="main-music_item-img">
                <img src="${songRadio.image}" alt="">
                <div class="main-music_item-img-choose">
                    <button class="main-music_item-img-choose-add">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="main-music_item-img-choose-play">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <button class="main-music_item-img-choose-more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
              </div>
              <div class="main-music-live">
                    <span>LIVE</span>
                </div>
              <div class="main-music_item-title main-radio-title">
                <h3>${songRadio.name}</h3>
                <span>${songRadio.singer}</span>
              </div>
            </div>
            `
        })
        radioList.innerHTML = htmlsRadio.join('');
    },

    renderMix: function() {
        const htmlsMix = this.songsMix.map((songMix, index) => {
            return `
            <div class="main-music_item">
              <div class="main-music_item-img">
                <img src="${songMix.image}" alt="">
                <div class="main-music_item-img-choose">
                    <button class="main-music_item-img-choose-add">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="main-music_item-img-choose-play">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <button class="main-music_item-img-choose-more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
              </div>
              <div class="main-music_item-title">
                <h3>${songMix.name}</h3>
                <span>${songMix.singer}</span>
              </div>
            </div>
            `
        })
        mixList.innerHTML = htmlsMix.join('');
    },

    renderHeard: function() {
        const htmlsHeard = this.songsHeard.map((songHeard, index) => {
            return `
            <div class="main-music_item">
              <div class="main-music_item-img">
                <img src="${songHeard.image}" alt="">
                <div class="main-music_item-img-choose">
                    <button class="main-music_item-img-choose-add">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="main-music_item-img-choose-play">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <button class="main-music_item-img-choose-more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
              </div>
              <div class="main-music_item-title">
                <h3>${songHeard.name}</h3>
                <span>${songHeard.singer}</span>
              </div>
            </div>
            `
        })
        heardList.innerHTML = htmlsHeard.join('');
    },

    renderNewsd: function() {
        const htmlsNewsd = this.songsNewsd.map((songNewsd, index) => {
            return `
            <div class="main-music_item">
              <div class="main-music_item-img">
                <img src="${songNewsd.image}" alt="">
                <div class="main-music_item-img-choose">
                    <button class="main-music_item-img-choose-add">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="main-music_item-img-choose-play">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <button class="main-music_item-img-choose-more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
              </div>
              <div class="main-music_item-title">
                <h3>${songNewsd.name}</h3>
                <span>${songNewsd.singer}</span>
              </div>
            </div>
            `
        })
        newsdList.innerHTML = htmlsNewsd.join('');
    },

    renderSinger: function() {
        const htmlsSinger = this.songsSinger.map((songSinger, index) => {
            return `
            <div class="main-music_item">
              <div class="main-music_item-img">
                <img src="${songSinger.image}" alt="">
              </div>
              <div class="main-music_item-title main-singer-title">
                <h3>${songSinger.name}</h3>
                <span>${songSinger.singer}</span>
              </div>
            </div>
            `
        })
        singerList.innerHTML = htmlsSinger.join('');
    },

    renderTop100: function() {
        const htmlsTop100 = this.songsTop100.map((songTop100, index) => {
            return `
            <div class="main-music_item">
              <div class="main-music_item-img">
                <img src="${songTop100.image}" alt="">
                <div class="main-music_item-img-choose">
                    <button class="main-music_item-img-choose-add">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="main-music_item-img-choose-play">
                        <i class="far fa-play-circle"></i>
                    </button>
                    <button class="main-music_item-img-choose-more">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
              </div>
              <div class="main-music_item-title">
                <h3>${songTop100.name}</h3>
                <span>${songTop100.singer}</span>
              </div>
            </div>
            `
        })
        topList.innerHTML = htmlsTop100.join('');
    },

    start: function() {
        this.renderCurrent();
        this.renderCan();
        this.renderColorSong();
        this.renderCorner();
        this.renderRadio();
        this.renderMix();
        this.renderHeard();
        this.renderNewsd();
        this.renderSinger();
        this.renderTop100();
    }
}

current.start();