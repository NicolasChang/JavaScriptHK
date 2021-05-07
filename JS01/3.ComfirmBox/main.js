

/* ================= Confirm Box ================= */

let confirmAnswer = confirm("您確定要取消此項服務嗎?")
let thisH1 = document.getElementsByTagName("h1")[0];
if (confirmAnswer) {
    thisH1.innerHTML = "服務已取消，感謝您的使用"
    
} else {
    thisH1.innerHTML = "服務繼續"
}

