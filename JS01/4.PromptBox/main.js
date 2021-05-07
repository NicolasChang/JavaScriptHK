
/* ================= Prompt Box ================= */

let promtAnsewr = prompt("Nicolas在223-1有3位室友，Taco、湘湘、Sally，第四位是誰呢")
let thisH1 = document.getElementById("Response")

switch(promtAnsewr){
    case"帥哥":
    thisH1.innerHTML = "那Nicolas是誰";
    break;

    case "Nicolas":
        thisH1.innerHTML = "聰明鬼";
    break;

    case "":
        thisH1.innerHTML = "不能空白喔";
    break;

    default:
        thisH1.innerHTML = "不對哦 傻女孩><"; 

}
