let thisH1 = document.getElementsByTagName("h1")[0];
let timer = setInterval(showTime,1000);
thisH1.innerHTML = currentTime.toLocaleTimeString();
function showTime(){
    // 每一秒都問現在是什麼時間
    let currentTime = new Date();
    thisH1.innerHTML = currentTime.toLocaleTimeString();
}