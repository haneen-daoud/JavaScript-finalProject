
/*const navbar = document.querySelector('.nav-home')
const headerContentSpan = document.querySelector('.about')
window.addEventListener('scroll',function(){
  
    if(window.scrollY > headerContentSpan.offsetTop){
        navbar.style.backgroundColor ="#fff"
        

    }
})
console.log(headerContentSpan)*/
/*
const loading = document.querySelector('.loader')
window.addEventListener('load',function(){
    setTimeout( functon(){
loading.classList.add('opacity-0,invisible')
    } , 2000)
})*/
var scrollToTopButton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    // إظهار أو إخفاء زر العودة لأعلى بناءً على ارتفاع السكرول
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    // التمرير إلى أعلى الصفحة
    document.body.scrollTop = 0; // لدعم متصفحات قديمة
    document.documentElement.scrollTop = 0; // لمتصفحات حديثة
}

/*navbar scroll color 
document.addEventListener("DOMContentLoaded", function () {
    var navHome = document.querySelector('.nav-home');

    window.addEventListener("scroll", function () {
        var scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
        var scrollLimit = 100; // ارتفاع السكرول عند التبديل

        if (scrollHeight > scrollLimit) {
            // جعل النافبار ثابتة على الشاشة
            navHome.style.position = 'fixed';
            navHome.style.top = '0';
            navHome.style.transition = 'background-color 0.3s';
            navHome.style.backgroundColor = '#454242'; // لون جديد هنا
            scrolled = true;
        } else {
            // إعادة النافبار إلى وضعها الطبيعي
            navHome.style.position = 'relative';
            navHome.style.top = 'auto';
            navHome.style.transition = 'background-color 0.3s';
                navHome.style.backgroundColor = '#yourOriginalColor'; // اللون الأصلي هنا
                scrolled = false;
        }
    });
});*/
function openTab(tabId) {
    var tabs = document.getElementsByClassName('tab-content');
    
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}
// عند بدء تحميل المحتوى، قم بعرض عنصر الLoading
document.getElementById('loading-container').style.display = 'flex';

// بعد اكتمال التحميل، قم بإخفاء عنصر الLoading
window.addEventListener('load', function() {
    document.getElementById('loading-container').style.display = 'none';
});


window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.nav-home');
    
    // تحديد النافبار كثابتة أو غيرها بناءً على التمرير
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        
    }
});
