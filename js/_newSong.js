const newSongList = document.getElementById('newSong-list');
const cd = document.querySelector('.cd');
const playbtn = document.getElementById('play-music');
const progress = document.getElementById('directional_progress');
const nameSong = document.getElementById('name-song');
const singerSong = document.getElementById('singer-song');
const audio = document.getElementById('audio');
const CD = document.querySelector('.footer-title_cd');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const randomBtn = document.getElementById('random-btn');
const repeatBtn = document.getElementById('repeat-btn');
const volumnIcon = document.getElementById('volumn_icon');

const newSong = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            number: 'image/newSong/nb1.png',
            image: 'image/newSong/1.png',
            name: 'LaLiSa',
            singer: 'Lisa, blackpink',
            path: 'https://c1-ex-swe.nixcdn.com/YG_Audio2/Lalisa-LISA-7086697.mp3?st=cAUnkqCH2upG',
        },
        {
            number: 'image/newSong/nb2.png',
            competition: '2',
            image: 'image/newSong/2.png',
            name: 'Ngày Chưa Giông Bão (Người Bất Tử OST)',
            singer: 'Bùi Lan Hương',
            path: 'video/ngaychuagiongbao.mp3',
        },
        {
            number: 'image/newSong/nb3.png',
            competition: '2',
            image: 'image/newSong/3.png',
            name: 'Họ Yêu Ai Mất Rồi (Lofi Version)',
            path: 'video/hoyeuaimatroi.mp3',
            singer: 'Doãn Hiếu, Mr.Paa',
        },
        {
            number: 'image/newSong/nb4.png',
            competition: '2',
            image: 'image/bcheard3.png',
            name: 'Người Lạ Thoáng Qua',
            singer: 'G5R Squad, Anh Rồng',
            path: 'video/nguoilathoangqua.mp3'
        },
        {
            number: 'image/newSong/nb5.png',
            competition: '2',
            image: 'image/newSong/5.png',
            name: 'Sài Gòn Đau Lòng Quá',
            path: 'video/saigondaulongqua.mp3',
            singer: 'Hứa Kim Tuyền',
        },
        {
            number: 'image/newSong/nb6.png',
            competition: '2',
            image: 'image/newSong/6.png',
            name: '3107-2',
            path: 'video/3107-2.mp3',
            singer: 'Dương Nâu',
        },
        {
            number: 'image/newSong/nb7.png',
            competition: '5',
            image: 'image/newSong/6.png',
            name: '3107-2',
            path: 'video/darkside.mp3',
            singer: 'Alan Walker',
        },
        {
            number: 'image/newSong/nb8.png',
            competition: '2',
            image: 'image/newSong/6.png',
            name: '3107-2',
            path: 'video/VuDiep.mp3',
            singer: 'China',
        },
        {
            number: 'image/newSong/nb9.png',
            competition: '2',
            image: 'image/newSong/6.png',
            name: '3107-2',
            path: 'video/toloveend.mp3',
            singer: 'Inuyasha',
        },
        {
            number: 'image/newSong/nb10.png',
            competition: '2',
            image: 'image/newSong/6.png',
            name: '3107-2',
            path: 'video/cokhinaoroixa.mp3',
            singer: 'Bích Phương',
        },
        {
            number: 'image/newSong/nb11.png',
            competition: '2',
            image: 'image/newSong/11.png',
            name: 'Darkside Nightcore',
            singer: 'Alan Walker, Au/Ra, Tomine Harket',
            path: 'video/darkside.mp3',
        },
        {
            number: 'image/newSong/nb12.png',
            competition: '2',
            image: 'image/newSong/12.png',
            name: 'Tell Me Goodbye',
            singer: 'BIGBANG',
            path: 'video/tellmegoodbye.mp3',
        },
    ],

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    renderNewSong: function() {
        const htmlsNewSong = this.songs.map((songNewSong, index) => {
            return `
            <div class="personal-main_songs-item newSong_item ${index === this.currentIndex ? 'active' : ''}">
              <div class="personal-main_songs-info-img newSong-item-info">
                <img src="${songNewSong.number}" alt="">
                <div class="newSong_item-info-competition">
                    <i class="fas fa-sort-up"></i>
                    <span>2</span>
                </div>
                <div class="lib-img">
                <img src="${songNewSong.image}" alt="">
                <div class="lib-img-opa">
                    <i class="fas fa-play"></i>
                </div>
                </div>
                <div class="personal-main_songs-info-name newSong-name">
                  <h2>${songNewSong.name}</h2>
                  <span>${songNewSong.singer}</span>
              </div>
              </div>
              <div class="personal-main_songs-info-time">
              <span>04:31</span>
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
        newSongList.innerHTML = htmlsNewSong.join('');
    },

    

    // btn: function() { 
    //     parrentPlay.addEventListener('click', function() {
    //         playbtn.classList.toggle('active');
    //     })
    // },

    handleEvents: function() {
        const _this = this
        

        // Xu ly CD quay/dừng
        const cdThumbAnimate = CD.animate([
            { transform: 'rotate(360deg)'}
        ], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        })

        cdThumbAnimate.pause()


        playbtn.onclick = function() {
          if(_this.isPlaying){
            audio.pause();
          } else {    
              audio.play()  
          }
            
        }

        // khi song được play
        audio.onplay = function() {
            _this.isPlaying = true
            playbtn.classList.add('active')
            cdThumbAnimate.play()
        }

          // khi song được pause
          audio.onpause = function() {
            _this.isPlaying = false
            playbtn.classList.remove('active')
            cdThumbAnimate.pause()
        }

        // khi tiến độ bài hát được thay đổi
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
          
        }

        // xu lý khi tua song
        progress.onchange = function(e) {
           const seekTime = audio.duration / 100 * e.target.value
           audio.currentTime = seekTime 
        }

        // khi next song
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            audio.play();
            _this.renderNewSong();
            _this.scrollToActiveSong();
        }

         // khi prev song
         prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play();
            _this.renderNewSong();
            _this.scrollToActiveSong();
        }

        // xử lý random bat/tat
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom

            randomBtn.classList.toggle('active', _this.isRandom);
            _this.playRandomSong()
        }

        // xu ly repeat
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // Xư lý next song khi audio ended
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play()
            }else {
                nextBtn.click()
            }
        }
       
    },

    scrollToActiveSong: function() {
        setTimeout(() => {
            document.querySelector('.personal-main_songs-item.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 500)
    },

    loadCurrentSong: function() {
        nameSong.textContent = this.currentSong.name;
        singerSong.textContent = this.currentSong.singer;
        CD.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    
    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1
        }
        this.loadCurrentSong()
    },

    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong();
    },


    start: function() {

        this.defineProperties();
        this.renderNewSong();
        this.handleEvents();
        this.loadCurrentSong();


    },
}

newSong.start();