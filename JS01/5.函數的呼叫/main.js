
/* ================= 函數的呼叫 ================= */

function showAlert() {
    thisH1.innerHTML = "Hello!";
}
let thisButton = document.getElementsByTagName("button")[0];
// document--畫面上呈現的意思
let thisH1 = document.getElementsByTagName("h1")[0];

thisButton.onclick = function () {
    showAlert();
}
// thisButton.onclick = showAlert 意思相同
    // ----------------------
    /*
    thisButton.onclick = function(){
        for(let i=0;i<=9;i++){
            if(i==3){
                break
            }
            console.log(i)
        }
    }
    */
    // ----------------------
    /*
    thisButton.onclick = function () {
        let person = {
            firstName: "Miranda",
            lastName: "Jin",
            height: 178
        };
    
        for (x in person) {
            console.log(x + ":" + person[x]);
        }
    
    };
    */
    // ----------------------
    
    thisButton.addEventListener("dblclick",showAlert);
    
    