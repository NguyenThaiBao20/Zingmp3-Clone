
const navSechIp =document.querySelector('.nav-search-input');
const navSechHistory = document.querySelector('.nav-search-history');


navSechIp.addEventListener('click', function() {
    navSechHistory.classList.add('active');
})


// tự động đóng khi chon item history
const historyItems = document.querySelectorAll('.nav-search-history_list li');

for (var i = 0; i < historyItems.length; i++){
    const historyItem = historyItems[i]; 

    historyItem.onclick = function() {
        var isParentItem = this.nextElementSibling;
        if (!isParentItem || isParentItem) {
            navSechHistory.classList.remove('active');
        }
    }
}

navSechHistory.addEventListener('click', function() {
    navSechHistory.classList.remove('active');
})

navSechHistory.addEventListener('click', function(event) {
    event.stopPropagation();
})


// scroll color
const header = document.getElementById('header');

window.addEventListener("scroll", function() {
    const x = this.pageYOffset;
    // console.log(x)
    if (x > 80) {
        header.classList.add("activecolor")
    } else {
        header.classList.remove("activecolor")
    }
})

// item setting
const headSetting = document.querySelector('.nav-setting');
const listSetting = document.querySelector('.nav-login-item_setting-list');

headSetting.addEventListener('click', function() {
    listSetting.classList.toggle('active');
})

