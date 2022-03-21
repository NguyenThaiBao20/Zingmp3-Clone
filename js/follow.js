const newsSinger = document.getElementById('news-singer');

const follow = {

    news: [
        {
            avatar: './image/newdemo0.png',
            name: 'Trấn Thành',
            time: '1 tháng 11 lúc 14:30',
            status: 'Người yêu của bạn vừa cập nhật ảnh mới. Photo by Quân Lê',
            image: './image/followmain/follow1.jpg'
        },
        {
            avatar: './image/newdemo1.png',
            name: 'One Piece Shop',
            time: '1 tháng 11 lúc 14:30',
            status: 'Tranh không viền chủ đề Anime tổng hợp Bộ này tâm huyết quá anh em ạ Chỉ 5xx - Thay đổi hoàn toàn không gian phòng của bạn',
            image: './image/followmain/follow2.jpg'
        },
        {
            avatar: './image/newdemo2.png',
            name: 'Trấn Thành',
            time: '1 tháng 11 lúc 14:30',
            status: 'Giờ chỉ có kid mới win được trận này thôi, địa bộc thiên tinh, thần la thiên chinh...',
            image: './image/followmain/follow3.jpg'
        },
        {
            avatar: './image/newdemo3.png',
            name: 'Vladislava Shelygina',
            time: '1 tháng 11 lúc 14:30',
            status: '',
            image: './image/followmain/follow4.jpg'
        },
        {
            avatar: './image/newrelease0.png',
            name: 'Vladislava Shelygina',
            time: '1 tháng 11 lúc 14:30',
            status: '',
            image: './image/followmain/follow5.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Vladislava Shelygina',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow6.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Vladislava Shelygina',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow7.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Vladislava Shelygina',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow8.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Vladislava Shelygina',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow9.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Han Jina',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow10.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Han Jina',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow11.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: '',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow12.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Han Jina',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow13.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Han Jina',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow14.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Sunna',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow15.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Sunna',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow16.jpg'
        },
        {
            avatar: './image/newrelease2.png',
            name: 'Sunna',
            time: '1 tháng 11 lúc 14:30',
            status: 'Why do you look at me???',
            image: './image/followmain/follow17.jpg'
        },
    ],
    

    renderNews: function() {
        const htmlsNews = this.news.map((newsItem, index) => {
            return `
            <div class="follow-main_news-item">
              <div class="follow-main_news-item-container">
                  <div class="follow-main_news-item-info">
                    <div class="follow-main_news-item-info--img">
                        <img src="${newsItem.avatar}" alt="">
                    </div>
                    <div class="follow-main_news-item-info--name">
                        <div>
                            <a href="">${newsItem.name}</a>
                            <button>Quan tâm</button>
                        </div>
                        <div class="news-item-info-clock">
                            <span>${newsItem.time}</span>
                        </div>
                    </div>
                  </div>
                  <div class="follow-main_news-item-title">
                    <span>${newsItem.status}</span>
                </div>
                <div class="follow-main_news-item-img">
                    <img src="${newsItem.image}" alt="">
                </div>
                <div class="follow-main_news-item-interact">
                    <div class="news-item-interact">
                        <button>
                            <i class="far fa-heart"></i>
                            <span>50</span>
                        </button>
                        <button>
                            <i class="far fa-comment"></i>
                            <span>0</span>
                        </button>
                    </div>
                </div>
              </div>
            </div>
            `
        })
        newsSinger.innerHTML = htmlsNews.join('');
    },

    star: function() {
        this.renderNews();
    }
}

follow.star();